import { NextResponse } from "next/server";
import crypto from "crypto";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!;

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, phone, address, tag } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase().trim())
      .digest("hex");

    const baseUrl = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;
    const auth = "Basic " + Buffer.from(`anystring:${API_KEY}`).toString("base64");

    // Create or update the contact
    const memberRes = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
          PHONE: phone || "",
          ADDRESS: address || "",
        },
      }),
    });

    if (!memberRes.ok) {
      const err = await memberRes.json();
      return NextResponse.json({ error: err }, { status: memberRes.status });
    }

    // Apply the tag (party-lead or school-lead)
    if (tag) {
      await fetch(`${baseUrl}/tags`, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tags: [{ name: tag, status: "active" }],
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
