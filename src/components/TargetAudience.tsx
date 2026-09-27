import { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { WHATSAPP_ICON, GMAIL_ICON } from "../data/assets";

/**
 * CONFIGURAÇÃO DO VÍDEO:
 * Substitua as URLs abaixo pelo link do seu vídeo e imagem de capa (poster).
 */
const VIDEO_CONFIG = {
  src: "https://i.imgur.com/SNonLeO.mp4",
  poster: "https://i.imgur.com/SNonLeO.jpg",
};

export default function TargetAudience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.45; // Volume um pouco mais baixo e equilibrado
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.45;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
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
      setProgress((current / duration) * 100);
    }
  };

  return (
    <section 
      aria-label="Veja nossa área de membros"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-[#060807] to-black text-white relative overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        {/* Título / Aba acima do vídeo */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight text-center">
            <span>Veja nossa{" "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66] drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]">
              área de membros
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full mx-auto mt-4 mb-6" />

          {/* Destaque: Chega de ficar procurando arquivos */}
          <div className="space-y-3 px-3 sm:px-4 text-center max-w-2xl mx-auto">
            <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-wide uppercase text-red-500 drop-shadow-[0_2px_12px_rgba(239,68,68,0.35)]">
              Chega de ficar procurando arquivos
            </span>
            
            <h3 className="font-premium font-black text-xl sm:text-2xl md:text-3xl text-white uppercase leading-snug tracking-tight">
              Nessa área de membros você:
            </h3>

            {/* 3 passos */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-1">
              <div className="flex items-center gap-2 text-zinc-200 text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl shadow-inner">
                <span className="w-5 h-5 rounded-full bg-[#00FF66]/20 text-[#00FF66] font-bold text-xs flex items-center justify-center border border-[#00FF66]/40 shrink-0">1</span>
                <span>Visualiza a imagem do modelo</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl shadow-inner">
                <span className="w-5 h-5 rounded-full bg-[#00FF66]/20 text-[#00FF66] font-bold text-xs flex items-center justify-center border border-[#00FF66]/40 shrink-0">2</span>
                <span>Seleciona o arquivo</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl shadow-inner">
                <span className="w-5 h-5 rounded-full bg-[#00FF66]/20 text-[#00FF66] font-bold text-xs flex items-center justify-center border border-[#00FF66]/40 shrink-0">3</span>
                <span>E põe pra imprimir</span>
              </div>
            </div>

            <p className="font-heading font-black text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66] uppercase tracking-wider drop-shadow-[0_0_12px_rgba(0,255,102,0.4)] pt-1">
              ⚡ Rápido e prático
            </p>
          </div>
        </div>

        {/* Audio notice text idêntico ao primeiro vídeo */}
        <p className="mb-4 font-heading font-black text-xs sm:text-sm text-zinc-300 uppercase tracking-wider flex items-center justify-center gap-2">
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF66] animate-pulse drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]" />
          <span>Aumente O Volume !</span>
        </p>

        {/* Moldura de Smartphone (Telefone) com mesmo aspecto visual do 1º vídeo */}
        <div className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[330px] flex justify-center">
          {/* Brilho ambiente esmeralda atrás do telefone */}
          <div 
            className="absolute inset-0 bg-[#00FF66]/20 blur-3xl rounded-[3rem] -z-10 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Chassi do Telefone / Moldura com acabamento premium */}
          <div className="relative aspect-[9/16] w-full rounded-[2.5rem] sm:rounded-[2.85rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#2A2B33] via-[#14151B] to-[#0D0E12] border-2 border-zinc-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(0,255,102,0.15)] flex items-center justify-center">
            
            {/* Botões laterais simulados na carcaça do telefone */}
            <div className="absolute -left-[3px] top-20 w-[3px] h-10 bg-zinc-600 rounded-l-sm" />
            <div className="absolute -left-[3px] top-32 w-[3px] h-10 bg-zinc-600 rounded-l-sm" />
            <div className="absolute -right-[3px] top-24 w-[3px] h-14 bg-zinc-600 rounded-r-sm" />

            {/* Tela interna do Telefone (9:16) */}
            <div
              onClick={togglePlay}
              className="relative w-full h-full rounded-[2rem] sm:rounded-[2.35rem] overflow-hidden bg-black border border-white/10 flex items-center justify-center group cursor-pointer select-none"
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
              {/* Dynamic Island / Notch superior do Telefone */}
              <div 
                className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-black/90 backdrop-blur-md rounded-full z-40 flex items-center justify-center gap-2 pointer-events-none border border-white/10 shadow-sm"
                aria-hidden="true"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-6 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* Player de Vídeo Real */}
              <video
                ref={videoRef}
                src={VIDEO_CONFIG.src}
                poster={VIDEO_CONFIG.poster}
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
              />

              {/* Barra de Progresso Vermelha estilo YouTube */}
              <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-black/60 z-30 overflow-hidden pointer-events-none">
                <div
                  className="h-full bg-[#FF0000] shadow-[0_0_10px_#FF0000] transition-[width] duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Home indicator bar inferior do smartphone */}
              <div 
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-30 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Botão de Play Vermelho estilo YouTube (visível quando pausado) */}
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
        </div>

        {/* Onde eu recebo meu acesso? */}
        <div className="w-full max-w-md mx-auto mt-8 sm:mt-10 bg-[#0E0E13] border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3">
          <div className="text-center">
            <h4 className="font-heading font-extrabold text-base sm:text-lg text-white tracking-wide flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Aonde eu recebo meu acesso?
            </h4>
            <p className="text-xs sm:text-[13px] text-zinc-300 mt-1 font-medium">
              Você recebe na hora, direto no:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center justify-center gap-2.5 py-5 sm:py-6 px-3 rounded-xl bg-[#1A1A22] border border-zinc-700/60 shadow-md hover:border-emerald-500/40 transition-colors">
              <img 
                alt="WhatsApp" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden object-cover flex-shrink-0 drop-shadow" 
                src="https://i.imgur.com/sn2HbZD.png"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith(".png")) {
                    target.src = target.src.replace(".png", ".jpg");
                  } else {
                    target.src = WHATSAPP_ICON;
                  }
                }}
              />
              <div className="text-center leading-tight">
                <div className="text-[11px] sm:text-xs text-zinc-400 font-mono uppercase">
                  Direto no
                </div>
                <div className="text-base sm:text-lg font-heading font-extrabold text-white mt-0.5">
                  WhatsApp
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2.5 py-5 sm:py-6 px-3 rounded-xl bg-[#1A1A22] border border-zinc-700/60 shadow-md hover:border-emerald-500/40 transition-colors">
              <img 
                alt="Gmail" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden object-cover flex-shrink-0 drop-shadow" 
                src="https://i.imgur.com/0aCDohg.jpg"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith(".jpg")) {
                    target.src = target.src.replace(".jpg", ".png");
                  } else {
                    target.src = GMAIL_ICON;
                  }
                }}
              />
              <div className="text-center leading-tight">
                <div className="text-[11px] sm:text-xs text-zinc-400 font-mono uppercase">
                  E no seu
                </div>
                <div className="text-base sm:text-lg font-heading font-extrabold text-white mt-0.5">
                  E-mail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
