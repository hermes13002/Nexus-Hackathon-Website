import React, { useState } from 'react';
import { Calendar, Users, CheckCircle, Award, MapPin } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const timelineSteps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Registration",
      date: "June 1 – June 14",
      description: "Form your team and register to participate in Nexus Hackathon 2.0.",
      color: "bg-orange-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proposal Review",
      date: "June 15 – 19",
      description: "Our panel of experts will review submitted proposals and select teams to move forward.",
      color: "bg-orange-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Project Refinement",
      date: "June 20 – 30",
      description: "Selected teams will refine their projects with guidance from mentors.",
      color: "bg-orange-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Online Judging",
      date: "July 1",
      description: "Projects will be evaluated by our panel of judges based on innovation, feasibility, and impact.",
      color: "bg-orange-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Final Presentation",
      date: "July 12",
      description: "Finalists will present their projects at Army Hall, LASU Epe Campus.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4 font-spacegrotesk">Event Timeline</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-white-600 max-w-3xl mx-auto font-opensans">
            From registration to the final presentation, here's your roadmap to the Nexus Hackathon 2.0 journey.
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-6">
            {timelineSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  activeStep === index ? step.color : 'bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className={`w-16 h-16 rounded-full ${timelineSteps[activeStep].color} text-white flex items-center justify-center mx-auto mb-4`}>
              {timelineSteps[activeStep].icon}
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{timelineSteps[activeStep].title}</h3>
            <p className="text-gray-500 text-center mb-4">{timelineSteps[activeStep].date}</p>
            <p className="text-gray-700 text-center">{timelineSteps[activeStep].description}</p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h3 className="text-xl font-bold text-white-900 mb-2 font-poppins">{step.title}</h3>
                      <p className="text-white-500 mb-3 font-opensans">{step.date}</p>
                      <p className="text-white-700 font-opensans">{step.description}</p>
                    </div>
                    
                    <div className="relative">
                      <div className={`absolute top-0 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg z-10`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://forms.gle/z258wJh7Vas1W3ZF9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 font-spacegrotesk text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg inline-block"
          >
            Register Your Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;