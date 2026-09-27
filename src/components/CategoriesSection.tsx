import { CATEGORIES_DATA, CategoryData } from "../data/categories";

export default function CategoriesSection() {
  return (
    <section id="categorias" className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-black relative overflow-hidden">
      {/* Categories Header */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <h2 className="font-heading font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight text-center max-w-2xl mx-auto uppercase">
          <span>
            CONHEÇA AS CATEGORIAS QUE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66] drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]">
              MAIS VENDEM
            </span>{" "}
            NO MUNDO
          </span>
        </h2>
        
        {/* Imagem de Destaque da Coleção */}
        <div className="mt-6 sm:mt-8 max-w-xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden border border-[#00FF66]/30 shadow-[0_0_35px_rgba(0,255,102,0.2)] bg-black/60">
            <img
              src="https://i.imgur.com/jv2Di0d.jpg"
              alt="100 mil arquivos 3D prontos para imprimir"
              className="w-full h-auto object-cover rounded-xl block"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith(".png")) {
                  target.src = "https://i.imgur.com/jv2Di0d.png";
                }
              }}
            />
          </div>
        </div>

        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full mx-auto mt-6" />
      </div>

      {/* 3 Marquee Carousel Rows: Personagens, Católicos, Esportes */}
      <div className="space-y-16 sm:space-y-20">
        {CATEGORIES_DATA.map((cat: CategoryData) => (
          <div key={cat.id} className="relative pt-4 sm:pt-6">
            {/* Elegant Carousel Section Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center">
              {/* High-Impact Elegant Title */}
              <h3 className="font-premium font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 tracking-[0.14em] sm:tracking-[0.2em] uppercase leading-none drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)] my-2">
                {cat.title}
              </h3>

              {/* Subtle Emerald Geometric Divider */}
              <div className="flex items-center justify-center gap-2.5 pt-2">
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#00FF66]/70" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#00FF66] shadow-[0_0_8px_rgba(0,255,102,0.8)]" />
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#00FF66]/70" />
              </div>
            </div>

            {/* Infinite Horizontal Carousel */}
            <div className="relative w-full overflow-hidden py-2">
              {/* Left/Right Edge Shadow Fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

              <div
                className={`marquee-track flex w-max gap-3 sm:gap-4 pr-3 sm:pr-4 items-center select-none pointer-events-auto ${
                  cat.direction === "left"
                    ? cat.speed === "slow"
                      ? "animate-marquee-left-slow"
                      : "animate-marquee-left"
                    : cat.speed === "slow"
                    ? "animate-marquee-right-slow"
                    : "animate-marquee-right"
                }`}
              >
                {/* Duplicated items list for seamless loop */}
                {[...cat.items, ...cat.items, ...cat.items, ...cat.items].map((item, index) => {
                  const isImageOnly = cat.id === "personagens" || cat.id === "catolicos" || cat.id === "esportes";

                  if (isImageOnly) {
                    return (
                      <div
                        key={`${item.id}-${index}`}
                        className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-square rounded-xl sm:rounded-2xl overflow-hidden group select-none bg-black flex items-center justify-center p-1 sm:p-2"
                      >
                        <img
                          alt={item.name}
                          src={item.image}
                          draggable={false}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg sm:rounded-xl pointer-events-none select-none"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.dataset.tried) {
                              target.dataset.tried = "true";
                              if (target.src.endsWith(".png")) {
                                target.src = target.src.replace(".png", ".jpg");
                              } else if (target.src.endsWith(".jpg")) {
                                target.src = target.src.replace(".jpg", ".png");
                              } else {
                                target.src = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=80";
                              }
                            }
                          }}
                        />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/10 shadow-md group transition-all cursor-pointer flex items-center justify-center p-1 sm:p-2"
                    >
                      <img
                        alt={item.name}
                        src={item.image}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.tried) {
                            target.dataset.tried = "true";
                            if (target.src.endsWith(".jpg")) {
                              target.src = target.src.replace(".jpg", ".png");
                            } else {
                              target.src = "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80";
                            }
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 sm:p-3 text-left pointer-events-none">
                        {item.tag && (
                          <span className="text-[10px] font-bold text-[#00FF66] uppercase tracking-wider block mb-0.5">
                            {item.tag}
                          </span>
                        )}
                        <h4 className="text-white text-xs sm:text-sm font-heading font-black leading-tight line-clamp-1">
                          {item.name}
                        </h4>
                        {item.stlSize && (
                          <span className="text-[10px] text-zinc-400 mt-0.5">
                            .STL • {item.stlSize}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
