import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { RELATOS_ITEMS } from "../data/relatos";
import { AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4 } from "../data/assets";

export default function RelatosCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector("[data-relato-card]") as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 300;
    
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-[#09090D] to-black text-white relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight text-center">
            <span>VEJA QUEM TEVE ACESSO E JÁ ESTÁ TENDO{" "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66] drop-shadow-[0_0_25px_rgba(0,255,102,0.6)]">
              RESULTADO
            </span>{" "}
            <span>COM NOSSO PACK</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full mx-auto mt-6" />
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Voltar relato anterior"
            className={`absolute left-0 sm:-left-3 md:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-zinc-700 hover:border-[#00FF66] text-[#00FF66] flex items-center justify-center transition-colors shadow-lg cursor-pointer ${
              !canScrollLeft ? "opacity-25 cursor-not-allowed pointer-events-none" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Ver próximo relato"
            className={`absolute right-0 sm:-right-3 md:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-zinc-700 hover:border-[#00FF66] text-[#00FF66] flex items-center justify-center transition-colors shadow-lg cursor-pointer ${
              !canScrollRight ? "opacity-25 cursor-not-allowed pointer-events-none" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {RELATOS_ITEMS.map((item, index) => (
              <div
                key={item.id}
                data-relato-card
                className="flex-shrink-0 snap-center w-[230px] xs:w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden relative bg-[#0D0D12] flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={`Relato ${index + 1}`}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes("imgur.com") && !target.src.endsWith(".png")) {
                      target.src = target.src.replace(/\.[^/.]+$/, ".png");
                    } else {
                      target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=720&auto=format&fit=crop&q=80";
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Customer Social Proof Review Bar */}
        <div className="w-full max-w-md mx-auto mt-8 sm:mt-10 bg-[#0E0E13] border border-zinc-800 rounded-2xl p-3 sm:p-3.5 shadow-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2.5 items-center">
              <img alt="Cliente satisfeito" className="w-8 h-8 rounded-full border-2 border-[#0E0E13] object-cover ring-1 ring-zinc-700/50" src={AVATAR_1} />
              <img alt="Cliente satisfeito" className="w-8 h-8 rounded-full border-2 border-[#0E0E13] object-cover ring-1 ring-zinc-700/50" src={AVATAR_2} />
              <img alt="Cliente satisfeito" className="w-8 h-8 rounded-full border-2 border-[#0E0E13] object-cover ring-1 ring-zinc-700/50" src={AVATAR_3} />
              <img alt="Cliente satisfeito" className="w-8 h-8 rounded-full border-2 border-[#0E0E13] object-cover ring-1 ring-zinc-700/50" src={AVATAR_4} />
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-heading font-black text-white text-base sm:text-lg ml-1">
                4.9 / 5.0
              </span>
            </div>
            <div className="text-[13px] sm:text-sm text-zinc-300 font-medium mt-1">
              Mais de <strong className="text-white font-semibold">250 avaliações</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
