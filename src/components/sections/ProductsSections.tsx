import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Database, Zap, Clock, Package, TrendingDown,
  Users, FolderOpen, DollarSign, BarChart2, Brain, Activity,
  UserCheck, Globe, RefreshCw, Link2, HeadphoneOff,
  Layers, Sparkles, Target, Smartphone, Search, Star,
  XCircle, CheckCircle2,
  Bot, LayoutDashboard, MessageSquare, Globe2,
  WifiOff, Gauge, Code2, Lock,
  LayoutGrid, TrendingUp, Headphones, Award,
  MessageCircle, Zap as ZapIcon, Users2, GitMerge,
  Palette, Box, MousePointerClick, TabletSmartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Highlight {
  icon: LucideIcon;
  stat: string;
  label: string;
  desc: string;
}

interface Product {
  id: string;
  tabIcon: LucideIcon;
  badge: string;
  index: number;
  title: string;
  overview: string;
  includedLabel: string;
  included: string[];
  comparison: {
    leftLabel: string;
    leftItems: string[];
    rightLabel: string;
    rightItems: string[];
  };
  features: Feature[];
  highlights: Highlight[];
}

const PRODUCTS: Product[] = [
  {
    id: 'office-ai-bots',
    tabIcon: Bot,
    badge: 'DESKTOP AUTOMATION',
    index: 1,
    title: 'Office AI Bots',
    overview:
      'Secure desktop automation platform for Excel and PowerPoint operations with zero coding. Automate consolidation, reporting, certificates, image compression, and bulk processing — securely inside your own system.',
    includedLabel: 'BOTS INCLUDED',
    included: [
      'Consolidation Bot',
      'File Splitter',
      'Merge Master',
      'Image Compressor',
      'DocCraft',
      'Certificate Generator',
      'AI Insights Reports',
    ],
    comparison: {
      leftLabel: 'AI Tools',
      leftItems: [
        'Internet required',
        'Token limitations',
        'Cloud dependency',
        'Limited large-volume processing',
        'Data exposure concerns',
      ],
      rightLabel: 'Office AI Bots',
      rightItems: [
        'Offline desktop execution',
        'Secure local processing',
        'Handles large Excel files',
        'Lightweight application',
        'Zero-code automation',
        'Faster execution',
      ],
    },
    features: [
      { icon: Shield, title: 'Secure Processing', desc: 'Files stay inside your own network.' },
      { icon: Database, title: 'Large Volume', desc: 'Lakh-level rows and bulk Excel processing.' },
      { icon: Zap, title: 'Zero Coding', desc: 'Automate without technical skills.' },
      { icon: Clock, title: 'Faster Execution', desc: 'Reduces manual effort and time.' },
      { icon: Package, title: 'Lightweight App', desc: 'Runs without heavy infrastructure.' },
      { icon: TrendingDown, title: 'Cost Effective', desc: 'No token-based AI processing cost.' },
    ],
    highlights: [
      { icon: Lock, stat: '100%', label: 'Secure', desc: 'Your files stay in your system' },
      { icon: Gauge, stat: '95%', label: 'Faster', desc: 'Compared to manual work' },
      { icon: Code2, stat: 'Zero', label: 'Coding', desc: 'For business users' },
      { icon: WifiOff, stat: 'Works', label: 'Offline', desc: 'No internet dependency' },
    ],
  },
  {
    id: 'business-hub',
    tabIcon: LayoutDashboard,
    badge: 'CRM & OPERATIONS',
    index: 2,
    title: 'Business Hub (CRM)',
    overview:
      'Centralized CRM and operations platform for managing leads, customers, projects, finance, and reporting. Built for growing businesses that need complete operational visibility from enquiry to payment.',
    includedLabel: 'MODULES INCLUDED',
    included: [
      'Leads',
      'Contacts',
      'Companies',
      'Projects',
      'Tasks',
      'Finance',
      'Reports',
      'Dashboard',
    ],
    comparison: {
      leftLabel: 'Traditional Management',
      leftItems: [
        'Multiple Excel sheets',
        'Manual tracking',
        'Disconnected tools',
        'Delayed reporting',
        'No centralized visibility',
      ],
      rightLabel: 'Business Hub',
      rightItems: [
        'Single business dashboard',
        'Real-time tracking',
        'Centralized operations',
        'Smart reporting',
        'Better decision making',
      ],
    },
    features: [
      { icon: Users, title: 'Smart CRM', desc: 'Track customers, leads, and pipelines.' },
      { icon: FolderOpen, title: 'Ops Tracking', desc: 'Projects, tasks, and activities.' },
      { icon: DollarSign, title: 'Finance View', desc: 'Invoices, payments, performance.' },
      { icon: BarChart2, title: 'Live Dashboard', desc: 'Complete business visibility.' },
      { icon: Brain, title: 'AI Insights', desc: 'Sales trends and performance.' },
      { icon: Activity, title: 'Productivity', desc: 'Reduce manual coordination.' },
    ],
    highlights: [
      { icon: LayoutGrid, stat: '360°', label: 'Visibility', desc: 'Full business overview' },
      { icon: TrendingUp, stat: 'Real', label: 'Time Tracking', desc: 'Live data across modules' },
      { icon: Zap, stat: 'Zero', label: 'Manual Work', desc: 'Automated workflows' },
      { icon: BarChart2, stat: 'Smart', label: 'Reporting', desc: 'AI-powered insights' },
    ],
  },
  {
    id: 'ai-chatbots',
    tabIcon: MessageSquare,
    badge: 'CUSTOMER ENGAGEMENT',
    index: 3,
    title: 'AI Chatbots',
    overview:
      'AI-powered chatbots for websites and WhatsApp that automate customer support, lead capture, and communication workflows. Improve engagement and reduce manual support effort around the clock.',
    includedLabel: 'BOT TYPES',
    included: [
      'Website Chatbot',
      'WhatsApp Bot',
      'FAQ Bot',
      'Lead Capture Bot',
      'Booking Assistant',
    ],
    comparison: {
      leftLabel: 'Traditional Support',
      leftItems: [
        'Delayed responses',
        'Limited support hours',
        'Manual lead handling',
        'High support workload',
        'Missed enquiries',
      ],
      rightLabel: 'AI Chatbots',
      rightItems: [
        'Instant responses',
        '24/7 support',
        'Automated lead capture',
        'Website & WhatsApp',
        'Faster engagement',
      ],
    },
    features: [
      { icon: Clock, title: '24/7 Support', desc: 'Respond to customers anytime.' },
      { icon: UserCheck, title: 'Lead Capture', desc: 'Convert visitors into leads.' },
      { icon: Globe, title: 'Omnichannel', desc: 'Website and WhatsApp support.' },
      { icon: RefreshCw, title: 'Automation', desc: 'Automate follow-ups.' },
      { icon: Link2, title: 'CRM Sync', desc: 'Leads into Business Hub.' },
      { icon: HeadphoneOff, title: 'Lower Costs', desc: 'Less manual support.' },
    ],
    highlights: [
      { icon: Clock, stat: '24/7', label: 'Available', desc: 'Always-on customer support' },
      { icon: ZapIcon, stat: 'Instant', label: 'Response', desc: 'No wait times ever' },
      { icon: Users2, stat: 'Auto', label: 'Lead Capture', desc: 'Convert visitors instantly' },
      { icon: GitMerge, stat: 'Multi', label: 'Channel', desc: 'Web + WhatsApp unified' },
    ],
  },
  {
    id: 'premium-websites',
    tabIcon: Globe2,
    badge: 'DIGITAL PRESENCE',
    index: 4,
    title: 'Premium Websites',
    overview:
      'Premium scrolling websites with modern UI/UX, 3D animations, and conversion-focused storytelling. Built for businesses that demand a premium digital presence and measurably better customer engagement.',
    includedLabel: 'WEBSITE TYPES',
    included: [
      'Corporate Websites',
      'Product Websites',
      'Landing Pages',
      'Startup Websites',
      'AI Product Sites',
    ],
    comparison: {
      leftLabel: 'Basic Websites',
      leftItems: [
        'Static layouts',
        'Generic design',
        'Limited interaction',
        'Low engagement',
        'Minimal storytelling',
      ],
      rightLabel: 'Premium Websites',
      rightItems: [
        '3D scrolling experience',
        'Smooth animations',
        'Premium UI/UX',
        'Modern storytelling',
        'High-conversion layouts',
      ],
    },
    features: [
      { icon: Sparkles, title: 'Premium Design', desc: 'Enterprise-grade interface.' },
      { icon: Layers, title: '3D Scroll', desc: 'Interactive transitions.' },
      { icon: Target, title: 'Conversion', desc: 'Lead generation focused.' },
      { icon: Smartphone, title: 'Responsive', desc: 'All devices optimized.' },
      { icon: Search, title: 'SEO Ready', desc: 'Better search visibility.' },
      { icon: Star, title: 'Brand Presence', desc: 'Premium business perception.' },
    ],
    highlights: [
      { icon: Palette, stat: 'Premium', label: 'Design', desc: 'Enterprise-grade UI' },
      { icon: Box, stat: '3D', label: 'Animations', desc: 'Immersive scroll experience' },
      { icon: MousePointerClick, stat: 'High', label: 'Conversion', desc: 'Built to generate leads' },
      { icon: TabletSmartphone, stat: '100%', label: 'Responsive', desc: 'Every device, every screen' },
    ],
  },
];

