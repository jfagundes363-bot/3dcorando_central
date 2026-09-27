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
      { id: "pers-2", name: "Guerreiro Lendário", category: "Personagens", image: "https://i.imgur.com/teu3RBq.jpg", tag: "Colecionável", stlSize: "Alta Resolução" },
      { id: "pers-3", name: "Herói em Ação", category: "Personagens", image: "https://i.imgur.com/H55YmCG.jpg", tag: "Top Vendas", stlSize: "Com Suportes" },
      { id: "pers-4", name: "Estátua Colecionável", category: "Personagens", image: "https://i.imgur.com/Oj7QuwZ.jpg", tag: "Destaque", stlSize: "FDM & Resina" },
      { id: "pers-5", name: "Miniatura Detalhada", category: "Personagens", image: "https://i.imgur.com/nDqBGVY.jpg", tag: "Pronto p/ Fatiar", stlSize: "Escala 1:6" },
      { id: "pers-6", name: "Escultura Épica", category: "Personagens", image: "https://i.imgur.com/L8vLpEk.jpg", tag: "Edição Especial", stlSize: "Base Inclusa" },
      { id: "pers-7", name: "Personagem Mítico", category: "Personagens", image: "https://i.imgur.com/SOyiZWY.jpg", tag: "Alta Procura", stlSize: "Detalhado" },
      { id: "pers-9", name: "Guerreiro Fantasia", category: "Personagens", image: "https://i.imgur.com/lDSozEH.jpg", tag: "Novo Modelo", stlSize: "Multi-partes" },
      { id: "pers-10", name: "Personagem Lendário", category: "Personagens", image: "https://i.imgur.com/XaGMnbf.jpg", tag: "Edição Especial", stlSize: "Alta Resolução" },
      { id: "pers-11", name: "Personagem Fantasia Épico", category: "Personagens", image: "https://i.imgur.com/fkzCT4v.jpg", tag: "Novo Modelo", stlSize: "Multi-partes" },
      { id: "pers-12", name: "Guerreiro em Ação", category: "Personagens", image: "https://i.imgur.com/uZ8jJ5F.jpg", tag: "Edição Especial", stlSize: "Alta Resolução" },
      { id: "pers-13", name: "Personagem Estilizado 3D", category: "Personagens", image: "https://i.imgur.com/qgmlN00.png", tag: "Colecionável", stlSize: "Alta Resolução" }
    ]
  },
  {
    id: "catolicos",
    title: "CATÓLICOS",
    niche: "NICHO 02 • ARTE SACRA & DEVOÇÃO",
    subtitle: "Imagens sacras, crucifixos e esculturas religiosas com altíssima margem de lucro",
    speed: "slow",
    direction: "right",
    badge: ["Margem Alta", "Público Fiel", "Alta Resolução"],
    items: [
      { id: "cat-1", name: "Imagem Sacra Detalhada", category: "Católicos", image: "https://i.imgur.com/48w6dYy.jpg", tag: "Arte Sacra", stlSize: "Alta Resolução" },
      { id: "cat-2", name: "Escultura Religiosa 3D", category: "Católicos", image: "https://i.imgur.com/vEKc61Z.jpg", tag: "Mais Vendido", stlSize: "FDM & Resina" },
      { id: "cat-3", name: "Santo Colecionável", category: "Católicos", image: "https://i.imgur.com/oUX45Mb.jpg", tag: "Riqueza de Detalhes", stlSize: "Pronto p/ Fatiar" },
      { id: "cat-4", name: "Arte Sacra Clássica", category: "Católicos", image: "https://i.imgur.com/0wcKn6i.jpg", tag: "Destaque", stlSize: "Com Suportes" },
      { id: "cat-5", name: "Escultura Devocional", category: "Católicos", image: "https://i.imgur.com/g9eC09e.jpg", tag: "Exclusivo", stlSize: "Multi-partes" },
      { id: "cat-6", name: "Figura Sacra Premium", category: "Católicos", image: "https://i.imgur.com/eBLMA95.jpg", tag: "Alta Procura", stlSize: "Escala Realista" }
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
