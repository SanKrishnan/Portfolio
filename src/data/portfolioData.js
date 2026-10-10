export const personalInfo = {
  name: "SANJANA KRISHNAN",
  title: "Software Developer & Engineer",
  subtitle: "Software Development · AI/ML · Data · Business Analytics",
  institution: "Computer Science Engineering",
  degree: "B.Tech in Computer Science & Engineering",
  period: "2023–2027",
  cgpa: "8.55",
  location: "India",
  shortBio: "Data speaks, but code, logic, and choreography make it resonate. Through sharp analysis and relentless experimentation, I transform chaotic problems into intelligent, beautifully structured applications-because if a system lacks rhythm and grace, it’s just noise.",
  aboutDetailed: [
    "I engineer software solutions that deliver direct, practical value by building end-to-end applications powered by AI, data analytics, and automation. Operating at the intersection of full-stack backend development, applied AI pipelines, and business intelligence, my experience spans designing backend API architectures, voice-interactive AI platforms, and executive analytics dashboards.",
    "Coming from a background in performance and creative arts, I view engineering through a slightly different lens. Whether I’m structuring a database or choreographing a routine, timing, rhythm, and precision are everything. I love the entire journey: rapid prototyping, wiring systems together, diagnostic debugging, and tweaking performance until everything runs seamlessly.",
    "My goal is simple: build intelligent, human-centric software that solves real business problems, communicates data effortlessly, and operates with absolute grace."
  ],
  interests: [
    "Software Development",
    "AI / Machine Learning",
    "Data Analytics",
    "Business Analytics"
  ],
  socials: {
    github: "https://github.com/SanKrishnan",
    linkedin: "https://www.linkedin.com/in/sanjana-krishnan-6010b0280",
    email: "skmk0503@gmail.com",
    phone: "9503097947"
  }
};

export const problemSolving = {
  headline: "ALWAYS BUILDING. ALWAYS LEARNING. ALWAYS SOLVING.",
  stat: "100+",
  statLabel: "Coding Problems Solved Across Coding Platforms",
  topics: [
    "Arrays",
    "Hashing",
    "Binary Search",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Recursion"
  ]
};

export const projects = [
  {
    id: "savoury-sweet-co",
    slug: "savoury-sweet-co",
    name: "SAVOURY & SWEET CO.",
    tagline: "AI-Powered Conversational Bakery & Analytics Platform",
    category: "Full-Stack Software & AI",
    accentColor: "#B9A7E8", // Lavender
    shortDescription: "Hybrid conversational ordering platform built using FastAPI, Groq (Llama 3.2), and Supabase (PostgreSQL), reducing response hallucinations by ~75% across 15+ test scenarios.",
    problem: "Traditional online ordering forms lack natural language interactions, while unconstrained conversational AI models frequently suffer from hallucinations during cart transactions.",
    approach: "Built a hybrid conversational ordering platform using FastAPI with Groq (Llama 3.2) for production sub-second inference and Ollama locally. Engineered LLM workflows with strict prompt validation for 5+ cart operations, automated ReportLab PDF invoice generation, Supabase order persistence, and Power BI / Chart.js dashboards.",
    metrics: [
      "Sub-second natural language and voice ordering",
      "~75% reduction in response hallucinations across 15+ test scenarios",
      "~70% reduction in manual order processing effort via automated PDF invoices",
      "Transactional analytics tracking 8+ bakery products"
    ],
    features: [
      "Sub-Second Hybrid Conversational Ordering (FastAPI + Groq Llama 3.2)",
      "Strict Prompt Validation for 5+ Cart Operations",
      "Local Execution Support via Ollama",
      "Supabase (PostgreSQL) Order Persistence for 8+ Products",
      "Automated ReportLab Dynamic PDF Invoice Generation",
      "Interactive Chart.js & Power BI Sales Dashboards"
    ],
    techStack: ["Python", "FastAPI", "Groq (Llama 3.2)", "Ollama", "PostgreSQL", "Supabase", "REST APIs", "ReportLab", "Chart.js", "Power BI"],
    workflow: [
      "1. Natural Language Voice/Text Order Input",
      "2. FastAPI Middleware Processes Request via Groq (Llama 3.2)",
      "3. Strict Prompt Validation Executes 5+ Cart Operations",
      "4. Order Persisted to Supabase & Automated PDF Invoice Generated"
    ],
    screenshots: [],
    videos: [
          {
            title: "Manual & Chat-Based Ordering",
            description:
              "Manual ordering, chat ordering, and order PDF generation.",
            src: "/videos/savoury-sweet-1.mp4",
          },
          {
            title: "Voice Ordering, Dashboard & PDF Generation",
            description:
              "Voice API ordering, dashboard management, and order PDF generation.",
            src: "/videos/savoury-sweet-2.mp4",
          },
        ],
    architecture: {
      subtitle: "AI-Powered Conversational Ordering & Analytics Platform",
      demoDescription: "A walkthrough of Savoury & Sweet Co. - from natural-language and voice ordering to AI-assisted cart management, order processing, invoice generation, and business analytics.",
      description: "Savoury & Sweet Co. combines conversational AI, a FastAPI backend, Supabase PostgreSQL, automated invoice generation, and business analytics into a complete bakery ordering workflow.",
      pipeline: [
        { title: "01 — CUSTOMER INPUT", description: "Natural-language or voice-based bakery ordering" },
        { title: "02 — AI CONVERSATION", description: "Llama-based conversational AI interprets customer requests and product questions" },
        { title: "03 — ORDER PROCESSING", description: "FastAPI backend processes the conversation, validates the order, and updates the shopping basket" },
        { title: "04 — DATA & STORAGE", description: "Supabase PostgreSQL stores order information and Supabase Storage stores generated invoices" },
        { title: "05 — INVOICE GENERATION", description: "ReportLab generates a PDF invoice after order confirmation" },
        { title: "06 — ANALYTICS", description: "Chart.js and Power BI transform order data into revenue, product, order-volume, and business insights" }
      ]
    },
    github: "https://github.com/SanKrishnan/Savoury-Sweet",
    website: "https://savoury-sweet.vercel.app/",
    liveDemo: "https://savoury-sweet.vercel.app/",
    learnings: "Mastered high-performance FastAPI service architecture, controlling LLM decision parameters to eliminate hallucinations, and connecting SQL databases to visual dashboards."
  },
  {
    id: "letunote-ai",
    slug: "letunote-ai",
    name: "LETUNOTE AI",
    tagline: "AI-Powered Lecture Transcription & Study Assistant",
    category: "AI / ML & NLP",
    accentColor: "#65B7A5", // Sea Green
    shortDescription: "End-to-end AI/ML pipeline using Whisper, BART-large-CNN, and T5 for automated lecture transcription, summarization, and question generation, reducing manual transcription time by 90%.",
    problem: "Students spend substantial time manually transcribing lecture recordings, organizing key summaries, and drafting revision study questions.",
    approach: "Built an end-to-end AI/ML pipeline integrating Whisper, BART-large-CNN, and T5 within a Streamlit application featuring audio upload, automated transcript generation, custom 4-pass regex-based text cleaning, and ReportLab-based PDF export.",
    metrics: [
      "90% reduction in manual transcription time",
      "92.6% transcription accuracy (Whisper Base WER ~7.4%)",
      "70–200 token summaries with ~44% ROUGE-1 score",
      "60–70% answer-overlap accuracy on generated study questions"
    ],
    features: [
      "End-to-End AI/ML Audio Processing Pipeline",
      "Automated Speech-to-Text Transcription via Whisper",
      "70–200 Token Summaries via BART-large-CNN",
      "Custom 4-Pass Regex Text Cleaning & T5 Question Generation",
      "Automated ReportLab PDF Export",
      "Interactive Streamlit Frontend Interface"
    ],
    techStack: ["Python", "Streamlit", "Whisper", "BART-large-CNN", "T5", "NLP", "ReportLab"],
    workflow: [
      "1. Audio File Upload via Streamlit Interface",
      "2. Whisper Engine Performs Speech-to-Text Transcription",
      "3. BART-large-CNN Generates 70-200 Token Summaries",
      "4. Custom 4-Pass Regex & T5 Engine Generate Study Material & PDF"
    ],
    screenshots: [],
    video: "/videos/letunote-demo.mp4",
    architecture: {
      subtitle: "AI-Powered Lecture Transcription & Study Assistant",
      demoDescription: "A walkthrough of LETUNOTE AI - from lecture audio upload and transcription to summarization, question generation, and PDF export.",
      description: "LETUNOTE AI uses a modular NLP pipeline that transforms lecture recordings into structured study material through speech recognition, text preprocessing, summarization, question generation, and automated PDF export.",
      pipeline: [
        { title: "01 — AUDIO INPUT", description: "Lecture recording uploaded through Streamlit" },
        { title: "02 — SPEECH-TO-TEXT", description: "Whisper transcription" },
        { title: "03 — TEXT CLEANING", description: "Custom 4-pass regex preprocessing" },
        { title: "04 — SUMMARIZATION", description: "BART-large-CNN" },
        { title: "05 — QUESTION GENERATION", description: "T5-based study questions" },
        { title: "06 — PDF EXPORT", description: "ReportLab-generated study material" }
      ]
    },
    github: "https://github.com/SanKrishnan/Lectures-to-Notes-Generator",
    website: "https://huggingface.co/spaces/SanKrishnan/LetUNote_AI",
    liveDemo: "https://huggingface.co/spaces/SanKrishnan/LetUNote_AI",
    learnings: "Deepened multi-model NLP pipeline orchestration, custom regex pre-processing to suppress hallucinations, and Streamlit app deployment."
  },
  {
    id: "fossee-visualizer",
    slug: "fossee-visualizer",
    name: "CHEMICAL EQUIPMENT PARAMETER VISUALIZER",
    tagline: "Smart Chemical Equipment Analytics Dashboard",
    category: "Full-Stack Software & Data Analytics",
    accentColor: "#72D9D2", // Aqua
    shortDescription: "Full-stack analytics visualizer using React, Django REST Framework, and Python, enabling analysis of 5+ industrial equipment parameters and reducing manual analysis effort by ~70%.",
    problem: "Industrial chemical equipment dataset logs stored in raw CSV files require excessive manual preprocessing to extract operational trends and parameter summaries.",
    approach: "Built a full-stack Chemical Equipment Parameter Visualizer using React, Django REST Framework, and Python. Engineered a Pandas data cleaning and analytics pipeline to preprocess CSV datasets, generate interactive pie and bar charts, and issue JWT-authenticated PDF reports via ReportLab.",
    metrics: [
      "Analysis of 5+ industrial equipment parameters from CSV datasets",
      "~70% reduction in manual analysis effort via Pandas pipeline",
      "JWT-authenticated REST API architecture"
    ],
    features: [
      "Full-Stack Architecture (React + Django REST Framework)",
      "Multi-Parametric CSV Dataset Ingestion (5+ Parameters)",
      "Pandas Data Preprocessing & Analytics Pipeline",
      "Interactive Pie & Bar Chart Visualizations",
      "JWT Authentication & Session Management",
      "Automated ReportLab PDF Analytics Reporting"
    ],
    techStack: ["React", "Django REST Framework", "Python", "Pandas", "JWT Authentication", "REST APIs", "ReportLab"],
    workflow: [
      "1. CSV Dataset Upload",
      "2. Pandas Cleaning & Analytics Pipeline Preprocesses Log",
      "3. Django REST API Delivers Analytical Payload",
      "4. React UI Renders Interactive Charts & Downloadable PDF Report"
    ],
    screenshots: [],
    video: "/videos/fossee-demo.mp4",
    architecture: {
      subtitle: "Full-Stack Chemical Equipment Analytics Dashboard",
      demoDescription: "A walkthrough of the Chemical Equipment Parameter Visualizer - from CSV dataset upload and Pandas preprocessing to interactive chart generation, JWT-authenticated API delivery, and automated PDF analytics report export.",
      description: "The Chemical Equipment Parameter Visualizer combines a Pandas analytics pipeline, a Django REST Framework API with JWT authentication, and a React frontend to transform raw industrial CSV datasets into interactive visualizations and downloadable PDF reports.",
      pipeline: [
        { title: "01 — CSV UPLOAD", description: "Industrial equipment dataset uploaded as a CSV file" },
        { title: "02 — PANDAS PIPELINE", description: "Pandas cleans, preprocesses, and aggregates equipment parameter data" },
        { title: "03 — ANALYTICS ENGINE", description: "Statistical summaries and parameter trends computed across 5+ equipment types" },
        { title: "04 — JWT REST API", description: "Django REST Framework delivers the analytical payload through JWT-authenticated endpoints" },
        { title: "05 — REACT CHARTS", description: "React renders interactive pie and bar chart visualizations from the API response" },
        { title: "06 — PDF REPORT", description: "ReportLab generates a downloadable PDF analytics report on demand" }
      ]
    },
    github: "https://github.com/SanKrishnan/Chemical-Equipment-Parameter-Visualizer",
    liveDemo: "",
    learnings: "Strengthened full-stack React-Django REST integration, secure JWT session control, and dynamic PDF report generation."
  },
  {
    id: "weather-dashboard",
    slug: "weather-dashboard",
    name: "WEATHER DASHBOARD",
    tagline: "Desktop Meteorological Application",
    category: "Software Development",
    accentColor: "#65B7A5", // Sea Green
    shortDescription: "Desktop weather application built with Python and Tkinter consuming the OpenWeather REST API.",
    problem: "Web weather portals are frequently cluttered with intrusive advertisements and unnecessary visual distractions.",
    approach: "Designed a clean, lightweight desktop GUI using Python Tkinter that asynchronously queries the OpenWeather REST API and displays structured weather metrics.",
    metrics: [
      "Global weather metrics via OpenWeather REST API integration"
    ],
    features: [
      "Real-time Atmospheric Temperature & Humidity Tracking",
      "Global City Lookup & Condition Status Displays",
      "Asynchronous REST API Querying",
      "Native Tkinter Desktop Interface"
    ],
    techStack: ["Python", "Tkinter", "OpenWeather API", "JSON REST API"],
    workflow: [
      "1. User Inputs City Name",
      "2. Asynchronous Request Sent to OpenWeather API",
      "3. Parse JSON Response Payload",
      "4. Update Tkinter GUI Widgets"
    ],
    screenshots: [],
    video: "/videos/weathernow-demo.mp4",
    architecture: {
      subtitle: "Desktop Meteorological Application",
      demoDescription: "A walkthrough of the Weather Dashboard - from city name input to asynchronous OpenWeather API querying, JSON parsing, and live GUI rendering of temperature, humidity, and weather conditions.",
      description: "The Weather Dashboard is a lightweight Python desktop application that asynchronously queries the OpenWeather REST API and presents structured meteorological metrics — temperature, humidity, and conditions — inside a clean Tkinter GUI, without advertisements or visual clutter.",
      pipeline: [
        { title: "01 — CITY INPUT", description: "User enters a city name into the Tkinter interface" },
        { title: "02 — API REQUEST", description: "Asynchronous HTTP request sent to OpenWeather REST API" },
        { title: "03 — JSON PARSING", description: "API JSON response payload is parsed for weather metrics" },
        { title: "04 — DATA EXTRACTION", description: "Temperature, humidity, wind speed, and condition status extracted" },
        { title: "05 — GUI UPDATE", description: "Tkinter widgets updated with live weather metrics" },
        { title: "06 — DISPLAY", description: "Clean desktop interface shows current weather without ads or distractions" }
      ]
    },
    github: "https://github.com/SanKrishnan/WeatherNow",
    website: "https://weather-8g66e7bx5-sanjana-krishnans-projects.vercel.app/",
    liveDemo: "https://weather-8g66e7bx5-sanjana-krishnans-projects.vercel.app/",
    learnings: "Practiced asynchronous HTTP handling in Python, JSON parsing, and desktop GUI event handling."
  },
  {
    id: "covid-analysis",
    slug: "covid-analysis",
    name: "COVID DATA ANALYSIS",
    tagline: "Epidemiological Data Cleaning & Analytics Application",
    category: "Data Analytics",
    accentColor: "#72D9D2", // Aqua
    projectType: "School Project",
    projectYear: "2022",
    shortDescription: "Data analytics application using Pandas, Matplotlib, and Tkinter to process pandemic datasets and visualize trends.",
    problem: "Raw pandemic datasets require systematic preprocessing, aggregation, and visual plot generation to extract infection trends.",
    approach: "Developed a Python analytics pipeline using Pandas for data cleaning and Matplotlib for generating analytical figures, embedded within a Tkinter desktop application.",
    metrics: [
      "Statistical metrics computed across epidemiological datasets"
    ],
    features: [
      "Pandas Data Preprocessing & Missing Record Cleaning",
      "Exploratory Trend & Regional Metric Aggregation",
      "Matplotlib Analytical Plot Generation",
      "Interactive Tkinter Desktop App View"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Tkinter", "REST API"],
    workflow: [
      "1. Load Global Pandemic CSV Records",
      "2. Pandas Preprocessing & Data Cleaning",
      "3. Generate Analytical Figures with Matplotlib",
      "4. Display Plots inside Interactive Desktop App"
    ],
    screenshots: [],
    video: "",
    demoLabel: "ORIGINAL PROJECT DEMO · 2022",
    architecture: {
      subtitle: "COVID-19 Data Analysis & Visualization · School Project, 2022",
      demoDescription: "A walkthrough of my 2022 school project — a COVID-19 data analysis application developed to explore pandemic data through Python, Pandas, Matplotlib, and Tkinter. The video shows the original 2022 implementation.",
      description: "This school project was developed in 2022 to explore COVID-19 data using Python-based data processing, analysis, visualization, and a Tkinter interface.",
      pipeline: [
        { title: "01 — CSV LOAD", description: "Global pandemic CSV records loaded into the application" },
        { title: "02 — DATA CLEANING", description: "Pandas removes missing values, corrects data types, and standardizes records" },
        { title: "03 — AGGREGATION", description: "Regional and temporal infection metrics aggregated from cleaned dataset" },
        { title: "04 — TREND ANALYSIS", description: "Statistical trends computed across countries, dates, and infection categories" },
        { title: "05 — PLOT GENERATION", description: "Matplotlib generates analytical charts and epidemiological figures" },
        { title: "06 — DESKTOP VIEW", description: "Plots embedded and displayed inside the interactive Tkinter desktop app" }
      ]
    },
    github: "https://github.com/SanKrishnan/COVID-Insight-Visualizer",
    liveDemo: "",
    learnings: "Enhanced data wrangling with Pandas, statistical plotting with Matplotlib, and desktop GUI embedding."
  }
];

export const skillsCategories = [
  {
    title: "SOFTWARE DEVELOPMENT",
    skills: [
      { name: "Java", description: "OOP · DSA · Algorithms · Problem Solving" },
      { name: "Python", description: "Backend APIs · ML Pipelines · Data Analysis" },
      { name: "SQL", description: "Relational Data · Queries · Joins · Transactions" },
      { name: "React.js", description: "Components · Hooks · State · SPA Development" },
      { name: "FastAPI", description: "Async APIs · REST · LLM Services · Microservices" },
      { name: "Django REST", description: "REST APIs · JWT · Serialization · Database ORM" },
      { name: "JavaScript", description: "ES6+ · DOM · Browser APIs · Web Development" }
    ]
  },
  {
    title: "AI / MACHINE LEARNING",
    skills: [
      { name: "NLP", description: "Text Processing · Tokenization · Summarization · Q&A" },
      { name: "Hugging Face", description: "Transformers · BART · T5 · Model Integration" },
      { name: "LLMs & Voice", description: "Whisper · Llama 3.2 · Ollama · Prompt Engineering" },
      { name: "Machine Learning", description: "Supervised · Unsupervised · Model Evaluation · EDA" }
    ]
  },
  {
    title: "DATA & ANALYTICS",
    skills: [
      { name: "Pandas", description: "Data Cleaning · Transformation · DataFrames · Analytics" },
      { name: "NumPy", description: "Arrays · Matrix Operations · Computation · Numerical Analysis" },
      { name: "Power BI", description: "BI Dashboards · DAX · KPIs · Sales Analytics" },
      { name: "Tableau", description: "Data Visualization · Trends · Dashboards · Reporting" },
      { name: "Data Cleaning", description: "Missing Values · Outliers · Standardization · EDA" }
    ]
  },
  {
    title: "CLOUD & BACKEND",
    skills: [
      { name: "PostgreSQL", description: "Relational Data · Transactions · Queries · Indexing" },
      { name: "Supabase", description: "Cloud PostgreSQL · Data Persistence · Real-Time Backend" },
      { name: "MySQL", description: "SQL Queries · Relational Data · Schema Design · Normalization" },
      { name: "REST APIs", description: "JSON APIs · Secure Endpoints · JWT · Backend Integration" }
    ]
  },
  {
    title: "TOOLS & WEB",
    skills: [
      { name: "Git & GitHub", description: "Version Control · Repositories · Collaboration · Git Workflows" },
      { name: "Postman", description: "API Testing · Requests · Payloads · Validation" },
      { name: "Streamlit", description: "AI/ML Apps · Data Apps · Rapid Prototyping · Deployment" },
      { name: "ReportLab", description: "PDF Generation · Reports · Invoices · Document Automation" }
    ]
  }
];
export const experience = [
  {
    role: "Software Engineering & AI Intern",
    company: "MPOnline Limited",
    type: "Remote Internship",
    period: "May 2026 – Aug 2026",
    highlights: [
      "Developed an independent Help Desk Ticket Management System using ASP.NET Core Web API, MVC, Entity Framework Core, and SQL Server, implementing CRUD operations and database migrations.",
      "Built and tested REST API controllers using xUnit and Entity Framework Core, covering API operations, database integration, and software testing.",
      "Contributed as Backend API Developer to CodeGrade (SmartCodeReviewer), an AI-powered code evaluation platform, and presented the backend architecture and implementation."
    ]
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Edunet Foundation AICTE Internship – IBM SkillsBuild India",
    type: "Remote Internship",
    period: "December 2025 – January 2026",
    skills: ["Python", "Whisper", "BART-large-CNN", "T5", "NLP", "Regex", "ROUGE-1"],
    highlights: [
      "Built an AI-powered lecture assistant integrating Whisper, BART-large-CNN, and T5 using a modular Python pipeline, achieving ~92.6% transcription accuracy (Whisper Base WER ~7.4%).",
      "Developed an automated summarization pipeline using BART-large-CNN generating concise 70–200 token summaries with ROUGE-1 score of ~44%, boosting revision efficiency.",
      "Implemented a custom 4-pass regex-based text cleaning and question-generation workflow using T5, achieving 60–70% answer-overlap accuracy while reducing hallucinations.",
      "Created and presented detailed technical PowerPoint on project architecture, benchmark metrics, and impact to mentors and team."
    ]
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    category: "Cloud",
    verificationUrl: "https://drive.google.com/file/d/1X7AJ88wAa55l71rRbHAm1QW2V78t19P7/view?usp=sharing"
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    category: "Data & AI",
    verificationUrl: "https://drive.google.com/file/d/1k732QOYKop3YvtmYVbDhWMRJh8WdAlzt/view?usp=sharing"
  },
  {
    name: "Databases and SQL for Data Science with Python",
    issuer: "IBM / Coursera",
    category: "Database & Data",
    verificationUrl: "https://drive.google.com/file/d/1QEUwvnsJ8EGDuqRocL8ZWjN6pMS9JmLr/view?usp=sharing"
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    category: "Data Analytics",
    verificationUrl: "https://drive.google.com/file/d/1Kwriun4drqq-jQxxV6sPUx8TjXLQ_hPp/view?usp=sharing"
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "IIT Madras (NPTEL)",
    category: "AI / ML",
    verificationUrl: "https://drive.google.com/file/d/1n4fgRBuuzS4ypLY3dOV2JSNj66-DhthE/view?usp=sharing"
  },
  {
    name: "Marketing Analytics",
    issuer: "IIT Kharagpur (NPTEL)",
    category: "Business Analytics",
    verificationUrl: "https://drive.google.com/file/d/1ZAEW3TgR_kvH2tJOHbDm5_t4WZ3sLzbf/view?usp=sharing"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    category: "Networking",
    verificationUrl: "https://drive.google.com/file/d/1nevWwsDTo53FY1QCrXfQ1WwTtwRGDPzA/view?usp=sharing"
  }
];
