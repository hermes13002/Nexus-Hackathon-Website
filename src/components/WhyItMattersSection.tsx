import React from 'react';
import { Award, Users, Brain, Target } from 'lucide-react';

const WhyItMattersSection: React.FC = () => {
  const reasons = [
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: 'Networking',
      description: 'Connect with like-minded innovators, industry experts, and potential mentors who can help take your ideas to the next level.'
    },
    {
      icon: <Brain className="w-10 h-10 text-orange-600" />,
      title: 'Skill Development',
      description: 'Sharpen your technical, problem-solving, and teamwork abilities through real-world challenges and expert guidance.'
    },
    {
      icon: <Target className="w-10 h-10 text-orange-500" />,
      title: 'Real Impact',
      description: 'Create solutions for actual problems in energy, sustainability, agriculture, and technology that can positively impact communities.'
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: 'Recognition',
      description: 'Showcase your talents, gain visibility, and earn credentials that will distinguish you in academic and professional settings.'
    }
  ];

  return (
    <section id="why" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4 font-spacegrotesk">Why It Matters</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-white-600 max-w-3xl mx-auto font-opensans">
            Nexus Hackathon 2.0 is more than just a competition. It's a platform for youth-led innovation 
            that creates meaningful impact while developing the next generation of problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center font-poppins">{reason.title}</h3>
              <p className="text-gray-600 text-center font-opensans">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Empowering Youth Innovation</h3>
              <p className="text-orange-100 mb-4">
                We believe that today's students are tomorrow's innovators. Nexus Hackathon provides the 
                guidance, resources, and platform needed to transform creative ideas into viable solutions.
              </p>
              <p className="text-orange-100">
                Through mentorship, workshops, and hands-on experience, participants gain valuable skills 
                and insights that extend far beyond the event itself.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8 flex justify-center">
              <a
                href="https://forms.gle/z258wJh7Vas1W3ZF9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded-full font-medium transition-colors shadow-lg inline-block transform hover:scale-105 duration-200"
              >
                Join The Movement
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyItMattersSection;