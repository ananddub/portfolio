export const personalInfo = {
   name: "Anand Kumar Dubey",
   role: "Software Engineer",
   tagline:
      "Engineering 60 FPS mobile apps, high-throughput engines in Rust & Go, and scalable distributed systems.",
   email: "duanand6@gmail.com",
   phone: "+91 8709501726",
   github: "https://github.com/ananddub",
   linkedin: "https://linkedin.com/in/ananddub/",
   location: "India",
   education: {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Vidya Vihar Institute of Technology",
      period: "July 2022 – July 2025",
   },
   bio: "Software Engineer focused on high-performance mobile engineering (Flutter, React Native, Jetpack Compose), distributed microservices (Go, Rust, gRPC, UDP), and scalable database systems. Experienced in shipping production-grade mobile platforms to the Google Play Store and engineering lock-free concurrent in-memory engines.",
   about: {
      intro:
         "I am a Software Engineer who thrives at the intersection of fluid mobile user experiences and high-throughput systems architecture.",
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
      period: "September 2025 – July 2026",
      role: "Application Developer",
      company: "Shap Digital Studios",
      description:
         "Engineered and shipped Equality Through Education (ETE) to the Google Play Store with in-app PDF caching engine and role-based authentication. Developed ThreadNest, a responsive cross-platform discussion platform in Flutter with Cloud Firestore and Karma algorithms.",
      technologies: [
         "Flutter",
         "Dart",
         "Firebase Auth",
         "Cloud Firestore",
         "PDF Engine",
         "Google Play Console",
         "Routemaster",
      ],
   },
   {
      period: "January 2025 – September 2025",
      role: "Mobile Application Developer (Internship)",
      company: "beyondNull",
      description:
         "Engineered SoundPulse high-performance audio streaming app with background playback, lock-screen controls, Zustand, and MMKV storage. Developed LudoArena 4-player turn-based board game engine with custom coordinate mapping and 60 FPS animations.",
      technologies: [
         "React Native",
         "TypeScript",
         "Zustand",
         "MMKV Storage",
         "Redux Toolkit",
         "RN Track Player",
         "Animated API",
         "Lottie",
      ],
   },
];

export const projects = [
   {
      id: "openoxide",
      title: "OpenOxide — Systems & Server Infrastructure Engine",
      description:
         "Modular server infrastructure orchestrator in Rust with compile-time SQLx queries, Docker socket daemon API, automated WireGuard peer provisioning, and OpenAPI schema generation.",
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
      title: "Incord — Full-Stack Real-Time Voice & Chat Platform",
      description:
         "Enterprise-grade distributed Discord-like platform with Go dual-transport backend (gRPC + dedicated UDP voice) and 17+ screen Kotlin Jetpack Compose client with LiveKit WebRTC.",
      fullDescription:
         "Incord is an end-to-end communication platform featuring a distributed Go backend with gRPC for transactional state and dedicated UDP voice server for low-latency voice packet forwarding. Backed by ScyllaDB, TimescaleDB, Redis, Redpanda Kafka, OpenFGA (RBAC), and a 17+ screen native Android client in Kotlin with Jetpack Compose, LiveKit WebRTC, and Room DB offline caching.",
      tech: [
         "Go (Golang)",
         "gRPC",
         "UDP Voice Server",
         "ScyllaDB",
         "TimescaleDB",
         "Kotlin",
         "Jetpack Compose",
         "LiveKit WebRTC",
         "Room DB",
      ],
      category: ["Mobile App", "Systems & Infrastructure"],
      github: "https://github.com/ananddub/incord",
      featured: true,
   },
   {
      id: "ete",
      title: "Equality Through Education (ETE) — Live Mobile Platform",
      description:
         "Production-grade educational platform deployed on Google Play Store serving students with centralized curriculum and in-app PDF caching engine.",
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
         "Audio streaming mobile app featuring background audio playback, notification/lock-screen controls, Zustand, and MMKV storage for instant hydration.",
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
   mobile: {
      title: "MOBILE ENGINEERING",
      tech: "Flutter, React Native, Jetpack Compose, Reanimated, Riverpod, Redux Toolkit, Zustand, Kotlin Coroutines, MMKV, Room DB",
      description: "Building 60 FPS offline-first apps, local caching, background audio services, and Google Play Store deployments",
   },
   backend: {
      title: "SYSTEMS & BACKEND APIS",
      tech: "Rust (Axum/Actix/Tokio), Go (gRPC/Fiber), Node.js, Express.js, Spring Boot, UDP Sockets, WebSockets, SSE",
      description: "High-concurrency microservices, distributed systems, lock-free memory engines, and low-latency APIs",
   },
   database: {
      title: "DATABASES & MESSAGING",
      tech: "PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, Redis, ScyllaDB, TimescaleDB, NATS, Kafka, Redpanda, MQTT",
      description: "Distributed persistence, time-series telemetry, pub/sub streaming, and distributed locks",
   },
   devops: {
      title: "DEVOPS & DEPLOYMENT",
      tech: "Docker, Kubernetes, Docker Swarm, Nginx, Traefik, Caddy, AWS EC2, GitHub Actions CI/CD, Nix Flakes, NixOS, Linux cgroups",
      description: "Reproducible container environments, system observability, Nixpacks, Railpack, and automation",
   },
};

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
         "Enterprise-grade distributed Discord backend in Go (gRPC + UDP voice) + Jetpack Compose Android client. ScyllaDB, TimescaleDB, Redis, Redpanda, OpenFGA, and 171 automated tests.",
      url: "https://github.com/ananddub/incord",
      isrelease: true,
      language: ["Go", "Kotlin", "Protobuf"],
      topics: ["grpc", "udp", "webrtc", "scylladb", "jetpack-compose"],
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
      title: "Cross-Platform Mobile Apps",
      description:
         "High-performance mobile apps built with React Native and Flutter. Fluid 60 FPS UI, offline-first caching, background audio services, and Google Play Store production deployment.",
      icon: "Smartphone",
      features: [
         "React Native & Flutter",
         "Native Android (Compose)",
         "Offline Storage (MMKV/Room)",
         "Google Play Store Deploy",
      ],
   },
   {
      id: 2,
      title: "High-Throughput Backends",
      description:
         "Scalable backend architectures written in Go and Rust. Low-latency gRPC APIs, dedicated UDP voice protocols, and real-time WebSocket communication.",
      icon: "Server",
      features: [
         "Go (Fiber/gRPC) & Rust (Tokio)",
         "gRPC & Protocol Buffers",
         "UDP Voice Socket Engines",
         "Distributed Pub/Sub",
      ],
   },
   {
      id: 3,
      title: "Distributed Databases & Storage",
      description:
         "Designing resilient data layers with ScyllaDB, PostgreSQL, TimescaleDB, Redis caching, and MinIO S3 object storage pipelines.",
      icon: "Globe",
      features: [
         "PostgreSQL & TimescaleDB",
         "ScyllaDB & Redis",
         "Redpanda / Kafka Streaming",
         "MinIO S3 Object Storage",
      ],
   },
   {
      id: 4,
      title: "DevOps & Cloud Systems",
      description:
         "Containerization with Docker Compose, Kubernetes orchestration, NixOS reproducible systems, and automated GitHub Actions CI/CD.",
      icon: "Brain",
      features: [
         "Docker & Kubernetes",
         "Nix Flakes / NixOS",
         "GitHub Actions CI/CD",
         "Prometheus & Grafana",
      ],
   },
];

export const technologies = [
   { name: "Rust", category: "Languages", icon: "SiRust", color: "#000000" },
   { name: "Go", category: "Languages", icon: "SiGo", color: "#00ADD8" },
   { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
   { name: "JavaScript", category: "Languages", icon: "SiJavascript", color: "#F7DF1E" },
   { name: "Kotlin", category: "Languages", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Dart", category: "Languages", icon: "SiDart", color: "#0175C2" },
   { name: "C++", category: "Languages", icon: "SiCplusplus", color: "#00599C" },
   { name: "Python", category: "Languages", icon: "SiPython", color: "#3776AB" },
   { name: "Bash", category: "Languages", icon: "SiGnubash", color: "#4EAA25" },
   { name: "Flutter", category: "Mobile", icon: "SiFlutter", color: "#02569B" },
   { name: "React Native", category: "Mobile", icon: "SiReact", color: "#61DAFB" },
   { name: "Android Studio", category: "Mobile", icon: "SiAndroidstudio", color: "#3DDC84" },
   { name: "Redux Toolkit", category: "Mobile", icon: "SiRedux", color: "#764ABC" },
   { name: "TailwindCSS", category: "Mobile", icon: "SiTailwindcss", color: "#06B6D4" },
   { name: "Node.js", category: "Backend", icon: "SiNodedotjs", color: "#339933" },
   { name: "Express", category: "Backend", icon: "SiExpress", color: "#000000" },
   { name: "FastAPI", category: "Backend", icon: "SiFastapi", color: "#009688" },
   { name: "PostgreSQL", category: "Database", icon: "SiPostgresql", color: "#4169E1" },
   { name: "MongoDB", category: "Database", icon: "SiMongodb", color: "#47A248" },
   { name: "Redis", category: "Database", icon: "SiRedis", color: "#DC382D" },
   { name: "Firebase", category: "Database", icon: "SiFirebase", color: "#DD2C00" },
   { name: "Docker", category: "DevOps", icon: "SiDocker", color: "#2496ED" },
   { name: "Kubernetes", category: "DevOps", icon: "SiKubernetes", color: "#326CE5" },
   { name: "Nginx", category: "DevOps", icon: "SiNginx", color: "#009639" },
   { name: "GitHub Actions", category: "DevOps", icon: "SiGithubactions", color: "#2088FF" },
   { name: "Grafana", category: "DevOps", icon: "SiGrafana", color: "#F46800" },
   { name: "Prometheus", category: "DevOps", icon: "SiPrometheus", color: "#E6522C" },
   { name: "Kafka", category: "DevOps", icon: "SiApachekafka", color: "#231F20" },
   { name: "Linux", category: "DevOps", icon: "SiLinux", color: "#FCC624" },
   { name: "Nix", category: "DevOps", icon: "SiNixos", color: "#5277C3" },
];
