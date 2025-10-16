export const dataScienceModules = [
  {
    id: "module-1",
    title: "Python Programming & SQL",
    description: "Learn Python basics and SQL for data handling.",
    duration: "6 Weeks",
    topics: [
      "Introduction to Data Science using Python",
      "Python basic constructs",
      "Data types in Python",
      "Conditional Statements",
      "Iterative Statements",
      "Functions in Python",
      "OOP in Python",
      "File Handling",
      "Exception Handling",
      "Databases and SQL",
      "Regular Expressions",
    ],
    downloadLink: "https://example.com/syllabus/module-1.pdf",
  },
  {
    id: "module-2",
    title: "Statistics & Data Analysis",
    description:
      "Master statistics, probability, and data analysis techniques.",
    duration: "8 Weeks",
    topics: [
      "Probability: Basic Terminology, Events, Sample Space, Experiment, Types of Events",
      "Conditional Probability, Multiplication Theorem, Bayes’ Theorem",
      "Random variables and probability distributions (Discrete & Continuous)",
      "Binomial Distribution, Normal and Standard Normal Distributions",
      "Descriptive Statistics: Central Tendency, Dispersion, Outlier Detection",
      "Data Visualization",
      "Covariance and Correlation",
      "Inferential Statistics: CLT, Confidence Interval, Hypothesis Testing",
      "NumPy for Mathematical Computing",
      "Data manipulation using Pandas",
      "Data Visualization with Matplotlib and Seaborn",
      "Data Pre-Processing",
      "Web Scraping using BeautifulSoup",
    ],
    downloadLink: "https://example.com/syllabus/module-2.pdf",
  },
  {
    id: "module-3",
    title: "Machine Learning",
    description: "Supervised and unsupervised machine learning algorithms.",
    duration: "8 Weeks",
    topics: [
      "Introduction to Machine Learning",
      "Supervised Learning: Regression, Linear, Multiple & Polynomial, Regularization (Ridge & Lasso)",
      "Classification: Logistic Regression, KNN, Decision Trees, Naïve Bayes, SVM",
      "Ensemble Techniques: Random Forests, Gradient Boosting",
      "Unsupervised Learning: Clustering, PCA",
    ],
    downloadLink: "https://example.com/syllabus/module-3.pdf",
  },
  {
    id: "module-4",
    title: "AI & Deep Learning",
    description: "Deep learning, neural networks, CNNs, RNNs, and AI applications.",
    duration: "8 Weeks",
    topics: [
      "Introduction to Deep Learning and Neural Networks",
      "Linear Algebra basics",
      "Artificial Neural Networks: Neurons, Layers, Activation Functions",
      "CNN - Computer Vision: Convolution, Pooling, Padding, Strides",
      "Transfer Learning: LeNet-5, AlexNet, VGG, ResNet, Inception V3",
      "RNN - Natural Language Processing",
      "Computer Vision & NLP using CNNs & RNNs",
    ],
    downloadLink: "https://example.com/syllabus/module-4.pdf",
  },
  {
    id: "module-5",
    title: "Tableau and Power BI",
    description: "Professional data visualization and dashboards.",
    duration: "4 Weeks",
    topics: [
      "Power BI: Installation, Power Query, DAX, Functions, Visualizations, Reports, Dashboards",
      "Tableau: Installation, Tableau UI, Connect Excel files, Charts & Graphs, Functions, Reports, Dashboards",
    ],
    downloadLink: "https://example.com/syllabus/module-5.pdf",
  },
  {
    id: "module-6",
    title: "Capstone Projects",
    description: "Hands-on projects to apply your skills.",
    duration: "4 Weeks",
    topics: [
      "COVID-19 detection - Healthcare",
      "Real-time face detection - Cyber Security",
      "Sentiment analysis - Ecommerce",
    ],
    downloadLink: "https://example.com/syllabus/module-6.pdf",
  },
];



import { CourseCardProps } from "@/components/ui/CourseCard"



