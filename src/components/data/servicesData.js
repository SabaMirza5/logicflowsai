import aboutusimg from "../../assets/imgs/aboutusimg.png";

export const aiAgentData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "AI AGENT DEVELOPMENT",
    heading: "Custom AI Agents That Work Across Your Business",
    description:
      "We design and build AI agents that talk to your customers, qualify leads, handle routine tasks and update your systems automatically, so your team can focus on work that needs a human.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "Custom AI Agent Development",
  },

  trust: {
    points: [
      "Works 24/7",
      "Connects to your existing tools",
      "Human handover built in",
      "Tested before launch",
    ],
    logos: [
      "n8n",
      "OpenAI",
      "Claude",
      "Gemini",
      "WhatsApp",
      "HubSpot",
      "Salesforce",
      "Meta",
      "Google Sheets",
      "Gmail",
      "Telegram",
    ],
  },

  problems: {
    heading: "Signs your business needs an AI agent",
    items: [
      "Customers or leads wait hours for a first reply",
      "Messages arrive after hours and sit unanswered",
      "Your team answers the same questions every day",
      "Staff copy information between chats, spreadsheets and your CRM",
      "Every lead gets the same attention, whether strong or weak",
      "Your workload grows every time your customer base grows",
      "Important follow-ups get forgotten",
    ],
    closing:
      "If two or more of these sound familiar, an AI agent can take that work off your team.",
  },

  build: {
    heading: "AI agents we build for your business",
    items: [
      {
        title: "Customer Support Agents",
        description:
          "Answer questions across WhatsApp, website chat and email, resolve routine requests and pass complex cases to your team with the full history.",
      },
      {
        title: "Voice Agents",
        description:
          "Handle inbound and outbound calls, answer questions and take action during the conversation.",
      },
      {
        title: "Lead Qualification Agents",
        description:
          "Collect details from new inquiries, score each lead and update your CRM so your team follows up with the best ones first.",
      },
      {
        title: "Sales and Booking Agents",
        description:
          "Answer product questions, recommend options, take orders and book meetings or appointments.",
      },
      {
        title: "Operations Agents",
        description:
          "Log orders, update records, send reminders and trigger the next step in your workflow without manual work.",
      },
      {
        title: "Internal Assistants",
        description:
          "Give your staff an assistant that knows your documents and processes, answers questions and drafts work for review.",
      },
    ],
    closing:
      "Need something different? We design custom AI agents around your exact task.",
  },

  process: {
    heading: "From idea to working AI agent in 5 steps",
    steps: [
      {
        title: "Discover",
        description: "Understand your business and requirements.",
      },
      {
        title: "Design",
        description: "Plan the agent and its workflow.",
      },
      {
        title: "Build",
        description: "Develop and connect your AI agent.",
      },
      {
        title: "Test",
        description: "Test its responses and actions.",
      },
      {
        title: "Launch",
        description: "Deploy your agent into your workflow.",
      },
    ],
    closing:
      "You stay in control throughout. The agent only does what has been agreed, and anything uncertain goes to your team.",
  },

  caseStudies: {
    heading: "AI agent in action",
    items: [
      {
        category: "CUSTOMER SUPPORT",
        title: "Customer Support Agent",
        description:
          "An AI-powered support solution designed to respond to customer inquiries and help teams manage routine support tasks.",
        link: "/case-studies",
      },
      {
        category: "AI VOICE",
        title: "AI Voice Agent",
        description:
          "An intelligent voice solution designed to handle calls, answer common questions and support customer interactions.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
    heading: "AI agents that connect to the tools you already use",
    description:
      "An AI agent is only useful when it can reach your data and take action. We connect agents to your existing systems, so you keep working the way you already do.",
    items: [
      { name: "n8n" },
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "WhatsApp" },
      { name: "HubSpot" },
      { name: "Salesforce" },
      { name: "Meta" },
      { name: "Google Sheets" },
      { name: "Gmail" },
      { name: "Telegram" },
    ],
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is an AI agent?",
        answer:
          "An AI agent is software that understands a request, decides what to do and takes action in your tools, such as replying to a customer, updating a CRM record or alerting your team. It works within rules you set.",
      },
      {
        question: "What is the difference between an AI agent and a chatbot?",
        answer:
          "A chatbot answers from a script or fixed menu. An AI agent understands natural language, can take actions in your systems, and adapts to the situation. A chatbot talks, while an agent talks and gets work done.",
      },
      {
        question: "What tasks can an AI agent handle?",
        answer:
          "Common tasks include answering customer questions, qualifying and ranking leads, booking appointments, taking orders, updating records, sending follow-ups and routing requests to the right person.",
      },
      {
        question: "Can an AI agent work on WhatsApp?",
        answer:
          "Yes. We build agents that reply to customers on WhatsApp, collect information, update your CRM and alert your team when needed.",
      },
      {
        question: "How long does it take to build an AI agent?",
        answer:
          "It depends on the task and how many tools it connects to. We start with one task the agent can do reliably, and we give you a timeline after the discovery call.",
      },
      {
        question: "Which tools can it connect to?",
        answer:
          "Most tools with an API, including CRMs, spreadsheets, email, messaging apps and databases. We confirm what is possible during discovery.",
      },
    ],
  },

  cta: {
    heading: "Tell us the task that takes the most time",
    description:
      "Let's explore how a custom AI agent can simplify your business operations.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "AI Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API Integrations",
        link: "/api-integration",
      },
    ],
  },
};

