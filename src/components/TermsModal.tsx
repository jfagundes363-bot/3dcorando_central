import { X, Shield, FileText } from "lucide-react";

interface TermsModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export default function TermsModal({ type, onClose }: TermsModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-[#0D0D12] border border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl text-left overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            {type === 'terms' ? (
              <FileText className="w-5 h-5 text-[#00FF66]" />
            ) : (
              <Shield className="w-5 h-5 text-[#00FF66]" />
            )}
            <h3 className="font-heading font-black text-lg text-white">
              {type === 'terms' ? "Termos de Uso" : "Política de Privacidade"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed pr-1">
          {type === 'terms' ? (
            <>
              <p>
                <strong>1. Aceitação dos Termos:</strong> Ao adquirir e acessar a biblioteca RENDA 3D disponibilizada por @3dcorando_central, você concorda expressamente com os presentes termos.
              </p>
              <p>
                <strong>2. Licença e Direitos de Uso:</strong> Os arquivos digitais são concedidos sob licença pessoal e comercial para produção física. Você tem permissão para imprimir e comercializar as peças físicas geradas a partir dos arquivos STL. É expressamente proibida a revenda, rateio, redistribuição ou compartilhamento não autorizado dos arquivos digitais brutos (.STL/.OBJ).
              </p>
              <p>
                <strong>3. Entrega e Acesso Vitalício:</strong> O acesso é disponibilizado por meio de links protegidos no Google Drive ou plataforma de membros, enviados para o e-mail e WhatsApp cadastrados pelo adquirente no momento da compra.
              </p>
              <p>
                <strong>4. Garantia e Cancelamento:</strong> Oferecemos 7 dias corridos de garantia incondicional conforme o Código de Defesa do Consumidor. Caso solicite o cancelamento dentro deste período, o valor integral será reembolsado.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Coleta de Informações:</strong> Coletamos apenas os dados estritamente necessários para a entrega imediata do seu acesso digital (Nome, E-mail e Número de WhatsApp).
              </p>
              <p>
                <strong>2. Uso das Informações:</strong> Seus dados cadastrais são utilizados única e exclusivamente para envio dos links de download, confirmação do pedido e suporte técnico via WhatsApp ou e-mail.
              </p>
              <p>
                <strong>3. Segurança e Sigilo:</strong> Não compartilhamos, vendemos ou alugamos suas informações pessoais com quaisquer terceiros. Todas as transações financeiras são processadas por gateways de pagamento criptografados com certificado SSL.
              </p>
              <p>
                <strong>4. Contato do Encarregado:</strong> Para qualquer solicitação de exclusão ou atualização dos seus dados, entre em contato via Instagram oficial @3dcorando_central.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
