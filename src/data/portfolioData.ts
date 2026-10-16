export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  score: string;
  status: string;
  highlights: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  status: string;
  description: string;
  tags: string[];
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    note?: string;
  }[];
}

export interface ProjectLabItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  hardware: string[];
  software: string[];
  status: string;
  keyLearning: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "HARINI M",
    title: "Electronics & Communication Engineering Student",
    subheading: "Aspiring Embedded Systems & IoT Engineer",
    college: "VSB Engineering College, Coimbatore",
    year: "Currently Pursuing 2nd Year (Batch 2025 – 2029)",
    cgpa: "8.5",
    phone: "75388 86086",
    email: "harinins2715@gmail.com",
    location: "Coimbatore, Tamil Nadu",
    about: "Motivated and enthusiastic Electronics and Communication Engineering student currently pursuing 2nd year, with a strong interest in electronics, embedded systems, IoT, and programming. Eager to gain practical experience, learn emerging technologies, and develop professional skills through internships and industry opportunities.",
    avatarUrl: "/src/assets/images/harini_profile_avatar_1792122590068.jpg",
    labImageUrl: "/src/assets/images/embedded_iot_lab_1792122590112.jpg",
    circuitImageUrl: "/src/assets/images/robotics_circuit_concept_1792122590736.jpg",
  },

  metrics: [
    { label: "Academic CGPA", value: "8.5", subtext: "VSB Engineering College (Batch 2025-2029)" },
    { label: "Internship Completed", value: "CloudMation", subtext: "Embedded Systems & IoT Specialization" },
    { label: "Core Technical Domains", value: "8+", subtext: "Embedded, IoT, Robotics, VLSI, Circuits" },
    { label: "Programming Languages", value: "4", subtext: "C, C++, Python, Java Basics" },
  ],

  education: [
    {
      period: "2025 - 2029",
      degree: "B.E. Electronics and Communication Engineering (ECE)",
      institution: "VSB Engineering College, Coimbatore",
      score: "CGPA: 8.5",
      status: "Currently Pursuing 2nd Year (Batch 2025 – 2029)",
      highlights: [
        "Specializing in Embedded Microcontrollers, Analog & Digital Systems, and Signal Flow",
        "Active participant in technical symposiums, circuit design laboratories, and IoT design projects",
        "Consistent academic excellence maintaining 8.5 CGPA in foundational engineering curriculum"
      ],
    },
    {
      period: "2023 - 2025",
      degree: "Higher Secondary Education (HSC / 12th)",
      institution: "Krishnammal Matriculation Higher Secondary School (PSGR)",
      score: "77.6%",
      status: "Completed – 2025",
      highlights: [
        "Focus on Mathematics, Physics, and Chemistry foundation",
        "Developed analytical aptitude and computational problem-solving"
      ],
    },
    {
      period: "2022 - 2023",
      degree: "Secondary Education (SSLC / 10th)",
      institution: "Krishnammal Matriculation Higher Secondary School (PSGR)",
      score: "77.4%",
      status: "Completed – 2023",
      highlights: [
        "Distinction in science and logical mathematics",
        "Participated in school science exhibitions and technical presentations"
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      period: "May 2026 - June 2026",
      role: "Embedded Systems & IoT Intern",
      organization: "CloudMation",
      location: "Coimbatore, Tamil Nadu",
      status: "Completed",
      description: "Completed intensive industrial internship focused on Embedded Systems & IoT. Gained hands-on experience in IoT architecture, sensor integration, microcontroller programming, and real-time data capture applications.",
      tags: ["Microcontrollers", "Sensors & Actuators", "Arduino IDE", "IoT Protocols", "Circuit Prototyping"],
      achievements: [
        "Wired, calibrated, and interfaced digital and analog sensors (temperature, ultrasonic, IR, LDR) with microcontroller boards",
        "Implemented real-time sensor data reading and actuator control logic using C/C++ in Arduino IDE",
        "Configured wireless IoT data telemetry modules to transmit sensor parameters to cloud dashboards",
        "Diagnosed electrical signal inconsistencies on breadboards using circuit analysis techniques"
      ],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      id: "programming",
      category: "Programming",
      description: "Core algorithmic logic, embedded scripting, and foundational software engineering",
      items: [
        { name: "C", level: "Proficient", note: "Firmware logic, pointers, memory & bitwise ops" },
        { name: "C++", level: "Proficient", note: "Object-oriented embedded architecture & abstractions" },
        { name: "Python", level: "Intermediate", note: "Data processing, script automation & IoT interfaces" },
        { name: "Java Basics", level: "Foundational", note: "Core OOP concepts, exception handling & syntax" },
      ],
    },
    {
      id: "electronics",
      category: "Electronics",
      description: "Hardware circuit analysis, component characterization, and signal routing",
      items: [
        { name: "Digital Electronics", level: "Strong", note: "Logic gates, flip-flops, multiplexers, encoders" },
        { name: "Analog Electronics", level: "Solid", note: "Op-amps, diodes, transistors, filters" },
        { name: "Basic Circuit Analysis", level: "Strong", note: "KCL, KVL, nodal analysis, AC/DC behavior" },
        { name: "Electronic Components", level: "Hands-on", note: "Capacitors, inductors, ICs, relays, regulators" },
      ],
    },
    {
      id: "embedded",
      category: "Embedded & IoT",
      description: "Microcontroller interfacing, sensor telemetry, and connected smart systems",
      items: [
        { name: "Arduino Basics", level: "Practical", note: "GPIO configuration, PWM, ADC read, interrupt routines" },
        { name: "Sensors & Actuators", level: "Hands-on", note: "Ultrasonic, DHT, IR, LDR, Servos, Relays, DC motors" },
        { name: "Basic IoT Concepts", level: "Practical", note: "Sensor-to-Cloud architecture, UART/I2C/SPI basics" },
      ],
    },
    {
      id: "tools",
      category: "Tools & Software",
      description: "Engineering development environments and documentation suites",
      items: [
        { name: "Arduino IDE", level: "Daily Use", note: "Sketch compilation, serial monitor & library management" },
        { name: "MATLAB Basics", level: "Academic", note: "Signal modeling, matrix operations & mathematical plotting" },
        { name: "MS Excel", level: "Proficient", note: "Data tabulation, charting & parametric calculation" },
        { name: "MS PowerPoint", level: "Proficient", note: "Engineering seminar & technical project presentations" },
      ],
    },
  ] as SkillCategory[],

  areasOfInterest: [
    {
      name: "Embedded Systems",
      summary: "Designing robust firmware running on microcontrollers for dedicated real-time control applications.",
      icon: "Cpu",
      accent: "blue",
    },
    {
      name: "Internet of Things (IoT)",
      summary: "Interconnecting physical sensor nodes to communication gateways for cloud telemetry and remote automation.",
      icon: "Wifi",
      accent: "orange",
    },
    {
      name: "Robotics",
      summary: "Kinematics, actuator control loops, sensor fusion, and autonomous mobile robotic chassis.",
      icon: "Bot",
      accent: "blue",
    },
    {
      name: "VLSI Design",
      summary: "Integrated circuits, silicon floorplanning, CMOS logic design, and digital HDL synthesis.",
      icon: "Microchip",
      accent: "orange",
    },
    {
      name: "Digital Electronics",
      summary: "Combinational and sequential logic design, timing state machines, and finite state hardware.",
      icon: "Binary",
      accent: "blue",
    },
    {
      name: "Communication Systems",
      summary: "Modulation techniques, wireless signal propagation, transmission lines, and digital RF protocols.",
      icon: "Radio",
      accent: "orange",
    },
    {
      name: "Circuit Design",
      summary: "Schematic capture, PCB routing, impedance matching, and analog power distribution.",
      icon: "Workflow",
      accent: "blue",
    },
    {
      name: "Emerging Technologies",
      summary: "Edge computing AI, smart energy harvesting systems, and automated industrial sensor nets.",
      icon: "Sparkles",
      accent: "orange",
    },
  ],

  coreStrengths: [
    { title: "Problem Solving", desc: "Structured debugging of complex circuit faults and algorithmic errors." },
    { title: "Logical Thinking", desc: "Translating engineering specifications into precise boolean and state logic." },
    { title: "Quick Learning", desc: "Rapidly adopting new microcontroller architectures, SDKs, and toolchains." },
    { title: "Communication Skills", desc: "Clear technical documentation, cross-functional collaboration, and articulating ideas." },
    { title: "Team Collaboration", desc: "Proven track record in laboratory group projects and industrial team deliverables." },
    { title: "Time Management", desc: "Balancing university coursework, laboratory submissions, and industrial internships." },
    { title: "Adaptability", desc: "Excelling across both low-level hardware breadboarding and high-level programming." },
    { title: "Presentation Skills", desc: "Delivering crisp, engaging technical demonstrations and slide decks to audiences." },
  ],

  projectsAndLabs: [
    {
      id: "iot-weather",
      title: "Smart Environmental & IoT Sensor Station",
      domain: "Embedded Systems & IoT",
      description: "Designed a multi-sensor telemetry prototype using microcontroller logic to sample temperature, humidity, and ambient light levels, transmitting telemetry over serial/Wi-Fi to monitor room climate.",
      hardware: ["Arduino Board", "DHT11 Sensor", "LDR Photoresistor", "16x2 I2C LCD", "Status LEDs"],
      software: ["C/C++", "Arduino IDE", "Serial Protocol"],
      status: "Lab Prototype",
      keyLearning: "Calibration of analog voltage dividers, debouncing sensor fluctuations, and non-blocking timing routines.",
    },
    {
      id: "line-follower",
      title: "Autonomous Dual-Sensor Mobile Robot",
      domain: "Robotics & Hardware Control",
      description: "Constructed an autonomous two-wheeled robot platform using infrared phototransistor pairs to detect track contrast and drive dual DC motors through an H-Bridge motor driver with proportional steering logic.",
      hardware: ["Differential Drive Chassis", "Dual IR Sensor Array", "L293D Motor Driver", "Microcontroller"],
      software: ["Embedded C++", "PWM Speed Control"],
      status: "Hardware Demo",
      keyLearning: "PWM duty cycle tuning, differential thrust steering, and power isolation between motor noise and logic gates.",
    },
    {
      id: "digital-alu",
      title: "Combinational Logic & 4-Bit Arithmetic Unit",
      domain: "Digital Electronics & VLSI",
      description: "Designed and verified a 4-bit arithmetic and logic unit performing addition, subtraction, AND, OR, and XOR operations with zero and carry flag propagation using discrete digital IC packages.",
      hardware: ["74LS Series TTL ICs", "Breadboard Matrix", "Logic Probe", "7-Segment Display"],
      software: ["MATLAB Verification", "Truth Table Modeling"],
      status: "Completed",
      keyLearning: "Propagation delay analysis, fan-out current considerations, and boolean reduction minimization.",
    },
  ] as ProjectLabItem[],
};
