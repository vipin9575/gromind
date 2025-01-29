import { useState } from "react";
import "./CouresPage.css";
import { Box, Divider, Container, Typography } from "@mui/material";

const programs = [
  {
    name: "Tableau and Advanced Excel",
    description: `Tableau Basic & Architecture: Understanding of Tableau's architecture, Tableau Server, Tableau Prep, and their integration into enterprise environments for large-scale analytics. Data Connections and Complex Data Integration: Connecting to various data sources (SQL, cloud platforms, big data), using Tableau’s data blending, custom SQL, and managing live vs extract connections for performance optimization. Advanced Data Preparation with Tableau Prep: Data wrangling using Tableau Prep, advanced transformations (joins, unions, pivots), and automating data prep workflows for recurring tasks. Advanced Tableau Calculations and Expressions: Mastering Tableau's calculated fields, complex aggregations, table calculations, and applying Level of Detail (LOD) expressions to handle granular analysis. Creating Interactive Dashboards and Visualizations: Developing high-performance, interactive dashboards with advanced features like parameter actions, filters, tooltips, and storyboards for user-driven analysis. Data Visualization Best Practices: Implementing effective visualizations, choosing the right chart types (heat maps, waterfall, bullet charts), and following design principles to enhance clarity and user experience. Advanced Excel Techniques for Analytics: Leveraging advanced Excel functions (INDEX, MATCH, array formulas, dynamic arrays), Power Query for data transformations, and Power Pivot for advanced data modeling. Excel-Tableau Integration: Seamlessly integrating Excel and Tableau, importing Excel data into Tableau, using Excel as a data source, and building dynamic Tableau reports based on complex Excel data. Performance Optimization in Tableau: Optimizing data models, improving dashboard performance through aggregation, extract optimization, and reducing data load times. Advanced Analytics with Tableau and Excel: Applying statistical functions in Tableau (trend lines, reference lines, forecasting) and Excel (regression, advanced pivot table analysis), and creating predictive models to drive insights`,
  },
  {
    name: "Power BI and Advanced Excel",
    description: `Python Basics: Understanding Python programming fundamentals, data structures, functions, and object-oriented concepts. Python for Data Science: Learning Python libraries (NumPy, Pandas, Matplotlib, Seaborn) for data manipulation, analysis, and visualization. Data Wrangling and Preprocessing: Cleaning, transforming, and preprocessing data using Python libraries (Pandas, NumPy) for machine learning models. Exploratory Data Analysis (EDA): Analyzing data, identifying patterns, and visualizing relationships using Python libraries (Matplotlib, Seaborn). Feature Engineering and Selection: Extracting, transforming, and selecting relevant features for machine learning models, handling missing data, and encoding categorical variables. Machine Learning Algorithms: Implementing supervised and unsupervised machine learning algorithms (linear regression, logistic regression, decision trees, random`,
  },
  {
    name: "Salesforce Developer",
    description: `Digital Marketing Fundamentals: Understanding digital marketing concepts, strategies, and tools to create effective online campaigns. Search Engine Optimization (SEO): Optimizing website content, meta tags, and link building strategies to improve search engine rankings. Social Media Marketing: Creating and managing social media profiles, developing content strategies, and running paid advertising campaigns on platforms like Facebook, Instagram, and LinkedIn. Email Marketing: Building email lists, designing newsletters, and creating automated email campaigns to engage with customers and drive conversions. Content Marketing: Developing content calendars, creating blog posts, infographics, and videos`,
  },
  {
    name: "Python and SQL",
    description: `Machine Learning Basics: Understanding machine learning concepts, algorithms, and applications in real-world scenarios. Data Preprocessing: Cleaning, transforming, and normalizing data for machine learning models using Python libraries (Pandas, NumPy). Supervised Learning: Implementing supervised learning algorithms (linear regression, logistic regression, decision trees, random forests) to make predictions and classify data. Unsupervised Learning: Applying unsupervised learning algorithms (clustering, dimensionality reduction) to discover patterns and relationships in data. Model Evaluation and Validation: Assessing model performance, tuning hyperparameters, and validating machine learning models using cross-validation techniques. Feature Engineering and Selection: Extracting, transforming, and selecting relevant features for machine learning models, handling missing data, and encoding categorical variables. Machine Learning Pipelines: Building end-to-end machine learning pipelines to automate data preprocessing, model training, and deployment processes. Natural Language Processing (NLP): Processing and analyzing text data, building sentiment analysis, text classification, and named entity recognition models using NLP libraries (NLTK, SpaCy). Image Processing and Computer Vision: Working with image data, building image classification, object detection, and image segmentation models using deep learning frameworks (TensorFlow, Keras). Reinforcement Learning: Implementing reinforcement learning algorithms to train agents, build game-playing bots, and optimize decision-making processes`,
  },
  {
    name: "Java Developer",
    description: `Web Development Basics: Understanding web technologies, HTML, CSS, JavaScript, and responsive design principles. Front-End Development: Building interactive user interfaces, designing responsive layouts, and implementing front-end frameworks (Bootstrap, React). Back-End Development: Developing server-side applications, handling HTTP requests, and building RESTful APIs using Node.js, Express, and MongoDB. Database Management: Designing and implementing databases, creating schemas, and performing CRUD operations using MongoDB. Version Control and Deployment: Managing codebase using Git, deploying web applications to cloud platforms (Heroku, Netlify), and setting up continuous integration workflows. Full Stack Development Projects: Building full-stack web applications, integrating front-end and back-end components, and deploying applications to production environments. Web Development Best Practices: Implementing security measures, optimizing web performance, and following coding standards to build scalable and maintainable web applications. Real-World Web Development: Working on industry projects, collaborating with teams, and applying agile development methodologies to deliver high-quality web applications`,
  },
  {
    name: "Database Administrator",
    description: `Cyber Security Fundamentals: Understanding cyber threats, security protocols, and best practices to protect digital assets. Network Security: Securing network infrastructure, configuring firewalls, and implementing intrusion detection systems to prevent cyber attacks. Ethical Hacking: Identifying vulnerabilities, conducting penetration tests, and implementing security measures to protect against malicious attacks. Cryptography and Encryption: Encrypting data, securing communication channels, and implementing cryptographic algorithms to protect sensitive information. Incident Response and Recovery: Developing incident response plans, analyzing security breaches, and recovering from cyber attacks to minimize damage. Security Compliance and Governance: Implementing security policies, complying with regulations (GDPR, HIPAA), and managing security risks to ensure data protection. Cyber Security Tools and Technologies: Working with security tools (Wireshark, Nmap, Metasploit), security information and event management (SIEM) systems, and threat intelligence platforms to detect and respond to security incidents. Cloud Security: Securing cloud environments, configuring access controls, and monitoring cloud services to protect data stored in the cloud. Cyber Security Career Paths: Exploring career opportunities in cyber security, acquiring industry certifications (CISSP, CEH), and developing skills to pursue roles as security analysts, penetration testers, and security architects`,
  },
  {
    name: "HR Business Partnering",
    description: `Artificial Intelligence Fundamentals: Understanding AI concepts, applications, and ethical considerations in AI development. Machine Learning: Implementing supervised and unsupervised machine learning algorithms (linear regression, logistic regression, decision trees, neural networks) to make predictions and classify data. Deep Learning: Building deep neural networks, implementing convolutional neural networks (CNNs), recurrent neural networks (RNNs), and generative adversarial networks (GANs) for image recognition, natural language processing, and generative modeling. Natural Language Processing (NLP): Processing and analyzing text data, building sentiment analysis, text classification, and named entity recognition models using NLP libraries (NLTK, SpaCy). Computer Vision: Working with image data, building image classification, object detection, and image segmentation models using deep learning frameworks (TensorFlow, Keras). Reinforcement Learning: Implementing reinforcement learning algorithms to train agents, build game-playing bots, and optimize decision-making processes. AI Ethics and Bias: Understanding ethical considerations in AI development, addressing bias in AI algorithms, and ensuring fairness and transparency in AI systems. AI Applications and Use Cases: Exploring real-world applications of AI in healthcare, finance, marketing, and other industries, and developing AI solutions to solve complex problems. AI Career Paths: Pursuing career opportunities in AI research, data science, machine learning engineering, and AI product development, and acquiring industry certifications to validate AI skills and expertise`,
  },
  {
    name: "HR Development Program",
    description: `Cloud Computing Fundamentals: Understanding cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and cloud providers (AWS, Azure, Google Cloud). Cloud Infrastructure: Configuring virtual servers, storage, and networking resources on cloud platforms, managing security groups, and setting up virtual private clouds (VPCs). Cloud Services: Working with cloud services (AWS S3, EC2, RDS, Lambda), deploying applications to cloud platforms, and scaling resources based on demand. Serverless Computing: Developing serverless applications, building functions with AWS Lambda, and implementing event-driven architectures using cloud services. Containerization and Orchestration: Creating Docker containers, managing containerized applications with Kubernetes, and automating deployment workflows with container orchestration tools. Cloud Security: Securing cloud environments, configuring access controls, implementing encryption, and monitoring cloud services to protect data stored in the cloud. Cloud Cost Management: Optimizing cloud costs, monitoring resource usage, and implementing cost-saving strategies to reduce cloud expenses. Cloud Migration and DevOps: Migrating on-premises applications to the cloud, automating infrastructure provisioning, and implementing DevOps practices to streamline development and deployment processes. Cloud Computing Career Paths: Exploring career opportunities in cloud computing, acquiring cloud certifications (AWS Certified Solutions Architect, Azure Administrator), and developing skills to pursue roles as cloud architects, cloud engineers, and cloud security specialists`,
  },
  {
    name: "Technical Recruiting",
    description: `Blockchain Fundamentals: Understanding blockchain technology, distributed ledger systems, and cryptographic principles underlying blockchain networks. Blockchain Platforms: Working with blockchain platforms (Ethereum, Hyperledger Fabric, Corda), creating smart contracts, and deploying decentralized applications (DApps) on blockchain networks. Cryptocurrency and Tokens: Exploring cryptocurrency concepts, creating digital tokens, and launching initial coin offerings (ICOs) on blockchain platforms. Decentralized Finance (DeFi): Building DeFi applications, implementing lending protocols, decentralized exchanges, and liquidity pools on blockchain networks. Blockchain Security: Securing blockchain networks, implementing consensus algorithms (Proof of Work, Proof of Stake), and protecting against security threats (51% attacks, double spending). Blockchain Use Cases: Exploring real-world applications of blockchain in finance, supply chain, healthcare, and other industries, and developing blockchain solutions to solve business challenges. Blockchain Career Paths: Pursuing career opportunities in blockchain development, acquiring blockchain certifications (Certified Blockchain Developer, Certified Blockchain Architect), and developing skills to pursue roles as blockchain developers, smart contract developers, and blockchain consultants`,
  },
  {
    name: "Digital Marketing & Gen AI",
    description: `IoT Fundamentals: Understanding IoT concepts, architectures, and protocols for connecting devices to the internet and enabling data exchange. IoT Devices and Sensors: Working with IoT devices (sensors, actuators, microcontrollers), connecting devices to the cloud, and collecting data from IoT sensors. IoT Communication Protocols: Implementing IoT communication protocols (MQTT, CoAP, HTTP) for device-to-device communication, data transmission, and remote monitoring. IoT Data Processing: Processing and analyzing IoT data, storing data in cloud databases, and visualizing data using IoT platforms and dashboards. IoT Security and Privacy: Securing IoT devices, implementing encryption, and authentication mechanisms, and protecting IoT networks from cyber threats. IoT Applications and Use Cases: Exploring real-world applications of IoT in smart homes, smart cities, healthcare, agriculture, and industrial automation, and developing IoT solutions to solve complex problems. IoT Career Paths: Pursuing career opportunities in IoT development, acquiring IoT certifications (IoT Developer, IoT Security Specialist), and developing skills to pursue roles as IoT developers, IoT architects, and IoT solution consultants`,
  },
];

