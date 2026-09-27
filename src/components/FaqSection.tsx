import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "OS ARQUIVOS FUNCIONAM NA MINHA IMPRESSORA 3D?",
    answer: "Sim! Todos os modelos estão disponibilizados no formato universal .STL (e muitos também em .OBJ), 100% compatíveis com qualquer impressora 3D do mercado (seja de filamento FDM como Creality Ender, Bambu Lab, Anycubic, Prusa, etc., ou impressoras de resina SLA/DLP). Basta carregar no seu fatiador de preferência (Cura, PrusaSlicer, OrcaSlicer, Chitubox)."
  },
  {
    id: "faq-2",
    question: "OS MODELOS POSSUEM LICENÇA COMERCIAL PARA VENDA?",
    answer: "Sim! Ao adquirir o Plano Premium, você tem autorização total para imprimir e vender fisicamente todos os objetos produzidos com esses arquivos em qualquer canal comercial (Mercado Livre, Shopee, feiras, Instagram, lojas físicas, encomendas locais), retendo 100% do lucro para você."
  },
  {
    id: "faq-3",
    question: "POR QUE COMPRAR AGORA?",
    answer: "O preço promocional de R$ 44,90 (com mais de 70% de desconto) e a inclusão de todos os 4 Bônus Exclusivos (Pokémon, Chaveiros, Sensoriais e Guia de Filamentos) foram liberados por lote especial e podem retornar ao valor regular a qualquer momento. Garantindo agora, seu acesso permanece vitalício."
  },
  {
    id: "faq-4",
    question: "COMO VOU RECEBER OS ARQUIVOS?",
    answer: "A entrega é 100% digital e imediata. Logo após a confirmação do pagamento, você recebe os links de acesso seguro diretamente no seu WhatsApp e também no seu E-mail cadastrado, podendo baixar e começar a fatiar na mesma hora."
  },
  {
    id: "faq-5",
    question: "ESSES ARQUIVOS SÃO TESTADOS E TÊM GARANTIA DE IMPRESSÃO?",
    answer: "Sim! A biblioteca foi rigorosamente inspecionada. Os arquivos contam com malha fechada (sem vértices abertos ou erros de geometria), espessuras de parede ideais e orientação testada para garantir impressões limpas e com excelente acabamento."
  },
  {
    id: "faq-6",
    question: "TODOS OS ARQUIVOS DA BIBLIOTECA TÊM FOTOS DE PREVIEW?",
    answer: "Sim! Cada modelo STL acompanha imagens de alta resolução do produto final impresso/renderizado. Você sabe exatamente o que vai imprimir antes mesmo de começar e pode utilizar as imagens para divulgar seus produtos e acelerar suas vendas."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-md sm:max-w-xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            DÚVIDAS FREQUENTES
          </h2>
          <div className="w-12 h-0.5 bg-emerald-500 rounded-full mx-auto mt-3" />
        </div>

        <div className="space-y-3 mb-10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#0A0A0D] border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  id={`faq-toggle-${item.id}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#10B981] flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <span className="font-heading font-black text-[11px] sm:text-xs text-white uppercase tracking-tight leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#10B981] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
