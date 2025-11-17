import Hero from "@/components/Hero";
import Evolution from "@/components/Evolution";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <Statistics />
        <Evolution />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
