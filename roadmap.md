# AERO-ASTRA: Futuristic UI Prototype Roadmap

## 1. Vision & Architecture
For the Round 1 hackathon submission (PPT & Video), we are building a Highly Visual, Zero-Hallucination "Mission Control" Dashboard. The goal is to avoid "random AI slop" and present a highly sophisticated, deterministic, space-grade interface.

**Core Tech Stack**
*   **Frontend Framework**: React (via Vite) — required for complex state and 3D orchestration.
*   **Styling**: CSS Modules or Tailwind CSS for a futuristic, dark-mode, neon-accented interface (SpaceX / ESA style).
*   **3D Rendering**: React Three Fiber & Drei (`@react-three/fiber`) — to render the digital twin satellite.
*   **Data Visualization**: Recharts or Chart.js for telemetry & ORACLE probability curves.

---

## 2. UI Layout & Agent Mapping

Our 8-agent architecture will be mapped into a unified "Single-Pane-Of-Glass" view, ensuring the judges see exactly how the agents interact.

### Central View: The Digital Twin (ORACLE & VITALS)
*   **Initial Step**: Integrate the `<ModelViewer />` to load our 3D Model placeholder.
*   **Final Output**: An interactive 3D satellite. Parts of the satellite will glow red or orange based on **VITALS** health scores or **SENTINEL** anomalies.

### Left Panel: Telemetry & Event Stream (SENTINEL & CHRONICLE)
*   **Live Telemetry Feed**: Simulating OPSSAT-AD data. 
*   **Event Log Console**: A hacker-style terminal displaying **CHRONICLE**'s parsed JSON event logs.
*   **Anomaly Alert Widget**: Flashes when the Isolation Forest + LSTM ensemble detects an anomaly.

### Right Panel: Diagnostics & Planning (SHERLOCK & ATHENA)
*   **Health & RUL**: "Subsystem Health: 12 Orbits Remaining" component (Proactive intelligence).
*   **Causal Graph**: A node-link diagram showing the root cause (e.g., EPS → TCS → OBC) identified by **SHERLOCK**.
*   **Recovery Options**: A prioritized list of 3 actions proposed by **ATHENA**, scored by safety.

### Bottom Panel/Action Bar: Execution & Audit (GUARDIAN, SCRIBE, QUARTERMASTER)
*   **Action Sandbox**: Shows Monte Carlo Simulation confidence bands before letting the user execute a step.
*   **GUARDIAN Safety Gate**: A physical "Approve" slider.
*   **SCRIBE "Generate Runbook" Button**: Triggers the generation of the PDF audit trail.

---

## 3. Implementation Plan (Phased Rollout)

### Phase 1: Foundation & The 3D Core (Current Step)
- [x] Tear down vanilla JS prototype.
- [x] Set up Vite + React + `@react-three/fiber`.
- [x] Integrate the `<ModelViewer />` React Bits component.
- [ ] Place a temporary 3D asset (e.g., satellite, or the generic `.glb`) into the canvas.

### Phase 2: Structural UI (The "Command Center" Shell)
- [ ] Build the layout shell (Top Navbar, Left Sidebar, Right Sidebar).
- [ ] Implement a futuristic CSS theme (Dark space background, cyan/red neon accents, monospaced fonts).
- [ ] Mock the Live Telemetry Chart components.

### Phase 3: Agent Integration Visuals
- [ ] **VITALS Component**: Add radial progress bars for subsystem health (EPS, TCS, ADCS).
- [ ] **SHERLOCK Component**: Add a causal dependency tree visual (using a graph component or static SVG).
- [ ] **Terminal Component**: Display scrolling event logs for CHRONICLE.

### Phase 4: Interactive Scenario Walkthrough (For the Video)
- [ ] Create a "Trigger Anomaly" button which safely walks through one of the 5 Fault Scenarios (e.g., *EPS Power Spike*).
- [ ] Animate the UI reaction: Model turns red -> SHERLOCK diagnoses it -> ATHENA proposes fixing -> SCRIBE produces report.

---

## 4. Options for Tech Implementation
1. **Option A (Optimal for Hackathon Video)**: Pre-script the 5 anomaly scenarios into UI timelines. The UI looks incredibly smart, acting exactly as the docs describe, bypassing backend Python ML complexity for the *video* round, while still honoring the exact spec of the 8 agents.
2. **Option B (Full Full-Stack)**: Provide a FastApi/Flask backend to actually run Python agents. *Note: Slower to build, higher risk of failure during recording. Recommended for finals, not the first video round.*

**Decision**: We proceed with setting up Option A's highly polished UI frontend first, centering around the 3D `<ModelViewer />`.
