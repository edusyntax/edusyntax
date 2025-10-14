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

