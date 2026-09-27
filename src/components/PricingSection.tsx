import { ArrowRight, Gift } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (plan: 'basico' | 'premium') => void;
  onGoToCheckout?: () => void;
}

export default function PricingSection({ onSelectPlan, onGoToCheckout }: PricingSectionProps) {
  return (
    <section id="precos" className="py-12 sm:py-16 bg-black text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#00FF66]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-md sm:max-w-lg mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Escolha seu Plano
          </h2>
          <div className="w-16 h-1 bg-[#00FF66] rounded-full mx-auto" />
        </div>

        <div className="space-y-12 sm:space-y-14 max-w-xl mx-auto">
          {/* PLANO BÁSICO */}
          <div
            id="plano-basico"
            className="bg-[#18181B] border border-zinc-700/70 rounded-3xl p-6 sm:p-7 text-center shadow-lg relative scroll-mt-6"
          >
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-300 tracking-tight">
              PLANO BÁSICO
            </h3>

            <div className="my-5 py-4 px-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/50">
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block mb-1">
                POR APENAS
              </span>
              <div className="flex items-center justify-center gap-1 text-zinc-300">
                <span className="font-heading font-black text-3xl sm:text-4xl tracking-tight">
                  R$ 10,90
                </span>
              </div>
            </div>

            {/* O que você recebe */}
            <div className="my-4 p-3.5 sm:p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-bold mb-2">
                Incluso neste plano:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                Arquivos 3D prontos para imprimir
              </p>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                Suporte via e-mail
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan('basico')}
              className="w-full py-4 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-600 font-heading font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-md flex items-center justify-center gap-2 mt-4"
              id="btn-plano-basico"
            >
              <span>Quero o Acesso</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          {/* PLANO PREMIUM */}
          <div
            id="plano-completo"
            className="relative bg-gradient-to-b from-[#0C120F] via-[#090C0E] to-[#060809] border-2 border-[#00FF66] rounded-3xl p-6 sm:p-7 text-center shadow-[0_0_40px_rgba(0,255,102,0.22)] scroll-mt-6"
          >
            {/* OFERTA ESPECIAL pill header */}
            <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-20">
              <span className="relative block px-8 sm:px-10 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-b from-[#3DFF8A] to-[#00E55B] text-black font-heading font-black text-lg sm:text-2xl tracking-wide uppercase leading-none whitespace-nowrap border-2 border-black/20 shadow-[0_0_35px_rgba(0,255,102,0.7),0_8px_20px_rgba(0,0,0,0.6)]">
                OFERTA ESPECIAL
              </span>
            </div>

            <div className="pt-7 sm:pt-8" />

            <div className="space-y-1.5 mt-2">
              <span className="text-[11px] sm:text-xs font-mono font-black tracking-widest text-[#00FF66] uppercase block drop-shadow-[0_0_12px_rgba(0,255,102,0.5)]">
                O PACOTE DEFINITIVO & ILIMITADO
              </span>
              <h3 className="font-heading font-black text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF66] to-white tracking-wider uppercase drop-shadow-[0_0_30px_rgba(0,255,102,0.7)]">
                PLANO PREMIUM
              </h3>
            </div>

            {/* Imagem do Produto */}
            <div className="mt-4 rounded-2xl overflow-hidden bg-black">
              <img
                alt="Biblioteca Completa de Arquivos 3D"
                className="w-full h-auto aspect-square object-cover block"
                loading="lazy"
                src="https://i.imgur.com/jv2Di0d.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith(".png")) {
                    target.src = "https://i.imgur.com/jv2Di0d.png";
                  }
                }}
              />
            </div>

            {/* Preços */}
            <div className="my-5 p-4 sm:p-5 rounded-2xl bg-black/60 border border-emerald-500/30 text-center shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  DE
                </span>
                <span className="text-sm sm:text-base font-mono font-extrabold text-red-500 line-through decoration-red-500 decoration-[2.5px] drop-shadow-[0_0_10px_rgba(239,68,68,0.45)]">
                  R$ 129,90
                </span>
              </div>

              <span className="text-xs sm:text-sm font-mono font-black tracking-widest uppercase text-zinc-300 block mb-1">
                POR APENAS
              </span>
              <div className="flex items-center justify-center gap-2 my-1">
                <span className="font-heading font-black text-4xl sm:text-5xl text-[#00FF66] tracking-tight drop-shadow-[0_0_25px_rgba(0,255,102,0.4)]">
                  R$ 44,90
                </span>
              </div>
            </div>

            {/* O que a pessoa vai receber - Design Elegante, Organizado e Sem Ícones */}
            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#111714] via-[#0A0D0C] to-[#050706] border-2 border-emerald-500/40 text-left shadow-[0_0_30px_rgba(0,255,102,0.12)]">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/60 text-[#00FF66] text-xs sm:text-sm font-heading font-black tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,102,0.3)]">
                  O QUE VOCÊ VAI RECEBER
                </span>
              </div>

              <div className="space-y-2 sm:space-y-2.5">
                {/* 1: Acesso imediato */}
                <div className="py-2.5 px-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-2 transition-all">
                  <span className="font-heading font-black text-xs sm:text-sm text-zinc-100 uppercase tracking-wide">
                    Acesso imediato
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-extrabold text-[#00FF66] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                    Liberado na hora
                  </span>
                </div>

                {/* 2: E vitalício */}
                <div className="py-2.5 px-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-2 transition-all">
                  <span className="font-heading font-black text-xs sm:text-sm text-zinc-100 uppercase tracking-wide">
                    E vitalício
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-extrabold text-[#00FF66] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                    Para sempre
                  </span>
                </div>

                {/* 3: Acesso aos Melhores Arquivos stl 3d */}
                <div className="py-2.5 px-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-2 transition-all">
                  <span className="font-heading font-black text-xs sm:text-sm text-zinc-100 uppercase tracking-wide">
                    Acesso aos Melhores Arquivos stl 3d
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-extrabold text-[#00FF66] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                    +100 Mil STL
                  </span>
                </div>

                {/* 4: Área de membros */}
                <div className="py-2.5 px-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-2 transition-all">
                  <span className="font-heading font-black text-xs sm:text-sm text-zinc-100 uppercase tracking-wide">
                    Área de membros
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-extrabold text-[#00FF66] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                    Acesso VIP
                  </span>
                </div>

                {/* 5: 4 bônus exclusivos inclusos */}
                <div className="py-2.5 px-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 hover:border-[#00FF66] flex items-center justify-between gap-2 transition-all shadow-[0_0_15px_rgba(0,255,102,0.15)]">
                  <span className="font-heading font-black text-xs sm:text-sm text-[#00FF66] uppercase tracking-wide drop-shadow-[0_0_8px_rgba(0,255,102,0.35)]">
                    4 Bônus Exclusivos Inclusos
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-black text-black bg-[#00FF66] px-2 py-0.5 rounded uppercase shadow-[0_0_10px_rgba(0,255,102,0.5)]">
                    100% Grátis
                  </span>
                </div>

                {/* 6: Suporte via e-mail e WhatsApp */}
                <div className="py-2.5 px-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-2 transition-all">
                  <span className="font-heading font-black text-xs sm:text-sm text-zinc-100 uppercase tracking-wide">
                    Suporte via e-mail e WhatsApp
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-extrabold text-[#00FF66] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                    Canal Direto
                  </span>
                </div>
              </div>
            </div>

            {/* BÔNUS EXCLUSIVOS INCLUSOS */}
            <div className="my-5 pt-3 border-t border-emerald-500/30 text-left">
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/50 text-[#00FF66] text-xs font-heading font-black uppercase tracking-wider">
                  <Gift className="w-3.5 h-3.5" />
                  <span>4 BÔNUS EXCLUSIVOS INCLUSOS</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Bonus 1: Pokémon */}
                <div className="rounded-2xl p-2 bg-zinc-900/80 border border-white/10 text-center flex flex-col items-center">
                  <img
                    alt="POKÉMON 3D"
                    className="w-full aspect-square rounded-xl object-cover border border-white/10 bg-zinc-950"
                    src="https://i.imgur.com/8709mzz.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".png")) {
                        target.src = "https://i.imgur.com/8709mzz.png";
                      }
                    }}
                  />
                  <h4 className="mt-1.5 font-heading font-black text-xs text-zinc-100 tracking-tight">
                    POKÉMON 3D
                  </h4>
                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono line-through">
                      R$ 19,00
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] text-[10px] font-bold uppercase">
                      Grátis
                    </span>
                  </div>
                </div>

                {/* Bonus 2: Chaveiros */}
                <div className="rounded-2xl p-2 bg-zinc-900/80 border border-white/10 text-center flex flex-col items-center">
                  <img
                    alt="CHAVEIROS"
                    className="w-full aspect-square rounded-xl object-cover border border-white/10 bg-zinc-950"
                    src="https://i.imgur.com/FZiVgzy.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".png")) {
                        target.src = "https://i.imgur.com/FZiVgzy.png";
                      }
                    }}
                  />
                  <h4 className="mt-1.5 font-heading font-black text-xs text-zinc-100 tracking-tight">
                    CHAVEIROS
                  </h4>
                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono line-through">
                      R$ 29,00
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] text-[10px] font-bold uppercase">
                      Grátis
                    </span>
                  </div>
                </div>

                {/* Bonus 3: Brinquedos Sensoriais */}
                <div className="rounded-2xl p-2 bg-zinc-900/80 border border-white/10 text-center flex flex-col items-center">
                  <img
                    alt="BRINQUEDOS SENSORIAIS"
                    className="w-full aspect-square rounded-xl object-cover border border-white/10 bg-zinc-950"
                    src="https://i.imgur.com/tst9dtw.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".png")) {
                        target.src = "https://i.imgur.com/tst9dtw.png";
                      }
                    }}
                  />
                  <h4 className="mt-1.5 font-heading font-black text-xs text-zinc-100 tracking-tight">
                    SENSORIAIS
                  </h4>
                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono line-through">
                      R$ 14,00
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] text-[10px] font-bold uppercase">
                      Grátis
                    </span>
                  </div>
                </div>

                {/* Bonus 4: Guia de Filamentos (Imagem solicitada) */}
                <div className="rounded-2xl p-2 bg-zinc-900/80 border border-white/10 text-center flex flex-col items-center">
                  <img
                    alt="GUIA DE FILAMENTOS"
                    className="w-full aspect-square rounded-xl object-cover border border-white/10 bg-zinc-950"
                    src="https://i.imgur.com/UCdqwuC.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".png")) {
                        target.src = "https://i.imgur.com/UCdqwuC.png";
                      }
                    }}
                  />
                  <h4 className="mt-1.5 font-heading font-black text-xs text-zinc-100 tracking-tight">
                    GUIA FILAMENTOS
                  </h4>
                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono line-through">
                      R$ 15,00
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] text-[10px] font-bold uppercase">
                      Grátis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan('premium')}
              className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-[#00FF66] hover:bg-[#00E55B] text-black font-heading font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(0,255,102,0.45)] hover:shadow-[0_0_50px_rgba(0,255,102,0.65)] active:scale-[0.98] transition-all duration-200 cursor-pointer mt-4"
              id="btn-plano-completo"
            >
              <span>Quero o Acesso</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Imagem e Selo da Garantia de 7 Dias abaixo dos cards de oferta */}
        <div className="mt-12 sm:mt-16 text-center max-w-lg mx-auto px-4 flex flex-col items-center">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.imgur.com/e8fjCpn.png"
              alt="Garantia Incondicional de 7 Dias"
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,255,102,0.45)]"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith(".png")) {
                  target.src = target.src.replace(/\.png$/, ".jpg");
                }
              }}
            />
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            GARANTIA DE 7 DIAS
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 mt-2.5 leading-relaxed max-w-md">
            Se por qualquer motivo você não ficar satisfeito com os arquivos STL, devolvemos 100% do seu dinheiro dentro de 7 dias. Sem perguntas e sem complicações.
          </p>
        </div>
      </div>
    </section>
  );
}
