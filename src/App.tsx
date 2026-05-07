/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Hero from './components/sections/Hero';
import ShowcaseCarousel from './components/sections/ShowcaseCarousel';
import SolutionsOverview from './components/sections/SolutionsOverview';
import HowEngagementsWork from './components/sections/HowEngagementsWork';
import WhyAmbot365 from './components/sections/WhyAmbot365';
import WhyAmbotProducts from './components/sections/WhyAmbotProducts';

import StickyFooter from './components/ui/StickyFooter';
import Navbar from './components/layout/Navbar';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import { ThemeProvider } from './contexts/ThemeContext';
import Separator from './components/ui/Separator';

const getCurrentRoute = () => {
  const hash = window.location.hash.replace('#', '');
  return hash || '/';
};

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-primary-500/30">
        <Navbar currentRoute={route} />
        <main>
          <Hero />
          <Separator />
          <SolutionsOverview />
          <Separator />
          <ShowcaseCarousel />
          <Separator />
          <WhyAmbotProducts />
          <Separator />
          <HowEngagementsWork />
          <Separator />
          <WhyAmbot365 />
        </main>
        <StickyFooter />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
