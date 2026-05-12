import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Evolution from "@/components/Evolution";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <Schedule />
        <Evolution />
        <Location />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
