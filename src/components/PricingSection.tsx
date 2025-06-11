import React, { useState } from 'react';
import { Check, X, Zap, Crown, Building, Star, Phone, CreditCard, Share2, Settings, Headphones, Shield } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out voice commands',
      features: [
        { name: 'Basic voice commands', included: true },
        { name: 'Up to 50 calls/month', included: true },
        { name: 'SMS messaging', included: true },
        { name: 'Basic support', included: true },
        { name: 'Banking integrations', included: false },
        { name: 'Social media posting', included: false },
        { name: 'Advanced AI features', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      icon: Crown,
      price: { monthly: 4.99, yearly: 49.99 },
      description: 'Full power of voice-to-action automation',
      features: [
        { name: 'Unlimited voice commands', included: true },
        { name: 'Unlimited calls & SMS', included: true },
        { name: 'Banking integrations', included: true },
        { name: 'Social media posting', included: true },
        { name: 'Advanced AI features', included: true },
        { name: 'Voice biometric security', included: true },
        { name: 'Smart bill negotiation', included: true },
        { name: 'Priority support', included: true }
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'Advanced features for teams and businesses',
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Team management', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'White-label options', included: true },
        { name: 'SLA guarantees', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'On-premise deployment', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const usageLimits = {
    free: {
      calls: '50/month',
      sms: '100/month',
      banking: 'Not included',
      social: 'Not included',
      support: 'Community'
    },
    pro: {
      calls: 'Unlimited',
      sms: 'Unlimited',
      banking: '100 transactions/month',
      social: '200 posts/month',
      support: 'Priority email'
    },
    enterprise: {
      calls: 'Unlimited',
      sms: 'Unlimited',
      banking: 'Unlimited',
      social: 'Unlimited',
      support: '24/7 dedicated'
    }
  };

  const features = [
    {
      category: 'Voice Commands',
      icon: Phone,
      items: [
        { name: 'Natural language processing', free: true, pro: true, enterprise: true },
        { name: 'Multi-language support', free: false, pro: true, enterprise: true },
        { name: 'Accent recognition', free: false, pro: true, enterprise: true },
        { name: 'Context awareness', free: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Banking & Payments',
      icon: CreditCard,
      items: [
        { name: 'Basic transfers', free: false, pro: true, enterprise: true },
        { name: 'Balance inquiries', free: false, pro: true, enterprise: true },
        { name: 'Bill pay automation', free: false, pro: true, enterprise: true },
        { name: 'Smart negotiation', free: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Social Media',
      icon: Share2,
      items: [
        { name: 'Basic posting', free: false, pro: true, enterprise: true },
        { name: 'Scheduled posts', free: false, pro: true, enterprise: true },
        { name: 'Multi-platform sync', free: false, pro: true, enterprise: true },
        { name: 'Analytics & insights', free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Security & Privacy',
      icon: Shield,
      items: [
        { name: 'Basic encryption', free: true, pro: true, enterprise: true },
        { name: 'Voice biometrics', free: false, pro: true, enterprise: true },
        { name: 'Advanced fraud detection', free: false, pro: true, enterprise: true },
        { name: 'Compliance reporting', free: false, pro: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How does the free plan work?',
      answer: 'The free plan includes basic voice commands for calls and SMS with a monthly limit of 50 calls and 100 SMS messages. Perfect for trying out the platform.'
    },
    {
      question: 'Can I upgrade or downgrade anytime?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level encryption, voice biometric authentication, and are PCI-DSS compliant. Your financial data is never stored on our servers.'
    },
    {
      question: 'What banking partners do you support?',
      answer: 'We currently support PayPal, Venmo, and Zelle, with plans to add major banks like Chase, Wells Fargo, and Bank of America in Phase 2.'
    },
    {
      question: 'How accurate is the voice recognition?',
      answer: 'Our voice recognition achieves 99%+ accuracy across different accents and languages, with continuous learning to improve over time.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period.'
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no complex contracts.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-gray-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                billingPeriod === 'yearly' ? 'translate-x-6' : ''
              }`} />
            </button>
            <span className={`ml-3 ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-black/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                  : 'border-white/10 hover:border-blue-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <plan.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price[billingPeriod] === 'number' ? (
                    <>
                      <span className="text-4xl font-bold text-white">
                        ${plan.price[billingPeriod]}
                      </span>
                      <span className="text-gray-400">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      {plan.price[billingPeriod]}
                    </span>
                  )}
                </div>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mr-3" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Feature Comparison</h3>
          
          <div className="space-y-8">
            {features.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="text-xl font-semibold text-white">{category.category}</h4>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 text-gray-300">Feature</th>
                        <th className="text-center py-3 text-gray-300">Free</th>
                        <th className="text-center py-3 text-gray-300">Pro</th>
                        <th className="text-center py-3 text-gray-300">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-white/10">
                          <td className="py-3 text-gray-300">{item.name}</td>
                          <td className="text-center py-3">
                            {item.free ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3">
                            {item.pro ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3">
                            {item.enterprise ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Limits */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Usage Limits</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(usageLimits).map(([plan, limits]) => (
              <div key={plan} className="bg-white/5 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 capitalize">{plan}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Voice Calls</span>
                    <span className="text-blue-400 font-medium">{limits.calls}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">SMS Messages</span>
                    <span className="text-blue-400 font-medium">{limits.sms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Banking</span>
                    <span className="text-blue-400 font-medium">{limits.banking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Social Posts</span>
                    <span className="text-blue-400 font-medium">{limits.social}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support</span>
                    <span className="text-blue-400 font-medium">{limits.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
              <Headphones className="w-5 h-5 mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;