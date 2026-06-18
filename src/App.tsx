/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandTicker } from './components/BrandTicker';
import { Testimonials } from './components/Testimonials';
import { StatsFeatures } from './components/StatsFeatures';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <Testimonials />
        <StatsFeatures />
      </main>
      <Footer />
    </div>
  );
}
