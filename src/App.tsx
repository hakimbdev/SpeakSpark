import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Settings, 
  Shield, 
  Zap, 
  Phone, 
  CreditCard, 
  Share2,
  Menu,
  X,
  Play,
  Pause,
  Volume2,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Code,
  Database,
  Lock,
  FileText
} from 'lucide-react';
import VoiceInterface from './components/VoiceInterface';
import SystemArchitecture from './components/SystemArchitecture';
import ApiDocumentation from './components/ApiDocumentation';
import SecurityProtocol from './components/SecurityProtocol';
import PricingSection from './components/PricingSection';
import ActionModules from './components/ActionModules';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Zap },
    { id: 'voice', label: 'Voice Interface', icon: Mic },
    { id: 'architecture', label: 'Architecture', icon: Database },
    { id: 'api', label: 'API Docs', icon: Code },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'pricing', label: 'Pricing', icon: TrendingUp }
  ];

  const stats = [
    { label: 'Response Time', value: '<200ms', icon: Clock },
    { label: 'Concurrent Users', value: '1M+', icon: Users },
    { label: 'Uptime', value: '99.9%', icon: CheckCircle },
    { label: 'Compliance', value: 'PCI-DSS', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">SpeakSpark</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {activeSection === 'home' && (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
              <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 leading-tight">
                    Listen-to-Action
                    <br />
                    AI Platform
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Transform voice commands into autonomous actions. Call, pay, post, and manage your digital life through natural conversation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveSection('voice')}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      Try Voice Interface
                    </button>
                    <button
                      onClick={() => setActiveSection('architecture')}
                      className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5"
                    >
                      View Architecture
                    </button>
                  </div>
                </div>

                {/* Voice Animation */}
                <div className="relative mb-16">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <button
                      onClick={() => setIsListening(!isListening)}
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isListening
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isListening ? (
                        <MicOff className="w-8 h-8 text-white" />
                      ) : (
                        <Mic className="w-8 h-8 text-white" />
                      )}
                    </button>
                  </div>
                  {isListening && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 border-4 border-blue-500/30 rounded-full animate-ping"></div>
                      <div className="absolute w-48 h-48 border-4 border-purple-500/20 rounded-full animate-ping animation-delay-75"></div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 bg-black/20">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Action Modules Preview */}
            <ActionModules />

            {/* Killer Feature Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Killer Feature: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Smart Negotiation</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The first AI assistant that can negotiate your bills, subscription prices, and service plans autonomously. 
                  Say "Negotiate my Comcast bill" and watch our AI agent handle the entire conversation with human-like sophistication.
                </p>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <Volume2 className="w-6 h-6 text-blue-400" />
                    <div className="text-gray-300 font-mono text-lg">"Negotiate my internet bill and get me a better deal"</div>
                  </div>
                  <div className="text-sm text-gray-400 space-y-2">
                    <div>✓ Calls provider automatically</div>
                    <div>✓ Uses your account data and preferences</div>
                    <div>✓ Negotiates best available pricing</div>
                    <div>✓ Confirms changes with you before finalizing</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'voice' && <VoiceInterface />}
        {activeSection === 'architecture' && <SystemArchitecture />}
        {activeSection === 'api' && <ApiDocumentation />}
        {activeSection === 'security' && <SecurityProtocol />}
        {activeSection === 'pricing' && <PricingSection />}
      </main>
    </div>
  );
}

export default App;