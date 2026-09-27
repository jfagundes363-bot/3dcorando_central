import { X, ArrowRight } from "lucide-react";

interface CheckoutModalProps {
  plan: 'basico' | 'premium' | null;
  onClose: () => void;
  onGoToCheckout?: () => void;
  onOpenSpecialOffer?: () => void;
}

export default function CheckoutModal({ plan, onClose, onGoToCheckout, onOpenSpecialOffer }: CheckoutModalProps) {
  if (!plan) return null;

  const isPremium = plan === 'premium';
  const price = isPremium ? "R$ 44,90" : "R$ 10,90";
  const planTitle = isPremium ? "PLANO PREMIUM" : "PLANO BÁSICO";

  const checkoutUrl = isPremium
    ? "https://checkout.wiven.com.br/checkout/cmucvwxlr03e601ppymd919pd?offer=SX61DG2"
    : "https://checkout.wiven.com.br/checkout/cmucvohtl033l01ppwn5fe5hn?offer=2HDKO9U";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-[#0D0D12] border-2 border-emerald-500/50 rounded-3xl p-5 sm:p-6 shadow-[0_0_50px_rgba(0,255,102,0.2)] text-center overflow-y-auto">
        {/* Close Button ("X" - Retornar à página) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          aria-label="Voltar para a página"
          title="Voltar para a página"
        >
          <X className="w-4 h-4" />
        </button>

        {!isPremium ? (
          /* CARD UNIFICADO DO PLANO BÁSICO - SEM CARDS SEPARADOS */
          <div className="pt-2 text-center space-y-4">
            {/* Topo */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[#00FF66] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-1.5 shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                CONFIRMAÇÃO DO PEDIDO
              </span>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
                Excelente escolha, quase lá!
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                Você selecionou o <strong className="text-[#00FF66]">PLANO BÁSICO</strong>
              </p>
            </div>

            {/* Conteúdo incluso em fluxo contínuo */}
            <div className="py-2.5 border-y border-white/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-bold">
                Incluso neste plano:
              </span>
              <p className="font-heading font-black text-white text-base sm:text-lg">
                Biblioteca STL 3D
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                Arquivos 3D prontos para imprimir
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                Suporte via e-mail
              </p>
            </div>

            {/* Preço */}
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">
                VALOR PROMOCIONAL
              </span>
              <span className="text-3xl sm:text-4xl font-heading font-black text-[#00FF66] block drop-shadow-[0_0_20px_rgba(0,255,102,0.35)]">
                R$ 10,90
              </span>
            </div>

            {/* Mensagem Persuasiva - Oferta Premium 44,90 */}
            <div className="space-y-1 pt-1">
              <p className="font-heading font-black text-xs sm:text-sm text-amber-300 uppercase tracking-wide">
                TEM CERTEZA? TEMOS UMA MELHOR OPÇÃO PRA VOCÊ!
              </p>
              <p className="text-xs sm:text-sm text-zinc-300">
                Por apenas <strong className="text-[#00FF66] font-bold">R$ 44,90</strong> leve o Catálogo Premium Completo com acesso vitalício e todos os 4 Bônus exclusivos!
              </p>
            </div>

            {/* Botões empilhados sequencialmente */}
            <div className="pt-2 space-y-2.5">
              {/* Botão 1: Quero a Oferta Premium por 44,90 */}
              <a
                href="https://checkout.wiven.com.br/checkout/cmucvwxlr03e601ppymd919pd?offer=SX61DG2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onGoToCheckout?.()}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#00FF66] hover:bg-[#00E55B] text-black font-heading font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center shadow-[0_0_25px_rgba(0,255,102,0.45)] hover:shadow-[0_0_35px_rgba(0,255,102,0.6)] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Quero o Plano Premium (R$ 44,90)</span>
              </a>

              {/* Botão 2: Continuar no Plano Básico */}
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onGoToCheckout?.()}
                className="w-full py-3.5 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-600 font-heading font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Continuar no Plano Básico (R$ 10,90)</span>
              </a>
            </div>
          </div>
        ) : (
          /* CARD DO PLANO PREMIUM */
          <>
            {/* Topo do Mini Card */}
            <div className="pt-2 pb-3 text-center border-b border-white/10">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[#00FF66] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-1.5 shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                CONFIRMAÇÃO DO PEDIDO
              </span>
              <h2 className="font-heading font-black text-lg sm:text-2xl text-white tracking-tight uppercase">
                Excelente escolha, quase lá!
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                Você selecionou o <strong className="text-[#00FF66]">{planTitle}</strong>
              </p>
            </div>

            {/* Conteúdo do Mini Card Premium */}
            <div className="py-3 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-emerald-500/40 shadow-lg bg-black">
                <img
                  src="https://i.imgur.com/jv2Di0d.jpg"
                  alt="Acesso Biblioteca STL"
                  className="w-full max-h-52 object-cover object-center block"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith(".png")) {
                      target.src = "https://i.imgur.com/jv2Di0d.png";
                    }
                  }}
                />
              </div>

              {/* Pricing Box Premium */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950 border border-white/10 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs mb-1">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase">DE</span>
                  <span className="font-mono font-bold text-red-500 line-through decoration-red-500 decoration-2">
                    R$ 129,90
                  </span>
                </div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block mb-0.5">
                  VALOR PROMOCIONAL
                </span>
                <span className="text-3xl sm:text-4xl font-heading font-black text-[#00FF66] block drop-shadow-[0_0_20px_rgba(0,255,102,0.35)]">
                  {price}
                </span>
              </div>

              {/* Botão Fazer Pagamento Premium */}
              <div className="pt-1">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onGoToCheckout?.()}
                  className="w-full py-4 px-6 rounded-2xl bg-[#00FF66] hover:bg-[#00E55B] text-black font-heading font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,102,0.4)] hover:shadow-[0_0_45px_rgba(0,255,102,0.6)] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Fazer Pagamento</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
