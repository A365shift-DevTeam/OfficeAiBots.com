import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, MinusCircle, TrendingUp, Monitor, Terminal, RotateCcw } from 'lucide-react';
import ProcessAnimationCard from '../ui/ProcessAnimationCard';
import WebMobileAnimation from '../ui/WebMobileAnimation';
import ChatbotPreview from '../ui/ChatbotPreview';
import ProductsAnimation from '../ui/ProductsAnimation';

// Videos
import biVideo from '../../assets/Videos/BI.mp4';
import excelVideo from '../../assets/Videos/Excel.mp4';
import pb1 from '../../assets/Power BI images/pic1.png';
import pb2 from '../../assets/Power BI images/Picture2.png';
import pb3 from '../../assets/Power BI images/Picture3.png';
import pb4 from '../../assets/Power BI images/Power-BI-web-2025-Dashboard.png';
import ex1 from '../../assets/Excel image/Excel img 1.png';
import ex2 from '../../assets/Excel image/excel img 2.png';
import productImg from '../../assets/Product img.png';

// Website GIFs
import gifCar from '../../assets/Website gif/Car.gif';
import gifHome from '../../assets/Website gif/Home.gif';
import gifJwelery from '../../assets/Website gif/Jwelery.gif';
import gifPerfume from '../../assets/Website gif/Perfume.gif';
import gifPC from '../../assets/Website gif/PC.gif';

type TabItem = {
  id: string;
  label: string;
  isSpecial?: boolean;
  badge?: string;
};

const TABS: TabItem[] = [
  { id: 'schedule', label: 'CRM' },
  { id: 'chatbot', label: 'Chatbot' },
  { id: 'websites', label: 'Websites' },
  { id: 'compliance', label: 'Products' },
];

type Comparison = {
  leftLabel: string;
  leftItems: string[];
  rightLabel: string;
  rightItems: string[];
};

type MockupItem = {
  color: string;
  title: string;
  header: string;
  oneLine: string;
  pages: number;
  type: 'mock' | 'image' | 'iframe' | 'chatbot' | 'video' | 'mixed' | 'animation';
  images?: string[];
  video?: string;
  iframeUrl?: string;
  agentName: string;
  whatItDoes: string[];
  outcome: {
    text: string;
    footer?: string;
  };
  comparison?: Comparison;
  features?: { title: string; desc: string }[];
};

