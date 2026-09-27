import { ChevronDown } from "lucide-react";

export default function SecurePurchaseSection() {
  return (
    <section id="venda-segura" className="py-8 sm:py-10 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Texto Elegante */}
        <div className="space-y-2">
          <h3 className="font-elegant italic font-semibold text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-white to-zinc-200 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Veja abaixo a melhor opção para você
          </h3>

          <div className="flex flex-col items-center justify-center pt-2 text-[#00FF66]">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full mb-3" />
            <ChevronDown className="w-6 h-6 animate-bounce text-[#00FF66]" />
          </div>
        </div>
      </div>
    </section>
  );
}
