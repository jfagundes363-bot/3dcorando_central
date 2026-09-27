export interface ValorMercadoItem {
  id: string;
  image: string;
  alt: string;
}

/**
 * COLE AQUI AS SUAS IMAGENS DE ANÚNCIOS / PREÇOS PRATICADOS NO MERCADO.
 * Basta colar o link da imagem (ex: https://i.imgur.com/seulink.jpg)
 */
export const VALORES_MERCADO_ITEMS: ValorMercadoItem[] = [
  {
    id: "valor-1",
    image: "https://i.imgur.com/3c9wXvO.png",
    alt: "Exemplo de preço praticado no mercado para arquivos 3D"
  },
  {
    id: "valor-3",
    image: "https://i.imgur.com/NRcHcq0.png",
    alt: "Comparativo de preços de modelos e packs 3D"
  },
  {
    id: "valor-4",
    image: "https://i.imgur.com/2cfZLdI.png",
    alt: "Anúncio de modelo 3D comercializado na internet"
  }
];
