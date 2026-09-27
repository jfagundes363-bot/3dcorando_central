export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-12 sm:py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-xl mx-auto px-4 relative z-10 flex justify-center">
        <div className="w-full max-w-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0F1713] to-[#0A0D0C] border border-emerald-500/40 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.15)] text-center">
          {/* Imagem do Selo de Garantia */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 flex items-center justify-center">
            <img
              src="https://i.imgur.com/e8fjCpn.png"
              alt="Selo Garantia Incondicional 7 Dias"
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,255,102,0.35)]"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith(".png")) {
                  target.src = target.src.replace(/\.png$/, ".jpg");
                }
              }}
            />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-[#00FF66] text-xs font-heading font-black tracking-widest uppercase mb-2">
            Risco Zero
          </span>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
            Se por qualquer motivo você não ficar 100% satisfeito com a qualidade dos arquivos STL, basta nos enviar um e-mail ou mensagem no WhatsApp dentro de 7 dias e devolveremos 100% do seu investimento. Sem perguntas e sem complicações.
          </p>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-zinc-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
            <span>Satisfação Garantida ou Seu Dinheiro de Volta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
