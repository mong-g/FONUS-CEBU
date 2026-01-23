import { siteData } from '@/data/siteData';
import { Users, User } from 'lucide-react';

export default function Programs() {
  return (
    <section className="programs-section py-24 bg-base-200 relative z-10" id="programs">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Membership Programs</h2>
          <div className="divider w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {siteData.programs.map((program, index) => (
            <div key={index} className="program-card bg-white p-10 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {index === 0 ? <Users size={24} /> : <User size={24} />}
                </div>
                <h3 className="text-xl font-bold text-primary uppercase tracking-wide">{program.name}</h3>
              </div>
              
              <p className="text-sm font-semibold text-accent mb-6 uppercase tracking-wider">{program.description}</p>
              
              <ul className="space-y-4">
                {program.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base-content/80 text-sm leading-relaxed border-b border-dashed border-base-300 pb-3 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
