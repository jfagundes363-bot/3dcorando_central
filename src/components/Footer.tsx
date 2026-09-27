import { Instagram, ExternalLink } from "lucide-react";

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenTerms, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="text-center text-zinc-400 text-xs border-t border-white/10 pt-10 pb-8 space-y-6 bg-black">
      {/* Organized Social Media / Instagram Card */}
      <div className="max-w-md mx-auto px-4">
        <div className="p-4 sm:p-5 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,39,67,0.4)] flex-shrink-0">
              <Instagram className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00FF66] font-bold block">
                Conheça nossas redes
              </span>
              <span className="font-heading font-black text-white text-base tracking-wide block">
                @3dcorando_central
              </span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/3dcorando_central/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-black font-heading font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
            id="instagram-profile-link"
          >
            <span>Clique aqui</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Brand logo & name */}
      <div className="flex items-center justify-center gap-2.5">
        <img
          src="https://i.imgur.com/oPst2bO.png"
          alt="Logo RENDA 3D"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-contain border border-emerald-500/20 drop-shadow-[0_0_8px_rgba(0,255,102,0.3)] bg-black/50"
        />
        <span className="font-heading font-black text-sm sm:text-base text-white tracking-wider uppercase">
          RENDA <span className="text-[#00FF66]">3D</span>
        </span>
      </div>

      {/* Copyright Information */}
      <div className="space-y-1 text-zinc-400 text-[11px] sm:text-xs">
        <p className="font-medium">
          Esta página pertence a{" "}
          <a
            href="https://www.instagram.com/3dcorando_central/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00FF66] font-bold underline decoration-emerald-500/50 underline-offset-2 transition-colors"
          >
            @3dcorando_central
          </a>
        </p>
        <p className="text-zinc-500 text-[10px] sm:text-[11px]">
          Direitos Autorais © 2026 @3dcorando_central. Todos os direitos reservados.
        </p>
      </div>

      {/* Terms and Privacy Buttons */}
      <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-500 pt-1">
        <button
          type="button"
          onClick={onOpenTerms}
          className="hover:text-white transition-colors cursor-pointer"
          id="footer-termos-btn"
        >
          Termos de Uso
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="hover:text-white transition-colors cursor-pointer"
          id="footer-privacidade-btn"
        >
          Política de Privacidade
        </button>
      </div>
    </footer>
  );
}
