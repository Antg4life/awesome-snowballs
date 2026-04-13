import Navigation    from "@/components/Navigation";
import Hero          from "@/components/Hero";
import Flavors       from "@/components/Flavors";
import About         from "@/components/About";
import Testimonials  from "@/components/Testimonials";
import FindUs        from "@/components/FindUs";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Flavors />
      <About />
      <Testimonials />
      <FindUs />
      <Contact />
      <Footer />
    </main>
  );
}
