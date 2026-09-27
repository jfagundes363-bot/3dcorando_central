import { VALORES_MERCADO_ITEMS } from "../data/valoresMercado";
import { AMAZON_SVG, SHOPEE_SVG, MERCADO_LIVRE_SVG } from "../data/assets";

export default function ValoresMercadoSection() {
  return (
    <section 
      aria-label="Valores praticados no mercado"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-[#08080C] to-black text-white relative overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle radial glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[350px] bg-[#00FF66]/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Marketplace Highlights Section */}
        <div className="w-full max-w-2xl mx-auto mb-10 sm:mb-12 px-2 sm:px-0 text-center">
          <h2 className="font-heading font-black text-white tracking-tight leading-tight mb-4 sm:mb-6">
            <span className="block text-zinc-200 font-bold text-base sm:text-xl md:text-2xl uppercase tracking-wider">
              AQUI VOCÊ ENCONTRA OS MODELOS QUE MAIS GERARAM VENDAS
            </span>
            <span className="block text-[#00FF66] font-extrabold text-sm sm:text-xl md:text-2xl mt-1.5 sm:mt-2 tracking-wider uppercase drop-shadow-[0_0_15px_rgba(0,255,102,0.45)]">
              TUDO EM UM SÓ LUGAR
            </span>
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 mb-5">
            {/* Amazon Card */}
            <div className="group relative bg-[#0D0D12] border border-amber-500/20 hover:border-amber-500/50 rounded-2xl p-2 sm:p-3.5 flex flex-col items-center justify-between gap-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,153,0,0.15)] bg-gradient-to-b from-[#16130C] to-[#0D0D12]">
              <div className="w-full text-center">
                <span className="block text-[9px] xs:text-[10px] sm:text-[11px] text-zinc-400 font-medium leading-tight mb-0.5">
                  Mais vendidos na
                </span>
                <strong className="inline-block font-heading font-black text-xs xs:text-sm sm:text-base text-[#FF9900] tracking-wide">
                  Amazon
                </strong>
              </div>
              
              <div className="w-full aspect-square flex items-center justify-center p-1 sm:p-1.5 bg-black/60 rounded-xl border border-white/5 overflow-hidden">
                <img 
                  alt="Amazon Mais Vendidos" 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  src="https://i.imgur.com/GYurSYV.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== AMAZON_SVG) {
                      target.src = AMAZON_SVG;
                    }
                  }}
                />
              </div>
            </div>

            {/* Mercado Livre Card */}
            <div className="group relative bg-[#0D0D12] border border-yellow-400/20 hover:border-yellow-400/50 rounded-2xl p-2 sm:p-3.5 flex flex-col items-center justify-between gap-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,230,0,0.15)] bg-gradient-to-b from-[#16150A] to-[#0D0D12]">
              <div className="w-full text-center">
                <span className="block text-[9px] xs:text-[10px] sm:text-[11px] text-zinc-400 font-medium leading-tight mb-0.5">
                  Mais vendidos no
                </span>
                <strong className="inline-block font-heading font-black text-xs xs:text-sm sm:text-base text-[#FFE600] tracking-wide">
                  Mercado Livre
                </strong>
              </div>
              
              <div className="w-full aspect-square flex items-center justify-center p-1 sm:p-1.5 bg-black/60 rounded-xl border border-white/5 overflow-hidden">
                <img 
                  alt="Mercado Livre Mais Vendidos" 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  src="https://i.imgur.com/okpj9cs.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = "true";
                      target.src = "https://i.imgur.com/okpj9cs.jpg";
                    } else if (target.src !== MERCADO_LIVRE_SVG) {
                      target.src = MERCADO_LIVRE_SVG;
                    }
                  }}
                />
              </div>
            </div>

            {/* Shopee Card */}
            <div className="group relative bg-[#0D0D12] border border-orange-500/20 hover:border-orange-500/50 rounded-2xl p-2 sm:p-3.5 flex flex-col items-center justify-between gap-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(238,77,45,0.15)] bg-gradient-to-b from-[#180E0C] to-[#0D0D12]">
              <div className="w-full text-center">
                <span className="block text-[9px] xs:text-[10px] sm:text-[11px] text-zinc-400 font-medium leading-tight mb-0.5">
                  Mais vendidos na
                </span>
                <strong className="inline-block font-heading font-black text-xs xs:text-sm sm:text-base text-[#EE4D2D] tracking-wide">
                  Shopee
                </strong>
              </div>
              
              <div className="w-full aspect-square flex items-center justify-center p-1 sm:p-1.5 bg-black/60 rounded-xl border border-white/5 overflow-hidden">
                <img 
                  alt="Shopee Mais Vendidos" 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  src="https://i.imgur.com/iyR1rCD.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== SHOPEE_SVG) {
                      target.src = SHOPEE_SVG;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Header: Veja os valores praticados no mercado */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
          {/* Title */}
          <h2 className="font-heading font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight text-center">
            <span>Veja os valores praticados{" "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66] drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]">
              no mercado
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-zinc-300 font-medium text-sm sm:text-base md:text-lg max-w-2xl text-center leading-relaxed">
            Produtos e arquivos 3D semelhantes são anunciados por valores muito maiores. Veja alguns exemplos encontrados na internet.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full mx-auto mt-6" />
        </div>

        {/* Vertical Stack List of Market Prices (Uma abaixo da outra) */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
          {VALORES_MERCADO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0E0E14] border border-zinc-800/90 shadow-2xl p-2 sm:p-3 transition-colors hover:border-zinc-700/80"
            >
              {/* Screenshot Container - 100% Entire & Natural Proportion */}
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/5">
                <img
                  src={item.image}
                  alt={item.alt || `Exemplo ${index + 1} de valor praticado no mercado`}
                  loading="lazy"
                  className="w-full h-auto object-contain block select-none"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith(".png")) {
                      target.src = target.src.replace(/\.png$/, ".jpg");
                    } else if (target.src.endsWith(".jpg")) {
                      target.src = target.src.replace(/\.jpg$/, ".png");
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
