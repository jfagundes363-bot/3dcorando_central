import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import TargetAudience from "./components/TargetAudience";
import RelatosCarousel from "./components/RelatosCarousel";
import ValoresMercadoSection from "./components/ValoresMercadoSection";
import SecurePurchaseSection from "./components/SecurePurchaseSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";
import DownsellModal from "./components/DownsellModal";
import TermsModal from "./components/TermsModal";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<'basico' | 'premium' | null>(null);
  const [showDownsell, setShowDownsell] = useState(false);
  const [activeTerms, setActiveTerms] = useState<'terms' | 'privacy' | null>(null);
  const [hasInteractedWithOffer, setHasInteractedWithOffer] = useState(false);

  const handleSelectPlan = (plan: 'basico' | 'premium') => {
    setSelectedPlan(plan);
    setHasInteractedWithOffer(true);
    try {
      sessionStorage.setItem('hasInteractedWithOffer', 'true');
    } catch {
      // ignore
    }
  };

  // Flag that user entered checkout
  const handleGoToCheckout = () => {
    try {
      sessionStorage.setItem('enteredCheckout', 'true');
      sessionStorage.setItem('hasInteractedWithOffer', 'true');
      setHasInteractedWithOffer(true);
    } catch {
      // ignore
    }
  };

  // Detect when user returns from checkout -> immediately show downsell pop-up
  useEffect(() => {
    const handleReturnFromCheckout = () => {
      try {
        const entered = sessionStorage.getItem('enteredCheckout');
        if (entered === 'true') {
          sessionStorage.removeItem('enteredCheckout');
          setSelectedPlan(null);
          setShowDownsell(true);
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('focus', handleReturnFromCheckout);
    window.addEventListener('pageshow', handleReturnFromCheckout);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleReturnFromCheckout();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleReturnFromCheckout);
      window.removeEventListener('pageshow', handleReturnFromCheckout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Show pop-up when user clicks "X" after having clicked the card to see the offer
  const handleClosePlanModal = () => {
    setSelectedPlan(null);
    setShowDownsell(true);
  };

  // Exit intent: also show pop up if user interacted with the offer and moves mouse to exit
  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        try {
          const interacted = 
            hasInteractedWithOffer || 
            sessionStorage.getItem('hasInteractedWithOffer') === 'true' ||
            sessionStorage.getItem('enteredCheckout') === 'true';

          if (interacted) {
            sessionStorage.removeItem('enteredCheckout');
            setSelectedPlan(null);
            setShowDownsell(true);
          }
        } catch {
          // ignore
        }
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [hasInteractedWithOffer]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#10B981] selection:text-black font-sans antialiased">
      <main className="pb-16 sm:pb-24">
        {/* Hero Section */}
        <Hero onSelectPlan={handleSelectPlan} />

        {/* Categories Section with infinite horizontal marquee */}
        <CategoriesSection />

        {/* Who is this for? */}
        <TargetAudience />

        {/* 9:16 Stories / Testimonials Carousel */}
        <RelatosCarousel />

        {/* Veja os valores praticados no mercado */}
        <ValoresMercadoSection />

        {/* Secure Purchase / Venda Segura Section */}
        <SecurePurchaseSection />

        {/* Pricing Plans & Bonuses */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onGoToCheckout={handleGoToCheckout}
        />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Footer */}
        <Footer
          onOpenTerms={() => setActiveTerms('terms')}
          onOpenPrivacy={() => setActiveTerms('privacy')}
        />
      </main>

      {/* Checkout Modal (Plano Básico ou Plano Premium) */}
      <CheckoutModal
        plan={selectedPlan}
        onClose={handleClosePlanModal}
        onGoToCheckout={handleGoToCheckout}
      />

      {/* Downsell Pop-up (R$ 19,90 com imagem ao clicar em X para voltar à página) */}
      <DownsellModal
        isOpen={showDownsell}
        onClose={() => setShowDownsell(false)}
      />

      {/* Legal Terms & Privacy Policy Modal */}
      <TermsModal
        type={activeTerms}
        onClose={() => setActiveTerms(null)}
      />
    </div>
  );
}
