export const personalInfo = {
   name: "Anand Kumar Dubey",
   role: "Software Engineer",
   tagline:
      "Engineering 60 FPS mobile apps (Flutter, Jetpack ComposeUI), high-throughput systems in Go & Rust, and distributed microservices.",
   email: "duanand6@gmail.com",
   phone: "+91-9122349557",
   github: "https://github.com/ananddub",
   linkedin: "https://linkedin.com/in/ananddub/",
   location: "Bengaluru, India",
   education: {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vidya Vihar Institute Of Technology",
      period: "2022 – 2025",
      score: "CGPA 7.7 / 10",
   },
   bio: "Software Engineer based in Bengaluru, India with 1+ year of professional experience specializing in native & cross-platform mobile development (Flutter, Jetpack ComposeUI, React Native), distributed backend microservices (Go, Rust, Node.js, gRPC), and cloud databases. Experienced in shipping production mobile apps to Google Play Store and engineering real-time communication engines.",
   about: {
      intro:
         "I am a Software Engineer who thrives at the intersection of fluid mobile user interfaces and scalable distributed backend architecture.",
      philosophy:
         "Great software requires uncompromising performance at the systems level and obsessive attention to detail at the user interface.",
      hobbies: [
         "Distributed Systems Research",
         "Kernel & Systems Programming",
         "Open Source Architecture",
         "Mobile UX Prototyping",
      ],
   },
};

export const experiences = [
   {
      period: "Feb 2025 – April 2026",
      role: "Mobile & Full-Stack Engineer",
      company: "ShapTech (Remote)",
      description:
         "• E-Commerce Platform: Built modern e-commerce mobile application using SwiftUI for iOS and Jetpack Compose for Android with seamless navigation, product listings, cart, and checkout.\n• Coin-Based Digital Wallet: Engineered scalable Flutter digital wallet application enabling coin transactions across hospitality properties with gRPC Protobuf microservices for low-latency real-time sync.\n• Equality Through Education (ETE): Shipped production-grade educational platform to Google Play Store with centralized curriculum access and in-app administrative PDF distribution dashboard.",
      technologies: [
         "SwiftUI",
         "Jetpack Compose",
         "Flutter",
         "Dart",
         "gRPC",
         "Protocol Buffers",
         "Firebase Auth",
         "Cloud Firestore",
         "REST APIs",
         "PDF Engine",
      ],
   },
   {
      period: "January 2025 – September 2025",
      role: "Mobile Application Developer (Internship)",
      company: "beyondNull",
      description:
         "• SoundPulse: Engineered high-performance mobile audio streaming app with background playback, lock-screen controls, Zustand, and MMKV storage.\n• LudoArena: Developed 4-player cross-platform game engine with custom coordinate matrix mapping ('PlotData'), collision mechanics, and 60 FPS animations.",
      technologies: [
         "React Native",
         "TypeScript",
         "Zustand",
         "MMKV Storage",
         "Redux Toolkit",
         "RN Track Player",
         "Animated API",
         "Lottie",
         "Sound Utility",
      ],
   },
];