const MOCKUP_DATA: Record<string, MockupItem> = {
  schedule: {
    color: 'from-primary-100 to-accent-100',
    title: 'Business Hub (CRM)',
    header: 'Business Hub (CRM)',
    oneLine: 'Business Hub is a centralized CRM and operations platform for managing leads, customers, projects, finance, and reporting. Built for growing businesses that need complete operational visibility from enquiry to payment.',
    pages: 1,
    type: 'mock',
    agentName: 'Business Hub CRM',
    whatItDoes: [
      'Leads',
      'Contacts',
      'Companies',
      'Projects',
      'Tasks',
      'Finance',
      'Reports',
      'Dashboard',
    ],
    outcome: {
      text: 'Complete operational visibility from enquiry to payment — manage your entire business from a single, unified dashboard.',
      footer: 'CRM · Projects · Finance · Reports · Dashboard',
    },
    comparison: {
      leftLabel: 'Traditional Management',
      leftItems: ['Multiple Excel sheets', 'Manual tracking', 'Disconnected tools', 'Delayed reporting', 'No centralized visibility'],
      rightLabel: 'Business Hub (CRM)',
      rightItems: ['Single business dashboard', 'Real-time tracking', 'Centralized operations', 'Smart reporting', 'Better decision making'],
    },
    features: [
      { title: 'Smart CRM', desc: 'Track customers, leads, and sales pipelines.' },
      { title: 'Operations Tracking', desc: 'Manage projects, tasks, and activities.' },
      { title: 'Finance Visibility', desc: 'Track invoices, payments, and performance.' },
      { title: 'Real-Time Dashboard', desc: 'Complete business visibility instantly.' },
      { title: 'AI Insights', desc: 'Monitor sales trends and performance.' },
      { title: 'Improved Productivity', desc: 'Reduce manual coordination.' },
    ],
  },
  attendance: {
    color: 'from-accent-100 to-accent-100',
    title: 'BI Dashboards',
    header: 'Real-Time Business Intelligence',
    oneLine: 'Turn data into insights with interactive dashboards and AI-driven analytics.',
    pages: 5,
    type: 'mixed',
    video: biVideo,
    images: [pb1, pb2, pb3, pb4],
    agentName: 'BI Analytics Agent',
    whatItDoes: [
      'AI-powered conversational reporting',
      'Real-time dashboards with auto-refresh',
      'Smart insights & automated narratives',
      'Interactive filters & drilldowns',
      'KPI tracking with advanced analytics',
    ],
    outcome: {
      text: 'Data moves from static reports to real-time decision intelligence. Gain instant visibility, faster insights, and improved business performance with interactive, AI-driven analytics that scale across the organization.',
      footer: 'Power BI · Azure AI · Real-time Analytics',
    },
  },
  payroll: {
    color: 'from-white to-white',
    title: 'Excel Automation',
    header: 'Excel Automation Solutions',
    oneLine: 'Transform spreadsheets into automated dashboards, reports, and decision systems.',
    pages: 3,
    type: 'mixed',
    video: excelVideo,
    images: [ex1, ex2],
    agentName: 'Excel Automation Agent',
    whatItDoes: [
      'Data consolidation into unified Excel dashboard',
      'Interactive slicers for real-time analysis',
      'Dynamic KPI cards with live metrics',
      'Auto-refresh dashboards from backend data',
      'One-click report generation (PPT, PDF)',
    ],
    outcome: {
      text: 'Raw Excel data transforms into a fully automated, interactive reporting system. Gain real-time insights, generate reports instantly, and make faster, data-driven decisions without complex BI tools.',
      footer: 'Microsoft 365 · VBA · Office Scripts · Power Automate',
    },
  },
  compliance: {
    color: 'from-white to-white',
    title: 'Office AI Bots',
    header: 'Office AI Bots',
    oneLine: 'Secure desktop automation platform for Excel and PowerPoint operations with zero coding. Office AI Bots help businesses automate consolidation, reporting, certificates, image compression, bulk processing, and repetitive office tasks securely inside their own system.',
    pages: 1,
    type: 'animation',
    agentName: 'Office AI Bots',
    whatItDoes: [
      'Consolidation Bot',
      'File Splitter',
      'Merge Master',
      'Image Compressor',
      'DocCraft',
      'Certificate Generator',
      'AI Insights Reports',
    ],
    outcome: {
      text: 'Repetitive office tasks are fully automated — consolidation, reporting, certificates, and bulk processing run securely inside your own system with zero coding required.',
      footer: 'Consolidation Bot · DocCraft · Image Compressor · File Splitter · Merge Master',
    },
    comparison: {
      leftLabel: 'AI Tools',
      leftItems: ['Internet required', 'Token limitations', 'Cloud dependency', 'Limited large-volume processing', 'Data exposure concerns'],
      rightLabel: 'Office AI Bots',
      rightItems: ['Offline desktop execution', 'Secure local processing', 'Handles large Excel files', 'Zero-code automation', 'Faster execution'],
    },
    features: [
      { title: 'Secure Processing', desc: 'Your files remain inside your own network.' },
      { title: 'Large Volume Handling', desc: 'Supports lakh-level rows and bulk Excel.' },
      { title: 'Zero Coding', desc: 'Automate without technical skills.' },
      { title: 'Faster Execution', desc: 'Reduces manual effort and saves time.' },
      { title: 'Lightweight Application', desc: 'Runs without heavy infrastructure.' },
      { title: 'Cost Effective', desc: 'No recurring token-based AI cost.' },
    ],
  },
  webmobile: {
    color: 'from-blue-50 to-indigo-50',
    title: 'Web & Mobile Applications',
    header: 'Modern Web & Mobile Applications',
    oneLine: 'Scalable, high-performance apps built for seamless user experience and growth.',
    pages: 1,
    type: 'iframe',
    iframeUrl: 'https://resturant-poc-kohl.vercel.app/',
    agentName: 'Web & Mobile Solutions',
    whatItDoes: [
      'Custom web apps (React, Next.js)',
      'Cross-platform mobile apps (iOS & Android)',
      'API development & system integrations',
      'Real-time dashboards & data-driven UI',
      'Scalable cloud deployment & architecture',
    ],
    outcome: {
      text: 'Businesses launch modern, scalable applications faster with high performance and seamless user experience. From concept to production, solutions are delivered in weeks—enabling faster growth, better engagement, and long-term scalability.',
      footer: 'React · Next.js · React Native · Azure · REST APIs',
    },
  },
  chatbot: {
    color: 'from-cyan-50 to-emerald-50',
    title: 'AI Chatbots',
    header: 'AI Chatbots',
    oneLine: 'AI-powered chatbots for websites and WhatsApp that automate customer support, lead capture, and communication workflows. Designed to improve customer engagement and reduce manual support effort.',
    pages: 1,
    type: 'chatbot',
    agentName: 'AI Chatbots',
    whatItDoes: [
      'Website Chatbot',
      'WhatsApp Bot',
      'FAQ Bot',
      'Lead Capture Bot',
      'Booking Assistant',
    ],
    outcome: {
      text: 'Customer support becomes instant and always-on. Automate lead capture, reduce manual effort, and engage visitors 24/7 across website and WhatsApp.',
      footer: 'Website Chatbot · WhatsApp Bot · Lead Capture · Booking',
    },
    comparison: {
      leftLabel: 'Traditional Support',
      leftItems: ['Delayed responses', 'Limited support hours', 'Manual lead handling', 'High support workload', 'Missed enquiries'],
      rightLabel: 'AI Chatbots',
      rightItems: ['Instant responses', '24/7 support', 'Automated lead capture', 'Website & WhatsApp integration', 'Faster customer engagement'],
    },
    features: [
      { title: '24/7 Customer Support', desc: 'Respond to customers anytime automatically.' },
      { title: 'Lead Capture', desc: 'Convert website visitors into business leads.' },
      { title: 'Omnichannel Support', desc: 'Connect through website and WhatsApp.' },
      { title: 'Automation Workflows', desc: 'Automate follow-ups and interactions.' },
      { title: 'CRM Integration', desc: 'Push leads directly into Business Hub.' },
      { title: 'Reduced Support Cost', desc: 'Lower dependency on manual teams.' },
    ],
  },
  websites: {
    color: 'from-emerald-50 to-teal-50',
    title: 'Premium Websites',
    header: 'Premium Websites',
    oneLine: 'Premium scrolling websites with modern UI/UX, 3D animations, and conversion-focused storytelling. Designed for businesses that want a premium digital presence and better customer engagement.',
    pages: 5,
    type: 'image',
    images: [gifHome, gifCar, gifJwelery, gifPerfume, gifPC],
    agentName: 'Premium Websites',
    whatItDoes: [
      'Corporate Websites',
      'Product Websites',
      'Landing Pages',
      'Startup Websites',
      'AI Product Sites',
    ],
    outcome: {
      text: 'Your business gets a premium digital presence with 3D animations, modern UI/UX, and conversion-focused storytelling that drives real engagement and measurable growth.',
      footer: 'Corporate · Product · Landing Pages · Startup · AI Product Sites',
    },
    comparison: {
      leftLabel: 'Basic Websites',
      leftItems: ['Static layouts', 'Generic design', 'Limited interaction', 'Low engagement', 'Minimal storytelling'],
      rightLabel: 'Premium Websites',
      rightItems: ['3D scrolling experience', 'Smooth animations', 'Premium UI/UX', 'Modern storytelling', 'High-conversion layouts'],
    },
    features: [
      { title: 'Premium Design', desc: 'Modern interface with enterprise feel.' },
      { title: '3D Scroll Experience', desc: 'Interactive scrolling and transitions.' },
      { title: 'Conversion Focused', desc: 'Built for lead generation.' },
      { title: 'Mobile Responsive', desc: 'Optimized for all devices.' },
      { title: 'SEO Optimized', desc: 'Better visibility and search performance.' },
      { title: 'Strong Brand Presence', desc: 'Premium perception for your business.' },
    ],
  },
};

