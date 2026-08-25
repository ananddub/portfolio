export const experiences = [
   {
      title: "Application Developer",
      company: "Shap Digital Studios",
      type: "Full-time",
      duration: "SEP 2025 - JUL 2026",
      description: `Architected and developed production-ready mobile and full-stack applications using Flutter, React Native, Firebase, and Node.js. Built the Equality Through Education (ETE) platform deployed to the Google Play Store with a custom offline-first PDF rendering engine and background synchronizers. Developed high-performance audio streaming components, responsive community forums, and optimized 60 FPS UI rendering with decoupled state architectures.`,
      image: "/company/shap.png",
   },
   {
      title: "Mobile Application Developer",
      type: "Internship",
      company: "beyondNull",
      duration: "JAN 2025 - SEP 2025",
      description: `Engineered cross-platform mobile applications in React Native and Flutter. Developed a real-time 4-player multiplayer Ludo game engine with coordinate matrix state mapping, 3D dice roll physics, and sound utilities using Redux Toolkit. Built coin-based transaction workflows, secure digital wallets, and reduced rendering latency through widget tree and selector optimizations.`,
      image: "/company/beyondnull.png",
   },
];

export const projects = [
   {
      id: 1,
      title: "Incord",
      description:
         "Full-stack real-time voice & chat platform with dual-transport architecture (gRPC + UDP voice) and native Jetpack Compose Android client.",
      fullDescription:
         "Incord is an enterprise-scale real-time communication platform modeled after Discord. It features a high-concurrency Go backend utilizing dual-transport architecture: gRPC for transactional state and dedicated UDP socket server for low-latency voice packet processing. Persistent storage is distributed across ScyllaDB for message streams, TimescaleDB for telemetry, Redis for presence pub/sub, OpenFGA for fine-grained permissions, and MinIO S3 for media. The native Android client is built with Kotlin, Jetpack Compose, LiveKit WebRTC, and Room DB offline caching.",
      tech: [
         "Go",
         "gRPC",
         "UDP",
         "Kotlin",
         "Jetpack Compose",
         "LiveKit WebRTC",
         "ScyllaDB",
         "TimescaleDB",
         "Redis",
         "Docker",
      ],
      category: ["Mobile App", "Systems"],
      github: "https://github.com/ananddub/incord",
      demo: null,
      image: "/projects/incord.png",
      featured: true,
   },
   {
      id: 2,
      title: "OpenOxide",
      description:
         "High-performance modular server infrastructure control engine and node orchestrator in Rust with zero-overhead memory safety.",
      fullDescription:
         "OpenOxide is a high-performance systems and server management platform written in Rust. It provides compile-time type-checked SQLx persistence with SQLite, host-key pinned SSH client wrappers, automated WireGuard peer provisioning, and Docker socket daemon management for secure containerized orchestration. Includes automated metrics ingestion pipelines and OpenAPI schema generation.",
      tech: [
         "Rust",
         "TypeScript",
         "SQLx",
         "SQLite",
         "Docker Socket",
         "WireGuard",
         "Tokio",
         "OpenAPI",
      ],
      category: ["Systems", "Tool"],
      github: "https://github.com/ananddub/openoxide",
      demo: null,
      image: "/projects/openoxide.png",
      featured: true,
   },
   {
      id: 3,
      title: "CartWave",
      description:
         "Full-stack cross-platform e-commerce mobile application with Redux cart state engine, Express.js REST API, and MongoDB.",
      fullDescription:
         "CartWave is a full-stack shopping mobile app built with React Native and TypeScript. It features dynamic banner carousels, categorized product browsing, search filtering, and real-time cart state synchronization powered by Redux Toolkit. The backend is an Express.js REST API service with MongoDB Mongoose models, automated database seed scripts, and an integrated AdminJS dashboard for managing catalog inventory and customer orders.",
      tech: [
         "React Native",
         "TypeScript",
         "Redux Toolkit",
         "Node.js",
         "Express",
         "MongoDB",
         "AdminJS",
      ],
      category: ["Mobile App", "Full-Stack"],
      github: "https://github.com/ananddub/cartwave",
      demo: null,
      image: "/projects/cartwave.png",
      featured: true,
   },
   {
      id: 4,
      title: "SoundPulse",
      description:
         "High-performance mobile audio streaming platform featuring background playback, lock-screen controls, and MMKV cache.",
      fullDescription:
         "SoundPulse is a music streaming mobile application built with React Native and TypeScript. It integrates React Native Track Player for seamless background audio playback, notification/lock-screen controls, and gesture-driven modal player sheets. State management is powered by Zustand with MMKV for instant local hydration and dynamic artwork palette color extraction.",
      tech: [
         "React Native",
         "TypeScript",
         "Zustand",
         "RN Track Player",
         "MMKV",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/soundpulse",
      demo: null,
      image: "/projects/soundpulse.png",
      featured: true,
   },
   {
      id: 5,
      title: "LudoArena",
      description:
         "Real-time 4-player multiplayer board game engine with collision algorithms, 60 FPS animations, and Redux Toolkit.",
      fullDescription:
         "LudoArena is a cross-platform board game engine built in React Native. It implements custom coordinate matrix mapping (PlotData), automated turn-switching rules, safe-spot logic, and token collision state machines. Features 60 FPS 3D dice roll physics, synchronized audio SFX triggers, and celebration modal dialogs.",
      tech: [
         "React Native",
         "Redux Toolkit",
         "Animated API",
         "Lottie",
         "Sound Utility",
      ],
      category: ["Mobile App", "Game"],
      github: "https://github.com/ananddub/ludoarena",
      demo: null,
      image: "/projects/ludoarena.png",
      featured: true,
   },
   {
      id: 6,
      title: "ThreadNest",
      description:
         "Responsive cross-platform community discussion forum supporting Mobile and Web layouts with Firebase and Routemaster.",
      fullDescription:
         "ThreadNest is a full-stack community discussion platform built with Flutter and Firebase. It features adaptive layouts for Android, iOS, and Desktop Web, subreddit community management, Google/Guest authentication, upvote/downvote scoring, Karma calculation, nested comment trees, and Routemaster declarative navigation.",
      tech: [
         "Flutter",
         "Dart",
         "Firebase Auth",
         "Cloud Firestore",
         "Routemaster",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/threadnest",
      demo: null,
      image: "/projects/threadnest.png",
      featured: true,
   },
   {
      id: 7,
      title: "Equality Through Education",
      description:
         "Production educational platform deployed to Google Play Store with custom offline PDF rendering and caching engine.",
      fullDescription:
         "Equality Through Education (ETE) is a live production mobile application deployed on the Google Play Store serving students across institutions. It features an in-app PDF reader with background download pipelines, local file caching, role-based authentication, and Firebase cloud data synchronization.",
      tech: [
         "Flutter",
         "Dart",
         "Firebase",
         "Cloud Firestore",
         "PDF Engine",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub",
      demo: "https://play.google.com/store",
      image: "/projects/ete.png",
      featured: true,
   },
];

export const skills = {
   mobile: {
      title: "MOBILE ENGINEERING",
      tech: "React Native, Flutter, Kotlin, Jetpack Compose, Riverpod, Redux Toolkit, Zustand, MMKV",
      description: "Building 60 FPS, offline-first cross-platform and native Android applications",
   },
   backend: {
      title: "SYSTEMS & BACKEND",
      tech: "Go (Golang), Rust, gRPC, Protobuf, UDP Sockets, Fiber, Tokio, SQLx, FastAPI",
      description: "High-concurrency microservices, distributed systems, and low-latency APIs",
   },
   database: {
      title: "DATABASES & STREAMING",
      tech: "PostgreSQL, ScyllaDB, TimescaleDB, Redis, Redpanda (Kafka), MongoDB, MinIO, Firebase",
      description: "Distributed persistence, time-series telemetry, and pub/sub streaming",
   },
   devops: {
      title: "DEVOPS & INFRASTRUCTURE",
      tech: "Docker, Kubernetes, Nix Flakes, NixOS, Linux, GitHub Actions CI/CD, Grafana, Prometheus",
      description: "Reproducible container environments, system observability, and automation",
   },
};

export const services = [
   {
      id: 1,
      title: "Cross-Platform Mobile Apps",
      description:
         "High-performance mobile apps built with React Native and Flutter. Fluid 60 FPS UI, offline-first caching, background audio services, and Play Store deployment.",
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
      icon: "Database",
      features: [
         "PostgreSQL & TimescaleDB",
         "ScyllaDB (Cassandra) & Redis",
         "Redpanda / Kafka Streaming",
         "MinIO S3 Object Storage",
      ],
   },
   {
      id: 4,
      title: "DevOps & Cloud Systems",
      description:
         "Containerization with Docker Compose, Kubernetes orchestration, NixOS reproducible systems, and automated GitHub Actions CI/CD.",
      icon: "Cloud",
      features: [
         "Docker & Kubernetes",
         "Nix Flakes / NixOS",
         "GitHub Actions CI/CD",
         "Prometheus & Grafana",
      ],
   },
];

export const technologies = [
   { name: "Go", category: "Languages", icon: "SiGo", color: "#00ADD8" },
   { name: "Rust", category: "Languages", icon: "SiRust", color: "#000000" },
   { name: "Kotlin", category: "Languages", icon: "SiKotlin", color: "#7F52FF" },
   { name: "Dart", category: "Languages", icon: "SiDart", color: "#0175C2" },
   { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
   { name: "JavaScript", category: "Languages", icon: "SiJavascript", color: "#F7DF1E" },
   { name: "Python", category: "Languages", icon: "SiPython", color: "#3776AB" },
   { name: "C++", category: "Languages", icon: "SiCplusplus", color: "#00599C" },
   { name: "Bash", category: "Languages", icon: "SiGnubash", color: "#4EAA25" },
   { name: "React Native", category: "Mobile", icon: "SiReact", color: "#61DAFB" },
   { name: "Flutter", category: "Mobile", icon: "SiFlutter", color: "#02569B" },
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
   { name: "Appwrite", category: "Database", icon: "SiAppwrite", color: "#FD366E" },
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

export const openSourceRepos = [
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
      name: "cartwave",
      description:
         "Full-stack cross-platform e-commerce mobile platform with React Native, Redux Toolkit, and Node.js Express REST API with MongoDB.",
      url: "https://github.com/ananddub/ferrodb",
      name: "ferrodb",
      description: "A Redis-compatible in-memory key-value store written in Rust with lock-free concurrent hash map (EBR) outperforming multi-node clusters.",
      language: ["Rust"],
      topics: ["redis", "database", "lock-free", "rust"],
      stars: true,
      forks: true,
   },
   {
      name: "cartwave",
      description: "Full-stack cross-platform e-commerce mobile platform with React Native, Redux Toolkit, and Node.js Express REST API with MongoDB.",
      url: "https://github.com/ananddub/cartwave",
      isrelease: true,
      language: ["TypeScript", "JavaScript"],
      topics: ["react-native", "redux-toolkit", "express", "mongodb"],
      stars: true,
      forks: true,
   },
];
