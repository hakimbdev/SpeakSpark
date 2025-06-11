import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, Phone, CreditCard, Share2, MessageSquare, Settings, User } from 'lucide-react';

const VoiceInterface: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [processingStage, setProcessingStage] = useState<string | null>(null);
  const [recentCommands, setRecentCommands] = useState([
    { command: "Call Mom", status: "completed", timestamp: "2 min ago", type: "telecom" },
    { command: "Pay John $50 via PayPal", status: "pending-auth", timestamp: "5 min ago", type: "banking" },
    { command: "Schedule LinkedIn post for tomorrow", status: "completed", timestamp: "1 hour ago", type: "social" }
  ]);

  const sampleCommands = [
    "Call Sarah Johnson",
    "Send $25 to Mike via PayPal",
    "Post on LinkedIn: Just finished a great project!",
    "Text David: Running 10 minutes late",
    "Check my bank balance",
    "Schedule Instagram post for 3 PM",
    "Negotiate my phone bill",
    "Send invoice reminder to client"
  ];

  const processingStages = [
    "Listening to voice...",
    "Processing speech recognition...",
    "Understanding intent...",
    "Authenticating user...",
    "Executing action...",
    "Confirming completion..."
  ];

  const simulateVoiceCommand = (command: string) => {
    setCurrentCommand(command);
    setIsListening(true);
    
    let stageIndex = 0;
    const interval = setInterval(() => {
      if (stageIndex < processingStages.length) {
        setProcessingStage(processingStages[stageIndex]);
        stageIndex++;
      } else {
        setIsListening(false);
        setProcessingStage(null);
        setCurrentCommand('');
        clearInterval(interval);
        
        // Add to recent commands
        const newCommand = {
          command,
          status: command.includes("Pay") || command.includes("$") ? "pending-auth" : "completed",
          timestamp: "now",
          type: command.includes("Call") || command.includes("Text") ? "telecom" : 
                command.includes("Pay") || command.includes("$") ? "banking" : "social"
        };
        setRecentCommands(prev => [newCommand, ...prev.slice(0, 2)]);
      }
    }, 800);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'pending-auth': return 'text-yellow-400';
      case 'failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'telecom': return Phone;
      case 'banking': return CreditCard;
      case 'social': return Share2;
      default: return MessageSquare;
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Voice Command Interface
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of voice-to-action. Speak naturally and watch your commands execute autonomously.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Voice Interface */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Voice Control Center</h2>
            
            {/* Main Voice Button */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } shadow-2xl`}
                >
                  {isListening ? (
                    <MicOff className="w-12 h-12 text-white" />
                  ) : (
                    <Mic className="w-12 h-12 text-white" />
                  )}
                </button>
                
                {isListening && (
                  <>
                    <div className="absolute -inset-4 border-4 border-blue-500/30 rounded-full animate-ping"></div>
                    <div className="absolute -inset-8 border-4 border-purple-500/20 rounded-full animate-ping animation-delay-75"></div>
                  </>
                )}
              </div>
              
              <p className="text-gray-300 mt-4 text-lg">
                {isListening ? 'Listening...' : 'Tap to speak'}
              </p>
            </div>

            {/* Processing Status */}
            {processingStage && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-medium">{processingStage}</span>
                </div>
                {currentCommand && (
                  <div className="mt-2 text-gray-300 text-sm">
                    Command: "{currentCommand}"
                  </div>
                )}
              </div>
            )}

            {/* Authentication Prompt */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <User className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-medium">Biometric Authentication</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Financial actions require voice biometric verification for security.
              </p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Authenticate Now
              </button>
            </div>
          </div>

          {/* Recent Commands & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Action Buttons */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Quick Commands</h3>
              <div className="grid grid-cols-2 gap-3">
                {sampleCommands.slice(0, 6).map((command, index) => (
                  <button
                    key={index}
                    onClick={() => simulateVoiceCommand(command)}
                    className="text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <div className="text-white text-sm font-medium mb-1">
                      {command}
                    </div>
                    <div className="text-gray-400 text-xs">
                      Tap to simulate
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Commands */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Recent Commands</h3>
              <div className="space-y-4">
                {recentCommands.map((cmd, index) => {
                  const TypeIcon = getTypeIcon(cmd.type);
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <TypeIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{cmd.command}</div>
                        <div className="text-gray-400 text-sm">{cmd.timestamp}</div>
                      </div>
                      <div className={`text-sm font-medium ${getStatusColor(cmd.status)}`}>
                        {cmd.status.replace('-', ' ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Voice Settings */}
        <div className="mt-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Settings className="w-6 h-6 mr-3" />
            Voice Configuration
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Language & Accent</h4>
              <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Sensitivity</h4>
              <input 
                type="range" 
                className="w-full" 
                min="1" 
                max="10" 
                defaultValue="7" 
              />
              <div className="text-gray-400 text-sm">High sensitivity for noisy environments</div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Confirmation Mode</h4>
              <div className="space-y-2">
                <label className="flex items-center text-gray-300">
                  <input type="radio" name="confirmation" className="mr-2" defaultChecked />
                  Always confirm financial actions
                </label>
                <label className="flex items-center text-gray-300">
                  <input type="radio" name="confirmation" className="mr-2" />
                  Confirm all actions
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceInterface;