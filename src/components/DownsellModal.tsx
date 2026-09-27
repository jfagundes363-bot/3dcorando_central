import { X } from "lucide-react";

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownsellModal({ isOpen, onClose }: DownsellModalProps) {
  if (!isOpen) return null;

  const checkoutUrl = "https://checkout.wiven.com.br/checkout/cmucvtkm4039501ppdjqx0rn5?offer=3908PS0";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md max-h-[94vh] flex flex-col bg-[#0D0D12] border-2 border-[#00FF66]/80 rounded-3xl p-5 sm:p-6 shadow-[0_0_60px_rgba(0,255,102,0.3)] text-center overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          aria-label="Fechar janela"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="mt-6 mb-3 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-xl bg-black">
          <img
            src="https://i.imgur.com/jv2Di0d.jpg"
            alt="Biblioteca Completa 3D STL"
            className="w-full max-h-56 object-cover object-center block"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith(".png")) {
                target.src = "https://i.imgur.com/jv2Di0d.png";
              }
            }}
          />
        </div>

        {/* Pricing Box */}
        <div className="my-3 p-3.5 sm:p-4 rounded-2xl bg-black/80 border border-emerald-500/30 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              DE
            </span>
            <span className="text-sm font-mono font-extrabold text-red-500 line-through decoration-red-500 decoration-[2px]">
              R$ 44,90
            </span>
          </div>
          <span className="text-xs font-mono font-black tracking-widest uppercase text-zinc-300 block mb-1">
            POR APENAS
          </span>
          <div className="font-heading font-black text-4xl sm:text-5xl text-[#00FF66] tracking-tight drop-shadow-[0_0_25px_rgba(0,255,102,0.4)] my-1">
            R$ 19,90
          </div>
        </div>

        {/* Message */}
        <div className="my-2.5">
          <p className="text-base sm:text-xl font-heading font-black text-white uppercase tracking-tight">
            Você fez uma excelente escolha!
          </p>
          <p className="text-xs sm:text-sm text-[#00FF66] font-bold mt-1">
            Quase lá! Liberamos esta condição especial para você:
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-2">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-[#00FF66] hover:bg-[#00E55B] text-black font-heading font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center shadow-[0_0_35px_rgba(0,255,102,0.45)] hover:shadow-[0_0_50px_rgba(0,255,102,0.65)] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Ir para Pagamento</span>
          </a>
        </div>
      </div>
    </div>
  );
}
