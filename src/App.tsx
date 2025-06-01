import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyItMattersSection from './components/WhyItMattersSection';
import TimelineSection from './components/TimelineSection';
import TestimonialsSection from './components/TestimonialsSection';
import SponsorsSection from './components/SponsorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

function App() {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="font-sans relative bg-dark">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ff6b00",
            },
            links: {
              color: "#ff6b00",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.2,
            },
          },
        }}
        className="fixed inset-0 -z-10"
      />

      <Header />
      <HeroSection />
      <AboutSection />
      <WhyItMattersSection />
      <TimelineSection />
      {/* <TestimonialsSection /> */}
      {/* <SponsorsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;