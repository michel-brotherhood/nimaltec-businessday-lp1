import showcaseVideo from "@/assets/showcase-video.mp4";

const VideoShowcase = () => (
  <section className="px-4 py-12 sm:py-16 lg:py-20 relative z-10">
    <div className="max-w-5xl mx-auto">
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all duration-300">
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source src={showcaseVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

export default VideoShowcase;
