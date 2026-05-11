/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AboutHayce } from "./components/AboutHayce";
import { Process } from "./components/Process";
import { ExpandingImageSegment } from "./components/ExpandingImageSegment";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-brand-bg min-h-screen selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutHayce />
      <Features />
      <Process />
      <ExpandingImageSegment />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
