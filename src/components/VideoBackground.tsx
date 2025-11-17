import backgroundVideo from "@/assets/fundo_video.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* Gradiente específico para realçar texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      {/* Vignette para realçar centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
        {/* Sombreamento geral suave */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default VideoBackground;