const CouresPage = () => {
  const [activeTab, setActiveTab] = useState(programs[0].name);
  const renderTabs = () => {
    return programs.map((program, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(program.name)}
        className={activeTab === program.name ? "active" : ""}
      >
        {" "}
        {program.name}{" "}
      </button>
    ));
  };
  const renderContent = () => {
    const activeProgram = programs.find(
      (program) => program.name === activeTab
    );
    return (
      <div>
        {" "}
        <h3>{activeProgram?.name}</h3>{" "}
        {activeProgram?.description.split(".").map((sentence, index) => (
          <p className="description" key={index}>
            {sentence}.
          </p>
        ))}
      </div>
    );
  };
  return (
    <Box>
      <Container>
        <Box textAlign="left">
          <Typography
            fontSize={40}
            fontWeight={600}
            color="rgba(99, 43, 144, 1)"
          >
            What We Offer?
          </Typography>
          <Divider
            sx={{
              width: 145,
              height: 2,
              bgcolor: "rgba(0, 0, 0, 1)",
              borderBottomWidth: 2,
            }}
          />
          <Typography fontSize={20} fontWeight={400} color="#000" mt={4}>
            Online & Offline
          </Typography>
        </Box>
        <Box
          className="tabs"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {" "}
          {renderTabs()}{" "}
        </Box>
        <Box className="content"> {renderContent()} </Box>
      </Container>
    </Box>
  );
};

export default CouresPage;
