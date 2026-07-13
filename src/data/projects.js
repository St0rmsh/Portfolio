export const projects = [
  {
    "id": "1",
    "slug": "zentro-backend",
    "number": "01",
    "title": "Zentro",
    "subtitle": "Scalable Backend Infrastructure for Modern Apps",
    "category": "Backend Development",
    "year": "2025",
    "role": "Backend Engineer",
    "description": "A production-ready Node.js/Express backend with JWT auth, OTP email verification, and modular three-layer architecture built for scale.",
    "longDescription": "Zentro is a full-featured backend system engineered for modern SaaS applications. It implements a clean three-layer architecture — controllers, services, and models — keeping business logic decoupled and testable. The auth system supports JWT-based sessions alongside OTP email verification powered by Nodemailer and Gmail SMTP, with MongoDB TTL indexes handling automatic OTP expiry. Dark-themed, table-based transactional email templates ensure visual consistency across all email clients. The API is fully typed with TypeScript and structured for horizontal scaling.",
    "coverImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
    ],
    "tags": ["Node.js", "TypeScript", "MongoDB", "Express", "Nodemailer"]
  },
  {
    "id": "2",
    "slug": "obsidian-ide",
    "number": "02",
    "title": "Obsidian IDE",
    "subtitle": "Cloud-Based IDE with AI Coding Assistant",
    "category": "Full Stack Development",
    "year": "2025",
    "role": "Full Stack Engineer",
    "description": "A VSCode-inspired cloud IDE running on Kubernetes with an AI agent powered by LangChain and Mistral, real-time SSE streaming, and subdomain-based sandbox routing.",
    "longDescription": "Obsidian IDE is a microservices-based cloud development environment designed to run isolated coding sandboxes per user. Each sandbox is a Kubernetes pod with a Redis TTL-based lifecycle, auto-destroyed when idle. The AI coding assistant is built on LangChain with Mistral as the LLM, streaming responses to the client via Server-Sent Events. Google OAuth handles authentication with JWT session management. RabbitMQ drives async notifications via Nodemailer, and nginx ingress routes sandbox previews through dynamic subdomains (*.preview.localhost). Skaffold enables hot-rebuild during development.",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&q=80"
    ],
    "tags": ["Kubernetes", "LangChain", "Mistral AI", "React", "RabbitMQ"]
  },
  {
    "id": "3",
    "slug": "portfolio-v2",
    "number": "03",
    "title": "Portfolio V2",
    "subtitle": "Immersive Developer Portfolio with Motion Design",
    "category": "Frontend Development",
    "year": "2026",
    "role": "Frontend Engineer & Designer",
    "description": "A Next.js portfolio with Lenis smooth scrolling, GSAP ScrollTrigger animations, and a custom design system built for maximum visual impact.",
    "longDescription": "Portfolio V2 is a complete redesign focused on motion-first storytelling. Built with Next.js 14 App Router, it uses Lenis for buttery smooth scrolling wired into GSAP's ticker to eliminate ScrollTrigger conflicts. Every section has a purpose-built scroll animation — parallax heroes, pinned panels, staggered reveals, and horizontal scrolling project showcases. The design system is built entirely with CSS custom properties, with a dark base palette and carefully tuned typographic scale using variable fonts. Performance is a first-class concern with lazy-loaded assets and optimized LCP.",
    "coverImage": "https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
    ],
    "tags": ["Next.js", "GSAP", "Lenis", "Framer Motion", "Tailwind CSS"]
  },
  {
  "id": "4",
  "slug": "snitch-store",
  "number": "04",
  "title": "Shop Stream",
  "subtitle": "Modern Fashion E-Commerce Platform with Intelligent Shopping Experience",
  "category": "Full Stack Development",
  "year": "2026",
  "role": "Full Stack MERN Developer",
  "description": "A premium fashion e-commerce platform inspired by Snitch, featuring seamless shopping, secure authentication, product variants, wishlist, intelligent search, and an optimized user experience.",
  "longDescription": "Snitch Store is a modern fashion e-commerce platform designed to deliver a fast, scalable, and intuitive shopping experience. Built using the MERN Stack, the application follows a clean architecture with modular backend services and reusable frontend components. Customers can browse products, filter by categories, select size and color variants, manage wishlists and carts, securely authenticate using JWT, and place orders through a responsive interface optimized for all devices.The backend is engineered with MongoDB aggregation pipelines, Redis caching, ImageKit for media management, role-based authorization, input validation, and secure REST APIs. The frontend leverages React.js, Redux Toolkit, Context API, lazy loading, code splitting, and modern UI interactions to provide excellent performance and maintainability. The project demonstrates production-level architecture, scalability, and best practices for building large-scale e-commerce applications.",
  "coverImage": "/projects/shopstream/shopstream-overImage.png",
  "heroImage": "/projects/shopstream/shopstream-overImage.png",
  "gallery": [
    "/projects/shopstream/gallery-4.png",
    "/projects/shopstream/gallery-2.png",
    "/projects/shopstream/gallery-3.png",
    "/projects/shopstream/gallery-1.png",
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
    "repoUrl": "https://github.com/St0rmsh/Backend/tree/main/Snitch"
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