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
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'd1-keynote',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Explore the groundbreaking advancements in AI technology and what lies ahead for the industry.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. This session will cover the evolution of large language models, the rise of autonomous agents, and how AI is reshaping the global economy.',
      takeaways: ['Understanding AI trends', 'Strategic industry insights', 'Future technology roadmap'],
      tracks: ['Artificial Intelligence', 'Leadership'],
      level: 'All Levels',
      speakerBio: 'CEO of TechStack and a leading visionary in the field of artificial intelligence with over 20 years of experience.'
    }
  },
  {
    id: 'd1-lab-mlops',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle from data ingestion to deployment on Kubernetes.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on lab will provide practical experience with Kubeflow and MLflow.',
      takeaways: ['Kubernetes for ML', 'Model versioning', 'Automated deployments'],
      tracks: ['DevOps', 'Machine Learning'],
      level: 'Advanced',
      speakerBio: 'Principal Engineer at CloudScale with a focus on cloud-native machine learning infrastructure.'
    }
  },
  {
    id: 'd1-breakout-microfrontends',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively in large-scale frontend architectures.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. This session dives deep into the architectural patterns of micro-frontends, module federation, and how to maintain a consistent user experience across multiple teams.',
      takeaways: ['Module Federation', 'Frontend Governance', 'Performance Optimization'],
      tracks: ['Frontend', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Senior Architect at GlobalWeb with extensive experience in scaling frontend applications.'
    }
  },
  {
    id: 'd1-breakout-kafka',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives using Apache Kafka.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. We will discuss event-driven architecture, streaming data processing, and how to handle high-throughput event streams with reliability.',
      takeaways: ['Event-Driven Design', 'Kafka Best Practices', 'Data Consistency'],
      tracks: ['Backend', 'Data Engineering'],
      level: 'Intermediate',
      speakerBio: 'Data Engineer at StreamLine and author of "Mastering Real-Time Data".'
    }
  },
  {
    id: 'd1-lab-gnn',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships using Graph Neural Networks.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. Participants will learn how to build and train GNNs for recommendation systems, fraud detection, and social network analysis.',
      takeaways: ['GNN Foundations', 'Graph Data Processing', 'Real-world GNN use cases'],
      tracks: ['Artificial Intelligence', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Researcher at AI Dynamics specializing in graph-based deep learning.'
    }
  },
  {
    id: 'd1-breakout-react',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs in React applications.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. Explore React Server Components, hydration strategies, and how to eliminate unnecessary re-renders in complex dashboards.',
      takeaways: ['React 19 features', 'Server Components', 'Memory Management'],
      tracks: ['Frontend', 'JavaScript'],
      level: 'Advanced',
      speakerBio: 'Core Contributor to the React Ecosystem and performance specialist.'
    }
  },
  {
    id: 'd1-breakout-community',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities at scale.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. This talk focuses on the social and technical aspects of community building, including moderation tools, engagement metrics, and horizontal scaling.',
      takeaways: ['Community Engagement', 'Scalable Architecture', 'Moderation Tech'],
      tracks: ['Product', 'Community'],
      level: 'Beginner',
      speakerBio: 'Head of Community at DevNetwork with 15 years of experience in platform growth.'
    }
  },
  {
    id: 'd1-lab-pipelines',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for high-throughput data processing.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Build robust ETL pipelines that can handle terabytes of data daily using modern tools like Airflow and dbt.',
      takeaways: ['ETL Design', 'Data Validation', 'Pipeline Observability'],
      tracks: ['Data Engineering', 'Infrastructure'],
      level: 'Intermediate',
      speakerBio: 'Data Architect at BigData Solutions.'
    }
  },
  {
    id: 'd1-breakout-open-source',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth through open source stewardship.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. Learn how companies can successfully contribute to and manage open-source projects while aligning with business goals.',
      takeaways: ['Open Source Governance', 'Contributor Engagement', 'OSS Sustainability'],
      tracks: ['Open Source', 'Business'],
      level: 'Beginner',
      speakerBio: 'Open Source Director at TechCorp.'
    }
  },
  {
    id: 'd1-breakout-api-security',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively through robust security measures.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. Covering OAuth2, OpenID Connect, JWT security, and common API vulnerabilities from the OWASP Top 10.',
      takeaways: ['API Security Patterns', 'Authentication & Authorization', 'Threat Modeling'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Security Researcher and white-hat hacker specializing in web technologies.'
    }
  },
  {
    id: 'd1-lab-wasm',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with WebAssembly.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the Wasm Component Model, WASI, and how to run non-JS languages efficiently in the browser and on the edge.',
      takeaways: ['Wasm Component Model', 'WASI', 'Edge Computing'],
      tracks: ['Web Technology', 'Performance'],
      level: 'Advanced',
      speakerBio: 'W3C Wasm Working Group member and advocate.'
    }
  },
  // Day 2
  {
    id: 'd2-keynote',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety and fairness.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. This keynote addresses algorithmic bias, data privacy, and the societal impact of AI.',
      takeaways: ['AI Ethics Frameworks', 'Bias Mitigation', 'Transparent ML'],
      tracks: ['Artificial Intelligence', 'Ethics'],
      level: 'All Levels',
      speakerBio: 'Professor of AI Ethics at Stanford University.'
    }
  },
  {
    id: 'd2-lab-personalization',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab with AI-driven personalization.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Implement real-time recommendation engines that adapt to user behavior using vector databases and LLMs.',
      takeaways: ['Vector Databases', 'Personalization Algorithms', 'User Behavior Analysis'],
      tracks: ['AI Implementation', 'Product'],
      level: 'Intermediate',
      speakerBio: 'Product Lead at RetailAI.'
    }
  },
  {
    id: 'd2-breakout-agents',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance using AI agents.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. Learn how to build specialized AI agents that understand domain-specific nuances and automate complex workflows.',
      takeaways: ['Agent Frameworks', 'Domain Specific LLMs', 'Workflow Automation'],
      tracks: ['Artificial Intelligence', 'Software Design'],
      level: 'Intermediate',
      speakerBio: 'Founder of AgenticLabs.'
    }
  },
  {
    id: 'd2-breakout-observability',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success through observability.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Master OpenTelemetry, Jaeger, and Prometheus to gain deep visibility into your microservices architecture.',
      takeaways: ['OpenTelemetry', 'Tracing Strategies', 'System Reliability'],
      tracks: ['DevOps', 'Infrastructure'],
      level: 'Intermediate',
      speakerBio: 'SRE Lead at CloudOps.'
    }
  },
  {
    id: 'd2-lab-flink',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop with Apache Flink.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Build stateful stream processing applications that can react to events in milliseconds.',
      takeaways: ['Stateful Stream Processing', 'Flink Architecture', 'Event Time Processing'],
      tracks: ['Data Engineering', 'Real-time Systems'],
      level: 'Advanced',
      speakerBio: 'Apache Flink Committer.'
    }
  },
  {
    id: 'd2-breakout-edge-ai',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards by running AI models locally.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore ONNX Runtime, TensorFlow Lite, and how to optimize models for mobile and IoT devices.',
      takeaways: ['Local Model Execution', 'Model Compression', 'Privacy-Preserving AI'],
      tracks: ['Mobile', 'Edge Computing'],
      level: 'Intermediate',
      speakerBio: 'IoT Architect at EdgeTech.'
    }
  },
  {
    id: 'd2-breakout-llm-benchmarking',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the AI industry.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. Learn how to evaluate LLM performance objectively using various benchmarks and human-in-the-loop evaluation.',
      takeaways: ['LLM Evaluation', 'Model Comparison', 'Performance Metrics'],
      tracks: ['Artificial Intelligence', 'Data Science'],
      level: 'Intermediate',
      speakerBio: 'AI Researcher at ModelWatch.'
    }
  },
  {
    id: 'd2-lab-webtransport',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial on modern web communication.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Compare HTTP/3, WebTransport, and WebSockets for real-time applications like gaming and video streaming.',
      takeaways: ['WebTransport API', 'HTTP/3 Protocol', 'Real-time Networking'],
      tracks: ['Web Technology', 'Networking'],
      level: 'Advanced',
      speakerBio: 'Network Engineer at WebSpeed.'
    }
  },
  {
    id: 'd2-breakout-serverless',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. When to choose Lambda over Edge Workers, and how to architect for global latency.',
      takeaways: ['Serverless Patterns', 'Edge Compute', 'Latency Optimization'],
      tracks: ['Cloud Computing', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Cloud Architect at ServerlessWorld.'
    }
  },
  {
    id: 'd2-breakout-5g-iot',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study for IoT applications.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. Leveraging 5G slicing and private networks for massive IoT deployments in industrial settings.',
      takeaways: ['5G Networking', 'Industrial IoT', 'Low-Latency Communication'],
      tracks: ['Networking', 'IoT'],
      level: 'Intermediate',
      speakerBio: 'CTO of IoTConnect.'
    }
  },
  // Day 3
  {
    id: 'd3-lab-rust',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies with Rust.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Hands-on workshop building high-performance, type-safe web services using Axum and Tokio.',
      takeaways: ['Async Rust', 'Type Safety', 'Memory Safety without GC'],
      tracks: ['Rust', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Rust Core Maintainer and author of "Rust for the Web".'
    }
  },
  {
    id: 'd3-breakout-microservices',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly through migration strategies.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. Strategies for strangler fig pattern, database splitting, and organizational shifts required for microservices.',
      takeaways: ['Strangler Pattern', 'Service Decomposition', 'Migration Roadmap'],
      tracks: ['Architecture', 'Cloud'],
      level: 'Intermediate',
      speakerBio: 'CTO at ModernizeIT.'
    }
  },
  {
    id: 'd3-breakout-servicemesh',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: 'David O\'Connell',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly with modern service meshes.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Compare and contrast Istio, Linkerd, and Cilium for service discovery, security, and traffic management.',
      takeaways: ['Service Mesh Comparison', 'mTLS', 'Traffic Splitting'],
      tracks: ['DevOps', 'Infrastructure'],
      level: 'Intermediate',
      speakerBio: 'Infrastructure Engineer at Meshly.'
    }
  },
  {
    id: 'd3-lab-video',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive into video protocols.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. Learn about HLS, DASH, and the emerging Low-Latency HLS standard for real-time video delivery.',
      takeaways: ['Video Encoding', 'Streaming Protocols', 'CDN Optimization'],
      tracks: ['Media', 'Web Technology'],
      level: 'Advanced',
      speakerBio: 'Video Architect at StreamHub.'
    }
  },
  {
    id: 'd3-breakout-headless',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences with headless architecture.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Decoupling the frontend from the backend to enable omnichannel commerce and rapid iteration.',
      takeaways: ['Headless APIs', 'Omnichannel Strategy', 'E-commerce Trends'],
      tracks: ['Product', 'Frontend'],
      level: 'Intermediate',
      speakerBio: 'Architect at CommerceCloud.'
    }
  },
  {
    id: 'd3-breakout-devrel',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships through developer relations.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. Building authentic communities, creating high-quality developer content, and measuring DevRel success.',
      takeaways: ['Community Building', 'Developer Advocacy', 'DevRel Metrics'],
      tracks: ['Community', 'Business'],
      level: 'Beginner',
      speakerBio: 'VP of DevRel at DevFocus.'
    }
  },
  {
    id: 'd3-lab-graphql',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass with GraphQL Federation.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Implement Apollo Federation to unify multiple GraphQL subgraphs into a single, unified supergraph.',
      takeaways: ['GraphQL Federation', 'Schema Design', 'Subgraph Performance'],
      tracks: ['Backend', 'API Design'],
      level: 'Advanced',
      speakerBio: 'GraphQL Specialist at APIForge.'
    }
  },
  {
    id: 'd3-breakout-multicloud',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale in a multi-cloud environment.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Tools and techniques for managing resources across AWS, Azure, and Google Cloud seamlessly using Terraform and Pulumi.',
      takeaways: ['Infrastructure as Code', 'Cloud Management', 'Multi-cloud Governance'],
      tracks: ['Infrastructure', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Principal Architect at MultiCloud Solutions.'
    }
  },
  {
    id: 'd3-breakout-accessibility',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth through web accessibility.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. Practical tips for ARIA roles, keyboard navigation, and building inclusive components that everyone can use.',
      takeaways: ['WCAG Guidelines', 'A11y Testing', 'Inclusive Design'],
      tracks: ['Frontend', 'Accessibility'],
      level: 'Beginner',
      speakerBio: 'Accessibility Advocate at InclusiveWeb.'
    }
  },
  {
    id: 'd3-breakout-postgresql',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data with advanced PostgreSQL features.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. Partitioning, window functions, JSONB optimization, and performance tuning for large-scale PostgreSQL databases.',
      takeaways: ['Database Tuning', 'Advanced SQL', 'PostgreSQL JSONB'],
      tracks: ['Backend', 'Database Engineering'],
      level: 'Advanced',
      speakerBio: 'DBA at DataMax.'
    }
  },
  {
    id: 'd3-breakout-retail',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities in modern retail.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. How to synchronize online inventory with physical stores and provide a seamless unified shopping experience.',
      takeaways: ['Unified Commerce', 'Inventory Sync', 'Retail Tech Trends'],
      tracks: ['Product', 'Business'],
      level: 'Intermediate',
      speakerBio: 'Retail Tech Lead at OmniShop.'
    }
  }
];