export default function ShowcaseCarousel() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const visualCardRef = useRef<HTMLDivElement | null>(null);
  const [visualCardHeight, setVisualCardHeight] = useState<number | null>(null);

  const activeData = MOCKUP_DATA[activeTab as keyof typeof MOCKUP_DATA];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      const currentData = MOCKUP_DATA[activeTab as keyof typeof MOCKUP_DATA];

      if (currentPage < currentData.pages) {
        setCurrentPage((prev) => prev + 1);
      } else {
        const currentTabIndex = TABS.findIndex((t) => t.id === activeTab);
        const nextTabIndex = (currentTabIndex + 1) % TABS.length;
        setActiveTab(TABS[nextTabIndex].id);
        setCurrentPage(1);
      }
    }, 4000); // 4 seconds per state

    return () => clearTimeout(timer);
  }, [isPlaying, activeTab, currentPage]);

  useEffect(() => {
    const syncRightPanelHeight = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop || !visualCardRef.current) {
        setVisualCardHeight(null);
        return;
      }
      setVisualCardHeight(visualCardRef.current.getBoundingClientRect().height);
    };

    syncRightPanelHeight();
    window.addEventListener('resize', syncRightPanelHeight);

    const observer = new ResizeObserver(syncRightPanelHeight);
    if (visualCardRef.current) {
      observer.observe(visualCardRef.current);
    }

    return () => {
      window.removeEventListener('resize', syncRightPanelHeight);
      observer.disconnect();
    };
  }, [activeTab, currentPage]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setCurrentPage(1);
    setIsFlipped(false);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 bg-[linear-gradient(135deg,#e8f5ee_0%,#f0faf4_30%,#f7fdfa_60%,#ffffff_100%)] dark:bg-none dark:bg-gray-950"
    >
      {/* Professional Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'rgba(59,130,246,0.08)' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">

        {/* Section Title */}
        <div className="text-center mb-8 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl mb-3 section-title"
          >
            Digital Solutions
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xs md:text-sm font-medium">
            Smart automation and real-time insights powering modern businesses.
          </p>
        </div>

        {/* Unified Card Container */}
        <div 
          className="relative max-w-[1400px] mx-auto bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col w-full"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >

          {/* Tabs Inside Card */}
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 p-3 md:p-4 lg:p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  relative px-4 py-2.5 md:px-5 md:py-3 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 overflow-hidden
                  flex-none min-w-[104px] md:min-w-[110px]
                  ${activeTab === tab.id
                    ? 'text-white shadow-lg shadow-[#4C99A0]/25'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }
                `}
              >
                {activeTab === tab.id && (
                  <>
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                    <motion.div
                      key={`fill-${tab.id}-${activeTab}`}
                      className="absolute inset-0 bg-gradient-to-r from-[#4C99A0] to-[#65A859]"
                      initial={{ clipPath: 'inset(0 100% 0 0)' }}
                      animate={{ clipPath: !isPlaying ? undefined : 'inset(0 0% 0 0)' }}
                      transition={{ duration: reduceMotion ? 0.01 : 4, ease: 'linear' }}
                    />
                  </>
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row w-full">
            {/* Left Side: 60% Dashboard Preview */}
            <div className="w-full lg:w-[60%] flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
              <div ref={visualCardRef} className="w-full h-full overflow-hidden relative bg-white dark:bg-gray-950 flex flex-col">
                {/* Top bar: Agent Name + LIVE badge */}
                <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-gray-50 dark:bg-[#0d1526] border-b border-gray-200 dark:border-gray-800 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4C99A0] to-[#65A859] flex items-center justify-center shadow-md">
                      <span className="text-white text-xs ">{activeData.header.charAt(0)}{activeData.header.split(' ')[1]?.charAt(0) || ''}</span>
                    </div>
                    <span className="text-sm font-semibold tracking-wide dark:text-white" style={{ color: '#002060' }}>{activeData.header}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Page dots */}
                    {activeData.pages > 1 && (
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: activeData.pages }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentPage === i + 1
                              ? 'w-5 bg-[#65A859]'
                              : 'w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                              }`}
                          />
                        ))}
                      </div>
                    )}
                    {/* Flip button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                        isFlipped
                          ? 'bg-[#0B1120] border-[#4C99A0]/40 text-[#4C99A0]'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#4C99A0]/50 hover:text-[#4C99A0]'
                      }`}
                    >
                      <RotateCcw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                      {isFlipped ? 'Preview' : 'Comparison'}
                    </button>
                  </div>
                </div>

                {/* Dashboard Image Area */}
                <div
                  className="relative w-full flex-auto bg-gray-50 dark:bg-[#0B1120]/50 cursor-pointer"
                  style={{ aspectRatio: '16/10', perspective: 1500 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <motion.div
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}>

                      <AnimatePresence mode="wait">
                        {activeData.type === 'mixed' && currentPage === 1 && activeData.video && (
                          <motion.video
                            key={`${activeTab}-mixed-video`}
                            src={activeData.video}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-contain p-3 md:p-5"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )}
                        {activeData.type === 'mixed' && currentPage > 1 && activeData.images && (
                          <motion.img
                            key={`${activeTab}-mixed-img-${currentPage}`}
                            src={activeData.images[currentPage - 2]}
                            alt={`${activeData.title} - View ${currentPage}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-contain p-3 md:p-5"
                          />
                        )}
                        {activeData.type === 'video' && activeData.video && (
                          <motion.video
                            key={`${activeTab}-video`}
                            src={activeData.video}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-contain p-3 md:p-5"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )}
                        {activeData.type === 'image' && activeData.images && (
                          <motion.img
                            key={`${activeTab}-${currentPage}`}
                            src={activeData.images[currentPage - 1]}
                            alt={`${activeData.title} - View ${currentPage}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-contain p-3 md:p-5"
                          />
                        )}
                        {activeData.type === 'animation' && (
                          <motion.div
                            key={`${activeTab}-animation`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-3 md:p-5"
                          >
                            <ProductsAnimation />
                          </motion.div>
                        )}
                        {activeData.type === 'mock' && (
                          <motion.div
                            key={`${activeTab}-mock`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 p-3 md:p-4 lg:p-6 bg-gray-50/50 dark:bg-gray-950/20 flex flex-col items-center justify-center"
                          >
                            <ProcessAnimationCard />
                          </motion.div>
                        )}
                        {activeData.type === 'chatbot' && (
                          <motion.div
                            key={`${activeTab}-chatbot`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                          >
                            <ChatbotPreview />
                          </motion.div>
                        )}
                        {activeTab === 'webmobile' && activeData.iframeUrl && (
                          <motion.div
                            key={`${activeTab}-webmobile`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                          >
                            <WebMobileAnimation url={activeData.iframeUrl} />
                          </motion.div>
                        )}
                        {activeData.type === 'iframe' && activeData.iframeUrl && activeTab !== 'webmobile' && (
                          <motion.div
                            key={`${activeTab}-iframe`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                          >
                            <iframe
                              src={activeData.iframeUrl}
                              title={activeData.title}
                              className="w-full h-full border-0"
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Carousel navigation arrows — only when multiple pages */}
                      {activeData.pages > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentPage(p => Math.max(1, p - 1)); }}
                            disabled={currentPage === 1}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-all disabled:opacity-30 shadow-md border border-gray-200 dark:border-gray-700"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentPage(p => Math.min(activeData.pages, p + 1)); }}
                            disabled={currentPage === activeData.pages}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-all disabled:opacity-30 shadow-md border border-gray-200 dark:border-gray-700"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* BACK — Comparison + Features */}
                    <div
                      className="absolute inset-0 w-full h-full bg-white dark:bg-gray-950 overflow-hidden flex flex-col"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      {activeData.comparison ? (
                        <div className="flex-1 overflow-y-auto flex flex-col">

                          {/* ── Comparison title header ── */}
                          <div className="grid grid-cols-[1fr_52px_1fr] shrink-0 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                            {/* Left label */}
                            <div className="px-4 md:px-5 py-3 flex items-center gap-2">
                              <MinusCircle className="w-4 h-4 text-red-400 shrink-0" />
                              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-gray-500 dark:text-gray-400 uppercase truncate">
                                {activeData.comparison.leftLabel}
                              </span>
                            </div>
                            {/* VS badge */}
                            <div className="flex items-center justify-center border-x border-gray-100 dark:border-gray-800">
                              <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 tracking-widest">VS</span>
                            </div>
                            {/* Right label */}
                            <div className="px-4 md:px-5 py-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#4C99A0] shrink-0" />
                              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#4C99A0] uppercase truncate">
                                {activeData.comparison.rightLabel}
                              </span>
                            </div>
                          </div>

                          {/* ── Comparison rows ── */}
                          <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
                            {Array.from({ length: Math.max(activeData.comparison.leftItems.length, activeData.comparison.rightItems.length) }).map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -6 }}
                                animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.15 + i * 0.07, duration: 0.28 }}
                                className="grid grid-cols-[1fr_52px_1fr]"
                              >
                                {/* Left cell */}
                                <div className="px-4 md:px-5 py-3 flex items-center gap-3 border-r border-gray-50 dark:border-gray-800">
                                  {activeData.comparison!.leftItems[i] ? (
                                    <>
                                      <MinusCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                      <span className="text-xs text-gray-400 dark:text-gray-500 leading-snug">
                                        {activeData.comparison!.leftItems[i]}
                                      </span>
                                    </>
                                  ) : null}
                                </div>
                                {/* Divider column */}
                                <div className="border-r border-gray-50 dark:border-gray-800" />
                                {/* Right cell */}
                                <div className="px-4 md:px-5 py-3 flex items-center gap-3">
                                  {activeData.comparison!.rightItems[i] ? (
                                    <>
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4C99A0] shrink-0" />
                                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                                        {activeData.comparison!.rightItems[i]}
                                      </span>
                                    </>
                                  ) : null}
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* ── Separator ── */}
                          {activeData.features && (
                            <div className="shrink-0 px-4 md:px-6 pt-4 pb-1">
                              <div className="h-px bg-gray-200 dark:bg-gray-700 rounded-full" />
                            </div>
                          )}

                          {/* ── Features & Benefits ── */}
                          {activeData.features && (
                            <div className="px-4 md:px-5 pt-2 pb-4 bg-[#4C99A0]/5 dark:bg-[#4C99A0]/10">
                              <p className="text-[10px] font-bold tracking-[0.2em] text-[#4C99A0] uppercase mb-3">
                                Features & Benefits
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {activeData.features.map((f, i) => (
                                  <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={isFlipped ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.06, duration: 0.25 }}
                                    className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2.5 border border-gray-100 dark:border-gray-700/60 border-l-[3px] border-l-[#4C99A0]"
                                  >
                                    <p className="text-[11px] font-bold text-[#4C99A0] leading-tight">{f.title}</p>
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug mt-1">{f.desc}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-300 dark:text-gray-700 text-sm">
                          No comparison available
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side: 40% — WHAT IT DOES + OUTCOME */}
            <div className="w-full lg:w-[40%] bg-white dark:bg-gray-900 grid" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700"
                  style={visualCardHeight ? { gridArea: '1 / 1', height: visualCardHeight, maxHeight: '100%' } : { gridArea: '1 / 1' }}
                >
                  {/* WHAT IT DOES */}
                  <div className="px-4 md:px-6 pt-5 md:pt-7 pb-2 flex-auto flex flex-col justify-start">
                    <div className="text-[10px] md:text-xs tracking-[0.2em] text-[#65A859] font-semibold uppercase mb-2 md:mb-3 mt-1">
                      Our Solution
                    </div>
                    <p className="text-[13px] md:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {activeData.oneLine}
                    </p>
                    
                    <ul className="space-y-1.5 md:space-y-2">
                      {activeData.whatItDoes.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.06 }}
                          className="flex items-start gap-2.5 group"
                        >
                          <div className="mt-0.5 shrink-0">
                            <CheckCircle2 className="w-4 h-4 md:w-[16px] md:h-[16px] text-[#65A859]" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-[11px] md:text-sm leading-snug md:leading-normal">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* OUTCOME */}
                  <div className="px-4 md:px-6 pb-4 md:pb-6 mt-auto shrink-0">
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#65A859]" />
                        <span className="text-[10px] md:text-xs tracking-[0.15em] text-[#65A859] uppercase">Outcome</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-snug md:leading-relaxed mb-1.5 md:mb-2">
                        {activeData.outcome.text}
                      </p>
                      {activeData.outcome.footer && (
                        <p className="text-[11px] text-gray-400 dark:text-gray-500 tracking-wide">
                          {activeData.outcome.footer}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
