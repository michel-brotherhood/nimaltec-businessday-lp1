import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Evolution from "@/components/Evolution";
import Devices from "@/components/Devices";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import AnchorNav from "@/components/AnchorNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground />
      <AnchorNav />
      <div className="relative z-10">
        <section id="hero"><Hero /></section>
        <section id="agenda"><Schedule /></section>
        <section id="evolucao"><Evolution /></section>
        <section id="dispositivos"><Devices /></section>
        <section id="local"><Location /></section>
        <section id="faq"><FAQ /></section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
