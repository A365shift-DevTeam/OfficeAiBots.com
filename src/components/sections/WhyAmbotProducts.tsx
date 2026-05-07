import { motion } from 'motion/react';
import { Shield, TrendingUp, Zap, DollarSign, Sparkles, LayoutGrid } from 'lucide-react';

const PILLARS = [
  { icon: Shield, title: 'Secure', desc: 'Your business data stays protected.' },
  { icon: TrendingUp, title: 'Scalable', desc: 'Built for growing businesses and enterprise operations.' },
  { icon: Zap, title: 'Zero Coding', desc: 'Easy-to-use platforms for business teams.' },
  { icon: DollarSign, title: 'Cost Effective', desc: 'Reduce operational effort and manual workload.' },
  { icon: Sparkles, title: 'Modern Experience', desc: 'Premium UI/UX with automation-driven execution.' },
  { icon: LayoutGrid, title: 'Unified Ecosystem', desc: 'Automation + CRM + Chatbots + Websites in one platform.' },
];

export default function WhyAmbotProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e8f5ee] via-[#f0faf4] to-[#f7fdfa] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase mb-3">
            The Ambot365 Advantage
          </p>
          <h2 className="text-2xl md:text-4xl section-title">Why Ambot365 Products?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md p-6 flex items-start gap-4 transition-smooth cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#4C99A0]/15 to-[#65A859]/15 dark:from-[#4C99A0]/25 dark:to-[#65A859]/25 flex items-center justify-center shrink-0">
                <pillar.icon className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#002060] dark:text-white mb-1">{pillar.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
