import Navigation    from "@/components/Navigation";
import Hero          from "@/components/Hero";
import Flavors       from "@/components/Flavors";
import About         from "@/components/About";
import Gallery       from "@/components/Gallery";
import Testimonials  from "@/components/Testimonials";
import Urgency       from "@/components/Urgency";
import Pricing       from "@/components/Pricing";
import FindUs        from "@/components/FindUs";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import ChatWidget    from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Flavors />
      <About />
      <Gallery />
      <Testimonials />
      <Urgency />
      <Pricing />
      <FindUs />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
