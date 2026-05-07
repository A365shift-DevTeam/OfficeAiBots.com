import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Square, Volume2, Database, Clock, CheckCircle2 } from 'lucide-react';
import botLogo from '../../assets/Ambot logo png.png';
import worldMap from '../../assets/World Map.png';
import heroAudio from '../../assets/Voices/Hero Section.mp3';
import CardSwap, { Card } from './CardSwap';

const TYPING_TEXTS = [
  'Deployed in Days',
  'run Securely in your network',
  'Monitor 24/7',
];
const TYPING_SPEED_MS = 85;
const DELETING_SPEED_MS = 40;
const CURSOR_BLINK_MS = 530;
const PAUSE_AFTER_TYPING_MS = 2500;
const PAUSE_BEFORE_RETYPE_MS = 400;

const AGENTS = [
  { name: 'Office AI Bots', label: 'BOT', stat: '~95%', statLabel: 'AUTOMATION RATE', desc: 'Secure Excel & PowerPoint desktop automation for consolidation, reporting, certificates, image compression, and bulk processing.', stack: 'Excel • PowerPoint • Offline • Secure', lastRun: 'Last Run Today 09:15 AM', status: '0 pending tasks', live: true },
  { name: 'Business Hub (CRM)', label: 'CRM', stat: '~90%', statLabel: 'BUSINESS TRACKING', desc: 'Manage leads, customers, projects, payments, follow-ups, and sales pipelines from one centralized business dashboard.', stack: 'Sales • Projects • Finance • CRM', lastRun: 'Updated Today 10:45 AM', status: '12 active leads', live: true },
  { name: 'AI Chatbots', label: '24/7', stat: '~24/7', statLabel: 'CUSTOMER SUPPORT', desc: 'AI-powered chatbots for website and WhatsApp support, lead capture, appointment booking, and customer engagement.', stack: 'WhatsApp • Website • AI • Support', lastRun: 'Active Today 08:30 AM', status: '35 customer interactions', live: true },
  { name: 'Premium Websites', label: 'Website', stat: '~3D', statLabel: 'PREMIUM EXPERIENCE', desc: 'Mac-like scrolling websites with smooth animations, premium UI, landing pages, and conversion-focused digital experiences.', stack: '3D Scroll • UI/UX • SEO • Branding', lastRun: 'Live Performance Today', status: '99.9% uptime', live: true },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll();
  const [typed, setTyped] = useState(reduceMotion ? TYPING_TEXTS[0] : '');
  const [cursorOn, setCursorOn] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlayingAudio(false);
    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }
    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlayingAudio) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlayingAudio(false);
      } else {
        audioRef.current.play();
        setIsPlayingAudio(true);
      }
    }
  };

  useEffect(() => {
    if (reduceMotion) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let currentTextIndex = 0;

    const runTypingCycle = () => {
      const currentText = TYPING_TEXTS[currentTextIndex];
      setTyped('');

      timeoutId = setTimeout(() => {
        let i = 0;
        intervalId = setInterval(() => {
          i += 1;
          setTyped(currentText.slice(0, i));
          if (i >= currentText.length) {
            clearInterval(intervalId);
            timeoutId = setTimeout(() => {
              let j = currentText.length;
              intervalId = setInterval(() => {
                j -= 1;
                setTyped(currentText.slice(0, j));
                if (j === 0) {
                  clearInterval(intervalId);
                  currentTextIndex = (currentTextIndex + 1) % TYPING_TEXTS.length;
                  runTypingCycle();
                }
              }, DELETING_SPEED_MS);
            }, PAUSE_AFTER_TYPING_MS);
          }
        }, TYPING_SPEED_MS);
      }, PAUSE_BEFORE_RETYPE_MS);
    };

    runTypingCycle();
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setCursorOn((c) => !c), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-20 bg-gradient-to-r from-[#EDEEF3] to-[#FFFFFF] dark:from-gray-900 dark:to-gray-950">
      {/* Soft gradient orbs - subtle enterprise motion (respects reduced motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#4C99A0]/20 dark:bg-[#4C99A0]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-[#65A859]/15 dark:bg-[#65A859]/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-[#4C99A0]/10 dark:bg-[#4C99A0]/5 blur-3xl" />
        {/* World Map background */}
        <div
          className="absolute inset-0 opacity-90 dark:opacity-80 pointer-events-none"
          style={{
            backgroundImage: `url(${worldMap})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>



      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:mt-0.5">

          <div className="w-full -mt-8 lg:-mt-20 mb-8 lg:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold tracking-tight mb-3 leading-[1.15]" style={{ fontFamily: "var(--font-hero)" }}
            >
              <span className="text-[#002060] dark:text-white block text-4xl sm:text-5xl lg:text-6xl xl:text-[3rem]">Build Once. Run Forever.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl font-medium text-[#002060]/75 dark:text-white/75 mb-4 leading-snug"
              style={{ fontFamily: "'Dubai', sans-serif" }}
            >
              OfficeAiBot | CRM | Chat Bot | Websites
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl min-h-[1.75rem] mb-8 flex items-center"
            >
              <span className="text-[#002060] dark:text-white mr-2 font-semibold">Our Products</span>
              <span className="bg-gradient-to-r from-[#4C99A0] to-[#65A859] bg-clip-text text-transparent">{typed}</span>
              {!reduceMotion && (
                <span
                  className="inline-block w-0.5 h-[1em] align-middle bg-[#4C99A0] ml-0.5 transition-opacity duration-75"
                  style={{ opacity: cursorOn ? 1 : 0 }}
                  aria-hidden
                />
              )}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8"
          >
            We <strong>B</strong>uild It .
            You <strong>O</strong>perate It .
            <strong> T</strong>ransformation begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=WZzF509j40eO7Re393kk8KIi7ZBJxRtIkfvxr0U5Lh1UOFg1OEdORUpOMEVKUzczV1FKSkExWjU5UC4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4C99A0] to-[#65A859] text-white rounded-2xl font-medium flex items-center justify-center gap-2 group shadow-lg shadow-[#4C99A0]/25"
              whileHover={{ scale: 1.02, y: -2, boxShadow: '0 20px 40px -12px rgba(76, 153, 160, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Listen to Intro
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <audio ref={audioRef} src={heroAudio} />
          </motion.div>


        </div>

        {/* Right Column: Card Swap */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[420px] sm:h-[500px] relative mt-20 lg:mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4C99A0]/5 via-transparent to-[#65A859]/5 rounded-3xl blur-2xl" />
          <div className="relative z-10">
            <CardSwap width={380} height={400} pauseOnHover={true} visibleStack={4}>
              {AGENTS.map((agent, i) => (
                <Card
                  key={agent.name}
                  customClass="section-card p-6 !w-full !h-full border-2 border-gray-200 dark:border-gray-800 !bg-white dark:!bg-[#0B0F19] hover:border-[#4C99A0]/50 dark:hover:border-[#65A859]/50 transition-all duration-300 group !items-start !justify-start text-left shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between w-full mb-4">
                    <h3 className="text-lg text-gray-900 dark:text-gray-100">{agent.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#4C99A0] to-[#65A859] text-white text-xs font-semibold shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      {agent.label}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl bg-gradient-to-r from-[#4C99A0] to-[#65A859] bg-clip-text text-transparent mb-1">{agent.stat}</p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{agent.statLabel}</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-left w-full leading-relaxed">{agent.desc}</p>
                  <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Database className="w-4 h-4 text-[#4C99A0] dark:text-[#65A859]" />
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">{agent.stack}</p>
                  </div>
                  <div className="mt-auto w-full">
                    <div className="flex items-center w-full text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{agent.lastRun}</span>
                      </div>
                    </div>
                    <button className="mt-3 w-full py-2.5 text-sm font-semibold bg-gradient-to-r from-[#4C99A0] to-[#65A859] text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      <CheckCircle2 className="w-4 h-4" /> {agent.status}
                    </button>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
