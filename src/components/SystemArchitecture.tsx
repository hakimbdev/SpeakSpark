import React, { useEffect, useRef } from 'react';
import { Database, Cloud, Shield, Zap, Cpu, Globe, Lock, Server } from 'lucide-react';

const SystemArchitecture: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current && window.mermaid) {
      window.mermaid.initialize({ 
        theme: 'dark',
        themeVariables: {
          primaryColor: '#3B82F6',
          primaryTextColor: '#FFFFFF',
          primaryBorderColor: '#1E40AF',
          lineColor: '#6366F1',
          sectionBkgColor: '#1F2937',
          altSectionBkgColor: '#374151',
          gridColor: '#4B5563',
          secondaryColor: '#8B5CF6',
          tertiaryColor: '#EF4444'
        }
      });

      const graphDefinition = `
        graph TB
          subgraph "Client Layer"
            A[Web App] --> B[Voice Interface]
            B --> C[Biometric Auth]
          end
          
          subgraph "API Gateway Layer"
            D[Load Balancer] --> E[API Gateway]
            E --> F[Rate Limiter]
            F --> G[Auth Middleware]
          end
          
          subgraph "Processing Layer"
            H[ASR Engine] --> I[Intent Parser]
            I --> J[Context Engine]
            J --> K[Action Router]
          end
          
          subgraph "Action Modules"
            L[Telecom Module]
            M[Banking Module]
            N[Social Module]
            O[Custom Actions]
          end
          
          subgraph "External APIs"
            P[Twilio API]
            Q[Plaid/PayPal API]
            R[Meta/LinkedIn API]
            S[Custom Integrations]
          end
          
          subgraph "Data & Security"
            T[(User Data)]
            U[(Command History)]
            V[Encryption Service]
            W[Fraud Detection]
          end
          
          subgraph "Infrastructure"
            X[Redis Cache]
            Y[Message Queue]
            Z[Monitoring]
          end
          
          A --> D
          G --> H
          K --> L
          K --> M
          K --> N
          K --> O
          
          L --> P
          M --> Q
          N --> R
          O --> S
          
          H --> T
          I --> U
          G --> V
          M --> W
          
          K --> X
          H --> Y
          E --> Z
          
          style A fill:#3B82F6
          style H fill:#8B5CF6
          style V fill:#EF4444
          style W fill:#F59E0B
      `;

      mermaidRef.current.innerHTML = `<div class="mermaid">${graphDefinition}</div>`;
      window.mermaid.init(undefined, mermaidRef.current.querySelector('.mermaid'));
    }
  }, []);

  const techStack = {
    frontend: [
      { name: 'React 18', description: 'Modern UI framework with concurrent features' },
      { name: 'TypeScript', description: 'Type-safe development' },
      { name: 'Tailwind CSS', description: 'Utility-first styling' },
      { name: 'WebRTC', description: 'Real-time voice communication' }
    ],
    backend: [
      { name: 'Node.js', description: 'High-performance runtime' },
      { name: 'Express.js', description: 'Minimal web framework' },
      { name: 'Socket.io', description: 'Real-time bidirectional communication' },
      { name: 'Redis', description: 'In-memory data structure store' }
    ],
    ai: [
      { name: 'OpenAI Whisper', description: 'Accent-robust speech recognition' },
      { name: 'GPT-4', description: 'Context-aware intent parsing' },
      { name: 'TensorFlow', description: 'Voice biometric matching' },
      { name: 'spaCy', description: 'Natural language processing' }
    ],
    infrastructure: [
      { name: 'AWS/GCP', description: 'Cloud infrastructure' },
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'Docker', description: 'Containerization' },
      { name: 'Terraform', description: 'Infrastructure as code' }
    ]
  };

  const architectureFeatures = [
    {
      icon: Zap,
      title: 'Sub-200ms Latency',
      description: 'Optimized processing pipeline with edge computing and predictive caching',
      details: [
        'Edge node deployment in 15+ regions',
        'Predictive model loading',
        'WebSocket connections for real-time communication',
        'Optimized ASR with streaming processing'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security with biometric authentication and end-to-end encryption',
      details: [
        'AES-256 encryption for all data',
        'Voice biometric authentication',
        'Zero-trust architecture',
        'PCI-DSS Level 1 compliance'
      ]
    },
    {
      icon: Database,
      title: 'Scalable Data Layer',
      description: 'Distributed architecture supporting 1M+ concurrent users',
      details: [
        'Horizontal auto-scaling',
        'Multi-region data replication',
        'Event-driven microservices',
        'Circuit breaker patterns'
      ]
    },
    {
      icon: Cpu,
      title: 'AI Processing Pipeline',
      description: 'Advanced machine learning models for accurate intent understanding',
      details: [
        'Multi-modal intent recognition',
        'Context-aware command parsing',
        'Personalized response generation',
        'Continuous model improvement'
      ]
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered for scale, security, and sub-200ms response times with enterprise-grade reliability.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Server className="w-6 h-6 mr-3" />
            High-Level Architecture
          </h2>
          <div 
            ref={mermaidRef} 
            className="w-full overflow-x-auto bg-gray-900/50 rounded-xl p-4"
            style={{ minHeight: '500px' }}
          />
        </div>

        {/* Architecture Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {architectureFeatures.map((feature, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Cpu className="w-6 h-6 mr-3" />
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-white capitalize border-b border-white/20 pb-2">
                  {category}
                </h3>
                <div className="space-y-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white text-sm">{tech.name}</div>
                      <div className="text-gray-400 text-xs mt-1">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Performance Targets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;200ms</div>
              <div className="text-gray-300 font-medium">Voice to Confirmation</div>
              <div className="text-gray-400 text-sm mt-2">End-to-end processing latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-300 font-medium">Concurrent Users</div>
              <div className="text-gray-400 text-sm mt-2">Horizontal scaling capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 font-medium">Uptime SLA</div>
              <div className="text-gray-400 text-sm mt-2">Enterprise reliability guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;