export const courses: CourseCardProps[] = [
  {
    title: "Data Science & Ai ",
    audience: "Freshers & Professionals",
    duration: "6 Months",
    projects: "10+ Real Projects",
    image: "/images/ds-ai.jpeg",
    brochureUrl: "/brochures/data-science.pdf",
    slug: "data-science",
  },
  {
    title: "Python&Java Full Stack Development",
    audience: "Freshers",
    duration: "6 Months",
    projects: "18+ Real Projects",
    image: "/images/fs-ai.jpeg",
    brochureUrl: "/brochures/fullstack.pdf",
    slug: "fullstack-development",
  },
  {
    title: "Digital Marketing",
    audience: "Professionals & Entrepreneurs",
    duration: "3 Months",
    projects: "10+ Real Projects",
    image: "/images/digital.jpeg",
    brochureUrl: "/brochures/digital-marketing.pdf",
    slug: "digital-marketing",
  },
  {
    title: "AWS & DevOps",
    audience: "Working Professionals",
    duration: "5 Months",
    projects: "5+ Real Projects",
    image: "/images/cloud-ai.jpeg",
    brochureUrl: "/brochures/aws.pdf",
    slug: "aws-devops",
  },
];

export const digitalMarketingModules = [
  {
    id: "dm-module-1",
    title: "Digital Marketing Fundamentals",
    description:
      "Understand the foundations of digital marketing, core concepts, and the digital consumer journey.",
    duration: "2 Weeks",
    topics: [
      "Introduction to Digital Marketing",
      "Traditional vs Digital Marketing",
      "Understanding Customer Personas",
      "Marketing Funnels & Conversions",
      "Website Strategy & UI/UX Basics",
      "Digital Marketing Tools Overview",
    ],
    downloadLink: "/brochures/dm-module-1.pdf",
  },
  {
    id: "dm-module-2",
    title: "Search Engine Optimization (SEO)",
    description:
      "Learn SEO techniques to improve visibility and ranking of websites on search engines.",
    duration: "3 Weeks",
    topics: [
      "On-page & Off-page SEO",
      "Keyword Research & Planning",
      "SEO Tools (Google Search Console, SEMrush, Ahrefs)",
      "Content Optimization Strategies",
      "Backlink Building & Analysis",
      "Local SEO & Google Business Profile",
    ],
    downloadLink: "/brochures/dm-module-2.pdf",
  },
  {
    id: "dm-module-3",
    title: "Search Engine Marketing (Google Ads)",
    description:
      "Plan, create, and optimize paid advertising campaigns on Google platforms.",
    duration: "3 Weeks",
    topics: [
      "Google Ads Fundamentals",
      "Campaign Setup & Structure",
      "Keyword Targeting & Bidding Strategies",
      "Ad Copywriting & Extensions",
      "Conversion Tracking & Analytics",
      "Display & Video Campaigns",
    ],
    downloadLink: "/brochures/dm-module-3.pdf",
  },
  {
    id: "dm-module-4",
    title: "Social Media Marketing (SMM)",
    description:
      "Learn to create brand awareness and generate leads using social media platforms.",
    duration: "4 Weeks",
    topics: [
      "Social Media Strategy & Planning",
      "Facebook & Instagram Ads",
      "LinkedIn Marketing for B2B",
      "Twitter, YouTube & Influencer Marketing",
      "Content Calendar & Engagement Tactics",
      "Analytics & Optimization",
    ],
    downloadLink: "/brochures/dm-module-4.pdf",
  },
  {
    id: "dm-module-5",
    title: "Email & Content Marketing",
    description:
      "Craft compelling content and email campaigns that convert and build long-term relationships.",
    duration: "2 Weeks",
    topics: [
      "Content Marketing Framework",
      "Copywriting for Web & Social",
      "Email Campaign Design & Segmentation",
      "A/B Testing & Automation",
      "Lead Nurturing Techniques",
    ],
    downloadLink: "/brochures/dm-module-5.pdf",
  },
  {
    id: "dm-module-6",
    title: "Analytics & Capstone Project",
    description:
      "Use analytics tools to measure success and implement real-world digital marketing projects.",
    duration: "2 Weeks",
    topics: [
      "Google Analytics 4 (GA4)",
      "Tag Manager Basics",
      "KPI & ROI Analysis",
      "End-to-End Campaign Execution",
      "Capstone Project: Real Brand Campaign",
    ],
    downloadLink: "/brochures/dm-module-6.pdf",
  },
];