export const projects = [
   {
      id: "openoxide",
      title: "OpenOxide — Systems & Infrastructure Orchestrator",
      description:
         "Modular server infrastructure orchestrator in Rust featuring compile-time type-checked SQLx persistence, raw Docker socket daemon management, automated WireGuard tunnels, and OpenAPI schema generators.",
      fullDescription:
         "OpenOxide is a modular server infrastructure control engine written in Rust. It manages host-level container environments via the raw Docker daemon socket, provisions automated WireGuard tunnels with dynamic keypair negotiation, and utilizes compile-time verified SQLx SQLite storage for zero-overhead node management.",
      tech: [
         "Rust",
         "Tokio",
         "SQLx",
         "SQLite",
         "Docker Socket API",
         "WireGuard",
         "OpenAPI",
         "TypeScript",
      ],
      category: ["Systems & Infrastructure"],
      github: "https://github.com/ananddub/openoxide",
      featured: true,
   },
   {
      id: "ferrodb",
      title: "FerroDB — Redis-Compatible Lock-Free In-Memory Database",
      description:
         "High-throughput in-memory key-value database engine in Rust with custom lock-free concurrent hash map (EBR), seqlock mutation, and RESP2/RESP3 protocol.",
      fullDescription:
         "FerroDB is a distributed in-memory key-value database built in Rust. It utilizes a custom sharded lock-free concurrent hash map with Epoch-Based Reclamation (EBR) and per-key seqlock for safe concurrent in-place mutations. Implements zero-copy RESP2/RESP3 parsers, TTL key expiration, ZSet skiplist, transactions (MULTI/EXEC), lock-free Pub/Sub, and RDB binary persistence.",
      tech: [
         "Rust",
         "Tokio",
         "Lock-Free EBR",
         "Seqlock",
         "RESP3",
         "SkipList",
         "RDB Persistence",
      ],
      category: ["Systems & Infrastructure"],
      github: "https://github.com/ananddub/ferrodb",
      featured: true,
   },
   {
      id: "incord",
      title: "Incord (Discord Clone) — Real-Time Voice & Chat Platform",
      description:
         "Built a Discord-inspired Android application with real-time messaging, voice/video calls, and guild/channel management using Kotlin and Jetpack Compose (MVVM + Clean Architecture across 15+ screens).",
      fullDescription:
         "Features bidirectional gRPC streaming with Protocol Buffers for real-time chat, presence tracking, and state synchronization. Integrates LiveKit WebRTC SDK for low-latency voice/video calls, Hilt for dependency injection, Room for local caching, and EncryptedSharedPreferences for secure token management.",
      tech: [
         "Kotlin",
         "Jetpack Compose",
         "gRPC",
         "LiveKit WebRTC",
         "Hilt",
         "Room DB",
         "Go (Golang)",
         "UDP Voice Server",
         "ScyllaDB",
      ],
      category: ["Mobile App", "Systems & Infrastructure"],
      github: "https://github.com/ananddub/incord",
      featured: true,
   },
   {
      id: "ete",
      title: "Equality Through Education (ETE) — Live Mobile Platform",
      description:
         "Production educational platform deployed on Google Play Store serving students with centralized curriculum and in-app administrative PDF distribution dashboard.",
      fullDescription:
         "Equality Through Education (ETE) is a live production mobile application deployed on the Google Play Store serving students across institutions. It features an in-app PDF rendering and caching engine with background downloading and local storage for seamless offline access, role-based authentication, and Firebase cloud data synchronization.",
      tech: [
         "Flutter",
         "Dart",
         "Firebase Auth",
         "Cloud Firestore",
         "Firebase Storage",
         "PDF Engine",
         "Google Play Store Live",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub",
      demo: "https://play.google.com/store",
      featured: true,
   },
   {
      id: "soundpulse",
      title: "SoundPulse — High-Performance Audio Streaming Mobile App",
      description:
         "Audio streaming mobile app featuring background audio playback, notification/lock-screen controls, Zustand, and MMKV storage for instant state hydration.",
      fullDescription:
         "SoundPulse is a cross-platform music and audio streaming application built with React Native. Features background playback with React Native Track Player, lock-screen controls, Zustand lightweight state management, dynamic artwork color extraction, and MMKV storage for high-throughput local caching.",
      tech: [
         "React Native",
         "TypeScript",
         "Zustand",
         "React Native Track Player",
         "MMKV Storage",
         "TailwindCSS",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/soundpulse",
      featured: true,
   },
   {
      id: "cartwave",
      title: "CartWave — Full-Stack E-Commerce Mobile Platform",
      description:
         "Cross-platform shopping platform with custom Redux Toolkit cart engine, Node.js Express REST API, and MongoDB persistence.",
      fullDescription:
         "CartWave is a full-stack mobile e-commerce platform built with React Native and TypeScript. It features a reactive Redux Toolkit state machine for local cart synchronization, categorized catalog browsing, search filters, order placement pipelines, and an Express.js backend with MongoDB and AdminJS.",
      tech: [
         "React Native",
         "TypeScript",
         "Redux Toolkit",
         "Node.js",
         "Express.js",
         "MongoDB",
         "AdminJS",
      ],
      category: ["Mobile App", "Full-Stack Web"],
      github: "https://github.com/ananddub/cartwave",
      featured: true,
   },
   {
      id: "ludoarena",
      title: "LudoArena — Real-Time Multiplayer Board Game Engine",
      description:
         "Turn-based 4-player multiplayer board game engine with collision algorithms, safe-spot validation, and 60 FPS animations.",
      fullDescription:
         "LudoArena is a cross-platform multiplayer game engine built with React Native. It utilizes coordinate mapping matrices ('PlotData') for board navigation, custom collision detection, dynamic 3D dice physics, synchronized audio SFX triggers, and celebration modal dialogs.",
      tech: [
         "React Native",
         "TypeScript",
         "Redux Toolkit",
         "Animated API",
         "Lottie",
         "Sound Utility",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/ludoarena",
      featured: true,
   },
   {
      id: "threadnest",
      title: "ThreadNest — Responsive Community Discussion Platform",
      description:
         "Full-stack discussion community platform built with Flutter and Firebase, featuring real-time voting and hierarchical nested comments.",
      fullDescription:
         "ThreadNest is an adaptive community platform built with Flutter and Dart. Features Google and guest authentication, real-time post creation with Cloud Firestore, Karma voting algorithms, and Routemaster declarative navigation.",
      tech: [
         "Flutter",
         "Dart",
         "Firebase Auth",
         "Cloud Firestore",
         "Routemaster",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/threadnest",
      featured: true,
   },
];

export const skills = {
   languages: {
      title: "PROGRAMMING LANGUAGES",
      tech: "JavaScript, TypeScript, Kotlin, Dart, Go, Java, Rust",
      description: "Systems programming, concurrency, type safety, and native mobile runtimes",
   },
   frontend: {
      title: "FRONTEND & MOBILE TOOLS",
      tech: "Flutter, Jetpack ComposeUI, Riverpod, ViewModel, Git, GitHub, Drift, Dio, React Native",
      description: "Fluid 60 FPS UI, local caching, reactive state streams, and offline-first architecture",
   },
   backend: {
      title: "BACKEND & MICROSERVICES",
      tech: "Node.js, Express.js, MongoDB, JWT, REST APIs, Microservices, gRPC, MySQL, Postgres, Cassandra, S3, OpenFGA, Materialize, Temporal, Actix, Prisma, Drizzle",
      description: "High-concurrency microservices, gRPC Protobuf streaming, and scalable distributed storage",
   },
   devops: {
      title: "DEVOPS & CLOUD INFRASTRUCTURE",
      tech: "Kafka, Redis, NATS, Docker, Kubernetes, Jenkins, AWS, Nginx, Ansible, Traefik",
      description: "Container orchestration, automated CI/CD, reverse proxies, and event streaming brokers",
   },
   testing: {
      title: "TESTING & QUALITY ASSURANCE",
      tech: "Testcontainers, Vitest, TDD, Multi-threaded Stress Testing",
      description: "Automated containerized integration testing, unit test suites, and race condition verification",
   },
};

export const technologies = [
   // 1. Programming Languages
   { name: "JavaScript", category: "Programming Languages", icon: "SiJavascript", color: "#F7DF1E" },
   { name: "TypeScript", category: "Programming Languages", icon: "SiTypescript", color: "#3178C6" },
   
   { name: "Kotlin", category: "Programming Languages", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Dart", category: "Programming Languages", icon: "SiDart", color: "#0175C2" },
   { name: "Go", category: "Programming Languages", icon: "SiGo", color: "#00ADD8" },
   { name: "Java", category: "Programming Languages", icon: "SiOpenjdk", color: "#ED8B00" },
   { name: "Rust", category: "Programming Languages", icon: "SiRust", color: "#CE412B" },

   // 2. Frontend & Tools
   { name: "Flutter", category: "Frontend & Mobile Tools", icon: "SiFlutter", color: "#02569B" },
   { name: "Jetpack Compose", category: "Frontend & Mobile Tools", icon: "SiJetpackcompose", color: "#4285F4" },
   
   { name: "React Native", category: "Frontend & Mobile Tools", icon: "SiReact", color: "#61DAFB" },
   { name: "Riverpod", category: "Frontend & Mobile Tools", icon: "SiFlutter", color: "#02569B" },
   { name: "ViewModel", category: "Frontend & Mobile Tools", icon: "SiAndroid", color: "#3DDC84" },
   { name: "Drift", category: "Frontend & Mobile Tools", icon: "SiFlutter", color: "#02569B" },
   { name: "Dio", category: "Frontend & Mobile Tools", icon: "SiDart", color: "#0175C2" },
   { name: "Redux Toolkit", category: "Frontend & Mobile Tools", icon: "SiRedux", color: "#764ABC" },

   // 3. Backend & Microservices
   { name: "Node.js", category: "Backend & Microservices", icon: "SiNodedotjs", color: "#339933" },
   { name: "Express.js", category: "Backend & Microservices", icon: "SiExpress", color: "#000000" },
   { name: "gRPC", category: "Backend & Microservices", icon: "SiGo", color: "#244C5A" },
   { name: "REST APIs", category: "Backend & Microservices", icon: "SiFastapi", color: "#009688" },
   { name: "Microservices", category: "Backend & Microservices", icon: "SiDocker", color: "#2496ED" },
   { name: "PostgreSQL", category: "Backend & Microservices", icon: "SiPostgresql", color: "#4169E1" },
   { name: "MySQL", category: "Backend & Microservices", icon: "SiMysql", color: "#4479A1" },
   { name: "MongoDB", category: "Backend & Microservices", icon: "SiMongodb", color: "#47A248" },
   { name: "Cassandra / ScyllaDB", category: "Backend & Microservices", icon: "SiApachecassandra", color: "#556880" },
   { name: "AWS S3", category: "Backend & Microservices", icon: "SiAmazonwebservices", color: "#FF9900" },
   { name: "OpenFGA", category: "Backend & Microservices", icon: "SiAuth0", color: "#101828" },
   { name: "Materialize", category: "Backend & Microservices", icon: "SiMaterialdesign", color: "#757575" },
   { name: "Temporal", category: "Backend & Microservices", icon: "SiTemporal", color: "#000000" },
   { name: "Actix", category: "Backend & Microservices", icon: "SiRust", color: "#CE412B" },
   { name: "Prisma", category: "Backend & Microservices", icon: "SiPrisma", color: "#2D3748" },
   { name: "Drizzle", category: "Backend & Microservices", icon: "SiDrizzle", color: "#C5F74F" },

   // 4. DevOps & Cloud Infrastructure
   { name: "Kafka", category: "DevOps & Cloud", icon: "SiApachekafka", color: "#231F20" },
   { name: "Redis", category: "DevOps & Cloud", icon: "SiRedis", color: "#DC382D" },
   { name: "NATS", category: "DevOps & Cloud", icon: "SiNatsdotio", color: "#27ADEA" },
   { name: "Docker", category: "DevOps & Cloud", icon: "SiDocker", color: "#2496ED" },
   { name: "Kubernetes", category: "DevOps & Cloud", icon: "SiKubernetes", color: "#326CE5" },
   { name: "Jenkins", category: "DevOps & Cloud", icon: "SiJenkins", color: "#D24939" },
   { name: "AWS", category: "DevOps & Cloud", icon: "SiAmazonwebservices", color: "#FF9900" },
   { name: "Nginx", category: "DevOps & Cloud", icon: "SiNginx", color: "#009639" },
   { name: "Ansible", category: "DevOps & Cloud", icon: "SiAnsible", color: "#EE0000" },
   { name: "Traefik", category: "DevOps & Cloud", icon: "SiTraefikproxy", color: "#24A1C1" },
   { name: "GitHub Actions", category: "DevOps & Cloud", icon: "SiGithubactions", color: "#2088FF" },

   // 5. Testing & Quality Assurance
   { name: "Testcontainers", category: "Testing & QA", icon: "SiDocker", color: "#2B7A78" },
   { name: "Vitest", category: "Testing & QA", icon: "SiVitest", color: "#6E9F18" },
];

export const openSourceRepos = [
   {
      name: "openoxide",
      description:
         "High-performance server infrastructure engine and node orchestrator in Rust. Compile-time SQLx queries, Docker socket daemon, and WireGuard tunnels.",
      url: "https://github.com/ananddub/openoxide",
      isrelease: true,
      language: ["Rust", "TypeScript"],
      topics: ["rust", "systems", "docker", "wireguard", "sqlx"],
      stars: true,
      forks: true,
   },
   {
      name: "ferrodb",
      description:
         "A Redis-compatible in-memory key-value store written in Rust with lock-free concurrent hash map (EBR) outperforming multi-node clusters.",
      url: "https://github.com/ananddub/ferrodb",
      isrelease: true,
      language: ["Rust"],
      topics: ["redis", "database", "lock-free", "rust"],
      stars: true,
      forks: true,
   },
   {
      name: "incord",
      description:
         "Discord clone Android app in Kotlin (Jetpack Compose, MVVM + Clean Architecture) + distributed Go backend (gRPC + UDP voice). ScyllaDB, TimescaleDB, Redis, Redpanda.",
      url: "https://github.com/ananddub/incord",
      isrelease: true,
      language: ["Kotlin", "Go", "Protobuf"],
      topics: ["grpc", "udp", "webrtc", "jetpack-compose", "hilt"],
      stars: true,
      forks: true,
   },
   {
      name: "soundpulse",
      description:
         "High-performance mobile audio streaming application featuring background audio playback, lock-screen controls, Zustand, and MMKV storage.",
      url: "https://github.com/ananddub/soundpulse",
      isrelease: true,
      language: ["TypeScript", "JavaScript"],
      topics: ["react-native", "zustand", "audio-player", "mmkv"],
      stars: true,
      forks: true,
   },
   {
      name: "cartwave",
      description:
         "Full-stack cross-platform e-commerce mobile platform with React Native, Redux Toolkit, and Node.js Express REST API with MongoDB.",
      url: "https://github.com/ananddub/cartwave",
      isrelease: true,
      language: ["TypeScript", "JavaScript"],
      topics: ["react-native", "redux-toolkit", "express", "mongodb"],
      stars: true,
      forks: true,
   },
   {
      name: "ludoarena",
      description:
         "Turn-based 4-player multiplayer board game engine with collision algorithms, safe-spot logic, and 60 FPS animations.",
      url: "https://github.com/ananddub/ludoarena",
      isrelease: true,
      language: ["TypeScript", "JavaScript"],
      topics: ["react-native", "redux-toolkit", "game-engine"],
      stars: true,
      forks: true,
   },
   {
      name: "threadnest",
      description:
         "Responsive cross-platform discussion forum platform in Flutter with Cloud Firestore, Karma calculation, and Routemaster.",
      url: "https://github.com/ananddub/threadnest",
      isrelease: true,
      language: ["Dart"],
      topics: ["flutter", "firebase", "community"],
      stars: true,
      forks: true,
   },
];

export const services = [
   {
      id: 1,
      title: "Native & Cross-Platform Mobile Apps",
      description:
         "High-performance mobile applications built with Flutter, Jetpack ComposeUI, and React Native. Fluid 60 FPS UI, offline-first caching, background services, and Google Play Store production deployment.",
      icon: "Smartphone",
      features: [
         "FlutterUI & Jetpack Compose",
         "React Native & TypeScript",
         "Offline Storage (MMKV/Room/Drift)",
         "Google Play Store Deployment",
      ],
   },
   {
      id: 2,
      title: "High-Throughput Microservices",
      description:
         "Scalable backend architectures written in Go, Rust, and Node.js. Low-latency gRPC APIs with Protocol Buffers, dedicated UDP voice protocols, and real-time WebSockets.",
      icon: "Server",
      features: [
         "Go (gRPC) & Rust (Tokio/Actix)",
         "gRPC & Protocol Buffers",
         "UDP Voice Socket Engines",
         "Distributed Pub/Sub & NATS",
      ],
   },
   {
      id: 3,
      title: "Distributed Databases & Storage",
      description:
         "Designing resilient data layers with PostgreSQL, MySQL, Cassandra/ScyllaDB, Redis caching, NATS JetStream, and Kafka event streaming brokers.",
      icon: "Globe",
      features: [
         "PostgreSQL, MySQL & MongoDB",
         "Cassandra / ScyllaDB & Redis",
         "Kafka & NATS JetStream",
         "Prisma, Drizzle & SQLx ORMs",
      ],
   },
   {
      id: 4,
      title: "DevOps, Cloud & QA",
      description:
         "Containerization with Docker, Kubernetes orchestration, reverse proxies (Nginx, Traefik, Caddy), Jenkins automation, Ansible, and Testcontainers TDD test suites.",
      icon: "Brain",
      features: [
         "Docker & Kubernetes Orchestration",
         "Nginx, Traefik & Ansible",
         "Jenkins & GitHub Actions CI/CD",
         "Testcontainers & Vitest QA",
      ],
   },
];
