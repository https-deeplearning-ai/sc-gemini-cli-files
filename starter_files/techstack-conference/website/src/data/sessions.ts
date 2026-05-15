export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'd1-keynote-1',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. We will discuss the ethical implications, the speed of innovation, and how AI is reshaping the software landscape.',
      takeaways: ['AI Trends for 2026', 'Strategic Vision', 'Ethical AI Frameworks'],
      tracks: ['AI/ML', 'Leadership'],
      level: 'Beginner',
      speakerBio: 'Dr. Elena Rostova is the CEO of TechStack and a pioneer in artificial intelligence research.'
    }
  },
  {
    id: 'd1-lab-1',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on lab will guide you through setting up a robust MLOps pipeline using open-source tools.',
      takeaways: ['Kubernetes for ML', 'CI/CD for Models', 'Model Monitoring'],
      tracks: ['DevOps', 'AI/ML'],
      level: 'Advanced',
      speakerBio: 'Marcus Chen is a Senior DevOps Engineer specializing in machine learning infrastructure.'
    }
  },
  {
    id: 'd1-breakout-1',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively using micro-frontend architecture.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will dive deep into module federation, state sharing, and maintaining consistency across disparate frontend teams.',
      takeaways: ['Module Federation', 'Shared State', 'Team Autonomy'],
      tracks: ['Frontend', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Priya Patel is a Principal Frontend Architect at WebScale Inc.'
    }
  },
  {
    id: 'd1-breakout-2',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives with Apache Kafka.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Discover how to build fault-tolerant, scalable event streaming architectures that power mission-critical applications.',
      takeaways: ['Kafka Architecture', 'Stream Processing', 'Fault Tolerance'],
      tracks: ['Backend', 'Data Engineering'],
      level: 'Advanced',
      speakerBio: 'Sarah Johnson is a Distinguished Engineer at DataFlow Systems.'
    }
  },
  {
    id: 'd1-lab-2',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships using Graph Neural Networks.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. This session provides a practical introduction to Graph Neural Networks (GNNs) and their applications in recommendation systems and fraud detection.',
      takeaways: ['GNN Fundamentals', 'PyTorch Geometric', 'Graph Data Processing'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Isabella Martinez is a Research Scientist focusing on geometric deep learning.'
    }
  },
  {
    id: 'd1-breakout-3',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs and rendering performance in React.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. We will cover concurrent rendering, server components, and advanced memoization techniques to ensure your React apps run at 60fps.',
      takeaways: ['React Compiler', 'Server Components', 'Profiling'],
      tracks: ['Frontend', 'Performance'],
      level: 'Intermediate',
      speakerBio: 'David Kim is a Core Maintainer of several popular React libraries.'
    }
  },
  {
    id: 'd1-breakout-4',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities and scaled to millions of users.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. A deep dive into the database schema, caching strategies, and moderation tools required to support a thriving online community.',
      takeaways: ['Database Scaling', 'Content Moderation', 'User Engagement'],
      tracks: ['Full Stack', 'Product'],
      level: 'Beginner',
      speakerBio: 'James Wilson is the CTO of CommunityHub.'
    }
  },
  {
    id: 'd1-lab-3',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for massive data ingestion.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Build a high-throughput data pipeline using Apache Spark and Airflow. Learn to handle backpressure and ensure data quality.',
      takeaways: ['Apache Spark', 'Airflow', 'Data Quality'],
      tracks: ['Data Engineering', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Robert Garcia is a Lead Data Engineer at BigData Corp.'
    }
  },
  {
    id: 'd1-breakout-5',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth and sustainability in open source.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. Learn how to govern open source projects effectively, attract contributors, and ensure long-term sustainability.',
      takeaways: ['Governance Models', 'Community Building', 'Licensing'],
      tracks: ['Open Source', 'Leadership'],
      level: 'Beginner',
      speakerBio: 'Thomas Lee is the Executive Director of the Open Tech Foundation.'
    }
  },
  {
    id: 'd1-breakout-6',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively by implementing zero-trust security.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. This session covers OAuth 2.1, API Gateways, and implementing a Zero Trust architecture for your microservices.',
      takeaways: ['OAuth 2.1', 'Zero Trust', 'API Security'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Michael Brown is a Chief Security Officer.'
    }
  },
  {
    id: 'd1-lab-4',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with Wasm and WASI.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the potential of WebAssembly beyond the browser. We will look at WASI, server-side Wasm, and the component model.',
      takeaways: ['WASI', 'Server-side Wasm', 'Performance'],
      tracks: ['Web', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Lisa Wang is a compiler engineer and Wasm contributor.'
    }
  },

  // Day 2
  {
    id: 'd2-keynote-1',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety and fairness.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. We will discuss alignment problems, bias mitigation, and regulatory landscapes.',
      takeaways: ['AI Safety', 'Bias Mitigation', 'AI Ethics'],
      tracks: ['AI/ML', 'Ethics'],
      level: 'Beginner',
      speakerBio: 'Prof. Emily Carter is a leading academic in AI Ethics.'
    }
  },
  {
    id: 'd2-lab-1',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab using real-time inference.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Learn how to build recommendation engines that adapt in real-time to user behavior using vector databases and LLMs.',
      takeaways: ['Vector DBs', 'Real-time Inference', 'Personalization'],
      tracks: ['AI/ML', 'Product'],
      level: 'Intermediate',
      speakerBio: 'Maria Hernandez is a VP of Engineering at ShopSmart.'
    }
  },
  {
    id: 'd2-breakout-1',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance with specialized agents.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. How to fine-tune small language models for specific industry domains like healthcare and finance.',
      takeaways: ['SLMs', 'Fine-tuning', 'Agentic Workflows'],
      tracks: ['AI/ML', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Christopher Davis is an AI Consultant.'
    }
  },
  {
    id: 'd2-breakout-2',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success with OpenTelemetry.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Master OpenTelemetry to gain full visibility into your distributed systems. Debug latency issues and trace requests across boundaries.',
      takeaways: ['OpenTelemetry', 'Observability', 'Debugging'],
      tracks: ['DevOps', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Jennifer Martinez is a Staff SRE at CloudScale.'
    }
  },
  {
    id: 'd2-lab-2',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop using stateful stream processing.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Build a fraud detection system using Apache Flink. Learn about windowing, watermarks, and state management.',
      takeaways: ['Stream Processing', 'Apache Flink', 'Real-time Analytics'],
      tracks: ['Data Engineering', 'Big Data'],
      level: 'Advanced',
      speakerBio: 'Kevin Anderson is a Committer for Apache Flink.'
    }
  },
  {
    id: 'd2-breakout-3',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards by moving compute to the edge.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore the capabilities of WebGPU and NPU access in the browser to run powerful AI models on client devices.',
      takeaways: ['WebGPU', 'Edge Computing', 'Privacy'],
      tracks: ['Web', 'AI/ML'],
      level: 'Intermediate',
      speakerBio: 'Susan Taylor is a Developer Advocate for Edge Computing.'
    }
  },
  {
    id: 'd2-breakout-4',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry to choose the right model.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. A scientific approach to evaluating LLMs for accuracy, latency, and cost in production environments.',
      takeaways: ['LLM Eval', 'Cost Optimization', 'Model Selection'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Daniel White is a Research Engineer.'
    }
  },
  {
    id: 'd2-lab-3',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial with modern web protocols.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Understand the differences between HTTP/3, WebTransport, and WebSockets. Build a low-latency collaborative application.',
      takeaways: ['HTTP/3', 'WebTransport', 'Real-time Web'],
      tracks: ['Web', 'Networking'],
      level: 'Intermediate',
      speakerBio: 'Jessica Thomas is a Senior Web Engineer.'
    }
  },
  {
    id: 'd2-breakout-5',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services using modern compute platforms.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. Comparing AWS Lambda, Cloudflare Workers, and other serverless offerings. When to use which?',
      takeaways: ['Serverless', 'Edge', 'Architecture'],
      tracks: ['Cloud', 'Backend'],
      level: 'Beginner',
      speakerBio: 'Paul Moore is a Cloud Architect.'
    }
  },
  {
    id: 'd2-breakout-6',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study for connected devices.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. Leveraging 5G slicing and MEC (Multi-access Edge Computing) for industrial IoT applications.',
      takeaways: ['5G', 'IoT', 'Edge Computing'],
      tracks: ['IoT', 'Networking'],
      level: 'Advanced',
      speakerBio: 'Mark Jackson is a Telecommunications Engineer.'
    }
  },

  // Day 3
  {
    id: 'd3-lab-1',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies with the Rust programming language.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Build high-performance, memory-safe web services using Rust, Actix-web, and Tokio.',
      takeaways: ['Rust', 'Systems Programming', 'Performance'],
      tracks: ['Backend', 'Systems'],
      level: 'Advanced',
      speakerBio: 'Laura Martin is a Rust Foundation Member.'
    }
  },
  {
    id: 'd3-breakout-1',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly without stopping the business.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. Strategies for strangling the monolith, domain-driven design boundaries, and managing data consistency.',
      takeaways: ['Microservices', 'Refactoring', 'DDD'],
      tracks: ['Architecture', 'Legacy Modernization'],
      level: 'Intermediate',
      speakerBio: 'Michelle Wu is a Solution Architect.'
    }
  },
  {
    id: 'd3-breakout-2',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: 'David O\'Connell',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly for security and traffic control.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Compare Istio and Linkerd. Learn how to implement mTLS, canary deployments, and circuit breaking.',
      takeaways: ['Service Mesh', 'mTLS', 'Traffic Management'],
      tracks: ['DevOps', 'Security'],
      level: 'Advanced',
      speakerBio: 'David O\'Connell is a Cloud Native Engineer.'
    }
  },
  {
    id: 'd3-lab-2',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive for high-quality video.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. Understanding HLS, DASH, and low-latency streaming. Video encoding parameters and adaptive bitrate streaming.',
      takeaways: ['Video Streaming', 'HLS/DASH', 'Codecs'],
      tracks: ['Media', 'Web'],
      level: 'Intermediate',
      speakerBio: 'Steven Thompson is a Video Engineer.'
    }
  },
  {
    id: 'd3-breakout-3',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences with decoupled frontends.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Integrating Shopify/Magento backends with Next.js frontends for ultimate flexibility and performance.',
      takeaways: ['E-commerce', 'Headless', 'Jamstack'],
      tracks: ['Web', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Kenneth Lewis is an E-commerce specialist.'
    }
  },
  {
    id: 'd3-breakout-4',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships through authentic community engagement.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. How to build a developer relations program that engineers actually respect. Metrics that matter vs vanity metrics.',
      takeaways: ['Developer Relations', 'Community', 'Marketing'],
      tracks: ['DevRel', 'Soft Skills'],
      level: 'Beginner',
      speakerBio: 'Patricia Walker is a Head of Developer Relations.'
    }
  },
  {
    id: 'd3-lab-3',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass using Apollo Federation.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Unifying multiple subgraphs into a single supergraph. Handling auth, caching, and performance in a federated architecture.',
      takeaways: ['GraphQL', 'Federation', 'API Design'],
      tracks: ['Backend', 'Web'],
      level: 'Advanced',
      speakerBio: 'Brian Garcia is a GraphQL Maintainer.'
    }
  },
  {
    id: 'd3-breakout-5',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale using Terraform and Crossplane.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Managing resources across AWS, Azure, and GCP using Infrastructure as Code tools.',
      takeaways: ['Multi-Cloud', 'IaC', 'Terraform'],
      tracks: ['Cloud', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Amara Okafor is a Principal Cloud Architect.'
    }
  },
  {
    id: 'd3-breakout-6',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth by ensuring digital inclusion.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. Practical techniques for testing and implementing WCAG 2.2 standards in React applications.',
      takeaways: ['a11y', 'WCAG', 'Inclusive Design'],
      tracks: ['Web', 'Design'],
      level: 'Beginner',
      speakerBio: 'Tariq Al-Fayed is an Accessibility Advocate.'
    }
  },
  {
    id: 'd3-breakout-7',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data with advanced SQL features.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. Partitioning, JSONB, indexing strategies, and stored procedures for high-performance PostgreSQL databases.',
      takeaways: ['PostgreSQL', 'Database Design', 'SQL'],
      tracks: ['Database', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Wei Zhang is a Database Administrator.'
    }
  },
  {
    id: 'd3-breakout-8',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities for a unified customer journey.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. Case studies on using mobile apps, beacons, and AR to enhance the in-store shopping experience.',
      takeaways: ['Retail Tech', 'Omnichannel', 'Mobile'],
      tracks: ['Product', 'Mobile'],
      level: 'Beginner',
      speakerBio: 'Mateo Fernandez is a Digital Transformation Lead.'
    }
  }
];
