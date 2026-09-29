export interface ShowcaseItem {
  id: string;
  name: string;
  category: string;
  image: string;
  tag?: string;
  stlSize?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  niche?: string;
  subtitle: string;
  speed: 'slow' | 'normal' | 'fast';
  direction: 'left' | 'right';
  badge?: string[];
  items: ShowcaseItem[];
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "personagens",
    title: "PERSONAGENS",
    niche: "NICHO 01 • POP, ANIMES & GAMES",
    subtitle: "Os personagens mais famosos e vendidos de animes, filmes, quadrinhos e games",
    speed: "slow",
    direction: "left",
    badge: ["Mais Vendidos", "Alta Procura", "Colecionáveis"],
    items: [
      { id: "pers-new-1", name: "Personagem 3D 1", category: "Personagens", image: "https://i.imgur.com/QnUhdId.png", tag: "Colecionável", stlSize: "Alta Resolução" },
      { id: "pers-new-2", name: "Personagem 3D 2", category: "Personagens", image: "https://i.imgur.com/jWmrYoy.png", tag: "Top Vendas", stlSize: "Com Suportes" },
      { id: "pers-new-3", name: "Personagem 3D 3", category: "Personagens", image: "https://i.imgur.com/O5v3kIj.png", tag: "Destaque", stlSize: "FDM & Resina" },
      { id: "pers-new-4", name: "Personagem 3D 4", category: "Personagens", image: "https://i.imgur.com/MthnTLo.png", tag: "Pronto p/ Fatiar", stlSize: "Escala 1:6" },
      { id: "pers-new-5", name: "Personagem 3D 5", category: "Personagens", image: "https://i.imgur.com/1crpRMj.png", tag: "Edição Especial", stlSize: "Base Inclusa" },
      { id: "pers-new-6", name: "Personagem 3D 6", category: "Personagens", image: "https://i.imgur.com/2Ct8TKe.png", tag: "Alta Procura", stlSize: "Detalhado" },
      { id: "pers-new-7", name: "Personagem 3D 7", category: "Personagens", image: "https://i.imgur.com/wpKpDNI.png", tag: "Novo Modelo", stlSize: "Multi-partes" }
    ]
  },
  {
    id: "catolicos",
    title: "RELIGIÃO",
    niche: "NICHO 02 • ARTE SACRA & DEVOÇÃO",
    subtitle: "Imagens sacras, crucifixos e esculturas religiosas com altíssima margem de lucro",
    speed: "slow",
    direction: "right",
    badge: ["Margem Alta", "Público Fiel", "Alta Resolução"],
    items: [
      { id: "rel-1", name: "Arte Sacra 1", category: "Religião", image: "https://i.imgur.com/mVBU708.png", tag: "Arte Sacra", stlSize: "Alta Resolução" },
      { id: "rel-2", name: "Arte Sacra 2", category: "Religião", image: "https://i.imgur.com/VPf4RPO.png", tag: "Mais Vendido", stlSize: "FDM & Resina" },
      { id: "rel-3", name: "Arte Sacra 3", category: "Religião", image: "https://i.imgur.com/HjBnc6A.png", tag: "Riqueza de Detalhes", stlSize: "Pronto p/ Fatiar" },
      { id: "rel-4", name: "Arte Sacra 4", category: "Religião", image: "https://i.imgur.com/h3ExSnY.png", tag: "Destaque", stlSize: "Com Suportes" },
      { id: "rel-5", name: "Arte Sacra 5", category: "Religião", image: "https://i.imgur.com/n9T1nmh.png", tag: "Exclusivo", stlSize: "Multi-partes" }
    ]
  },
  {
    id: "esportes",
    title: "ESPORTES",
    niche: "NICHO 03 • CLUBES, TAÇAS & TROFÉUS",
    subtitle: "Troféus, taças, réplicas e peças exclusivas para os apaixonados por esportes",
    speed: "slow",
    direction: "left",
    badge: ["Paixão Nacional", "Futebol & Clubes", "Edição Especial"],
    items: [
      { id: "esp-1", name: "Troféu Destaque 3D", category: "Esportes", image: "https://i.imgur.com/gTKyirw.png", tag: "Troféu", stlSize: "Alta Resolução" },
      { id: "esp-2", name: "Taça Colecionável", category: "Esportes", image: "https://i.imgur.com/qLAimRX.png", tag: "Futebol", stlSize: "FDM & Resina" },
      { id: "esp-3", name: "Troféu de Futebol", category: "Esportes", image: "https://i.imgur.com/tdZrkpL.png", tag: "Mais Vendido", stlSize: "Multi-partes" },
      { id: "esp-4", name: "Emblema Esportivo", category: "Esportes", image: "https://i.imgur.com/yuVxj3h.png", tag: "Destaque", stlSize: "Pronto p/ Fatiar" },
      { id: "esp-5", name: "Escultura Esportiva", category: "Esportes", image: "https://i.imgur.com/7TSRdJm.png", tag: "Alta Procura", stlSize: "Escala 1:1" },
      { id: "esp-6", name: "Réplica Campeão", category: "Esportes", image: "https://i.imgur.com/uqI3alw.png", tag: "Edição Especial", stlSize: "Com Suportes" },
      { id: "esp-7", name: "Miniatura Esportiva", category: "Esportes", image: "https://i.imgur.com/iw2DMNZ.png", tag: "Top Vendas", stlSize: "Base Inclusa" },
      { id: "esp-8", name: "Troféu Esportivo 3D", category: "Esportes", image: "https://i.imgur.com/ihzQ9Dw.png", tag: "Exclusivo", stlSize: "Multi-partes" },
      { id: "esp-9", name: "Peça Futebolística", category: "Esportes", image: "https://i.imgur.com/bjfsbrx.png", tag: "Novo Modelo", stlSize: "Fácil Impressão" },
      { id: "esp-10", name: "Símbolo Esportivo", category: "Esportes", image: "https://i.imgur.com/Mad2ZJj.png", tag: "Alta Resolução", stlSize: "Detalhado" }
    ]
  }
];
