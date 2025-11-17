import backgroundVideo from "@/assets/fundo_video.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
    </div>
  );
};

export default VideoBackground;
