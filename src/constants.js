// ─────────── Skills Section Logos ───────────
import artificialintelligenceLogo from './assets/tech_logo/artificialintelligence.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import deeplearningLogo from './assets/tech_logo/deeplearning.png';
import flaskLogo from './assets/tech_logo/flask.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import googlecolabLogo from './assets/tech_logo/googlecolab.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import jupyternotebookLogo from './assets/tech_logo/jupyternotebook.png';
import kerasLogo from './assets/tech_logo/keras.png';
import machinelearningLogo from './assets/tech_logo/machinelearning.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tensorflowLogo from './assets/tech_logo/tensorflow.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// ─────────── Education Section Logos ───────────
import mvgrLogo from './assets/education_logo/mvgr_logo.png';
import sceiLogo from './assets/education_logo/scei_logo.png';
import sicsLogo from './assets/education_logo/sics_logo.png';

// ─────────── Project Section Logos ───────────
import financeTrackerLogo from './assets/work_logo/finance_tracker.png';
import lungCancerDlLogo from './assets/work_logo/Lung_Cancer_DL.png';
import lungCancerPredLogo from './assets/work_logo/Lung_cancer_pred.png';

// ─────────── Skills Data (Divided into Categories) ───────────
export const SkillsInfo = [{
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Flask', logo: flaskLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Google Colab', logo: googlecolabLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Jupyter Notebook', logo: jupyternotebookLogo },
        ],
    },
    {
        title: 'ML / AI',
        skills: [
            { name: 'Artificial Intelligence', logo: artificialintelligenceLogo },
            { name: 'Machine Learning', logo: machinelearningLogo },
            { name: 'Deep Learning', logo: deeplearningLogo },
            { name: 'TensorFlow', logo: tensorflowLogo },
            { name: 'Keras', logo: kerasLogo },
            { name: 'NumPy', logo: numpyLogo },
        ],
    },
];

// ─────────── Education Data ───────────
export const education = [{
        id: 0,
        img: mvgrLogo,
        school: "Maharaj Vijayaram Gajapathi Raj College of Engineering, Vizianagaram",
        degree: "B.Tech in Information Technology",
        date: "Nov 2022 – May 2026",
        grade: "CGPA: 8.09 (ongoing)",
        desc: "Currently pursuing B.Tech in IT . Expected graduation in May 2026.",
    },
    {
        id: 1,
        img: sceiLogo,
        school: "Sri Chaitanya Junior College, Visakhapatnam",
        degree: "Intermediate (MPC)",
        date: "June 2020 – June 2022",
        grade: "90%",
        desc: "Completed Intermediate (Mathematics, Physics, Chemistry) under the State Board.",
    },
    {
        id: 2,
        img: sicsLogo,
        school: "Suresh IIT Concept School, Parvathipuram",
        degree: "SSC",
        date: "June 2019 – March 2020",
        grade: "98%",
        desc: "Completed Secondary School Certificate under the State Board.",
    },
];

// ─────────── Projects Data ───────────
export const projects = [{
        id: 0,
        title: "Personal Finance Tracker",
        description: "A web app that tracks incomes, expenses, and budgets via LocalStorage, with instant charts and no backend needed.",
        image: financeTrackerLogo,
        tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        github: "https://github.com/bindu2607/personal-finance-tracker",
        webapp: "https://personal-finance-tracker-marpini-himabindus-projects.vercel.app/",
    },
    {
        id: 1,
        title: "Lung Cancer Risk Prediction Web App",
        description: "A Flask app predicting lung cancer risk (Low, Medium, High) in real time using a Keras MLP and SHAP for explainability.",
        image: lungCancerDlLogo,
        tags: ["Keras", "TensorFlow", "Flask", "SMOTE", "SHAP", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/bindu2607/Lung-Cancer-Prediction-Using-Deep-Learning",
        webapp: "https://lung-cancer-prediction-using-deep-wcfa.onrender.com/",
    },
    {
        id: 2,
        title: "Lung Cancer Predictor",
        description: "A Flask-powered web app using a TensorFlow/Keras MLP model to predict lung cancer risk levels (Low, Medium, High).",
        image: lungCancerPredLogo,
        tags: ["Keras", "TensorFlow", "Flask", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/bindu2607/lung-cancer-predictor",
        webapp: "https://lung-cancer-prediction-using-deep-wcfa.onrender.com/",
    },
];