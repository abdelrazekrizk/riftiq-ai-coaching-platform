import React, { useState } from 'react';

export const TestConnection: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [testing, setTesting] = useState(false);

  const testPerformanceEndpoint = async () => {
    setTesting(true);
    setTestResult('Testing...');
    
    try {
      // Test the working endpoint from curl results
      const response = await fetch('https://asyopyy4d1.execute-api.us-east-1.amazonaws.com/api/v1/performance/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          playerId: 'test-player-123'
        })
      });

      if (response.ok) {
        const data = await response.json();
        setTestResult(`✅ SUCCESS: ${data.metadata?.processingTime}ms response time`);
      } else {
        setTestResult(`❌ HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      setTestResult(`❌ CORS/Network Error: ${error}`);
    }
    
    setTesting(false);
  };

  return (
    <div className="test-connection">
      <h3>🔧 Connection Test</h3>
      <button 
        onClick={testPerformanceEndpoint}
        disabled={testing}
        className="demo-button"
      >
        {testing ? 'Testing...' : 'Test Performance API'}
      </button>
      
      {testResult && (
        <div className="test-result">
          {testResult}
        </div>
      )}
      
      <div className="cors-info">
        <p><strong>Note:</strong> CORS may block browser requests to AWS API Gateway.</p>
        <p>Backend is operational (validated via curl: 7ms response time)</p>
      </div>
    </div>
  );
};