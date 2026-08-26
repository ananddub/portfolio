export const personalInfo = {
   name: "Anand Dubey",
   role: "Software Engineer",
   tagline:
      "Crafting 60 FPS mobile apps, high-throughput engines in Rust & Go, and scalable distributed systems.",
   email: "duanand6@gmail.com",
   github: "https://github.com/ananddub",
   location: "India",
   bio: "Software Engineer focused on cross-platform mobile development (React Native, Flutter), native Android (Kotlin / Jetpack Compose), and high-performance backend systems in Go & Rust. Experienced in building offline-first mobile apps, real-time voice & gRPC protocols, lock-free memory engines, and production deployments to Google Play Store.",
   about: {
      intro:
         "I am a Software Engineer who thrives at the intersection of fluid mobile user experiences and high-throughput systems architecture.",
      philosophy:
         "I believe great software requires both uncompromising performance at the system level and obsessive attention to detail at the user interface.",
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
      period: "2024 - Present",
      role: "Software Engineer",
      company: "Independent / Core Engineering",
      description:
         "Designing and developing high-throughput systems and mobile applications. Architected FerroDB (Redis-compatible in-memory database in Rust with lock-free EBR), Incord (distributed real-time communication platform with gRPC + UDP voice streaming), and CartWave (full-stack e-commerce mobile platform).",
      technologies: [
         "Go",
         "Rust",
         "React Native",
         "Kotlin",
         "Jetpack Compose",
         "gRPC",
         "Tokio",
         "ScyllaDB",
      ],
   },
   {
      period: "2023 - 2024",
      role: "Mobile & Full-Stack Developer",
      company: "Production Engineering",
      description:
         "Engineered production-grade mobile applications with offline-first local storage, Redux state pipelines, and background services. Built and deployed live mobile apps to the Google Play Store.",
      technologies: [
         "React Native",
         "Flutter",
         "Dart",
         "Node.js",
         "Express",
         "MongoDB",
         "Firebase",
         "Google Play Console",
      ],
   },
];

export const projects = [
   {
      id: "openoxide",
      title: "OpenOxide — Infrastructure & Node Control Engine",
      description:
         "High-performance server infrastructure orchestrator in Rust with compile-time checked SQLx queries, Docker socket daemon, and automated WireGuard peer provisioning.",
      fullDescription:
         "OpenOxide is a modular server infrastructure control engine written in Rust. It manages host-level container environments via the raw Docker daemon socket, provisions automated WireGuard tunnels with dynamic keypair negotiation, and utilizes compile-time verified SQLx SQLite storage for zero-overhead node management.",
      tech: [
         "Rust",
         "Tokio",
         "SQLx",
         "SQLite",
         "Docker Socket",
         "WireGuard",
         "TypeScript",
      ],
      category: ["Systems & Infrastructure"],
      github: "https://github.com/ananddub/openoxide",
      featured: true,
   },
   {
      id: "ferrodb",
      title: "FerroDB — Lock-Free In-Memory Database Engine",
      description:
         "High-throughput Redis-compatible in-memory key-value database engine in Rust with lock-free concurrent hash map (EBR) and RESP2/RESP3 protocol.",
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
      title: "Incord — Real-Time Voice & Chat Platform",
      description:
         "Enterprise distributed real-time platform with dual-transport architecture (Go gRPC state + dedicated UDP voice sockets) and native Jetpack Compose Android client.",
      fullDescription:
         "Incord is an end-to-end communication platform featuring a distributed Go backend with gRPC for transactional state and dedicated UDP voice server for low-latency voice packet forwarding. Backed by ScyllaDB, TimescaleDB, Redis, Redpanda Kafka, and a 17+ screen native Android client in Kotlin with Jetpack Compose, LiveKit WebRTC, and Room DB offline caching.",
      tech: [
         "Go",
         "Kotlin",
         "Jetpack Compose",
         "gRPC",
         "UDP Sockets",
         "LiveKit WebRTC",
         "ScyllaDB",
         "Redis",
      ],
      category: ["Mobile App", "Systems & Infrastructure"],
      github: "https://github.com/ananddub/incord",
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
      title: "LudoArena — Multiplayer Game Engine",
      description:
         "Turn-based 4-player multiplayer board game engine with collision algorithms, safe-spot logic, and 60 FPS animations.",
      fullDescription:
         "LudoArena is a cross-platform multiplayer game engine built with React Native. It utilizes coordinate mapping matrices for board navigation, custom collision detection, dynamic dice physics, and interactive SFX with zero frame drops.",
      tech: [
         "React Native",
         "TypeScript",
         "Redux Toolkit",
         "Animated API",
         "Lottie",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub/ludoarena",
      featured: true,
   },
   {
      id: "threadnest",
      title: "ThreadNest — Cross-Platform Community App",
      description:
         "Full-stack discussion community platform built with Flutter and Firebase, featuring real-time voting and hierarchical nested comments.",
      fullDescription:
         "ThreadNest is an adaptive community platform built with Flutter and Dart. Features Google and guest authentication, real-time post creation with Cloud Firestore, Karma voting algorithms, and Routemaster navigation.",
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
   {
      id: "ete",
      title: "Equality Through Education (ETE)",
      description:
         "Live production mobile platform deployed on Google Play Store serving students across institutions.",
      fullDescription:
         "Equality Through Education (ETE) is a live production mobile application deployed on the Google Play Store serving students across institutions. It features an in-app PDF reader with background download pipelines, local file caching, role-based authentication, and Firebase cloud data synchronization.",
      tech: [
         "Flutter",
         "Dart",
         "Firebase",
         "Cloud Firestore",
         "Google Play Store",
      ],
      category: ["Mobile App"],
      github: "https://github.com/ananddub",
      demo: "https://play.google.com/store",
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
];
