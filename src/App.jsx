import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('splash-1');
  const [anomalyStatus, setAnomalyStatus] = useState(false);
  const [guardianApproved, setGuardianApproved] = useState(false);

  const startTransition = () => {
    setCurrentView('splash-2');
    setTimeout(() => {
      setCurrentView('dashboard');
    }, 4500);
  };

  const toggleAnomaly = () => {
    setAnomalyStatus(!anomalyStatus);
    setGuardianApproved(false);
  };

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
            enableMouseParallax={false}
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
              defaultZoom={0.6}
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
            {/* Left Sidebar: Telemetry, Sentinel, Chronicle */}
            <div className="sidebar">
              <div className="panel">
                <div className="panel-title">TELEMETRY STREAM</div>
                <div style={{ background: '#000', padding: '10px', border: '1px solid #1f2833', fontSize: '11px', height: '90px' }}>
                  <div className="text-muted">Live OPSSAT-AD Feed pending...</div>
                  <div className="data-row" style={{ marginTop: '10px' }}><span>Altitude:</span> <span className="text-cyan">540 km</span></div>
                  <div className="data-row"><span>Velocity:</span> <span className="text-cyan">7.5 km/s</span></div>
                </div>
              </div>

              <div className="panel">
                <div className="panel-title">AGENT: SENTINEL (ANOMALY DETECT)</div>
                <div style={{ padding: '8px', border: anomalyStatus ? '1px solid #ff3b3b' : '1px solid #1f2833', textAlign: 'center', fontWeight: 'bold' }} className={anomalyStatus ? 'text-red' : 'text-green'}>
                  {anomalyStatus ? 'ANOMALY DETECTED' : 'SYSTEM NOMINAL'}
                </div>
                <button 
                  onClick={toggleAnomaly}
                  style={{
                    width: '100%', padding: '8px', marginTop: '10px', background: '#1f2833', color: '#66fcf1',
                    border: '1px solid #45a29e', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase'
                  }}
                >
                  {anomalyStatus ? 'Reset System' : 'Trigger Fault Scenario'}
                </button>
              </div>

              <div className="panel flex-1">
                <div className="panel-title">AGENT: CHRONICLE (EVENT LOG)</div>
                <div className="terminal-logs">
                  <p>&gt; System booted successfully.</p>
                  <p>&gt; Telemetry linked on band S7.</p>
                  {anomalyStatus ? (
                    <>
                      <p className="text-red">&gt; WARN: Anomaly detected at EPS Bus A.</p>
                      <p>&gt; Gathering contextual data blocks...</p>
                      <p>&gt; Executing SHERLOCK diagnostic pipeline.</p>
                    </>
                  ) : (
                    <p>&gt; Awaiting events...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Center: 3D Digital Twin & Action Bar */}
            <div className="center-layout">
              <div className="center-view">
                <div className="overlay-status">
                  <span className={`status-indicator ${anomalyStatus ? 'red' : ''}`}></span>
                  ORACLE: DIGITAL TWIN LIVE
                </div>
                <ModelViewer
                  url="/simple_satellite_low_poly_free.glb"
                  width="100%"
                  height="100%"
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                  enableManualRotation={true}
                  enableMouseParallax={true}
                  environmentPreset={anomalyStatus ? "sunset" : "warehouse"}
                  defaultZoom={0.8}
                  defaultRotationX={20}
                  defaultRotationY={-50}
                  showScreenshotButton={true}
                />
              </div>

              {/* Bottom Panel (Action Sandbox, Guardian, Scribe) */}
              <div className="bottom-bar">
                <div className="bottom-section">
                  <div className="panel-title">AGENT: QUARTERMASTER (SANDBOX)</div>
                  {anomalyStatus ? (
                    <div style={{ fontSize: '12px', marginTop: '10px' }}>
                      Simulating Mitigation Options... <br /><br />
                      <span className="text-cyan">Option 1 Confidence: 98% Success</span><br />
                      <span className="text-red">Option 2 Risk: 15% System Loss</span>
                    </div>
                  ) : (
                    <div className="text-muted" style={{ fontSize: '11px', marginTop: '10px' }}>Standby for mitigation models.</div>
                  )}
                </div>

                <div className="bottom-section">
                  <div className="panel-title">AGENT: GUARDIAN (SAFETY GATE)</div>
                  <div className="slider-container">
                    <label className="switch">
                      <input type="checkbox" disabled={!anomalyStatus} checked={guardianApproved} onChange={(e) => setGuardianApproved(e.target.checked)} />
                      <span className="slider"></span>
                    </label>
                    <span style={{ fontSize: '12px', color: anomalyStatus ? '#fff' : '#666' }}>Approve Primary Mitigation</span>
                  </div>
                  {guardianApproved && <div style={{ fontSize: '11px', marginTop: '10px' }} className="text-green">Safety Approval Granted.</div>}
                </div>

                <div className="bottom-section" style={{ borderRight: 'none', paddingRight: 0 }}>
                  <div className="panel-title">AGENT: SCRIBE (ORCHESTRATOR)</div>
                  <div className="text-muted" style={{ fontSize: '11px', marginBottom: '10px' }}>Execute action and generate audit trail.</div>
                  <button className="action-btn" disabled={!guardianApproved}>
                    EXECUTE RUNBOOK
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Vitals, Sherlock, Athena */}
            <div className="sidebar right-panel">
              <div className="panel">
                <div className="panel-title">AGENT: VITALS (PROACTIVE)</div>
                <div className="data-row">
                  <span>Subsystem Health</span>
                  <span className={anomalyStatus ? 'text-red' : 'text-green'}>{anomalyStatus ? 'CRITICAL' : 'OPTIMAL'}</span>
                </div>
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

              <div className="panel flex-1">
                <div className="panel-title">AGENT: SHERLOCK (DIAGNOSIS)</div>
                {anomalyStatus ? (
                  <div className="causal-graph-placeholder" style={{ flexDirection: 'column', padding: '10px' }}>
                    <div style={{ color: '#ff3b3b', fontWeight: 'bold', marginBottom: '5px' }}>ROOT CAUSE IDENTIFIED:</div>
                    <div className="text-cyan" style={{ fontSize: '12px' }}>[EPS Power Spike]</div>
                    <div style={{ margin: '2px 0' }}>↓ causing ↓</div>
                    <div className="text-cyan" style={{ fontSize: '12px' }}>[TCS Thermal Build-up]</div>
                  </div>
                ) : (
                  <div className="causal-graph-placeholder text-muted">Awaiting fault trigger...</div>
                )}
              </div>

              <div className="panel">
                <div className="panel-title">AGENT: ATHENA (MITIGATION)</div>
                {anomalyStatus ? (
                  <div>
                    <div style={{ fontSize: '11px', marginBottom: '8px' }}>Recommended Recovery Options:</div>
                    <div style={{ border: '1px solid #45a29e', padding: '8px', fontSize: '11px', marginBottom: '5px', background: 'rgba(69, 162, 158, 0.1)' }}>
                      1. Throttle down EPS Bus A (Safe: 98%)
                    </div>
                    <div style={{ border: '1px solid #333', padding: '8px', fontSize: '11px', color: '#777' }}>
                      2. Emergency Shutoff (Loss risk: 15%)
                    </div>
                  </div>
                ) : (
                  <div className="text-muted" style={{ fontSize: '11px' }}>No mitigation required.</div>
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