export const aiVoiceData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "AI VOICE & CUSTOMER SUPPORT",
    heading: "AI Voice Agents That Deliver Better Customer Experiences",
    description:
      "Automate customer conversations with intelligent AI voice agents and support assistants. We build solutions that answer calls, respond to inquiries, resolve routine issues and connect customers with your team whenever human support is needed.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "AI Voice and Customer Support Solutions",
  },

  trust: {
    points: [
      "24/7 customer assistance",
      "Natural-sounding conversations",
      "Seamless human handover",
      "Integrated with your existing tools",
    ],
    logos: [
  "n8n",
  "OpenAI",
  "Claude",
  "Gemini",
  "WhatsApp",
  "HubSpot",
  "Salesforce",
  "Meta",
  "Google Sheets",
  "Gmail",
  "Telegram",
],
  },

  problems: {
    heading: "Signs your customer support needs AI",
    items: [
      "Customers wait too long for call responses",
      "Your support team receives more inquiries than it can handle",
      "Calls and messages arrive outside business hours",
      "Your team repeatedly answers the same questions",
      "Missed calls result in lost leads and opportunities",
      "Support agents spend too much time on routine requests",
      "Customer information is scattered across different platforms",
    ],
    closing:
      "If these challenges sound familiar, AI voice and customer support automation can help your team respond faster and deliver a more consistent customer experience.",
  },

  build: {
    heading: "AI voice and customer support solutions we build",
    items: [
      {
        title: "AI Inbound Voice Agents",
        description:
          "Automatically answer incoming calls, understand customer requests, provide information and handle routine inquiries without keeping customers waiting.",
      },
      {
        title: "AI Outbound Calling Agents",
        description:
          "Automate outbound calls for lead follow-ups, appointment confirmations, customer reminders and other business communication tasks.",
      },
      {
        title: "AI Customer Support Assistants",
        description:
          "Provide instant answers across your website, WhatsApp and other messaging channels using your business information and knowledge base.",
      },
      {
        title: "Appointment Booking Agents",
        description:
          "Let customers schedule, reschedule and confirm appointments through natural voice conversations or automated chat interactions.",
      },
      {
        title: "Multilingual Voice Agents",
        description:
          "Build AI voice experiences that communicate with customers in supported languages, helping businesses serve a wider audience.",
      },
      {
        title: "Smart Call Routing & Escalation",
        description:
          "Understand customer needs, direct calls to the right department and transfer complex conversations to human agents with relevant context.",
      },
    ],
    closing:
      "Every solution is designed around your customer journey, communication channels and business requirements.",
  },

  process: {
    heading: "How we build your AI voice and support solution",
    steps: [
      {
        title: "Discover",
        description:
          "Understand your customer support needs, call patterns and communication workflows.",
      },
      {
        title: "Design",
        description:
          "Plan conversation flows, voice experiences, responses and escalation rules.",
      },
      {
        title: "Develop",
        description:
          "Build your AI voice agent and customer support automation.",
      },
      {
        title: "Integrate & Test",
        description:
          "Connect your existing tools and test conversations, responses and call handling.",
      },
      {
        title: "Launch",
        description:
          "Deploy your solution, monitor performance and refine the customer experience.",
      },
    ],
    closing:
      "We make sure your AI support solution follows your business rules, handles conversations reliably and knows when to involve your human team.",
  },

  caseStudies: {
    heading: "AI voice and customer support in action",
    items: [
      {
        category: "AI VOICE AUTOMATION",
        title: "Automating Customer Calls with AI",
        description:
          "An intelligent voice assistant designed to answer incoming calls, respond to common questions and help businesses manage customer communication more efficiently.",
        link: "/case-studies",
      },
      {
        category: "CUSTOMER SUPPORT",
        title: "Building a Smarter Customer Support Experience",
        description:
          "An AI-powered support solution designed to provide instant responses, manage routine customer inquiries and connect complex requests with human support teams.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
    heading: "Connect your AI support system with your existing tools",
    description:
      "Your AI voice and customer support solution should work alongside your existing business systems. We integrate with CRMs, communication platforms, calendars and other tools to create a connected customer experience.",
    items: [
      { name: "n8n" },
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "WhatsApp" },
      { name: "HubSpot" },
      { name: "Salesforce" },
      { name: "Meta" },
      { name: "Google Sheets" },
      { name: "Gmail" },
      { name: "Telegram" },
      { name: "Google Calendar" },
      { name: "API" },
    ],
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is an AI voice agent?",
        answer:
          "An AI voice agent is an intelligent system that communicates with people through spoken conversations. It can understand customer questions, provide answers, collect information, schedule appointments and perform tasks using connected business systems.",
      },
      {
        question: "Can AI voice agents answer incoming phone calls?",
        answer:
          "Yes. AI voice agents can answer incoming calls, understand customer requests, provide relevant information and handle routine conversations automatically. They can also transfer calls to human agents when necessary.",
      },
      {
        question: "Can AI make outbound calls?",
        answer:
          "Yes. AI voice agents can make automated outbound calls for tasks such as lead follow-ups, appointment reminders, confirmations and customer notifications, subject to applicable consent and calling regulations.",
      },
      {
        question: "Will customers know they are speaking with AI?",
        answer:
          "AI voice agents can provide natural-sounding conversations. We recommend transparent disclosure that customers are interacting with an AI assistant, according to your business requirements and applicable regulations.",
      },
      {
        question: "Can AI handle multiple customer conversations at once?",
        answer:
          "Yes. AI-powered support systems can handle multiple conversations simultaneously, helping businesses manage high inquiry volumes without requiring a separate human agent for every interaction.",
      },
      {
        question: "Can customers speak to a real person?",
        answer:
          "Absolutely. We can configure human handover rules so customers can be transferred to your support team whenever a request is complex, sensitive or outside the AI agent's capabilities.",
      },
      {
        question: "Can AI voice agents integrate with our CRM?",
        answer:
          "Yes. We can connect your AI voice solution with supported CRM platforms, calendars, databases and other business applications to retrieve customer information and update records automatically.",
      },
      {
        question: "How long does it take to develop an AI voice solution?",
        answer:
          "The timeline depends on the complexity of your workflows, voice requirements and integrations. We first understand your requirements and then provide a realistic development timeline.",
      },
    ],
  },

  cta: {
    heading: "Ready to transform your customer support?",
    description:
      "Let's build an intelligent AI voice and customer support solution that helps your business respond faster, serve customers better and operate more efficiently.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "AI Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API Integrations",
        link: "/api-integration",
      },
    ],
  },
};





