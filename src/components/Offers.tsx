import { siteData } from '@/data/siteData';
import { CheckCircle2 } from 'lucide-react';

export default function Offers() {
  return (
    <section className="offers-section py-20 bg-base-100 relative z-10" id="services">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[30px] p-10 md:p-16 shadow-lg border border-black/5 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Comprehensive Care</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">What We Offer</h2>
              <p className="text-base-content/70 leading-relaxed mb-8">
                Beyond our memorial plans, we provide a complete range of services to support you during difficult times, ensuring dignity and peace of mind every step of the way.
              </p>
              <div className="hidden md:block w-16 h-1 bg-accent rounded-full"></div>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {siteData.offers.map((offer, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-base-content/80 font-medium group-hover:text-primary transition-colors">{offer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
