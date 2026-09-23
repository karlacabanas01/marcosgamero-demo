import { TemplateBanner } from "@/components/TemplateBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Legacy } from "@/components/Legacy";
import { Rooms } from "@/components/Rooms";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";

export default function Home() {
  return (
    <ToastProvider>
      <TemplateBanner />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Legacy />
        <Rooms />
        <Services />
        <Gallery />
        <Location />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}
