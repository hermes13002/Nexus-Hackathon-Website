import React from 'react';
import { Lightbulb, Leaf, Cpu, Activity } from 'lucide-react';

const AboutSection: React.FC = () => {
  const themes = [
    { icon: <Lightbulb className="w-6 h-6 text-yellow-500" />, title: 'Energy', 
      description: "Build solutions that improve energy access, efficiency, and innovation. Tackle challenges like energy poverty, smart grids, renewable integration, storage, and decentralized energy systems. Whether it's clean cooking, solar tracking, or energy data analytics — your idea can power progress." 
    },
    { icon: <Leaf className="w-6 h-6 text-green-500" />, title: 'Sustainability', 
      description: 'Focus on projects that promote long-term environmental and social well-being. This includes waste management, circular economy solutions, water conservation, carbon tracking, green building systems, and climate resilience. Help create a world where tech and nature thrive together.' },
    { icon: <Cpu className="w-6 h-6 text-orange-500" />, title: ' Artificial Intelligence / Machine Learning (AI/ML)', 
      description: 'Leverage the power of intelligent systems to solve real-world challenges. Use AI and ML for data prediction, automation, personalization, or intelligent decision-making. Think chatbots, health diagnostics, fraud detection, smart recommendations, or energy usage forecasting — the possibilities are endless.' },
    { icon: <Activity className="w-6 h-6 text-red-500" />, title: 'Internet of Things (IoT)', 
      description: 'Connect the physical and digital worlds with smart devices and sensors. Build systems that collect and process real-time data to monitor, control, or automate environments. Ideas can range from smart farming and energy monitoring to home automation and industrial IoT applications.' },
    // { icon: <Activity className="w-6 h-6 text-red-500" />, title: 'Cybersecurity', 
    //   description: 'Protect the digital frontier with secure, resilient tech solutions. Develop tools or strategies that defend against cyber threats, enhance data privacy, or promote digital safety. Projects could include authentication systems, data encryption, threat detection, secure communication apps, or cyber-awareness tools.' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4 font-spacegrotesk">About the Hackathon</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-white-600 max-w-1x1 mx-auto font-opensans">
            {/* Nexus Hackathon 2.0 is a premier innovation challenge organized by the Society of Petroleum Engineers, 
            Lagos State University Chapter (SPE LASU). Our mission is to bring together the brightest young minds 
            to solve real-world problems through technology and innovation. */}
            The Nexus Hackathon 2.0 is a student-led innovation challenge hosted by the Society of Petroleum Engineers (SPE LASU). It brings together brilliant minds across Lagos State University to design, build, and pitch bold tech solutions addressing real-world problems.
            This hybrid hackathon encourages cross-disciplinary collaboration, creativity, and hands-on problem-solving in the fields of energy, sustainability, agriculture, and more. Whether you're a coder, a designer, or a big thinker — Nexus is where your ideas come alive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {themes.map((theme, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="rounded-full bg-white w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                {theme.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">{theme.title}</h3>
              <p className="text-sm text-gray-600 font-opensans">{theme.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Powered by SPE LASU</h3>
              <p className="text-gray-700 mb-4">
                The Society of Petroleum Engineers, Lagos State University Chapter is proud to present 
                Nexus Hackathon 2.0, continuing our commitment to fostering innovation and technical excellence 
                among students.
              </p>
              <p className="text-gray-700">
                This hackathon provides a platform for students to showcase their skills, collaborate with peers, 
                and receive mentorship from industry professionals while developing solutions that address real-world challenges.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-white font-bold">SPE</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">SPE LASU</h4>
                      <p className="text-gray-600">Empowering future leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;