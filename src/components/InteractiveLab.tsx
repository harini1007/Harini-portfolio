import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Terminal, 
  Sliders, 
  Activity, 
  Binary, 
  Zap, 
  RefreshCw, 
  Radio, 
  Check, 
  AlertTriangle,
  Play,
  RotateCcw
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type LabMode = 'iot' | 'logic';

export const InteractiveLab: React.FC = () => {
  const [activeMode, setActiveMode] = useState<LabMode>('iot');

  // IoT State
  const [temperature, setTemperature] = useState<number>(27);
  const [humidity, setHumidity] = useState<number>(58);
  const [lightLux, setLightLux] = useState<number>(450);
  const [distanceCm, setDistanceCm] = useState<number>(85);
  const [isCloudSynced, setIsCloudSynced] = useState<boolean>(false);
  const [serialLog, setSerialLog] = useState<string[]>([
    'SYSTEM INITIALIZED: Arduino Uno ATMega328P @ 16MHz',
    'BAUD: 9600 bps · I2C Bus Ready · DHT11 Online',
    'Sensors Calibrated: Reading analog pins A0 (LDR), D2 (DHT11), D8/D9 (HC-SR04)',
  ]);

  // Digital Logic Gate State
  const [selectedGate, setSelectedGate] = useState<'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR'>('XOR');
  const [inputA, setInputA] = useState<boolean>(true);
  const [inputB, setInputB] = useState<boolean>(false);

  // Computed outputs for IoT
  const isHighTemp = temperature >= 35;
  const isDark = lightLux < 300;
  const isProximityAlert = distanceCm < 30;

  // Sync Serial Log on IoT values change
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    const packet = `[${timestamp}] T:${temperature}°C | H:${humidity}% | L:${lightLux}lx | D:${distanceCm}cm | FAN:${isHighTemp ? 'ON' : 'OFF'} | LED:${isDark ? 'ON' : 'OFF'}`;
    
    setSerialLog((prev) => [packet, ...prev.slice(0, 5)]);
  }, [temperature, humidity, lightLux, distanceCm, isHighTemp, isDark]);

  // Logic Gate computation
  const computeGateOutput = (gate: string, a: boolean, b: boolean): boolean => {
    switch (gate) {
      case 'AND': return a && b;
      case 'OR': return a || b;
      case 'NAND': return !(a && b);
      case 'NOR': return !(a || b);
      case 'XOR': return (a && !b) || (!a && b);
      default: return false;
    }
  };

  const logicOutput = computeGateOutput(selectedGate, inputA, inputB);

  const getGateFormula = (gate: string) => {
    switch (gate) {
      case 'AND': return 'Q = A · B';
      case 'OR': return 'Q = A + B';
      case 'NAND': return 'Q = (A · B)\'';
      case 'NOR': return 'Q = (A + B)\'';
      case 'XOR': return 'Q = A ⊕ B';
      default: return 'Q = f(A, B)';
    }
  };

  const handleCloudSync = () => {
    setIsCloudSynced(true);
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    setSerialLog((prev) => [
      `[${timestamp}] >>> PACKET DISPATCHED TO CLOUD (200 OK) <<<`,
      ...prev.slice(0, 5),
    ]);
    setTimeout(() => setIsCloudSynced(false), 2000);
  };

  const resetIotValues = () => {
    setTemperature(27);
    setHumidity(58);
    setLightLux(450);
    setDistanceCm(85);
  };

  return (
    <section id="lab" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#060913] circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              <span>Interactive Engineering Sandbox</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-orange-400">Live Demonstrator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Virtual IoT & Digital Logic Lab
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Directly interact with the engineering concepts I practice: real-time sensor telemetry, automated actuation, and boolean digital circuits.
            </p>
          </div>

          {/* Interactive Mode Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveMode('iot')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeMode === 'iot'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>IoT Sensor Node</span>
            </button>
            <button
              onClick={() => setActiveMode('logic')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeMode === 'logic'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-900/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Binary className="w-3.5 h-3.5" />
              <span>Digital Logic Workbench</span>
            </button>
          </div>
        </div>

        {/* MODE 1: IoT Sensor & Actuation Node */}
        {activeMode === 'iot' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Physical Environment Inputs
                  </h3>
                </div>
                <button
                  onClick={resetIotValues}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              {/* Slider 1: Temperature */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Temperature (DHT11 Analog)</span>
                  <span className="font-mono font-bold text-orange-400 text-sm">{temperature} °C</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>15°C (Cool)</span>
                  <span className="text-slate-400">Threshold: 35°C</span>
                  <span>50°C (Overheat)</span>
                </div>
              </div>

              {/* Slider 2: Humidity */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Relative Humidity (%)</span>
                  <span className="font-mono font-bold text-blue-400 text-sm">{humidity} %</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={humidity}
                  onChange={(e) => setHumidity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>20% (Dry)</span>
                  <span>Optimal: 40-60%</span>
                  <span>95% (Moist)</span>
                </div>
              </div>

              {/* Slider 3: Light (LDR) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Ambient Light (LDR Photoresistor)</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">{lightLux} Lux</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={lightLux}
                  onChange={(e) => setLightLux(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>50 Lux (Dark)</span>
                  <span className="text-slate-400">Night Trip: &lt;300 Lux</span>
                  <span>1000 Lux (Bright Sunlight)</span>
                </div>
              </div>

              {/* Slider 4: Ultrasonic Distance */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Obstacle Distance (HC-SR04)</span>
                  <span className="font-mono font-bold text-sky-400 text-sm">{distanceCm} cm</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={distanceCm}
                  onChange={(e) => setDistanceCm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 cm (Close)</span>
                  <span className="text-slate-400">Proximity Safety: &lt;30 cm</span>
                  <span>150 cm (Clear)</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={handleCloudSync}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isCloudSynced
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-95'
                  }`}
                >
                  <Radio className={`w-3.5 h-3.5 ${isCloudSynced ? 'animate-pulse' : ''}`} />
                  <span>{isCloudSynced ? 'Packet Transmitted!' : 'Transmit Cloud Telemetry'}</span>
                </button>
                <span className="text-[11px] text-slate-400 font-mono">
                  MCU Status: OK
                </span>
              </div>
            </div>

            {/* Right Column: Physical Actuator State & Serial Monitor */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Actuators Hardware State Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-orange-400" />
                    <span>Real-Time Actuator Responses</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Auto-Feedback Logic</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Actuator 1: Cooling Fan Relay */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    isHighTemp 
                      ? 'bg-orange-950/40 border-orange-500/60 text-orange-200' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold">Cooling Relay</span>
                      <span className={`w-2 h-2 rounded-full ${isHighTemp ? 'bg-orange-500 animate-ping' : 'bg-slate-700'}`} />
                    </div>
                    <div className="text-base font-bold font-mono">
                      {isHighTemp ? 'ENGAGED' : 'STANDBY'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {isHighTemp ? 'High Temp (>35°C)' : 'Normal Thermal Range'}
                    </div>
                  </div>

                  {/* Actuator 2: Night Security LED */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'bg-blue-950/40 border-blue-500/60 text-blue-200' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold">Auto LED Lamp</span>
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400 animate-pulse' : 'bg-slate-700'}`} />
                    </div>
                    <div className="text-base font-bold font-mono">
                      {isDark ? 'LIGHT ON' : 'OFF'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {isDark ? 'Low Lux (<300lx)' : 'Adequate Ambient Light'}
                    </div>
                  </div>

                  {/* Actuator 3: Proximity Alarm */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    isProximityAlert 
                      ? 'bg-red-950/40 border-red-500/60 text-red-200' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold">Safety Buzzer</span>
                      <span className={`w-2 h-2 rounded-full ${isProximityAlert ? 'bg-red-500 animate-ping' : 'bg-slate-700'}`} />
                    </div>
                    <div className="text-base font-bold font-mono">
                      {isProximityAlert ? 'BEEPING' : 'CLEAR'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {isProximityAlert ? 'Obstacle Detected (<30cm)' : 'Path Unobstructed'}
                    </div>
                  </div>

                </div>
              </div>

              {/* Arduino Serial Monitor Simulation */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-mono font-medium text-slate-300">
                      Arduino Serial Monitor · COM4 @ 9600 baud
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-emerald-400">STREAMING</span>
                  </div>
                </div>

                <div className="p-4 font-mono text-xs text-emerald-400/90 space-y-1.5 h-44 overflow-y-auto">
                  {serialLog.map((line, idx) => (
                    <div key={idx} className="leading-tight">
                      {line}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* MODE 2: Digital Logic Workbench */}
        {activeMode === 'logic' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Logic Gate Selector & Circuit Diagram */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Binary className="w-4 h-4 text-orange-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Digital Gate Selection
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold text-blue-400">
                  {getGateFormula(selectedGate)}
                </span>
              </div>

              {/* Gate Buttons */}
              <div className="flex flex-wrap gap-2">
                {(['AND', 'OR', 'NAND', 'NOR', 'XOR'] as const).map((gate) => (
                  <button
                    key={gate}
                    onClick={() => setSelectedGate(gate)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                      selectedGate === gate
                        ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-950/50'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {gate} Gate
                  </button>
                ))}
              </div>

              {/* Interactive Circuit Schematic Viewport */}
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800/80 relative">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  
                  {/* Inputs Column */}
                  <div className="space-y-4">
                    {/* Input A */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setInputA(!inputA)}
                        className={`w-12 h-10 rounded-lg font-mono font-bold text-sm border flex items-center justify-center transition-all ${
                          inputA
                            ? 'bg-orange-600 text-white border-orange-400 shadow-md shadow-orange-900/30'
                            : 'bg-slate-900 text-slate-500 border-slate-800'
                        }`}
                      >
                        {inputA ? '1' : '0'}
                      </button>
                      <div className="text-xs">
                        <span className="font-bold text-white">Input A</span>
                        <div className="text-[10px] text-slate-400">{inputA ? 'HIGH (5V)' : 'LOW (0V)'}</div>
                      </div>
                    </div>

                    {/* Input B */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setInputB(!inputB)}
                        className={`w-12 h-10 rounded-lg font-mono font-bold text-sm border flex items-center justify-center transition-all ${
                          inputB
                            ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-900/30'
                            : 'bg-slate-900 text-slate-500 border-slate-800'
                        }`}
                      >
                        {inputB ? '1' : '0'}
                      </button>
                      <div className="text-xs">
                        <span className="font-bold text-white">Input B</span>
                        <div className="text-[10px] text-slate-400">{inputB ? 'HIGH (5V)' : 'LOW (0V)'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Center Logic Gate Graphic */}
                  <div className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center shadow-inner">
                    <span className="text-xs font-mono text-slate-400 mb-1">IC LOGIC GATE</span>
                    <span className="text-2xl font-black text-white tracking-widest">{selectedGate}</span>
                    <span className="text-[10px] text-orange-400 font-mono mt-1">TTL 74LS SERIES</span>
                  </div>

                  {/* Output Q Column */}
                  <div className="flex items-center gap-3">
                    <div className="text-right text-xs">
                      <span className="font-bold text-white">Output Q</span>
                      <div className="text-[10px] text-slate-400">{logicOutput ? 'HIGH (5V)' : 'LOW (0V)'}</div>
                    </div>

                    <div className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      logicOutput
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-950/60'
                        : 'bg-slate-900 border-slate-800 text-slate-600'
                    }`}>
                      <Zap className={`w-5 h-5 mb-0.5 ${logicOutput ? 'text-emerald-400' : 'text-slate-600'}`} />
                      <span className="font-mono font-bold text-sm">{logicOutput ? '1' : '0'}</span>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                  <span>Toggle Input A & B above to see the output change live</span>
                  <span className="font-mono text-orange-400 font-semibold">{getGateFormula(selectedGate)}</span>
                </div>
              </div>

            </div>

            {/* Right: Truth Table */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                Truth Table: {selectedGate} Gate
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Current active state row is highlighted based on your input toggles.
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Input A</th>
                      <th className="py-2.5 px-3">Input B</th>
                      <th className="py-2.5 px-3 text-right">Output Q</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {[
                      { a: false, b: false },
                      { a: false, b: true },
                      { a: true, b: false },
                      { a: true, b: true },
                    ].map((row, idx) => {
                      const out = computeGateOutput(selectedGate, row.a, row.b);
                      const isCurrent = (row.a === inputA) && (row.b === inputB);
                      return (
                        <tr
                          key={idx}
                          className={`transition-colors ${
                            isCurrent
                              ? 'bg-blue-600/20 text-white font-bold'
                              : 'text-slate-400 hover:bg-slate-900/40'
                          }`}
                        >
                          <td className="py-2.5 px-3">
                            <span className={row.a ? 'text-orange-400' : 'text-slate-500'}>
                              {row.a ? '1' : '0'}
                            </span>
                          </td>
                          <td className="py-2.5 px-3">
                            <span className={row.b ? 'text-blue-400' : 'text-slate-500'}>
                              {row.b ? '1' : '0'}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className={out ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                              {out ? '1 (HIGH)' : '0 (LOW)'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-white">ECE Lab Concept:</strong> In Digital Electronics coursework, understanding logic propagation and combinational gates provides the bedrock for microprocessors, arithmetic logic units (ALUs), and VLSI circuit synthesis.
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
