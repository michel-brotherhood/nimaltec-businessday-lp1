import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import AIOperation from "@/components/AIOperation";
import Schedule from "@/components/Schedule";
import Devices from "@/components/Devices";
import Statistics from "@/components/Statistics";
import VideoShowcase from "@/components/VideoShowcase";
import Location from "@/components/Location";
import CallToAction from "@/components/CallToAction";
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
        <section id="convite"><Invitation /></section>
        <section id="ia-operacao"><AIOperation /></section>
        <section id="agenda"><Schedule /></section>
        <section id="dispositivos"><Devices /></section>
        <section id="numeros"><Statistics /></section>
        <section id="video"><VideoShowcase /></section>
        <section id="local"><Location /></section>
        <CallToAction />
        <section id="faq"><FAQ /></section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
