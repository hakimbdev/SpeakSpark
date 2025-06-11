import React, { useState } from 'react';
import { Phone, CreditCard, Share2, MessageSquare, Calendar, Mail, Settings, Zap, Users, Target, Smartphone, Headphones } from 'lucide-react';

const ActionModules: React.FC = () => {
  const [activeModule, setActiveModule] = useState('telecom');

  const modules = {
    telecom: {
      title: 'Telecom Module',
      icon: Phone,
      description: 'Voice-powered calling and messaging through Twilio integration',
      color: 'from-blue-500 to-cyan-500',
      capabilities: [
        'Make phone calls to contacts',
        'Send SMS messages',
        'Conference calling',
        'Voicemail management',
        'Call scheduling',
        'Emergency calling'
      ],
      commands: [
        '"Call Mom"',
        '"Text John: Running late"',
        '"Schedule call with Sarah at 3 PM"',
        '"Send group message to team"'
      ],
      integrations: ['Twilio', 'Google Contacts', 'iPhone Contacts', 'Android Contacts'],
      demo: {
        input: 'Call Sarah Johnson about the project meeting',
        processing: [
          'Identifying contact: Sarah Johnson',
          'Confirming phone number: +1 (555) 123-4567',
          'Initiating call through Twilio',
          'Call connected successfully'
        ]
      }
    },
    banking: {
      title: 'Banking Module',
      icon: CreditCard,
      description: 'Secure financial transactions with voice biometric authentication',
      color: 'from-green-500 to-emerald-500',
      capabilities: [
        'Send money via PayPal/Venmo',
        'Check account balances',
        'Pay bills automatically',
        'Set up recurring payments',
        'Fraud monitoring',
        'Smart bill negotiation'
      ],
      commands: [
        '"Send $50 to Mike via PayPal"',
        '"Check my Chase balance"',
        '"Pay electric bill"',
        '"Negotiate my Comcast bill"'
      ],
      integrations: ['PayPal', 'Venmo', 'Zelle', 'Plaid API', 'Bank APIs'],
      demo: {
        input: 'Send $25 to John Doe for dinner',
        processing: [
          'Voice biometric verification required',
          'Authenticating user identity...',
          'Finding recipient: John Doe',
          'Initiating PayPal transfer: $25.00',
          'Transaction completed successfully'
        ]
      }
    },
    social: {
      title: 'Social Module',
      icon: Share2,
      description: 'Automated social media posting across multiple platforms',
      color: 'from-purple-500 to-pink-500',
      capabilities: [
        'Post to LinkedIn, Twitter, Facebook',
        'Schedule posts for optimal times',
        'Cross-platform content sync',
        'Hashtag optimization',
        'Engagement analytics',
        'Story posting'
      ],
      commands: [
        '"Post on LinkedIn: Excited about new project"',
        '"Schedule Instagram post for tomorrow 9 AM"',
        '"Share article on Twitter with tech hashtags"',
        '"Update all profiles with new job"'
      ],
      integrations: ['LinkedIn API', 'Twitter API', 'Meta API', 'Instagram API'],
      demo: {
        input: 'Post on LinkedIn about completing the AI project',
        processing: [
          'Generating professional content...',
          'Adding relevant hashtags: #AI #MachineLearning',
          'Optimizing for LinkedIn engagement',
          'Post scheduled for peak engagement time',
          'Successfully posted to LinkedIn'
        ]
      }
    }
  };

  const useCases = [
    {
      icon: Smartphone,
      title: 'Personal Assistant',
      description: 'Manage your daily communications and tasks effortlessly',
      examples: ['Call dentist to reschedule', 'Pay rent automatically', 'Post birthday wishes']
    },
    {
      icon: Users,
      title: 'Business Professional',
      description: 'Stay connected with clients and manage business transactions',
      examples: ['Call client about proposal', 'Send invoice payment reminder', 'Share company updates']
    },
    {
      icon: Target,
      title: 'Social Influencer',
      description: 'Maintain consistent social presence across all platforms',
      examples: ['Schedule content calendar', 'Engage with followers', 'Cross-post promotions']
    }
  ];

  const securityFeatures = [
    'Voice biometric authentication for financial actions',
    'End-to-end encryption for all communications',
    'PCI-DSS compliant payment processing',
    'Real-time fraud detection and prevention',
    'Secure credential storage with HSM',
    'Multi-factor authentication support'
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Action Modules
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful integrations that transform your voice commands into real-world actions across telecom, banking, and social platforms.
          </p>
        </div>

        {/* Module Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(modules).map(([key, module]) => {
            const IconComponent = module.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveModule(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeModule === key
                    ? `bg-gradient-to-r ${module.color} text-white shadow-2xl scale-105`
                    : 'bg-black/40 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="font-semibold text-lg">{module.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Content */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Module Details */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${modules[activeModule].color} rounded-xl flex items-center justify-center mr-4`}>
                  {(() => {
                    const IconComponent = modules[activeModule].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{modules[activeModule].title}</h3>
                  <p className="text-gray-300">{modules[activeModule].description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Capabilities</h4>
                <div className="space-y-2">
                  {modules[activeModule].capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {capability}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Voice Commands</h4>
                <div className="grid grid-cols-1 gap-3">
                  {modules[activeModule].commands.map((command, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-3 font-mono text-blue-300 text-sm">
                      {command}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {modules[activeModule].integrations.map((integration, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Section */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Live Demo
              </h4>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Voice Input:</div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-blue-300 font-medium">
                  "{modules[activeModule].demo.input}"
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-3">Processing Steps:</div>
                <div className="space-y-2">
                  {modules[activeModule].demo.processing.map((step, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 text-green-400 text-xs">
                        {index + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r ${modules[activeModule].color} hover:scale-105 text-white`}>
                Try This Command
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Perfect For Every Lifestyle</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{useCase.title}</h4>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-gray-400 bg-white/5 rounded-lg p-2">
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Settings className="w-8 h-8 mr-3" />
              Enterprise-Grade Security
            </h3>
            <p className="text-xl text-gray-300">
              Your voice commands and actions are protected by military-grade security protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center mx-auto">
              <Headphones className="w-6 h-6 mr-3" />
              Start Using Action Modules
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionModules;