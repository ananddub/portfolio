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
   bio: "Software Engineer with 1+ year of experience focused on mobile development (Flutter, React Native, Jetpack Compose), distributed backend systems (Rust, Go, gRPC, UDP), and database infrastructure. Experienced in shipping production mobile platforms to Google Play Store and engineering lock-free concurrent in-memory engines.",
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
         "Developed and deployed Equality Through Education (ETE) to Google Play Store serving students with centralized curriculum and in-app PDF rendering engine. Built ThreadNest, a responsive cross-platform community discussion forum in Flutter with Cloud Firestore, Karma scoring, and Routemaster.",
      technologies: [
         "Flutter",
         "Dart",
         "Firebase Auth",
         "Cloud Firestore",
         "Firebase Storage",
         "PDF Engine",
         "Google Play Store Live",
         "Routemaster",
      ],
   },
   {
      period: "January 2025 – September 2025",
      role: "Mobile Application Developer (Internship)",
      company: "beyondNull",
      description:
         "Engineered SoundPulse audio streaming application with background audio playback, notification/lock-screen controls, Zustand, and MMKV storage. Developed LudoArena 4-player multiplayer game engine with custom coordinate mapping and 60 FPS animations.",
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
   languages: {
      title: "LANGUAGES",
      tech: "Rust, Go, TypeScript, JavaScript, Kotlin, Dart",
      description: "Systems programming, concurrency, type safety, and multiplatform application runtimes",
   },
   mobile: {
      title: "MOBILE DEVELOPMENT",
      tech: "Flutter, React Native, Jetpack Compose, Reanimated, Riverpod, Redux Toolkit, Kotlin Coroutines, Kotlin Flow, Firebase, Supabase",
      description: "60 FPS offline-first apps, state management, background audio services, and Google Play Store deployment",
   },
   backend: {
      title: "BACKEND APIS",
      tech: "Axum, Actix Web, Node.js, Express.js, Spring Boot, gRPC, REST, WebSocket, SSE",
      description: "High-concurrency microservices, real-time streaming, and low-latency API architectures",
   },
   database: {
      title: "DATABASES",
      tech: "PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, Redis",
      description: "Relational modeling, lock-free caching, spatial indexes, and distributed key-value storage",
   },
   messaging: {
      title: "MESSAGING & DISTRIBUTED SYSTEMS",
      tech: "NATS, JetStream, Kafka, MQTT, Pub/Sub, Distributed Locks, Event-Driven Architecture",
      description: "High-throughput message brokers, event streaming pipelines, and distributed consensus",
   },
   devops: {
      title: "DEVOPS & INFRASTRUCTURE",
      tech: "Docker, Kubernetes, Docker Swarm, Nginx, Traefik, Caddy, AWS EC2, GitHub Actions, CI/CD, SSH, Linux, cgroups",
      description: "Container orchestration, reverse proxies, automated pipelines, and Linux kernel isolation",
   },
   deployment: {
      title: "BUILD & DEPLOYMENT",
      tech: "Dockerfile, Docker CLI, Nixpacks, Railpack, Buildpacks, Git-based Deployment",
      description: "Reproducible container builds, multi-stage compilation, and automated production pipelines",
   },
   tools: {
      title: "DEVELOPER TOOLS",
      tech: "Git, GitHub, GitLab, Gitea, Bash, Linux CLI, OpenAPI, Swagger",
      description: "Version control workflows, shell automation, API contracts, and schema generation",
   },
};

export const technologies = [
   // 1. Languages
   { name: "Rust", category: "Languages", icon: "SiRust", color: "#CE412B" },
   { name: "Go", category: "Languages", icon: "SiGo", color: "#00ADD8" },
   { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
   { name: "JavaScript", category: "Languages", icon: "SiJavascript", color: "#F7DF1E" },
   { name: "Kotlin", category: "Languages", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Dart", category: "Languages", icon: "SiDart", color: "#0175C2" },

   // 2. Mobile Development
   { name: "Flutter", category: "Mobile Development", icon: "SiFlutter", color: "#02569B" },
   { name: "React Native", category: "Mobile Development", icon: "SiReact", color: "#61DAFB" },
   { name: "Jetpack Compose", category: "Mobile Development", icon: "SiAndroid", color: "#3DDC84" },
   { name: "Reanimated", category: "Mobile Development", icon: "SiReact", color: "#61DAFB" },
   { name: "Riverpod", category: "Mobile Development", icon: "SiFlutter", color: "#02569B" },
   { name: "Redux Toolkit", category: "Mobile Development", icon: "SiRedux", color: "#764ABC" },
   { name: "Kotlin Coroutines", category: "Mobile Development", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Kotlin Flow", category: "Mobile Development", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Firebase", category: "Mobile Development", icon: "SiFirebase", color: "#DD2C00" },
   { name: "Supabase", category: "Mobile Development", icon: "SiSupabase", color: "#3ECF8E" },

   // 3. Backend APIs
   { name: "Axum", category: "Backend APIs", icon: "SiRust", color: "#CE412B" },
   { name: "Actix Web", category: "Backend APIs", icon: "SiRust", color: "#CE412B" },
   { name: "Node.js", category: "Backend APIs", icon: "SiNodedotjs", color: "#339933" },
   { name: "Express.js", category: "Backend APIs", icon: "SiExpress", color: "#000000" },
   { name: "Spring Boot", category: "Backend APIs", icon: "SiSpringboot", color: "#6DB33F" },
   { name: "gRPC", category: "Backend APIs", icon: "SiGo", color: "#244C5A" },
   { name: "REST APIs", category: "Backend APIs", icon: "SiFastapi", color: "#009688" },
   { name: "WebSocket", category: "Backend APIs", icon: "SiSocketdotio", color: "#010101" },
   { name: "SSE", category: "Backend APIs", icon: "SiNodedotjs", color: "#339933" },

   // 4. Databases
   { name: "PostgreSQL", category: "Databases", icon: "SiPostgresql", color: "#4169E1" },
   { name: "MySQL", category: "Databases", icon: "SiMysql", color: "#4479A1" },
   { name: "MariaDB", category: "Databases", icon: "SiMariadb", color: "#003545" },
   { name: "SQLite", category: "Databases", icon: "SiSqlite", color: "#003B57" },
   { name: "MongoDB", category: "Databases", icon: "SiMongodb", color: "#47A248" },
   { name: "Redis", category: "Databases", icon: "SiRedis", color: "#DC382D" },

   // 5. Messaging Distributed Systems
   { name: "NATS", category: "Messaging Distributed Systems", icon: "SiNatsdotio", color: "#27ADEA" },
   { name: "JetStream", category: "Messaging Distributed Systems", icon: "SiNatsdotio", color: "#27ADEA" },
   { name: "Kafka", category: "Messaging Distributed Systems", icon: "SiApachekafka", color: "#231F20" },
   { name: "MQTT", category: "Messaging Distributed Systems", icon: "SiMqtt", color: "#660066" },
   { name: "Pub/Sub", category: "Messaging Distributed Systems", icon: "SiRedis", color: "#DC382D" },
   { name: "Distributed Locks", category: "Messaging Distributed Systems", icon: "SiRedis", color: "#DC382D" },
   { name: "Event-Driven Architecture", category: "Messaging Distributed Systems", icon: "SiApachekafka", color: "#231F20" },

   // 6. DevOps Infrastructure
   { name: "Docker", category: "DevOps Infrastructure", icon: "SiDocker", color: "#2496ED" },
   { name: "Kubernetes", category: "DevOps Infrastructure", icon: "SiKubernetes", color: "#326CE5" },
   { name: "Docker Swarm", category: "DevOps Infrastructure", icon: "SiDocker", color: "#2496ED" },
   { name: "Nginx", category: "DevOps Infrastructure", icon: "SiNginx", color: "#009639" },
   { name: "Traefik", category: "DevOps Infrastructure", icon: "SiTraefikproxy", color: "#24A1C1" },
   { name: "Caddy", category: "DevOps Infrastructure", icon: "SiCaddy", color: "#22B573" },
   { name: "AWS EC2", category: "DevOps Infrastructure", icon: "SiAmazonwebservices", color: "#FF9900" },
   { name: "GitHub Actions", category: "DevOps Infrastructure", icon: "SiGithubactions", color: "#2088FF" },
   { name: "CI/CD", category: "DevOps Infrastructure", icon: "SiGithubactions", color: "#2088FF" },
   { name: "SSH", category: "DevOps Infrastructure", icon: "SiLinux", color: "#FCC624" },
   { name: "Linux", category: "DevOps Infrastructure", icon: "SiLinux", color: "#FCC624" },
   { name: "cgroups", category: "DevOps Infrastructure", icon: "SiLinux", color: "#FCC624" },

   // 7. Build Deployment
   { name: "Dockerfile", category: "Build Deployment", icon: "SiDocker", color: "#2496ED" },
   { name: "Docker CLI", category: "Build Deployment", icon: "SiDocker", color: "#2496ED" },
   { name: "Nixpacks", category: "Build Deployment", icon: "SiNixos", color: "#5277C3" },
   { name: "Railpack", category: "Build Deployment", icon: "SiNixos", color: "#5277C3" },
   { name: "Buildpacks", category: "Build Deployment", icon: "SiDocker", color: "#2496ED" },
   { name: "Git-based Deployment", category: "Build Deployment", icon: "SiGit", color: "#F05032" },

   // 8. Developer Tools
   { name: "Git", category: "Developer Tools", icon: "SiGit", color: "#F05032" },
   { name: "GitHub", category: "Developer Tools", icon: "SiGithub", color: "#181717" },
   { name: "GitLab", category: "Developer Tools", icon: "SiGitlab", color: "#FC6D26" },
   { name: "Gitea", category: "Developer Tools", icon: "SiGitea", color: "#609926" },
   { name: "Bash", category: "Developer Tools", icon: "SiGnubash", color: "#4EAA25" },
   { name: "Linux CLI", category: "Developer Tools", icon: "SiLinux", color: "#FCC624" },
   { name: "OpenAPI", category: "Developer Tools", icon: "SiOpenapiinitiative", color: "#6BA539" },
   { name: "Swagger", category: "Developer Tools", icon: "SiSwagger", color: "#85EA2D" },
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
         "High-performance mobile apps built with Flutter and React Native. Fluid 60 FPS UI, offline-first caching, background audio services, and Google Play Store production deployment.",
      icon: "Smartphone",
      features: [
         "Flutter & React Native",
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
         "Rust (Axum/Tokio) & Go (gRPC)",
         "gRPC & Protocol Buffers",
         "UDP Voice Socket Engines",
         "Distributed Pub/Sub & NATS",
      ],
   },
   {
      id: 3,
      title: "Distributed Databases & Messaging",
      description:
         "Designing resilient data layers with PostgreSQL, ScyllaDB, Redis caching, NATS JetStream, and Kafka message brokers.",
      icon: "Globe",
      features: [
         "PostgreSQL, MySQL & SQLite",
         "Redis & ScyllaDB Caching",
         "NATS JetStream & Kafka",
         "Distributed Locks & Sharding",
      ],
   },
   {
      id: 4,
      title: "DevOps & Infrastructure",
      description:
         "Containerization with Docker Swarm, Kubernetes orchestration, reverse proxies (Nginx, Traefik, Caddy), and automated CI/CD pipelines.",
      icon: "Brain",
      features: [
         "Docker & Kubernetes",
         "Nginx, Traefik & Caddy",
         "GitHub Actions CI/CD",
         "Nixpacks & Linux CLI",
      ],
   },
];