export const aiKnowledgeBaseData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "AI KNOWLEDGE BASE & RAG",
    heading: "Turn Your Business Knowledge into Intelligent AI Solutions",
    description:
      "Transform your business documents, data and internal resources into intelligent knowledge systems. We build AI-powered knowledge bases using Retrieval-Augmented Generation (RAG) that deliver accurate, context-aware answers and help your team find the information they need faster.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "AI Knowledge Base and RAG Solutions",
  },

  trust: {
    points: [
      "Answers based on your business data",
      "Context-aware AI responses",
      "Connected to your existing documents",
      "Secure and scalable knowledge systems",
    ],
   logos: [
  "n8n",
  "OpenAI",
  "Claude",
  "Gemini",
  "WhatsApp",
  "HubSpot",
  "Salesforce",
  "Meta",
  "Google Sheets",
  "Gmail",
  "Telegram",
],
  },

  problems: {
    heading: "Signs your business needs an AI knowledge base",
    items: [
      "Employees spend too much time searching for internal information",
      "Important business documents are scattered across different platforms",
      "Your team repeatedly answers the same internal questions",
      "Customers struggle to find accurate information quickly",
      "Traditional search tools fail to understand the context of queries",
      "Business knowledge is difficult to access across departments",
      "Finding relevant information slows down daily operations",
    ],
    closing:
      "If these challenges sound familiar, an AI-powered knowledge base can help organize your information and make it accessible through intelligent, context-aware conversations.",
  },

  build: {
    heading: "AI knowledge base solutions we build",
    items: [
      {
        title: "AI-Powered Knowledge Bases",
        description:
          "Transform your business documents, files and internal resources into searchable knowledge systems that provide relevant answers through natural language queries.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Build RAG-powered solutions that retrieve relevant information from your data and use it to generate accurate, context-aware AI responses.",
      },
      {
        title: "Document Intelligence Systems",
        description:
          "Extract, organize and process information from PDFs, Word documents, spreadsheets and other business files to make your data easier to access.",
      },
      {
        title: "Internal AI Assistants",
        description:
          "Give your employees an intelligent assistant that understands your company documents, policies and processes and provides relevant answers instantly.",
      },
      {
        title: "Customer Knowledge Assistants",
        description:
          "Create AI assistants that use your product documentation, FAQs and support resources to answer customer questions and improve self-service experiences.",
      },
      {
        title: "Custom AI Search Solutions",
        description:
          "Develop intelligent search systems that understand user intent, retrieve relevant information and deliver meaningful results instead of relying on simple keyword matching.",
      },
    ],
    closing:
      "Whether you need an internal knowledge assistant or a customer-facing AI solution, we build systems around your data and business requirements.",
  },

  process: {
    heading: "How we build your AI knowledge base in 5 steps",
    steps: [
      {
        title: "Discover",
        description:
          "Understand your business information, data sources and knowledge management requirements.",
      },
      {
        title: "Prepare Data",
        description:
          "Collect, organize and process your documents and business information for AI-powered retrieval.",
      },
      {
        title: "Develop",
        description:
          "Build your knowledge base using RAG architecture, AI models and suitable retrieval technologies.",
      },
      {
        title: "Test",
        description:
          "Test information retrieval, response accuracy and relevance to ensure reliable results.",
      },
      {
        title: "Launch",
        description:
          "Deploy your AI knowledge solution and connect it with your existing business applications.",
      },
    ],
    closing:
      "We focus on making your knowledge system reliable, relevant and easy to use, while keeping your business information organized and accessible.",
  },

  caseStudies: {
    heading: "AI knowledge solutions in action",
    items: [
      {
        category: "AI KNOWLEDGE BASE",
        title: "Building an Intelligent Business Knowledge Assistant",
        description:
          "An AI-powered knowledge system designed to help employees retrieve relevant information from business documents and internal resources through natural language queries.",
        link: "/case-studies",
      },
      {
        category: "RAG IMPLEMENTATION",
        title: "Transforming Document Search with RAG",
        description:
          "A Retrieval-Augmented Generation solution designed to process business documents, retrieve relevant information and deliver context-aware answers to user questions.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
    heading: "Connect your AI knowledge base with the tools you already use",
    description:
      "Your AI knowledge base should work with your existing information sources and business applications. We integrate documents, databases, AI models and retrieval technologies to create a connected knowledge ecosystem.",
    items: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Pinecone" },
      { name: "LangChain" },
      { name: "LlamaIndex" },
      { name: "n8n" },
      { name: "Google Drive" },
      { name: "Notion" },
      { name: "Confluence" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "API" },
    ],
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is an AI knowledge base?",
        answer:
          "An AI knowledge base is an intelligent system that organizes business information and allows users to retrieve relevant answers through natural language questions instead of manually searching through documents.",
      },
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer:
          "Retrieval-Augmented Generation (RAG) is an AI approach that retrieves relevant information from your knowledge sources and provides it to an AI model to generate more accurate and context-aware responses.",
      },
      {
        question: "What types of documents can an AI knowledge base process?",
        answer:
          "An AI knowledge base can work with supported formats such as PDFs, Word documents, spreadsheets, text files and other structured or unstructured business data sources.",
      },
      {
        question: "Can we use our existing business documents?",
        answer:
          "Yes. We can build your knowledge base around your existing business documents, internal resources and supported data sources, so you can make better use of the information you already have.",
      },
      {
        question: "How accurate are AI knowledge base responses?",
        answer:
          "Accuracy depends on the quality of your source data, retrieval configuration and AI model. RAG helps ground responses in relevant business information, and we test the system to improve answer relevance and reliability.",
      },
      {
        question: "Can an AI knowledge base be integrated into our website?",
        answer:
          "Yes. We can integrate AI knowledge assistants into your website, internal platforms or supported business applications to make your information accessible through conversational interfaces.",
      },
      {
        question: "Is our business information secure?",
        answer:
          "We design knowledge solutions with appropriate access controls and security considerations based on your business requirements, data sources and deployment environment.",
      },
      {
        question: "How long does it take to develop an AI knowledge base?",
        answer:
          "The development timeline depends on the volume of your data, the number of integrations, retrieval requirements and overall system complexity. We assess your requirements before providing a realistic timeline.",
      },
    ],
  },

  cta: {
    heading: "Make Your Business Knowledge Work Smarter",
    description:
      "Let's build an intelligent knowledge base that transforms your business information into accessible, context-aware answers.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "AI Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API Integrations",
        link: "/api-integration",
      },
    ],
  },
};


export const aiSaaSData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "AI SAAS DEVELOPMENT",
    heading: "Build Powerful AI-Powered SaaS Products for Your Business",
    description:
      "Turn your ideas into scalable software products with our AI SaaS development services. We design and develop intelligent SaaS platforms that combine modern technology, AI capabilities and seamless user experiences to help businesses innovate, automate and grow.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "AI SaaS Development Solutions",
  },

  trust: {
    points: [
      "Scalable cloud-based platforms",
      "AI-powered features and automation",
      "Secure and reliable architecture",
      "Built for long-term growth",
    ],
  logos: [
  "n8n",
  "OpenAI",
  "Claude",
  "Gemini",
  "WhatsApp",
  "HubSpot",
  "Salesforce",
  "Meta",
  "Google Sheets",
  "Gmail",
  "Telegram",
],
  },

  problems: {
    heading: "Signs your business needs a custom SaaS solution",
    items: [
      "Your business relies on multiple disconnected software tools",
      "Existing software does not support your specific business workflows",
      "Manual processes slow down your team's productivity",
      "You want to turn an innovative idea into a software product",
      "Your current platform struggles to scale with business growth",
      "Managing subscriptions and customer accounts is complicated",
      "You need intelligent features to improve your software experience",
    ],
    closing:
      "If these challenges sound familiar, a custom SaaS platform can help streamline your operations, improve efficiency and create new opportunities for business growth.",
  },

  build: {
    heading: "AI SaaS solutions we build",
    items: [
      {
        title: "Custom SaaS Application Development",
        description:
          "Build tailored SaaS applications designed around your business model, workflows and customer requirements, with scalable architecture and modern user experiences.",
      },
      {
        title: "AI-Powered SaaS Platforms",
        description:
          "Integrate intelligent AI capabilities into your software products to automate tasks, generate insights, process information and deliver smarter user experiences.",
      },
      {
        title: "MVP Development",
        description:
          "Turn your product idea into a functional Minimum Viable Product (MVP) with essential features, allowing you to validate your concept and gather real user feedback.",
      },
      {
        title: "Multi-Tenant SaaS Platforms",
        description:
          "Develop multi-tenant applications that support multiple organizations and users with structured data management, access controls and scalable infrastructure.",
      },
      {
        title: "SaaS Subscription & Billing Systems",
        description:
          "Implement subscription management, recurring payments, pricing plans and customer billing features to support your SaaS business model.",
      },
      {
        title: "SaaS Modernization & Optimization",
        description:
          "Improve existing SaaS applications by upgrading their architecture, enhancing performance, integrating new technologies and introducing intelligent features.",
      },
    ],
    closing:
      "From validating your first product idea to developing a fully scalable SaaS platform, we build solutions that support your business goals.",
  },

  process: {
    heading: "How we turn your SaaS idea into a working product",
    steps: [
      {
        title: "Discover",
        description:
          "Understand your product idea, business model, target audience and technical requirements.",
      },
      {
        title: "Plan & Design",
        description:
          "Define the product features, user journeys, system architecture and development roadmap.",
      },
      {
        title: "Develop",
        description:
          "Build your SaaS application with modern technologies, scalable architecture and required AI capabilities.",
      },
      {
        title: "Test",
        description:
          "Test functionality, performance, security and user experience to ensure your platform works reliably.",
      },
      {
        title: "Launch & Scale",
        description:
          "Deploy your SaaS product, monitor its performance and continuously improve it as your business grows.",
      },
    ],
    closing:
      "We follow a structured development approach to ensure your SaaS product is functional, scalable and aligned with your long-term business objectives.",
  },

  caseStudies: {
    heading: "SaaS solutions in action",
    items: [
      {
        category: "SAAS DEVELOPMENT",
        title: "Building a Scalable SaaS Business Platform",
        description:
          "A custom SaaS platform designed to simplify business operations, manage users and provide a centralized environment for essential business activities.",
        link: "/case-studies",
      },
      {
        category: "AI-POWERED SAAS",
        title: "Integrating AI into Modern SaaS Applications",
        description:
          "An intelligent software solution designed to incorporate AI-powered features, automate workflows and improve the overall user experience.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
  heading: "Build your SaaS platform with powerful technologies",
  description:
    "We use modern development technologies and third-party integrations to create connected, reliable and scalable SaaS applications that fit your business requirements.",
  items: [
    { name: "OpenAI" },
    { name: "Claude" },
    { name: "Gemini" },
    { name: "n8n" },
    { name: "Google Sheets" },
    { name: "Gmail" },
    { name: "Notion" },
    { name: "API" },
    { name: "Database" },
  ],
},

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is SaaS development?",
        answer:
          "SaaS (Software as a Service) development involves building cloud-based software applications that users can access through the internet, typically through subscription-based plans without installing or maintaining the software themselves.",
      },
      {
        question: "What is an AI-powered SaaS application?",
        answer:
          "An AI-powered SaaS application combines cloud-based software with artificial intelligence capabilities to automate tasks, analyze information, generate content and provide intelligent features that improve user experiences.",
      },
      {
        question: "Can you turn my idea into a SaaS product?",
        answer:
          "Yes. We can help transform your idea into a functional SaaS product by understanding your requirements, planning essential features, developing the application and preparing it for launch.",
      },
      {
        question: "What is MVP development?",
        answer:
          "A Minimum Viable Product (MVP) is an initial version of a software product that includes its essential features. It helps businesses validate their ideas, test market demand and collect feedback before investing in further development.",
      },
      {
        question: "Can you integrate AI into an existing SaaS platform?",
        answer:
          "Yes. We can integrate AI capabilities into your existing SaaS application, including intelligent assistants, automated workflows, AI-powered search, content generation and data processing.",
      },
      {
        question: "Can you build subscription and payment systems?",
        answer:
          "Yes. We can implement subscription plans, recurring billing, payment processing and customer account management using supported payment gateways and third-party services.",
      },
      {
        question: "Will my SaaS application be scalable?",
        answer:
          "We design SaaS applications with scalability in mind, using suitable architecture, database structures and cloud infrastructure to support increasing users, data and business requirements.",
      },
      {
        question: "How long does it take to develop a SaaS application?",
        answer:
          "The timeline depends on your product features, integrations, technical complexity and overall requirements. We evaluate your project scope before providing a realistic development timeline.",
      },
    ],
  },

  cta: {
    heading: "Have an Idea for Your Next SaaS Product?",
    description:
      "Let's turn your vision into a powerful, scalable software solution designed to support your business growth.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "AI Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API Integrations",
        link: "/api-integration",
      },
    ],
  },
};



