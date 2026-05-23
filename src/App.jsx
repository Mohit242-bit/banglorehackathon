import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('splash-1');
  const [anomalyStatus, setAnomalyStatus] = useState(false);

  const startTransition = () => {
    setCurrentView('splash-2');
    
    setTimeout(() => {
      setCurrentView('dashboard');
    }, 4500);
  };

  const toggleAnomaly = () => setAnomalyStatus(!anomalyStatus);

  return (
    <>
      {currentView === 'splash-1' && (
        <div className="splash-screen">
          <ModelViewer
            url="/simple_satellite_low_poly_free.glb"
            width="100vw"
            height="100vh"
            autoRotate={true}
            autoRotateSpeed={0.5} 
            enableManualZoom={false}
            enableManualRotation={true}
            enableMouseParallax={false} /* Disabled to prevent displacement */
            environmentPreset="warehouse"
            ambientIntensity={0.6}
            keyLightIntensity={1}
            defaultZoom={0.8}
            minZoomDistance={0.5}
            maxZoomDistance={2}
            showScreenshotButton={false} 
          />
          
          <div className="splash-text">
            <h1 className="glitch-text">AERO-ASTRA</h1>
            <button className="start-btn" onClick={startTransition}>
              LET'S START
            </button>
          </div>
        </div>
      )}

      {currentView === 'splash-2' && (
        <div className="splash-screen">
          <div className="model-pop">
            <ModelViewer
              url="/gun_satellite_panel_computer.glb"
              width="100vw"
              height="100vh"
              autoRotate={false}
              autoRotateSpeed={0.3}
              enableManualZoom={false}
              enableManualRotation={false}
              enableMouseParallax={false}
              environmentPreset="studio"
              ambientIntensity={0.8}
              keyLightIntensity={1}
              defaultRotationX={0}
              defaultRotationY={0}
              defaultZoom={3}
              showScreenshotButton={false}
            />
          </div>
          
          <div className="splash-text-panel">
            <p className="sub-text">INITIALIZING SATELLITE CONTROL PANEL<span className="dot-blink">...</span></p>
          </div>
        </div>
      )}

      {currentView === 'dashboard' && (
        <div className="dashboard-container fade-enter">
          <div className="header">
            <div style={{ width: '80px', height: '80px', marginRight: '15px' }}>
              <ModelViewer
                url="/simple_satellite_low_poly_free.glb"
                width="80px"
                height="80px"
                autoRotate={true}
                autoRotateSpeed={0.5}
                enableManualZoom={false}
                enableManualRotation={false}
                enableMouseParallax={false}
                environmentPreset="warehouse"
                defaultZoom={1.5}
                showScreenshotButton={false}
              />
            </div>
            <div style={{ color: '#66fcf1', marginRight: '15px' }}>AERO-ASTRA</div>
            <div style={{ fontSize: '12px', color: '#888' }}>| Autonomous Event Response & Orbital Triage Architecture</div>
          </div>

          <div className="main-content">
            {/* Left Sidebar: Telemetry & SENTINEL */}
            <div className="sidebar">
              <div>
                <div className="panel-title">AGENT: SENTINEL (ANOMALY DETECT)</div>
                <div className={`data-row ${anomalyStatus ? 'text-red-500' : ''}`} style={{ color: anomalyStatus ? '#ff3b3b' : '#c5c6c7' }}>
                  <span>SYSTEM STATUS</span>
                  <span>{anomalyStatus ? 'ANOMALY DETECTED' : 'NOMINAL'}</span>
                </div>
                <button 
                  onClick={toggleAnomaly}
                  style={{
                    width: '100%', padding: '8px', marginTop: '10px',
                    backgroundColor: anomalyStatus ? '#ff3b3b' : '#1f2833',
                    color: '#fff', border: 'none', cursor: 'pointer',
                    borderRadius: '4px', textTransform: 'uppercase', fontFamily: 'inherit'
                  }}
                >
                  {anomalyStatus ? 'Reset Scenario' : 'Simulate Fault Scenario'}
                </button>
              </div>

              <div>
                <div className="panel-title">AGENT: VITALS (PROACTIVE HEALTH)</div>
                <div className="data-row">
                  <span>EPS_SOC</span>
                  <span>{anomalyStatus ? '85.2% (DEGRADING)' : '98.5%'}</span>
                </div>
                <div className="data-row">
                  <span>TCS_TEMP</span>
                  <span>{anomalyStatus ? '+4.2°C/hr' : 'Stable'}</span>
                </div>
                {anomalyStatus && (
                  <div style={{ color: '#ff3b3b', fontSize: '12px', marginTop: '10px', border: '1px dashed #ff3b3b', padding: '5px' }}>
                    WARNING: RUL ESTIMATE 12 ORBITS
                  </div>
                )}
              </div>
            </div>

            {/* Center: 3D Digital Twin Model */}
            <div className="center-view">
              <div className="overlay-status">
                <span className={`status-indicator ${anomalyStatus ? 'red' : ''}`}></span>
                ORACLE: DIGITAL TWIN LIVE
              </div>
              
              <ModelViewer
                url="/gun_satellite_panel_computer.glb"
                width="100%"
                height="100%"
                autoRotate={false}
                enableManualRotation={true}
                enableMouseParallax={true}
                environmentPreset={anomalyStatus ? "sunset" : "studio"}
                defaultRotationX={0}
                defaultRotationY={0}
                defaultZoom={3.5} 
                showScreenshotButton={true}
              />
            </div>

            {/* Right Sidebar: Diagnoses & Recovery */}
            <div className="sidebar">
              <div>
                <div className="panel-title">AGENT: SHERLOCK (DIAGNOSIS)</div>
                {anomalyStatus ? (
                  <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
                    <span style={{ color: '#ff3b3b' }}>ROOT CAUSE IDENTIFIED:</span><br />
                    <span style={{ color: '#66fcf1' }}>EPS Power Spike → TCS Thermal Build-up</span>
                    <br/><br/>
                    Confidence: 94.2%
                  </div>
                ) : (
                  <div style={{ fontSize: '12px', color: '#666' }}>Awaiting Event Trigger...</div>
                )}
              </div>

              <div>
                <div className="panel-title">AGENT: ATHENA & GUARDIAN</div>
                {anomalyStatus ? (
                  <div>
                    <div style={{ fontSize: '12px', marginBottom: '8px' }}>Recommended Recovery Options:</div>
                    <div style={{ border: '1px solid #45a29e', padding: '8px', fontSize: '12px', marginBottom: '5px', background: 'rgba(69, 162, 158, 0.1)' }}>
                      1. Throttle down EPS Bus A (Safe: 98%)
                    </div>
                    <div style={{ border: '1px solid #333', padding: '8px', fontSize: '12px', color: '#777' }}>
                      2. Emergency Shutoff (Loss risk: 15%)
                    </div>
                    <button style={{
                      width: '100%', padding: '10px', marginTop: '10px',
                      backgroundColor: '#45a29e', color: '#000', border: 'none',
                      fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px',
                      fontFamily: 'inherit'
                    }}>
                      EXECUTE RUNBOOK (SCRIBE)
                    </button>
                  </div>
                ) : (
                  <div style={{ fontSize: '12px', color: '#666' }}>No active mitigation required.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
