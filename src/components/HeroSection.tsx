import React, { useEffect, useRef } from 'react';
// import { Cpu, Zap } from 'lucide-react';
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import type { Container, Engine } from "tsparticles-engine";
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const HeroSection: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // color: new THREE.Color().setRGB(1, 1, 1),
        maxDistance: 20.00,
        spacing: 15.0,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ minHeight: '100vh' }}
      />
      {/* <div className="absolute inset-0 bg-[url('/src/assets/hero.jpeg')] bg-cover bg-center opacity-40"></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-700 opacity-70 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            {/* <div className="flex items-center justify-center md:justify-start mb-4">
              <Cpu className="text-blue-300 w-10 h-10 mr-2 animate-pulse" />
              <Zap className="text-yellow-300 w-10 h-10 animate-bounce" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in font-spacegrotesk">
              Nexus Hackathon <span className="text-orange-500">2.0</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8 animate-slide-up font-opensans">
              Build the Future. Solve Real Problems.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
              <a
                href="https://forms.gle/z258wJh7Vas1W3ZF9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 font-spacegrotesk rounded-full font-medium transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl hover:glow relative overflow-hidden group"
              >
                <span className="relative z-10">Register Your Team</span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
              </a>
              {/* <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button> */}
            </div>
          </div>
          {/* <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl shadow-2xl overflow-hidden h-64 md:h-80 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMTI4LDEyOG0tMTAyLjQsMGExMDIuNCwxMDIuNCwwLDEsMSwxOTYuOCwxMC4yNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMTAgNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] bg-no-repeat bg-center bg-contain opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">July 12, 2024</h3>
                  <p className="text-blue-100">LASU Epe Campus</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white-900 font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              Organized by SPE LASU
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;