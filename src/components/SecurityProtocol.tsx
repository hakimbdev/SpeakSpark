import React, { useState } from 'react';
import { Shield, Lock, Eye, Fingerprint, AlertTriangle, CheckCircle, Server, Globe, Key, Zap } from 'lucide-react';

const SecurityProtocol: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const securityFeatures = [
    {
      icon: Fingerprint,
      title: 'Voice Biometric Authentication',
      description: 'Unique voiceprint identification with 99.9% accuracy',
      details: [
        'Real-time voice pattern analysis',
        'Anti-spoofing detection',
        'Continuous authentication during calls',
        'Secure enrollment process'
      ],
      implementation: `// Voice biometric verification
const verifyVoiceBiometric = async (audioData, userId) => {
  const voiceprint = await extractVoiceFeatures(audioData);
  const stored = await getUserVoiceprint(userId);
  const similarity = compareVoiceprints(voiceprint, stored);
  
  return {
    verified: similarity > 0.95,
    confidence: similarity,
    riskScore: calculateRiskScore(voiceprint)
  };
};`
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption for all data in transit and at rest',
      details: [
        'TLS 1.3 for all API communications',
        'AES-256-GCM for data at rest',
        'Perfect Forward Secrecy',
        'Hardware Security Module (HSM) key storage'
      ],
      implementation: `// E2E encryption implementation
const encryptData = (data, publicKey) => {
  const sessionKey = generateSessionKey();
  const encryptedData = aes256.encrypt(data, sessionKey);
  const encryptedSessionKey = rsa.encrypt(sessionKey, publicKey);
  
  return {
    data: encryptedData,
    key: encryptedSessionKey,
    iv: generateIV()
  };
};`
    },
    {
      icon: Eye,
      title: 'Fraud Detection',
      description: 'ML-powered anomaly detection for suspicious activities',
      details: [
        'Behavioral pattern analysis',
        'Transaction velocity monitoring',
        'Device fingerprinting',
        'Real-time risk scoring'
      ],
      implementation: `// Fraud detection pipeline
const detectFraud = async (transaction, userContext) => {
  const riskFactors = [
    analyzeTransactionPattern(transaction),
    checkDeviceFingerprint(userContext.device),
    evaluateLocationAnomaly(userContext.location),
    assessVelocityRisk(transaction.amount)
  ];
  
  const riskScore = calculateCompositeRisk(riskFactors);
  return riskScore > FRAUD_THRESHOLD;
};`
    },
    {
      icon: Server,
      title: 'Zero-Trust Architecture',
      description: 'Never trust, always verify approach to security',
      details: [
        'Continuous identity verification',
        'Micro-segmented network access',
        'Least privilege access controls',
        'Real-time security monitoring'
      ],
      implementation: `// Zero-trust access control
const authorizeRequest = async (request, context) => {
  const checks = await Promise.all([
    verifyIdentity(context.user),
    validateDevice(context.device),
    checkPermissions(request.action, context.user),
    assessNetworkTrust(context.network)
  ]);
  
  return checks.every(check => check.passed);
};`
    }
  ];

  const complianceStandards = [
    {
      name: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard',
      requirements: [
        'Secure cardholder data storage',
        'Encrypted transmission protocols',
        'Regular security testing',
        'Access control measures'
      ],
      status: 'Certified'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      requirements: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality measures'
      ],
      status: 'Certified'
    },
    {
      name: 'GDPR Compliant',
      description: 'General Data Protection Regulation',
      requirements: [
        'Data minimization',
        'Right to be forgotten',
        'Consent management',
        'Data portability'
      ],
      status: 'Compliant'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      requirements: [
        'Risk management framework',
        'Security policy documentation',
        'Incident response procedures',
        'Continuous improvement'
      ],
      status: 'In Progress'
    }
  ];

  const securityMetrics = [
    { label: 'Uptime SLA', value: '99.9%', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Encryption Strength', value: 'AES-256', icon: Lock, color: 'text-blue-400' },
    { label: 'Auth Accuracy', value: '99.9%', icon: Fingerprint, color: 'text-purple-400' },
    { label: 'Response Time', value: '<50ms', icon: Zap, color: 'text-yellow-400' }
  ];

  const authFlow = `sequenceDiagram
    participant U as User
    participant A as App
    participant V as Voice Auth
    participant B as Backend
    participant E as External API
    
    U->>A: Voice Command
    A->>V: Audio Data
    V->>V: Extract Biometric
    V->>B: Verify Identity
    B->>B: Risk Assessment
    
    alt High Risk Transaction
        B->>A: Request Re-auth
        A->>U: Additional Verification
        U->>A: Confirm Identity
    end
    
    B->>E: Execute Action
    E->>B: Response
    B->>A: Confirmation
    A->>U: Action Complete`;

  const tabs = [
    { id: 'overview', label: 'Security Overview', icon: Shield },
    { id: 'authentication', label: 'Authentication', icon: Fingerprint },
    { id: 'encryption', label: 'Encryption', icon: Lock },
    { id: 'compliance', label: 'Compliance', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security Protocol
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with zero-trust architecture, biometric authentication, and comprehensive fraud protection.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {securityMetrics.map((metric, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className={`text-2xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/20 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Security Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-2">Implementation</div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      <code>{feature.implementation}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'authentication' && (
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Authentication Flow</h3>
              <div className="bg-gray-900/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300 whitespace-pre">
                  <code>{authFlow}</code>
                </pre>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">Multi-Factor Authentication</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Voice biometric (primary)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Device fingerprinting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Behavioral analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Location verification</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">Risk-Based Authentication</h4>
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="font-medium text-green-300 mb-1">Low Risk</div>
                    <div className="text-gray-300 text-sm">Known device, normal patterns</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <div className="font-medium text-yellow-300 mb-1">Medium Risk</div>
                    <div className="text-gray-300 text-sm">New location, unusual time</div>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <div className="font-medium text-red-300 mb-1">High Risk</div>
                    <div className="text-gray-300 text-sm">Unknown device, large amounts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'encryption' && (
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Encryption Standards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Lock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="font-bold text-white mb-2">Data at Rest</div>
                  <div className="text-gray-300 text-sm">AES-256-GCM</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <div className="font-bold text-white mb-2">Data in Transit</div>
                  <div className="text-gray-300 text-sm">TLS 1.3</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Key className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="font-bold text-white mb-2">Key Management</div>
                  <div className="text-gray-300 text-sm">HSM + FIPS 140-2</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Key Rotation Policy</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Master encryption keys</span>
                  <span className="text-blue-400 font-medium">90 days</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Session keys</span>
                  <span className="text-blue-400 font-medium">24 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">API keys</span>
                  <span className="text-blue-400 font-medium">365 days</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Biometric templates</span>
                  <span className="text-blue-400 font-medium">Never stored in plain text</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{standard.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      standard.status === 'Certified' ? 'bg-green-600' :
                      standard.status === 'Compliant' ? 'bg-blue-600' : 'bg-yellow-600'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{standard.description}</p>
                  
                  <div className="space-y-2">
                    {standard.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Audit & Monitoring</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300 font-medium mb-2">Security Monitoring</div>
                  <div className="text-gray-400 text-sm">Real-time threat detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300 font-medium mb-2">Activity Logging</div>
                  <div className="text-gray-400 text-sm">Complete audit trail</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">&lt; 1min</div>
                  <div className="text-gray-300 font-medium mb-2">Incident Response</div>
                  <div className="text-gray-400 text-sm">Automated threat response</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityProtocol;