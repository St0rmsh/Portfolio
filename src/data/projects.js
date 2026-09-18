export const projects = [
 {
  "id": "1",
  "slug": "zentro",
  "number": "01",
  "title": "Zentro",
  "subtitle": "Scalable Full-Stack Platform for Modern Applications",
  "category": "Full-Stack Development",
  "year": "2026",
  "role": "Full-Stack Engineer",

  "description": "A production-ready full-stack platform built with React, TypeScript, Node.js, Express, and MongoDB, featuring secure authentication, real-time communication, media management, and a scalable modular architecture.",

  "longDescription": "Zentro is a production-ready full-stack platform engineered to demonstrate how modern web applications can be designed for security, scalability, and maintainability. The frontend is built with React 19, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Router, Axios, Framer Motion, and Recharts, providing a responsive and highly interactive application experience. The backend is powered by Node.js, Express, TypeScript, and MongoDB, following a modular three-layer architecture that separates controllers, services, and data models. Zentro includes JWT-based authentication with access and refresh tokens, secure session management, OTP-based email verification, password recovery, and OAuth authentication through Google and GitHub. Nodemailer and Gmail SMTP power transactional email workflows, while MongoDB TTL indexes automatically handle OTP expiration. Socket.IO provides real-time communication, Redis supports session and distributed infrastructure requirements, and ImageKit handles media management. The project also incorporates rate limiting, security headers, request validation, automated testing, end-to-end testing, PWA capabilities, and a scalable API structure designed for future feature expansion.",

  "coverImage": "/projects/Zentro/Zentro-logo.png",

  "heroImage": "/projects/Zentro/Zentro-hero.png",

  "gallery": [
  "/projects/Zentro/Zentro-gallery-1.png",
  "/projects/Zentro/Zentro-gallery-2.png",
  "/projects/Zentro/Zentro-gallery-3.png",
  "/projects/Zentro/Zentro-gallery-4.png",
  "/projects/Zentro/Zentro-gallery-5.png",
  "/projects/Zentro/Zentro-gallery-6.png"
  ],

  "tags": [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux Toolkit",
  "Tailwind CSS",
  "JWT",
  "Socket.IO",
  "Redis",
  "Nodemailer",
  "OAuth",
  "ImageKit"
  ], 

   "liveUrl": "https://zentro-pwp3.onrender.com",
    "repoUrl": "https://github.com/St0rmsh/Zentro"
  },
  {
    "id": "2",
    "slug": "AI_Battle_Arena",
    "number": "02",
    "title": "AI Battle Arena",
    "subtitle": "AI Model Comparison Platform with Intelligent AI Judging",
    "category": " AI Applications Full Stack Development",
    "year": "2026",
    "role": "Full Stack Engineer",
    "description": "AI Battle Arena is an interactive web application where two AI models compete by answering the same user prompt. A third AI model acts as an unbiased judge, evaluating each response for accuracy, reasoning, relevance, and overall quality before declaring the winner.",
    "longDescription": "AI Battle Arena is a modern AI evaluation platform that enables users to compare the capabilities of different large language models in real time. Users submit a single prompt, which is simultaneously sent to two competing AI models. Once both models generate their responses, a dedicated Judge AI analyzes each answer based on multiple criteria, including factual accuracy, logical reasoning, completeness, clarity, creativity, and relevance. The platform presents both responses side by side along with detailed scoring, strengths, weaknesses, and an explanation of why one model outperformed the other. Built with a modern React frontend and a scalable Node.js backend, AI Battle Arena provides real-time response streaming, battle history, and an intuitive interface for exploring the strengths and limitations of different AI models. It serves as both a practical benchmarking tool for AI enthusiasts and an educational platform for understanding how different language models perform across diverse tasks. ",
    "coverImage": "/projects/AI_Battle-Arena/Ai_battle_arena-logo.png",
    "heroImage": "/projects/AI_Battle-Arena/gallery-1.png",
    "gallery": [
      "/projects/AI_Battle-Arena/gallery-6.png",
      "/projects/AI_Battle-Arena/gallery-2.png",
      "/projects/AI_Battle-Arena/gallery-7.png",
      "/projects/AI_Battle-Arena/gallery-3.png"
    ],
    "tags": ["React","TypeScript","Node.js","Express.js","MongoDB","AI","LLM","LangChain","LangGraph","Mistral AI","Google Gemini","Prompt Engineering","Agentic AI","AI Evaluation","Real-Time Streaming","REST API","Tailwind CSS"],
    "liveUrl": "https://backend-m8c6.onrender.com/",
     "repoUrl": " https://github.com/St0rmsh/AI_Battle_Arena"
  },
  {
    "id": "3",
    "slug": "streamline",
    "number": "03",
    "title": "StreamLine",
    "subtitle": "AI-Verified Video Platform with Trust & Moderation Engine",
    "category": "Full-Stack Development",
    "year": "2026",
    "role": "Full-Stack Engineer",
    "description": "A YouTube-style video platform with an AI-powered verification pipeline — fact-checking claims, detecting AI-generated content, and scoring trust before a video goes live.",
    "longDescription": "StreamLine is a full-stack video platform built on Express, MongoDB, and Socket.io, with a background processing pipeline that runs every uploaded video through multi-stage AI analysis before publishing. Video is converted and transcoded with ffmpeg, transcribed via AssemblyAI, and cross-checked for factual claims using a LangChain-orchestrated Gemini pipeline grounded with real-time Tavily web search. A lightweight computer-vision heuristic layer (face detection via face-api.js running on a WASM TensorFlow.js backend) flags visual inconsistencies as a supporting signal alongside AI-content detection. Results feed into a fraud-scoring and moderation system that assigns a trust meter, risk level, and auto-moderation flags to each video. Media is delivered through ImageKit with HLS playback on the frontend, and the whole upload flow runs asynchronously with BullMQ and Redis so large files never block the request thread. The React/Vite frontend uses Redux Toolkit for state, Framer Motion for interaction polish, and Socket.io for live studio notifications.",
    "coverImage": "/projects/StreamLine/streamline-cover.png",
    "heroImage": "/projects/StreamLine/streamLine-hero.png",
    "gallery": [
      "/projects/StreamLine/gallery-2.png",
      "/projects/StreamLine/gallery-3.png",
      "/projects/StreamLine/gallery-1.png",
      "/projects/StreamLine/gallery-4.png"
    ],
    "tags": ["Express", "MongoDB", "Redis", "BullMQ", "Socket.io", "LangChain", "Gemini", "ffmpeg", "React"],
     "liveUrl": "https://streamline-chez.onrender.com",
     "repoUrl": "https://github.com/St0rmsh/StreamLine"
  },
  {
  "id": "4",
  "slug": "shopstream",
  "number": "04",
  "title": "ShopStream",
  "subtitle": "Modern Fashion E-Commerce Platform with Intelligent Shopping Experience",
  "category": "Full Stack Development",
  "year": "2026",
  "role": "Full Stack MERN Developer",
  "description": "A premium fashion e-commerce platform inspired by ShopStream, featuring seamless shopping, secure authentication, product variants, wishlist, intelligent search, and an optimized user experience.",
  "longDescription": "ShopStream Store is a modern fashion e-commerce platform designed to deliver a fast, scalable, and intuitive shopping experience. Built using the MERN Stack, the application follows a clean architecture with modular backend services and reusable frontend components. Customers can browse products, filter by categories, select size and color variants, manage wishlists and carts, securely authenticate using JWT, and place orders through a responsive interface optimized for all devices.The backend is engineered with MongoDB aggregation pipelines, Redis caching, ImageKit for media management, role-based authorization, input validation, and secure REST APIs. The frontend leverages React.js, Redux Toolkit, Context API, lazy loading, code splitting, and modern UI interactions to provide excellent performance and maintainability. The project demonstrates production-level architecture, scalability, and best practices for building large-scale e-commerce applications.",
  "coverImage": "/projects/shopstream/ShopStream-logo.png",
  "heroImage": "/projects/shopstream/Hero-pic.png",
  "gallery": [
    "/projects/shopstream/gallery-2.png",
    "/projects/shopstream/gallery-1.png",
    "/projects/shopstream/gallery-3.png",
    "/projects/shopstream/gallery-4.png",
  ],
  "tags": [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "JWT",
    "Redis",
    "ImageKit",
    "Multer",
    "Tailwind CSS",
    "REST API",
    "Context API"
  ],
   "liveUrl": "https://shopstream-js68.onrender.com/",
    "repoUrl": "https://github.com/St0rmsh/ShopStream"
},
 {
    "id": "5",
    "slug": "dog-3d-animation",
    "number": "05",
    "title": "Dog 3D Animation",
    "subtitle": "Interactive 3D Model Built with React Three Fiber",
    "category": "3D / Creative Development",
    "year": "2026",
    "role": "3D Developer",
    "description": "A fully modeled, animated 3D dog rendered live in the browser — a hands-on exercise in getting real-time 3D running smoothly on the web.",
    "longDescription": "This project is a deep dive into React Three Fiber and the broader Three.js ecosystem, built as a deliberate step toward professional-level 3D web development. The model is rendered and animated entirely client-side, with careful attention paid to performance — texture sizing, draw calls, and animation loop efficiency all had to be tuned to keep frame rates smooth rather than just getting something on screen. Camera controls, lighting setup, and material work were all built from scratch rather than relying on defaults, as part of building a genuine reference-level understanding of the R3F pipeline (drei helpers, GSAP-driven camera moves, and the underlying Three.js primitives) instead of just copying a tutorial.",
    "coverImage": "/projects/dog-animation/cover.png",
    "heroImage": "/projects/dog-animation/hero.png",
    "gallery": [
      "/projects/dog-animation/gallery-1.png",
      "/projects/dog-animation/gallery-2.png",
      "/projects/dog-animation/gallery-3.png",
      "/projects/dog-animation/gallery-4.png"
    ],
    "tags": ["React Three Fiber", "Three.js", "GSAP", "drei", "WebGL"],
     "liveUrl": "https://frontend-development-gray.vercel.app/",
    "repoUrl": "https://github.com/St0rmsh/3d-Animation-dog-studio-clone"
}
]