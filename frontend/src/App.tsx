import React, { useState, useEffect } from 'react';
import './App.css';
import { MockDemo } from './MockDemo';
import { TestConnection } from './TestConnection';

const API_ENDPOINTS = {
  performance: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/performance/analyze',
  coaching: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/coaching',
  strategy: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/strategy/recommend',
  social: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/social',
  progress: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/progress',
  content: 'https://lx7pb7m1zg.execute-api.us-east-1.amazonaws.com/production/api/v1/content'
};

const WS_ENDPOINT = 'wss://aeenn33zfl.execute-api.us-east-1.amazonaws.com/production';

function App() {
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);

  const testPerformanceAgent = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.performance, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId: 'demo-player-123' })
      });
      const data = await response.json();
      setPerformanceData(data);
    } catch (error) {
      console.error('Performance test failed:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const ws = new WebSocket(WS_ENDPOINT);
    ws.onopen = () => setWsConnected(true);
    ws.onclose = () => setWsConnected(false);
    return () => ws.close();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>RiftIQ AI Coaching Platform</h1>
        <p>6-Agent AI Architecture Demo</p>
      </header>

      <main className="dashboard">
        <div className="status-panel">
          <h2>System Status</h2>
          <div className="status-item">
            <span>WebSocket: </span>
            <span className={wsConnected ? 'status-ok' : 'status-error'}>
              {wsConnected ? '✅ Connected' : '❌ Disconnected'}
            </span>
          </div>
        </div>

        <div className="agent-panel">
          <h2>Performance Agent</h2>
          <button onClick={testPerformanceAgent} disabled={loading}>
            {loading ? 'Testing...' : 'Test Performance Analysis'}
          </button>
          
          {performanceData && (
            <div className="results">
              <h3>Analysis Results</h3>
              <p>Processing Time: {performanceData.metadata?.processingTime}ms</p>
              <p>Confidence: {performanceData.data?.confidence}</p>
              <div className="insights">
                <h4>Insights:</h4>
                {performanceData.data?.insights?.map((insight: any, i: number) => (
                  <div key={i} className="insight">
                    <strong>{insight.category}:</strong> {insight.message}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="agents-grid">
          <div className="agent-card">
            <h3>Coaching Agent</h3>
            <p>Real-time coaching delivery</p>
            <span className="status-ready">✅ Ready</span>
          </div>
          <div className="agent-card">
            <h3>Strategy Agent</h3>
            <p>AI-powered recommendations</p>
            <span className="status-ready">✅ Ready</span>
          </div>
          <div className="agent-card">
            <h3>Social Agent</h3>
            <p>Community features</p>
            <span className="status-ready">✅ Ready</span>
          </div>
          <div className="agent-card">
            <h3>Progress Agent</h3>
            <p>Achievement tracking</p>
            <span className="status-ready">✅ Ready</span>
          </div>
          <div className="agent-card">
            <h3>Content Agent</h3>
            <p>ML recommendations</p>
            <span className="status-ready">✅ Ready</span>
          </div>
        </div>

        <TestConnection />
        <MockDemo />
      </main>
    </div>
  );
}

export default App;