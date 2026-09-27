export interface RelatoItem {
  id: string;
  image: string;
  title?: string;
  tag?: string;
}

// COLOQUE AQUI AS SUAS IMAGENS DE RELATOS / DEPOIMENTOS NO FORMATO 9:16
export const RELATOS_ITEMS: RelatoItem[] = [
  {
    id: "relato-1",
    image: "https://i.imgur.com/x1r1qIT.jpg",
    title: "Relato Comprovado",
    tag: "Resultado Real"
  },
  {
    id: "relato-2",
    image: "https://i.imgur.com/jrFKGW2.jpg",
    title: "Cliente Satisfeito",
    tag: "Vendas nos Marketplaces"
  },
  {
    id: "relato-3",
    image: "https://i.imgur.com/AFLoOLn.jpg",
    title: "Cliente Satisfeito",
    tag: "Avaliação 5 Estrelas"
  },
  {
    id: "relato-4",
    image: "https://i.imgur.com/ZCGynYL.jpg",
    title: "Peças Impressas",
    tag: "Qualidade Premium"
  },
  {
    id: "relato-5",
    image: "https://i.imgur.com/M8gywkZ.jpg",
    title: "Lucro Rápido",
    tag: "Impressão 3D"
  },
  {
    id: "relato-6",
    image: "https://i.imgur.com/xViHt3B.jpg",
    title: "Relato Cliente",
    tag: "Comunidade 3D"
  }
];
