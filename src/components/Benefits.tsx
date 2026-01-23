import { siteData } from '@/data/siteData';
import { Star } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="benefits-section py-24 bg-primary text-white relative z-10" id="benefits">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Memorial Program <span className="text-accent italic">Benefits</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              We ensure our members receive the comprehensive care and flexibility they deserve with these exclusive advantages.
            </p>
            <div className="w-20 h-1 bg-accent mb-8"></div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {siteData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <span className="font-medium tracking-wide text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