const AUTO_INTERVAL_MS = 4000;

/* ─── Comparison table ─────────────────────────────────────────── */
function ComparisonTable({ leftLabel, leftItems, rightLabel, rightItems }: Product['comparison']) {
  const rowCount = Math.max(leftItems.length, rightItems.length);
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 text-sm">
      {/* Header */}
      <div className="grid grid-cols-[1fr_32px_1fr]">
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700">
          <XCircle className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[11px] font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase truncate">{leftLabel}</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-b border-x border-gray-100 dark:border-gray-700">
          <span className="text-[8px] font-black text-gray-400 dark:text-gray-500 tracking-widest">VS</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#4C99A0] shrink-0" />
          <span className="text-[11px] font-bold tracking-wider text-[#4C99A0] uppercase truncate">{rightLabel}</span>
        </div>
      </div>
      {/* Rows */}
      {Array.from({ length: rowCount }).map((_, i) => (
        <div key={i} className={`grid grid-cols-[1fr_32px_1fr] ${i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/50 dark:bg-gray-800/40'}`}>
          <div className="px-4 py-2.5 flex items-center gap-2.5 border-r border-gray-50 dark:border-gray-700/60">
            {leftItems[i] ? (
              <>
                <XCircle className="w-3 h-3 text-red-300 dark:text-red-700 shrink-0" />
                <span className="text-gray-400 dark:text-gray-500 line-through decoration-red-200 text-xs leading-snug">{leftItems[i]}</span>
              </>
            ) : <span className="text-gray-200 dark:text-gray-800">—</span>}
          </div>
          <div className="flex items-center justify-center border-r border-gray-50 dark:border-gray-700/60">
            <span className="w-px h-full bg-gray-100 dark:bg-gray-700/60" />
          </div>
          <div className="px-4 py-2.5 flex items-center gap-2.5">
            {rightItems[i] ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-[#4C99A0] shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs leading-snug">{rightItems[i]}</span>
              </>
            ) : <span className="text-gray-200 dark:text-gray-800">—</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Tab content ──────────────────────────────────────────────── */
function ProductContent({ product }: { product: Product }) {
  const num = String(product.index).padStart(2, '0');

  return (
    <div className="space-y-5">

      {/* ── Row 1: Hero left | Comparison right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Hero */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black text-[#4C99A0] tracking-widest">{num}</span>
              <span className="h-px w-5 bg-[#4C99A0]/40" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#4C99A0] uppercase">{product.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002060] dark:text-white leading-tight mb-3">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {product.overview}
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase mb-2">
            Side-by-Side Comparison
          </p>
          <ComparisonTable {...product.comparison} />
        </div>
      </div>

      {/* ── Row 2: Included left | Features right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Included */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#4C99A0] uppercase mb-4">
            {product.includedLabel}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {product.included.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-[#4C99A0]/40 hover:shadow-sm group transition-all duration-150 cursor-default"
              >
                <span className="text-[10px] font-black text-[#4C99A0]/50 tabular-nums w-4 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4C99A0] shrink-0 group-hover:scale-125 transition-transform duration-150" />
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight group-hover:text-[#4C99A0] transition-colors duration-150">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#4C99A0] uppercase mb-4">
            Features & Benefits
          </p>
          <div className="grid grid-cols-3 gap-3">
            {product.features.map((f) => (
              <div
                key={f.title}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-3 flex flex-col gap-2 border border-gray-100 dark:border-gray-700 hover:border-[#4C99A0]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default overflow-hidden"
              >
                {/* top accent bar */}
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#4C99A0] to-[#65A859] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4C99A0]/15 to-[#4C99A0]/5 dark:from-[#4C99A0]/25 dark:to-[#4C99A0]/10 group-hover:from-[#4C99A0]/25 group-hover:to-[#4C99A0]/10 flex items-center justify-center transition-all duration-200">
                  <f.icon className="w-4 h-4 text-[#4C99A0]" />
                </div>
                <p className="text-xs font-bold text-[#002060] dark:text-white leading-tight">{f.title}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Row 3: 4 highlights bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        {product.highlights.map((h) => (
          <div
            key={h.label}
            className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:border-[#4C99A0]/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default overflow-hidden"
          >
            {/* left accent */}
            <span className="absolute left-0 inset-y-0 w-0.5 bg-gradient-to-b from-[#4C99A0] to-[#65A859] opacity-0 group-hover:opacity-100 rounded-l-xl transition-opacity duration-200" />
            <div className="w-9 h-9 rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:shadow-md group-hover:bg-[#4C99A0]/5 flex items-center justify-center shrink-0 transition-all duration-200">
              <h.icon className="w-4 h-4 text-[#4C99A0]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#002060] dark:text-white leading-tight">
                {h.stat} <span className="text-[#4C99A0]">{h.label}</span>
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-tight">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ─── Main export ──────────────────────────────────────────────── */
export default function ProductsSections() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setActiveId((prev) => {
        const idx = PRODUCTS.findIndex((p) => p.id === prev);
        return PRODUCTS[(idx + 1) % PRODUCTS.length].id;
      });
    }, AUTO_INTERVAL_MS);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleTabClick = (id: string) => {
    setActiveId(id);
    startTimer();
  };

  const handleCardMouseEnter = () => { pausedRef.current = true; };
  const handleCardMouseLeave = () => { pausedRef.current = false; };

  return (
    <section id="products" className="py-20 bg-[#f2faf6] dark:bg-gray-950/50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-500 uppercase mb-3">Our Products</p>
          <h2 className="text-2xl md:text-4xl section-title">Built for Every Business Need</h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {PRODUCTS.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => handleTabClick(p.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C99A0]/50 bg-white dark:bg-gray-900 ${
                  isActive
                    ? 'border-[#4C99A0] text-[#4C99A0] dark:border-[#4C99A0] dark:text-[#4C99A0]'
                    : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#4C99A0]/40 hover:text-[#4C99A0]'
                }`}
              >
                <p.tabIcon className="w-4 h-4 shrink-0" />
                {p.title}
              </button>
            );
          })}
        </motion.div>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mb-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="h-1 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {p.id === activeId && (
                <motion.div
                  className="h-full bg-[#4C99A0] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTO_INTERVAL_MS / 1000, ease: 'linear' }}
                  key={activeId}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div
          className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <AnimatePresence mode="wait">
            {PRODUCTS.map((p) => p.id === activeId && (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductContent product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
