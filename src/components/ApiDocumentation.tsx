import React, { useState } from 'react';
import { Code, Copy, CheckCircle, Terminal, Globe, Lock, Zap, Database } from 'lucide-react';

const ApiDocumentation: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('voice-command');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = {
    'voice-command': {
      method: 'POST',
      path: '/api/v1/voice/command',
      description: 'Process voice command and execute corresponding action',
      headers: [
        { name: 'Authorization', value: 'Bearer {api_key}', required: true },
        { name: 'Content-Type', value: 'application/json', required: true },
        { name: 'Voice-Signature', value: '{biometric_hash}', required: true }
      ],
      request: {
        audio_data: 'base64 encoded audio',
        context: {
          user_id: 'string',
          session_id: 'string',
          location: 'optional geolocation data'
        },
        preferences: {
          confirmation_required: 'boolean',
          language: 'string (default: en-US)'
        }
      },
      response: {
        command_id: 'uuid',
        intent: {
          action: 'call | pay | post | text',
          confidence: 0.95,
          parameters: {}
        },
        status: 'processing | completed | requires_auth',
        estimated_completion: '2024-01-15T10:30:00Z'
      }
    },
    'telecom-call': {
      method: 'POST',
      path: '/api/v1/telecom/call',
      description: 'Initiate phone call through Twilio integration',
      headers: [
        { name: 'Authorization', value: 'Bearer {api_key}', required: true },
        { name: 'Content-Type', value: 'application/json', required: true }
      ],
      request: {
        to: '+1234567890',
        from: '+1987654321',
        message: 'optional voice message',
        callback_url: 'webhook for call status'
      },
      response: {
        call_id: 'uuid',
        status: 'initiated | ringing | answered | completed',
        duration: 120,
        cost: 0.015
      }
    },
    'banking-transfer': {
      method: 'POST',
      path: '/api/v1/banking/transfer',
      description: 'Execute money transfer via banking partner',
      headers: [
        { name: 'Authorization', value: 'Bearer {api_key}', required: true },
        { name: 'Content-Type', value: 'application/json', required: true },
        { name: 'Biometric-Auth', value: '{voice_biometric}', required: true }
      ],
      request: {
        amount: 50.00,
        currency: 'USD',
        recipient: {
          email: 'john@example.com',
          name: 'John Doe'
        },
        memo: 'Dinner payment',
        provider: 'paypal | venmo | zelle'
      },
      response: {
        transaction_id: 'uuid',
        status: 'pending | completed | failed',
        fee: 0.30,
        estimated_arrival: '2024-01-15T12:00:00Z'
      }
    },
    'social-post': {
      method: 'POST',
      path: '/api/v1/social/post',
      description: 'Create social media post across platforms',
      headers: [
        { name: 'Authorization', value: 'Bearer {api_key}', required: true },
        { name: 'Content-Type', value: 'application/json', required: true }
      ],
      request: {
        content: 'Just finished a great project!',
        platforms: ['linkedin', 'twitter', 'facebook'],
        schedule_time: '2024-01-15T15:00:00Z',
        media_urls: ['https://example.com/image.jpg']
      },
      response: {
        post_id: 'uuid',
        scheduled: true,
        platform_ids: {
          linkedin: '12345',
          twitter: '67890'
        }
      }
    }
  };

  const sdkExamples = {
    javascript: `// SpeakSpark SDK for JavaScript
import { SpeakSparkClient } from '@SpeakSpark/sdk';

const client = new SpeakSparkClient({
  apiKey: 'your-api-key',
  biometricAuth: true
});

// Voice command processing
const result = await client.voice.processCommand({
  audioData: audioBlob,
  context: {
    userId: 'user-123',
    sessionId: 'session-456'
  }
});

console.log(\`Command executed: \${result.intent.action}\`);`,
    
    python: `# SpeakSpark SDK for Python
from SpeakSpark import SpeakSparkClient

client = SpeakSparkClient(
    api_key="your-api-key",
    biometric_auth=True
)

# Banking transfer
result = client.banking.transfer(
    amount=50.00,
    recipient_email="john@example.com",
    memo="Dinner payment"
)

print(f"Transaction ID: {result.transaction_id}")`,

    curl: `# Direct API call with cURL
curl -X POST "https://api.SpeakSpark.ai/v1/voice/command" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -H "Voice-Signature: biometric-hash" \\
  -d '{
    "audio_data": "base64-encoded-audio",
    "context": {
      "user_id": "user-123",
      "session_id": "session-456"
    }
  }'`
  };

  const webhookExample = `{
  "event": "command.completed",
  "command_id": "cmd-12345",
  "user_id": "user-123",
  "action_type": "banking.transfer",
  "status": "completed",
  "result": {
    "transaction_id": "txn-67890",
    "amount": 50.00,
    "recipient": "john@example.com"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`;

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate SpeakSpark's voice-to-action capabilities into your applications with our RESTful API.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-semibold mb-4">Endpoints</h3>
              <nav className="space-y-2">
                {Object.entries(endpoints).map(([key, endpoint]) => (
                  <button
                    key={key}
                    onClick={() => setActiveEndpoint(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                      activeEndpoint === key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium">{endpoint.method}</div>
                    <div className="text-xs opacity-75">{endpoint.path}</div>
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="#authentication" className="block text-gray-300 hover:text-white">Authentication</a>
                  <a href="#rate-limits" className="block text-gray-300 hover:text-white">Rate Limits</a>
                  <a href="#webhooks" className="block text-gray-300 hover:text-white">Webhooks</a>
                  <a href="#sdks" className="block text-gray-300 hover:text-white">SDKs</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Active Endpoint Details */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoints[activeEndpoint].method === 'POST' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {endpoints[activeEndpoint].method}
                  </span>
                  <code className="text-blue-300 font-mono text-lg">
                    {endpoints[activeEndpoint].path}
                  </code>
                </div>
                <button
                  onClick={() => copyToClipboard(endpoints[activeEndpoint].path, 'endpoint')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {copiedCode === 'endpoint' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">{endpoints[activeEndpoint].description}</p>

              {/* Headers */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Headers</h4>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 text-gray-300">Header</th>
                        <th className="text-left py-2 text-gray-300">Value</th>
                        <th className="text-left py-2 text-gray-300">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoints[activeEndpoint].headers.map((header, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-2 text-blue-300 font-mono">{header.name}</td>
                          <td className="py-2 text-gray-300">{header.value}</td>
                          <td className="py-2">
                            {header.required ? (
                              <span className="text-red-400">Required</span>
                            ) : (
                              <span className="text-gray-500">Optional</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Request Body */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">Request Body</h4>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(endpoints[activeEndpoint].request, null, 2), 'request')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedCode === 'request' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{JSON.stringify(endpoints[activeEndpoint].request, null, 2)}</code>
                </pre>
              </div>

              {/* Response Body */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">Response Body</h4>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(endpoints[activeEndpoint].response, null, 2), 'response')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedCode === 'response' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{JSON.stringify(endpoints[activeEndpoint].response, null, 2)}</code>
                </pre>
              </div>
            </div>

            {/* SDK Examples */}
            <div id="sdks" className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3" />
                SDK Examples
              </h3>
              
              <div className="space-y-6">
                {Object.entries(sdkExamples).map(([language, code]) => (
                  <div key={language}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold capitalize">{language}</h4>
                      <button
                        onClick={() => copyToClipboard(code, language)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {copiedCode === language ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentication */}
            <div id="authentication" className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3" />
                Authentication
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">API Key Authentication</h4>
                  <p className="text-gray-300 mb-4">
                    Include your API key in the Authorization header for all requests.
                  </p>
                  <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300">
                    <code>Authorization: Bearer your-api-key-here</code>
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Biometric Authentication</h4>
                  <p className="text-gray-300 mb-4">
                    Financial operations require voice biometric verification.
                  </p>
                  <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300">
                    <code>Voice-Signature: sha256-hash-of-voice-biometric</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Rate Limits */}
            <div id="rate-limits" className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                Rate Limits
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">1,000</div>
                  <div className="text-gray-300 font-medium">Requests/Hour</div>
                  <div className="text-gray-400 text-sm mt-1">Free Tier</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">10,000</div>
                  <div className="text-gray-300 font-medium">Requests/Hour</div>
                  <div className="text-gray-400 text-sm mt-1">Pro Tier</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">Unlimited</div>
                  <div className="text-gray-300 font-medium">Requests</div>
                  <div className="text-gray-400 text-sm mt-1">Enterprise</div>
                </div>
              </div>
            </div>

            {/* Webhooks */}
            <div id="webhooks" className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3" />
                Webhooks
              </h3>
              
              <p className="text-gray-300 mb-6">
                Receive real-time notifications when commands are processed or actions are completed.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Webhook Payload Example</h4>
                <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{webhookExample}</code>
                </pre>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Event Types</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• command.received</li>
                    <li>• command.processing</li>
                    <li>• command.completed</li>
                    <li>• command.failed</li>
                    <li>• payment.completed</li>
                    <li>• call.answered</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Retry Policy</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 3 retry attempts</li>
                    <li>• Exponential backoff</li>
                    <li>• 24-hour timeout</li>
                    <li>• Failed webhook logs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentation;