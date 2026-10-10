export interface SkillItem {
  name: string;
  category: 'Programming' | 'Data Visualization' | 'Databases' | 'Big Data' | 'Web Technologies' | 'Cloud & Infrastructure';
  levelDescription: string;
  tags: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business Intelligence' | 'Python & Analytics' | 'Machine Learning' | 'Web & Databases';
  description: string;
  technologies: string[];
  problemStatement: string;
  methodology: string[];
  keyInsights: string[];
  metrics: { label: string; value: string }[];
  visualType: 'chart' | 'dashboard' | 'pipeline' | 'network' | 'ecommerce';
  repoUrlPlaceholder: string;
  liveDemoPlaceholder: string;
}

export const PERSONAL_INFO = {
  name: "Shiva Kumar Chai",
  initials: "SK",
  title: "Data Analyst | Data Science Graduate | Analytics & Business Intelligence",
  headline: "Turning Data Into Meaningful Decisions.",
  subheadline: "I transform raw data into meaningful insights through data analysis, visualization, and technology-driven problem solving.",
  location: "Mayadevi RM-03, Rupandehi, Nepal",
  email: "shivakumarchai4886@gmail.com",
  phone: "+977 9807404088",
  whatsappUrl: "https://wa.me/9779807404088?text=Hello%20Shiva%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  emailMailto: "mailto:shivakumarchai4886@gmail.com?subject=Opportunity%20Discussion%20-%20Shiva%20Kumar%20Chai&body=Hello%20Shiva%2C%0A%0AI%20reviewed%20your%20data%20analytics%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.%0A%0ABest%20regards%2C%0A[Your%20Name]",
  socials: {
    github: "https://github.com/shivakumarchai",
    linkedin: "https://linkedin.com/in/shivakumarchai",
    kaggle: "https://kaggle.com/shivakumarchai"
  }
};

export const CORE_PILLARS = [
  {
    title: "Analytical Thinking",
    description: "Deconstructing complex business problems into structured, data-grounded hypotheses with systematic statistical rigor.",
    icon: "BrainCircuit"
  },
  {
    title: "Data Visualization",
    description: "Designing intuitive executive dashboards and visual narratives that communicate strategic metrics clearly to non-technical stakeholders.",
    icon: "BarChart3"
  },
  {
    title: "Technical Problem Solving",
    description: "Building robust data pipelines, writing performant SQL queries, and architecting Python automation scripts that streamline reporting.",
    icon: "Cpu"
  },
  {
    title: "Continuous Learning",
    description: "Relentlessly expanding competencies across machine learning frameworks, modern cloud data warehouses, and distributed big data systems.",
    icon: "Sparkles"
  }
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", levelDescription: "Data manipulation, Pandas, NumPy, statistical modeling, automation, and API scripting", tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"], iconName: "Code" },
  { name: "SQL", category: "Programming", levelDescription: "Complex relational queries, CTEs, window functions, database indexing, and query optimization", tags: ["Joins", "Subqueries", "Aggregations", "CTEs", "Window Functions"], iconName: "Database" },
  { name: "R", category: "Programming", levelDescription: "Exploratory statistical computing, hypothesis testing, and academic data modeling", tags: ["ggplot2", "dplyr", "Statistical Tests"], iconName: "FileCode" },
  { name: "C", category: "Programming", levelDescription: "Low-level algorithms, procedural logic, memory pointers, and foundational computation", tags: ["Pointers", "Data Structures", "Algorithms"], iconName: "Terminal" },
  { name: "C++", category: "Programming", levelDescription: "Object-oriented programming, standard template library (STL), and computational efficiency", tags: ["OOP", "STL", "System Design"], iconName: "Binary" },
  { name: "Scala", category: "Programming", levelDescription: "Functional programming paradigms and scalable data processing alongside Apache Spark", tags: ["Functional Programming", "Spark Integration"], iconName: "Layers" },

  // Data Visualization
  { name: "Power BI", category: "Data Visualization", levelDescription: "Interactive DAX modeling, star schema architecture, drill-through reports, and KPI matrix design", tags: ["DAX", "Data Modeling", "Power Query", "Dashboards"], iconName: "PieChart" },
  { name: "Tableau", category: "Data Visualization", levelDescription: "Visual analytics, calculated fields, dynamic parameters, level of detail (LOD) expressions", tags: ["LOD Expressions", "Storyboards", "Parameters"], iconName: "Activity" },
  { name: "Excel", category: "Data Visualization", levelDescription: "Advanced formulas, PivotTables, VLOOKUP/XLOOKUP, conditional formatting, and dashboard prototypes", tags: ["Pivot Tables", "Power Pivot", "XLOOKUP", "Macro Analysis"], iconName: "Table" },

  // Databases
  { name: "MySQL", category: "Databases", levelDescription: "Relational database schema design, normalization (1NF-3NF), triggers, stored procedures", tags: ["Relational Schemas", "Foreign Keys", "ACID", "Stored Procedures"], iconName: "HardDrive" },
  { name: "MongoDB", category: "Databases", levelDescription: "NoSQL document storage, BSON collections, aggregation pipelines, and JSON payload indexing", tags: ["NoSQL", "Document Model", "Aggregation Pipelines"], iconName: "FolderGit2" },

  // Big Data
  { name: "Hadoop", category: "Big Data", levelDescription: "Distributed storage fundamentals using HDFS and foundational MapReduce architectures", tags: ["HDFS", "Distributed Storage", "Fault Tolerance"], iconName: "Server" },
  { name: "Hive", category: "Big Data", levelDescription: "Data warehousing infrastructure and HiveQL querying over large datasets stored in Hadoop", tags: ["HiveQL", "Data Warehousing", "Schema-on-Read"], iconName: "Boxes" },
  { name: "Apache Spark", category: "Big Data", levelDescription: "In-memory distributed computing, resilient distributed datasets (RDDs), Spark DataFrames", tags: ["PySpark", "In-Memory Compute", "DataFrames"], iconName: "Zap" },

  // Web Technologies
  { name: "HTML", category: "Web Technologies", levelDescription: "Semantic document structuring, accessible web markup, modern web standards", tags: ["Semantic HTML5", "Accessibility", "SEO Markup"], iconName: "Globe" },
  { name: "CSS", category: "Web Technologies", levelDescription: "Responsive layout design, modern grid, flexbox architectures, custom dashboard styling", tags: ["Flexbox", "CSS Grid", "Responsive Design"], iconName: "Palette" },
  { name: "WordPress", category: "Web Technologies", levelDescription: "Content management, theme modifications, plugin integration, client website administration", tags: ["CMS", "Site Customization", "Content Strategy"], iconName: "Layout" },
  { name: "Moodle", category: "Web Technologies", levelDescription: "Learning management system deployment, user role administration, course data management", tags: ["LMS Administration", "User Permissions", "Course Analytics"], iconName: "GraduationCap" },

  // Cloud and Infrastructure
  { name: "Microsoft Azure", category: "Cloud & Infrastructure", levelDescription: "Cloud storage solutions, virtual machines, resource groups, and introductory Azure analytics services", tags: ["Blob Storage", "Virtual Machines", "Cloud Governance"], iconName: "Cloud" },
  { name: "AWS", category: "Cloud & Infrastructure", levelDescription: "Amazon S3 bucket provisioning, EC2 compute instances, foundational cloud architecture", tags: ["S3 Buckets", "EC2 Instances", "IAM Permissions"], iconName: "CloudRain" },
  { name: "IT Systems Support", category: "Cloud & Infrastructure", levelDescription: "Hardware diagnostics, operating system maintenance, peripheral troubleshooting, client assistance", tags: ["Hardware Diagnostics", "Troubleshooting", "System Recovery"], iconName: "Wrench" },
  { name: "Basic Networking", category: "Cloud & Infrastructure", levelDescription: "TCP/IP configurations, subnetting basics, router/switch connectivity, CCTV cabling", tags: ["TCP/IP", "DNS/DHCP", "LAN/WAN", "CCTV Protocols"], iconName: "Network" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "universe-it",
    role: "IT & System Support Intern",
    company: "Universe Information Technology",
    location: "Bhairahawa, Nepal",
    period: "June 2025 – November 2025",
    type: "Internship",
    description: "Delivered hands-on hardware, network, software, and web infrastructure support for commercial clients and internal operations across the Rupandehi region.",
    responsibilities: [
      "Computer hardware and printer troubleshooting across multi-workstation client environments",
      "CCTV camera network setup, configuration, and physical cabling installation support",
      "Windows operating system troubleshooting, driver updates, and software vulnerability remediation",
      "Basic local area networking (LAN) and internal file server support and connectivity auditing",
      "Website layout adjustments, responsive design bug fixes, and content updates",
      "Client-site technical support visits and detailed maintenance logs documentation"
    ],
    skillsGained: ["System Diagnostics", "Network Configuration", "Client Documentation", "Hardware Maintenance", "Web Maintenance"]
  },
  {
    id: "hari-om",
    role: "Accounts & Administrative Officer",
    company: "Hari Om Raju Bhush Supplier",
    location: "Nepal",
    period: "January 2016 – June 2018",
    type: "Full-Time",
    description: "Managed commercial ledger administration, supplier accounts, and workforce payroll records with strict audit compliance and reporting precision.",
    responsibilities: [
      "Maintained accounting logs, day-to-day revenue/expense reconciliation, and administrative support",
      "Processed accurate weekly and monthly payroll for approximately 50 laborers and operational staff",
      "Managed business records, inventory tracking documentation, and regulatory audit compliance filings",
      "Optimized documentation workflow, reducing payroll record discrepancy resolution turnaround"
    ],
    skillsGained: ["Financial Ledger Auditing", "Workforce Payroll Administration", "Data Record Integrity", "Operations Management"]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "uber-data-analysis",
    title: "Uber Data Analysis",
    subtitle: "Rideshare Demand Patterns & Geospatial Trend Modeling",
    category: "Python & Analytics",
    description: "Comprehensive exploratory and statistical analysis of millions of rideshare trips to uncover peak surge intervals, spatial pickup density, and cancellation factor distributions.",
    technologies: ["Python", "Data Analysis", "Visualization", "Pandas", "Matplotlib", "Seaborn"],
    problemStatement: "Urban transportation companies face severe mismatch between vehicle supply and passenger surge demands, resulting in extended wait times and revenue loss.",
    methodology: [
      "Extracted and cleaned raw trip telemetry, parsed datetime timestamps into granular hour/day bins",
      "Engineered trip velocity, duration, and pickup-dropoff spatial distance metrics",
      "Identified peak trip volume clusters during morning commute (8:00 - 10:00 AM) and evening rush hours (5:00 - 8:00 PM)",
      "Modeled cancellation drivers correlated with wait times exceeding 7 minutes"
    ],
    keyInsights: [
      "Over 42% of weekday trips occur within two distinct 3-hour commute windows",
      "High rain and adverse weather indices correlate with a 28% surge in trip cancellation rates",
      "Airport and transit terminal hubs generate the highest trip revenue yield per mile"
    ],
    metrics: [
      { label: "Data Records Analyzed", value: "100K+ Trips" },
      { label: "Temporal Precision", value: "Hourly & Daily" },
      { label: "Core Factor Isolated", value: "Surge & Wait Times" }
    ],
    visualType: "chart",
    repoUrlPlaceholder: "https://github.com/shivakumarchai/uber-data-analysis-project",
    liveDemoPlaceholder: "https://github.com/shivakumarchai/uber-data-analysis-project"
  },
  {
    id: "global-superstore",
    title: "Global Superstore Analytics Dashboard",
    subtitle: "Multi-Region Commercial Performance & Profitability BI",
    category: "Business Intelligence",
    description: "Executive-grade business intelligence dashboard modeling global sales transactions, negative margin hotspots, shipping mode efficiencies, and customer return patterns.",
    technologies: ["Power BI", "Excel", "Business Intelligence", "DAX", "Data Modeling"],
    problemStatement: "Executive leadership lacked unified visibility across international retail branches, obscuring regional margin erosion caused by aggressive discounting in unprofitable subcategories.",
    methodology: [
      "Engineered star schema model connecting sales fact table with customer, product, and geographic dimension tables",
      "Authored custom DAX calculations for Year-over-Year (YoY) Sales Growth, Profit Margins %, and Return Ratios",
      "Built interactive drill-down matrices allowing regional managers to filter from continental views down to country postal codes",
      "Implemented color-coded alert thresholds to highlight products yielding negative net returns"
    ],
    keyInsights: [
      "Uncovered that discounts exceeding 20% on technology accessories eroded regional profit by 14%",
      "Identified 'Same Day' shipping as a major margin drain when order values were beneath $150",
      "Segmented corporate vs. consumer customer bases to reveal corporate accounts had 35% higher repeat lifetime value"
    ],
    metrics: [
      { label: "Global Regions Modeled", value: "5 Continents" },
      { label: "DAX Measures Built", value: "24+" },
      { label: "Margin Leakage Detected", value: "Identified & Flagged" }
    ],
    visualType: "dashboard",
    repoUrlPlaceholder: "https://github.com/shivakumarchai/global-superstore-bi-dashboard",
    liveDemoPlaceholder: "https://github.com/shivakumarchai/global-superstore-bi-dashboard"
  },
  {
    id: "ecommerce-sales-analysis",
    title: "E-commerce Sales Analysis",
    subtitle: "Customer Cohorts, RFM Segmentation & Revenue Pipeline",
    category: "Python & Analytics",
    description: "End-to-end relational data exploration merging transaction databases with Python statistical notebooks to quantify customer lifetime value and seasonal repeat purchase cycles.",
    technologies: ["Python", "SQL", "Excel", "Analytics", "Cohort Analysis", "RFM"],
    problemStatement: "Online retail marketing expenditures were being allocated uniformly without distinguishing between one-time discount seekers and loyal high-frequency buyers.",
    methodology: [
      "Executed SQL queries with CTEs and window functions to compute transaction intervals per customer ID",
      "Calculated Recency, Frequency, and Monetary (RFM) composite scores in Python",
      "Built month-over-month cohort retention heatmaps tracking customer drop-off velocity",
      "Exported executive KPI summary sheets with actionable marketing reallocation suggestions"
    ],
    keyInsights: [
      "The top 12% of customer accounts in the 'Champion' RFM tier drove 53% of annual net merchandise value",
      "Month 2 retention was the critical inflection point: customers making a 2nd purchase within 30 days had 4x retention at 12 months",
      "Holiday promotional cohorts exhibited high churn unless re-engaged within a 21-day promotional drip"
    ],
    metrics: [
      { label: "RFM Clusters", value: "5 Segments" },
      { label: "SQL Window Queries", value: "Optimized" },
      { label: "Cohort Retention Window", value: "12 Months" }
    ],
    visualType: "pipeline",
    repoUrlPlaceholder: "https://github.com/shivakumarchai/ecommerce-sales-cohort-analysis",
    liveDemoPlaceholder: "https://github.com/shivakumarchai/ecommerce-sales-cohort-analysis"
  },
  {
    id: "dp-store-ecommerce",
    title: "DP Store E-commerce Website",
    subtitle: "Full-Stack Relational Database & Web Platform",
    category: "Web & Databases",
    description: "Dynamic web application featuring relational MySQL database schemas, transaction tables, responsive product catalogs, and server-side session authentication.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Relational Database"],
    problemStatement: "Local merchandise retailers required a scalable web storefront with integrated stock count management, inventory tracking, and client order logging.",
    methodology: [
      "Designed normalized 3NF MySQL relational database schema with referential integrity constraints",
      "Programmed server-side transaction logic handling inventory deductions upon checkout confirmation",
      "Implemented responsive product browsing interface with category filtering and dynamic search",
      "Integrated administrative control panel to manage product listings, pricing updates, and customer logs"
    ],
    keyInsights: [
      "Optimized SQL join queries with targeted indexes on product category IDs, cutting page load query time by 60%",
      "Prevented race conditions during concurrent checkouts through database transaction locking",
      "Delivered lightweight, high-performance UI functional even on constrained mobile network bandwidth"
    ],
    metrics: [
      { label: "Relational Tables", value: "Normalized 3NF" },
      { label: "Inventory Tracking", value: "Real-time" },
      { label: "Architecture", value: "Full-Stack Web" }
    ],
    visualType: "ecommerce",
    repoUrlPlaceholder: "https://github.com/shivakumarchai/dp-store-ecommerce-website",
    liveDemoPlaceholder: "https://github.com/shivakumarchai/dp-store-ecommerce-website"
  },
  {
    id: "persona-sense",
    title: "Persona Sense — Decoding Traits Through Face and Voice",
    subtitle: "Multimodal Deep Learning & Acoustic Feature Modeling",
    category: "Machine Learning",
    description: "Multimodal artificial intelligence research application extracting facial micro-expressions via Convolutional Neural Networks and vocal prosody via MFCC acoustic signal processing.",
    technologies: ["Python", "Flask", "CNN", "SVM", "MFCC", "Deep Learning", "Signal Processing"],
    problemStatement: "Traditional psychological trait evaluation relies on subjective questionnaires prone to self-reporting bias; multimodal behavioral cues provide objective data-driven signals.",
    methodology: [
      "Preprocessed video streams into localized facial region frames and normalized audio spectrograms",
      "Extracted Mel-Frequency Cepstral Coefficients (MFCC), spectral centroid, and zero-crossing rate from audio tracks",
      "Trained a Convolutional Neural Network (CNN) on facial expression feature representations",
      "Trained Support Vector Machine (SVM) classifiers on engineered acoustic feature vectors",
      "Built a Flask web endpoint to accept media uploads and output normalized Big Five trait score estimations"
    ],
    keyInsights: [
      "Combining audio prosody with visual facial geometry yielded significantly higher trait prediction confidence than unimodal baselines",
      "MFCC coefficients between 1 and 13 captured the most discriminative vocal pitch variation for extroversion cues",
      "Constructed end-to-end Flask inference pipeline processing 30-second clips in under 3.5 seconds"
    ],
    metrics: [
      { label: "Modalities", value: "Face & Voice" },
      { label: "Audio Descriptors", value: "MFCC Spectral" },
      { label: "Classifiers", value: "CNN + SVM" }
    ],
    visualType: "network",
    repoUrlPlaceholder: "https://github.com/shivakumarchai/persona-sense-multimodal-ml",
    liveDemoPlaceholder: "https://github.com/shivakumarchai/persona-sense-multimodal-ml"
  }
];

// Interactive Dashboard Dataset
export interface SalesDataRecord {
  month: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  region: 'Asia Pacific' | 'North America' | 'Europe';
  category: 'Tech & Electronics' | 'Office Supplies' | 'Furniture';
  sales: number;
  profit: number;
  orders: number;
}

export const RAW_DASHBOARD_DATA: SalesDataRecord[] = [
  // Q1
  { month: "Jan 2026", quarter: "Q1", region: "Asia Pacific", category: "Tech & Electronics", sales: 48500, profit: 12200, orders: 410 },
  { month: "Jan 2026", quarter: "Q1", region: "Asia Pacific", category: "Office Supplies", sales: 21300, profit: 6400, orders: 380 },
  { month: "Jan 2026", quarter: "Q1", region: "Asia Pacific", category: "Furniture", sales: 18200, profit: 3200, orders: 120 },
  { month: "Jan 2026", quarter: "Q1", region: "North America", category: "Tech & Electronics", sales: 54000, profit: 14800, orders: 490 },
  { month: "Jan 2026", quarter: "Q1", region: "North America", category: "Office Supplies", sales: 28000, profit: 7900, orders: 430 },
  { month: "Jan 2026", quarter: "Q1", region: "North America", category: "Furniture", sales: 22000, profit: 4100, orders: 140 },
  { month: "Jan 2026", quarter: "Q1", region: "Europe", category: "Tech & Electronics", sales: 39000, profit: 9900, orders: 340 },
  { month: "Jan 2026", quarter: "Q1", region: "Europe", category: "Office Supplies", sales: 19500, profit: 5100, orders: 290 },
  { month: "Jan 2026", quarter: "Q1", region: "Europe", category: "Furniture", sales: 16000, profit: 2700, orders: 105 },

  { month: "Feb 2026", quarter: "Q1", region: "Asia Pacific", category: "Tech & Electronics", sales: 52100, profit: 13900, orders: 440 },
  { month: "Feb 2026", quarter: "Q1", region: "Asia Pacific", category: "Office Supplies", sales: 23100, profit: 7100, orders: 395 },
  { month: "Feb 2026", quarter: "Q1", region: "Asia Pacific", category: "Furniture", sales: 19400, profit: 3500, orders: 130 },
  { month: "Feb 2026", quarter: "Q1", region: "North America", category: "Tech & Electronics", sales: 58200, profit: 16200, orders: 515 },
  { month: "Feb 2026", quarter: "Q1", region: "North America", category: "Office Supplies", sales: 29800, profit: 8400, orders: 445 },
  { month: "Feb 2026", quarter: "Q1", region: "North America", category: "Furniture", sales: 23500, profit: 4500, orders: 155 },
  { month: "Feb 2026", quarter: "Q1", region: "Europe", category: "Tech & Electronics", sales: 42100, profit: 10800, orders: 370 },
  { month: "Feb 2026", quarter: "Q1", region: "Europe", category: "Office Supplies", sales: 21000, profit: 5600, orders: 310 },
  { month: "Feb 2026", quarter: "Q1", region: "Europe", category: "Furniture", sales: 17200, profit: 3000, orders: 115 },

  { month: "Mar 2026", quarter: "Q1", region: "Asia Pacific", category: "Tech & Electronics", sales: 59300, profit: 16100, orders: 490 },
  { month: "Mar 2026", quarter: "Q1", region: "Asia Pacific", category: "Office Supplies", sales: 25400, profit: 7900, orders: 420 },
  { month: "Mar 2026", quarter: "Q1", region: "Asia Pacific", category: "Furniture", sales: 21000, profit: 3900, orders: 140 },
  { month: "Mar 2026", quarter: "Q1", region: "North America", category: "Tech & Electronics", sales: 64100, profit: 18100, orders: 560 },
  { month: "Mar 2026", quarter: "Q1", region: "North America", category: "Office Supplies", sales: 32500, profit: 9200, orders: 475 },
  { month: "Mar 2026", quarter: "Q1", region: "North America", category: "Furniture", sales: 26000, profit: 5100, orders: 170 },
  { month: "Mar 2026", quarter: "Q1", region: "Europe", category: "Tech & Electronics", sales: 46800, profit: 12400, orders: 410 },
  { month: "Mar 2026", quarter: "Q1", region: "Europe", category: "Office Supplies", sales: 23400, profit: 6200, orders: 340 },
  { month: "Mar 2026", quarter: "Q1", region: "Europe", category: "Furniture", sales: 18900, profit: 3400, orders: 125 },

  // Q2
  { month: "Apr 2026", quarter: "Q2", region: "Asia Pacific", category: "Tech & Electronics", sales: 63200, profit: 17400, orders: 520 },
  { month: "Apr 2026", quarter: "Q2", region: "Asia Pacific", category: "Office Supplies", sales: 27100, profit: 8400, orders: 435 },
  { month: "Apr 2026", quarter: "Q2", region: "Asia Pacific", category: "Furniture", sales: 22600, profit: 4300, orders: 150 },
  { month: "Apr 2026", quarter: "Q2", region: "North America", category: "Tech & Electronics", sales: 69500, profit: 19900, orders: 600 },
  { month: "Apr 2026", quarter: "Q2", region: "North America", category: "Office Supplies", sales: 34800, profit: 10100, orders: 505 },
  { month: "Apr 2026", quarter: "Q2", region: "North America", category: "Furniture", sales: 28400, profit: 5700, orders: 185 },
  { month: "Apr 2026", quarter: "Q2", region: "Europe", category: "Tech & Electronics", sales: 51200, profit: 13900, orders: 440 },
  { month: "Apr 2026", quarter: "Q2", region: "Europe", category: "Office Supplies", sales: 25100, profit: 6900, orders: 360 },
  { month: "Apr 2026", quarter: "Q2", region: "Europe", category: "Furniture", sales: 20100, profit: 3800, orders: 135 },

  { month: "May 2026", quarter: "Q2", region: "Asia Pacific", category: "Tech & Electronics", sales: 67800, profit: 18900, orders: 560 },
  { month: "May 2026", quarter: "Q2", region: "Asia Pacific", category: "Office Supplies", sales: 28900, profit: 9100, orders: 460 },
  { month: "May 2026", quarter: "Q2", region: "Asia Pacific", category: "Furniture", sales: 24100, profit: 4700, orders: 160 },
  { month: "May 2026", quarter: "Q2", region: "North America", category: "Tech & Electronics", sales: 74200, profit: 21500, orders: 635 },
  { month: "May 2026", quarter: "Q2", region: "North America", category: "Office Supplies", sales: 36900, profit: 10800, orders: 530 },
  { month: "May 2026", quarter: "Q2", region: "North America", category: "Furniture", sales: 30200, profit: 6200, orders: 195 },
  { month: "May 2026", quarter: "Q2", region: "Europe", category: "Tech & Electronics", sales: 55400, profit: 15100, orders: 470 },
  { month: "May 2026", quarter: "Q2", region: "Europe", category: "Office Supplies", sales: 26800, profit: 7400, orders: 385 },
  { month: "May 2026", quarter: "Q2", region: "Europe", category: "Furniture", sales: 21500, profit: 4100, orders: 145 },

  { month: "Jun 2026", quarter: "Q2", region: "Asia Pacific", category: "Tech & Electronics", sales: 72400, profit: 20500, orders: 595 },
  { month: "Jun 2026", quarter: "Q2", region: "Asia Pacific", category: "Office Supplies", sales: 30800, profit: 9800, orders: 485 },
  { month: "Jun 2026", quarter: "Q2", region: "Asia Pacific", category: "Furniture", sales: 25900, profit: 5100, orders: 170 },
  { month: "Jun 2026", quarter: "Q2", region: "North America", category: "Tech & Electronics", sales: 79800, profit: 23400, orders: 680 },
  { month: "Jun 2026", quarter: "Q2", region: "North America", category: "Office Supplies", sales: 39500, profit: 11700, orders: 565 },
  { month: "Jun 2026", quarter: "Q2", region: "North America", category: "Furniture", sales: 32600, profit: 6800, orders: 210 },
  { month: "Jun 2026", quarter: "Q2", region: "Europe", category: "Tech & Electronics", sales: 59900, profit: 16700, orders: 505 },
  { month: "Jun 2026", quarter: "Q2", region: "Europe", category: "Office Supplies", sales: 28900, profit: 8100, orders: 410 },
  { month: "Jun 2026", quarter: "Q2", region: "Europe", category: "Furniture", sales: 23100, profit: 4500, orders: 155 }
];
