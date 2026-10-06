export const processSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the problem.',
    description:
      'We begin by analyzing project requirements, target users, technical constraints, and business goals. Through direct discovery sessions, we align on scope, deliverables, and measurable success metrics.',
    activities: [
      'Requirements elicitation and constraint mapping',
      'Architecture discovery and technology stack selection',
      'User workflow analysis and technical feasibility assessment',
      'Project scope breakdown and milestone definition',
    ],
    highlight: 'Foundation & Scope',
  },
  {
    step: '02',
    title: 'DEFINE',
    subtitle: 'Create the strategy.',
    description:
      'We distill findings into clear product architecture, wireframes, and design strategies. We establish system blueprints, data structures, and milestone roadmaps before a single line of production code is written.',
    activities: [
      'Information architecture and routing diagrams',
      'API contracts and database entity modeling',
      'Low-fidelity wireframes and interaction specs',
      'Technical design documentation and sprint planning',
    ],
    highlight: 'Strategy & Architecture',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Build the experience.',
    description:
      'We design high-fidelity interfaces with deliberate typography, restrained lighting, and intuitive ergonomics. Every component is built systematically with cohesive design tokens, responsive states, and accessible contrast.',
    activities: [
      'High-fidelity UI and responsive component design',
      'Interactive prototyping and user flow testing',
      'Design token definition and color/typography hierarchy',
      'Micro-interaction and motion design specifications',
    ],
    highlight: 'Aesthetic Rigor & Systems',
  },
  {
    step: '04',
    title: 'DEVELOP',
    subtitle: 'Turn the design into reality.',
    description:
      'We translate designs into clean, modular, and type-safe code. We construct component libraries, integrate REST APIs, establish error handling pipelines, and maintain separation between presentation and business logic.',
    activities: [
      'Component-based frontend implementation (React/Next.js)',
      'Backend REST API architecture and data validation (Node.js/Express)',
      'State management and asynchronous data pipelines',
      'Cross-browser optimization and responsive testing',
    ],
    highlight: 'Production Engineering',
  },
  {
    step: '05',
    title: 'LAUNCH',
    subtitle: 'Ship, test and improve.',
    description:
      'We rigorously test across devices and browsers, audit accessibility and performance benchmarks, and deploy smoothly. Post-launch, we monitor system telemetry, resolve edge cases, and plan feature iterations.',
    activities: [
      'End-to-end functionality and edge-case verification',
      'Lighthouse performance and accessibility auditing',
      'Production deployment and environment validation',
      'Telemetry setup and ongoing maintenance handover',
    ],
    highlight: 'Deployment & Continuity',
  },
];