export const businessWorkflowAutomationData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "BUSINESS WORKFLOW AUTOMATION",
    heading: "Automate Your Business Workflows and Work Smarter",
    description:
      "Eliminate repetitive tasks and streamline your daily operations with intelligent business workflow automation. We build automated workflows that connect your tools, manage routine processes, synchronize data and help your team focus on more valuable work.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "Business Workflow Automation Solutions",
  },

  trust: {
    points: [
      "Reduce repetitive manual tasks",
      "Connect your existing business tools",
      "Improve operational efficiency",
      "Scalable automation workflows",
    ],
    logos: [
      "n8n",
      "Make",
      "Zapier",
      "OpenAI",
      "Claude",
      "Gemini",
      "Google Sheets",
      "Gmail",
      "Slack",
      "HubSpot",
      "Salesforce",
    ],
  },

  problems: {
    heading: "Signs your business needs workflow automation",
    items: [
      "Your team spends hours completing repetitive manual tasks",
      "Business processes involve too many disconnected tools",
      "Important tasks require constant manual follow-ups",
      "Employees frequently enter the same data into multiple systems",
      "Manual approvals slow down business operations",
      "Human errors affect your daily workflows and reporting",
      "Your business struggles to manage increasing workloads efficiently",
    ],
    closing:
      "If these challenges sound familiar, business workflow automation can help simplify your operations, reduce manual effort and improve productivity.",
  },

  build: {
    heading: "Business workflow automation solutions we build",
    items: [
      {
        title: "Business Process Automation",
        description:
          "Automate repetitive business activities, standardize processes and eliminate unnecessary manual steps to help your team work more efficiently.",
      },
      {
        title: "Lead Management Automation",
        description:
          "Automatically capture new leads, organize customer information, assign leads to the right team members and trigger timely follow-up notifications.",
      },
      {
        title: "CRM & Sales Automation",
        description:
          "Connect your sales workflows with CRM platforms to automate customer updates, sales activities, lead tracking and follow-up processes.",
      },
      {
        title: "Email & Communication Automation",
        description:
          "Automate email notifications, customer responses, internal alerts and communication workflows to keep your team and customers informed.",
      },
      {
        title: "Data Synchronization & Integration",
        description:
          "Connect different business applications and synchronize information across platforms, spreadsheets, databases and other systems.",
      },
      {
        title: "Approval & Task Management Automation",
        description:
          "Create automated approval processes, assign tasks, send reminders and track progress to keep business operations organized.",
      },
    ],
    closing:
      "From simple task automation to complex business workflows, we build solutions around your existing tools, processes and operational requirements.",
  },

  process: {
    heading: "How we automate your business workflows",
    steps: [
      {
        title: "Discover",
        description:
          "Understand your existing business processes, repetitive tasks and automation requirements.",
      },
      {
        title: "Plan",
        description:
          "Identify automation opportunities, define workflow logic and map out how your systems should communicate.",
      },
      {
        title: "Develop",
        description:
          "Build automated workflows using suitable automation platforms, APIs and integrations.",
      },
      {
        title: "Test",
        description:
          "Test workflow execution, data synchronization, error handling and automation reliability.",
      },
      {
        title: "Launch",
        description:
          "Deploy your automated workflows, monitor their performance and make improvements as your business grows.",
      },
    ],
    closing:
      "We ensure every workflow follows your business requirements, handles exceptions appropriately and keeps your team informed throughout the process.",
  },

  caseStudies: {
    heading: "Business automation in action",
    items: [
      {
        category: "WORKFLOW AUTOMATION",
        title: "Automating Repetitive Business Operations",
        description:
          "An automated workflow solution designed to connect business applications, manage repetitive tasks and reduce manual work across daily operations.",
        link: "/case-studies",
      },
      {
        category: "CRM & SALES AUTOMATION",
        title: "Streamlining Lead Management and Follow-Ups",
        description:
          "An intelligent automation solution designed to capture leads, update CRM records, assign sales tasks and trigger automated customer follow-ups.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
    heading: "Connect your business tools with intelligent automation",
    description:
      "Your business workflows should work seamlessly across the applications you already use. We connect your tools, APIs and business systems to create automated processes that keep information moving and operations running smoothly.",
    items: [
      { name: "n8n" },
      { name: "Make" },
      { name: "Zapier" },
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Google Sheets" },
      { name: "Gmail" },
      { name: "Google Calendar" },
      { name: "Slack" },
      { name: "HubSpot" },
      { name: "Salesforce" },
      { name: "WhatsApp" },
      { name: "Telegram" },
      { name: "API" },
    ],
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is business workflow automation?",
        answer:
          "Business workflow automation uses technology to perform repetitive tasks and manage business processes automatically. It helps organizations reduce manual work, improve efficiency and connect different applications.",
      },
      {
        question: "Which business processes can be automated?",
        answer:
          "Common processes include lead management, customer onboarding, email notifications, data entry, CRM updates, appointment scheduling, approval workflows, reporting and task management.",
      },
      {
        question: "Can you automate our existing business workflows?",
        answer:
          "Yes. We analyze your existing processes and identify opportunities to automate repetitive tasks while keeping your current business operations and requirements in mind.",
      },
      {
        question: "Which automation tools do you use?",
        answer:
          "We work with automation platforms such as n8n, Make and Zapier, along with APIs, AI models and custom integrations depending on your workflow requirements.",
      },
      {
        question: "Can different business applications communicate with each other?",
        answer:
          "Yes. We can connect supported applications through APIs, webhooks and automation platforms to synchronize information and trigger actions between different systems.",
      },
      {
        question: "Can AI be included in automated workflows?",
        answer:
          "Absolutely. We can integrate AI capabilities into workflows to classify information, process customer inquiries, summarize documents, generate responses and support intelligent decision-making.",
      },
      {
        question: "Will automation replace our employees?",
        answer:
          "Our goal is to reduce repetitive work and support your employees, not replace the human judgment your business needs. Your team remains involved in important decisions and tasks requiring human attention.",
      },
      {
        question: "How long does it take to automate a business workflow?",
        answer:
          "The timeline depends on workflow complexity, the number of integrations and the required automation logic. We assess your processes before providing a realistic development timeline.",
      },
    ],
  },

  cta: {
    heading: "Ready to Automate Your Business Operations?",
    description:
      "Let's simplify your daily processes with intelligent workflow automation that saves time, reduces manual work and helps your business grow.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "Business Workflow Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API Integrations",
        link: "/api-integration",
      },
    ],
  },
};




