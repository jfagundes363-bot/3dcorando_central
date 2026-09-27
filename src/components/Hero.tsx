import { useState, useRef } from "react";
import { Check, Volume2 } from "lucide-react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_URL } from "../data/assets";

interface HeroProps {
  onSelectPlan?: (plan: 'basico' | 'premium') => void;
}

export default function Hero({ onSelectPlan: _onSelectPlan }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden text-center bg-black">
      {/* Background glow radial */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] bg-gradient-to-b from-[#10B981]/15 via-emerald-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main H1 Headline */}
        <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.18] max-w-4xl mb-6 sm:mb-8 text-center px-3 flex flex-col items-center gap-1.5 sm:gap-2.5">
          <span className="block">
            Aqui você encontra os melhores arquivos{" "}
            <span className="text-[#00FF66] font-black">
              STL
            </span>
          </span>

          <span className="text-zinc-200 block text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold">
            para a sua{" "}
            <span className="text-[#00FF66] drop-shadow-[0_0_20px_rgba(0,255,102,0.35)]">
              impressora
            </span>
          </span>

          {/* 3D destacado abaixo do texto */}
          <span className="block mt-1 sm:mt-2">
            <span className="text-3d font-black text-5xl xs:text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none drop-shadow-[0_0_30px_rgba(0,255,102,0.65)] select-none">
              3D
            </span>
          </span>
        </h1>

        {/* Audio notice text */}
        <p className="mb-4 font-heading font-black text-xs sm:text-sm text-zinc-300 uppercase tracking-wider flex items-center justify-center gap-2">
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF66] animate-pulse drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]" />
          <span>Aumente O Volume !</span>
        </p>

        {/* Clean Video Display Container */}
        <div className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[330px] mb-8 flex justify-center">
          {/* Subtle green ambient glow behind video */}
          <div className="absolute inset-0 bg-[#00FF66]/15 blur-2xl rounded-3xl -z-10" />

          {/* Clean Video Screen Display */}
          <div 
            onClick={togglePlay}
            className="relative aspect-[9/16] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-2xl flex items-center justify-center group cursor-pointer select-none"
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePlay();
              }
            }}
          >
            {/* Real Video Player */}
            <video
              ref={videoRef}
              src={HERO_VIDEO_URL}
              poster={HERO_VIDEO_POSTER}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />

            {/* YouTube Red Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-black/60 z-30 overflow-hidden pointer-events-none">
              <div
                className="h-full bg-[#FF0000] shadow-[0_0_10px_#FF0000] transition-[width] duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* YouTube Play Icon Overlay (visible when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 z-20 bg-black/35 flex items-center justify-center pointer-events-none transition-all duration-200">
                <div
                  aria-label="Reproduzir vídeo"
                  className="w-16 h-11 sm:w-20 sm:h-14 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 drop-shadow-[0_8px_25px_rgba(0,0,0,0.85)]"
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 68 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                      fill="#FF0000"
                    />
                    <path d="M45 24L27 14v20" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Checklist Box */}
        <div className="w-full max-w-md bg-[#0D0D12] border border-zinc-700/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xl text-left">
          <div className="flex items-center gap-3.5 text-sm sm:text-base text-white">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/40 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00FF66] stroke-[3] drop-shadow-[0_0_8px_rgba(0,255,102,0.7)]" />
            </div>
            <span className="font-bold tracking-tight text-white">
              Milhares de Arquivos <span className="text-[#00FF66] font-extrabold">STL</span> Validados
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-sm sm:text-base text-white">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/40 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00FF66] stroke-[3] drop-shadow-[0_0_8px_rgba(0,255,102,0.7)]" />
            </div>
            <span className="font-bold tracking-tight text-white">
              O mercado que mais está dando{" "}
              <span className="text-[#00FF66] font-black uppercase tracking-wider drop-shadow-[0_0_12px_rgba(0,255,102,0.5)]">
                lucro
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-sm sm:text-base text-white">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/40 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00FF66] stroke-[3] drop-shadow-[0_0_8px_rgba(0,255,102,0.7)]" />
            </div>
            <span className="font-bold tracking-tight text-white">
              Compatível com qualquer Impressora
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-sm sm:text-base text-white">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00FF66]/20 border border-[#00FF66]/60 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00FF66] stroke-[3] drop-shadow-[0_0_10px_rgba(0,255,102,0.9)]" />
            </div>
            <span className="font-black tracking-wide text-white">
              Entrega imediata{" "}
              <span className="text-[#00FF66] drop-shadow-[0_0_10px_rgba(0,255,102,0.4)]">
                após o pagamento
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