export const apiIntegrationData = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    tag: "API & SOFTWARE INTEGRATIONS",
    heading: "Connect Your Business Systems with Seamless API Integrations",
    description:
      "Bring your business applications, platforms and software together with reliable API and third-party integrations. We build seamless connections that synchronize data, automate communication and help your systems work together efficiently without unnecessary manual processes.",
    primaryButton: "Contact Us",
    secondaryButton: "See a Case Study",
    secondaryLink: "#results",
    image: aboutusimg,
    imageAlt: "API and Software Integration Solutions",
  },

  trust: {
    points: [
      "Seamless third-party integrations",
      "Secure data communication",
      "Real-time data synchronization",
      "Scalable integration architecture",
    ],
    logos: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Stripe",
      "PayPal",
      "HubSpot",
      "Salesforce",
      "WhatsApp",
      "Google Sheets",
      "Gmail",
      "Slack",
      "Zapier",
      "n8n",
    ],
  },

  problems: {
    heading: "Signs your business needs better software integrations",
    items: [
      "Your business applications operate in separate environments",
      "Employees manually transfer information between different platforms",
      "Data inconsistencies occur across multiple business systems",
      "Your software does not communicate with essential third-party services",
      "Manual data synchronization slows down daily operations",
      "Integrating new tools into your existing systems is complicated",
      "Your business needs a centralized and connected technology ecosystem",
    ],
    closing:
      "If these challenges sound familiar, API and software integrations can help connect your systems, improve data consistency and create a more efficient business environment.",
  },

  build: {
    heading: "API and software integration solutions we build",
    items: [
      {
        title: "Third-Party API Integration",
        description:
          "Connect your applications with external services and platforms through APIs, enabling seamless data exchange and communication between different systems.",
      },
      {
        title: "Custom API Development",
        description:
          "Design and develop custom APIs that allow your applications, databases and business systems to communicate securely and efficiently.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Integrate payment providers such as Stripe and PayPal to support secure transactions, payment processing, subscription billing and automated payment updates.",
      },
      {
        title: "CRM & ERP Integration",
        description:
          "Connect CRM and ERP platforms with your existing business applications to synchronize customer records, manage business data and streamline operational processes.",
      },
      {
        title: "E-commerce Integrations",
        description:
          "Connect e-commerce platforms with payment gateways, inventory systems, shipping services and customer management tools to simplify online business operations.",
      },
      {
        title: "Webhooks & Real-Time Integrations",
        description:
          "Implement webhook-based integrations that automatically trigger actions and transfer information between connected applications whenever specific events occur.",
      },
    ],
    closing:
      "Whether you need to connect existing software, integrate third-party services or develop custom APIs, we build reliable solutions around your technical and business requirements.",
  },

  process: {
    heading: "How we connect your business systems in 5 steps",
    steps: [
      {
        title: "Discover",
        description:
          "Understand your existing applications, integration requirements and data communication needs.",
      },
      {
        title: "Plan",
        description:
          "Define integration architecture, API endpoints, authentication methods and data exchange workflows.",
      },
      {
        title: "Develop",
        description:
          "Build API connections, configure third-party services and implement the required integration logic.",
      },
      {
        title: "Test",
        description:
          "Test API requests, data accuracy, authentication, error handling and communication between connected systems.",
      },
      {
        title: "Deploy",
        description:
          "Launch your integrations, monitor system communication and ensure everything works reliably.",
      },
    ],
    closing:
      "We focus on building reliable integrations with proper error handling, secure communication and scalable architecture to support your growing business requirements.",
  },

  caseStudies: {
    heading: "Software integrations in action",
    items: [
      {
        category: "API INTEGRATION",
        title: "Connecting Business Applications Through Custom APIs",
        description:
          "A custom integration solution designed to connect multiple business applications, synchronize information and reduce manual data management across different systems.",
        link: "/case-studies",
      },
      {
        category: "PAYMENT INTEGRATION",
        title: "Streamlining Online Payments and Transactions",
        description:
          "An integrated payment solution designed to connect payment services with business applications, automate transaction updates and simplify payment management.",
        link: "/case-studies",
      },
    ],
  },

  integrations: {
    heading: "Integrate the platforms and technologies your business depends on",
    description:
      "We connect your existing software with leading third-party platforms, APIs and business applications. Our integration solutions help create a connected technology ecosystem where information flows smoothly between your systems.",
    items: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "HubSpot" },
      { name: "Salesforce" },
      { name: "WhatsApp" },
      { name: "Google Sheets" },
      { name: "Gmail" },
      { name: "Google Calendar" },
      { name: "Slack" },
      { name: "Zapier" },
      { name: "n8n" },
      { name: "Make" },
      { name: "REST API" },
      { name: "Webhooks" },
    ],
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is API integration?",
        answer:
          "API integration connects different software applications through Application Programming Interfaces (APIs), allowing them to exchange information, communicate and perform actions automatically.",
      },
      {
        question: "What types of software can you integrate?",
        answer:
          "We can integrate CRM systems, ERP platforms, payment gateways, e-commerce applications, databases, communication tools, AI services and other software that provides suitable integration capabilities.",
      },
      {
        question: "Can you integrate third-party APIs into our existing application?",
        answer:
          "Yes. We can integrate third-party APIs into your existing website, application or software platform to introduce additional functionality and connect external services with your systems.",
      },
      {
        question: "Do you develop custom APIs?",
        answer:
          "Yes. We develop custom APIs that allow your applications and business systems to communicate, exchange data and access specific functionality through structured endpoints.",
      },
      {
        question: "What is the difference between REST APIs and webhooks?",
        answer:
          "REST APIs typically allow applications to request or send data when needed, while webhooks automatically send information to another system when a specific event occurs. Both can be used together to create connected workflows.",
      },
      {
        question: "Are API integrations secure?",
        answer:
          "We implement appropriate security measures such as authentication, authorization, secure communication and access controls based on the requirements of your integration and the services involved.",
      },
      {
        question: "Can you connect multiple software applications together?",
        answer:
          "Absolutely. We can connect multiple applications and services to create a centralized integration ecosystem where information is exchanged and processes are coordinated across your business systems.",
      },
      {
        question: "How long does an API integration project take?",
        answer:
          "The timeline depends on the number of systems, API documentation, authentication requirements and integration complexity. We evaluate your requirements before providing a realistic development timeline.",
      },
    ],
  },

  cta: {
    heading: "Ready to Connect Your Business Systems?",
    description:
      "Let's build seamless API integrations that bring your applications together, simplify data exchange and make your business operations more efficient.",
    button: "Contact Us",
    link: "/contact-us",
  },

  relatedServices: {
    heading: "Explore Our Other Services",
    items: [
      {
        title: "AI Agent Development",
        link: "/ai-agent-development",
      },
      {
        title: "AI Voice & Customer Support",
        link: "/ai-voice",
      },
      {
        title: "AI Knowledge Base & RAG",
        link: "/ai-knowledge-base",
      },
      {
        title: "MVP and SaaS Development",
        link: "/ai-saas-development",
      },
      {
        title: "Business Workflow Automation",
        link: "/business-workflow-automation",
      },
      {
        title: "API & Software Integrations",
        link: "/api-integration",
      },
    ],
  },
};