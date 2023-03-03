import emoji from "react-easy-emoji";

export const greetings = {
	name: "Saurabh Purkar",
	title: "Hi all, I'm Saurabh",
	description:
		"I'm a Full Stack web developer having experience in the Analysis, Design, Development, Testing, and Deployment of web applications. In this ever-evolving tech industry, I desire to learn more, expand my skill sets and take on new challenges to build robust and scalable solutions.  ",
	resumeLink:
		"https://drive.google.com/file/d/1Hji3jldQxeyMDNFHNculjpHYzG34f0ZS/view?usp=sharing",
		
};

export const openSource = {
	githubUserName: "spurkar",
};

export const contact = {};

export const socialLinks = {
	
	linkedin: "https://www.linkedin.com/in/saurabh-purkar/",
	github: "https://github.com/purkar",
	
};

export const skillsSection = {
	title: "What I do",
	
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience of working on responsive Single-Page-Apps (SPA) in Angular"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Developed and maintained web applications using .Net Framework following AGILE methodology"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "net",
					fontAwesomeClassname: "mdi:dot-net",
				},

				{
					skillName: "Angular",
					fontAwesomeClassname: "vscode-icons:file-type-angular",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs-icon",
				},
				{
					skillName: "SQL",
					fontAwesomeClassname: "ant-design:console-sql-outlined",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Created and managed Docker containers, for deployment into Kubernetes Pods."
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Jenkins"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Jenkins",
					fontAwesomeClassname: "skill-icons:jenkins-dark",
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				}
			],
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "George Mason University",
		subHeader: "Master of Science in Computer Science",
		duration: "August 2021 - May 2023",
		descBullets: [
			"Course Work: Analysis of Algorithms I, Computer Systems and System Programming, Theory/Applications of Data Mining, Software Modelling/Architecture Design, Component Based Software Development",
			"Graduate Teaching Assistant for Database Management Systems and Advanced Database Management Systems",
		],
	},
	{
		schoolName: "Savitribai Phule Pune University",
		subHeader: "Bachelor of Engineering in Computer Engineering",
		duration: "July 2015 - June 2019",
		descBullets: [
			"Course Work: Data Structures, Object Oriented Programming, Analysis of Algorithms, Machine Learning, Operating Systems, Computer Architecture, Database Systems"
			
		],
	},
];

export const experience = [
	{
		role: "Software Engineer Intern",
		company: "Slalom Build",
		companylogo: "/img/icons/common/SlalomBuild.jpeg",
		date: "Jun 2022 – August 2022",
		//desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
		descBullets: [
			"Developed a notification system for the Me@Slalom professional development platform to inform staff members of critical updates pertaining to their professional development and role-mastery activities.",
			
		],
	},
	{
		role: "Software Engineer ",
		company: "Mediaocean",
		companylogo: "/img/icons/common/Mediaocean.jpeg",
		date: "July 2019 – August 2021",
		//desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		descBullets: [
			"Developed new features for payables and accruals services of ’Ignitia’ product which is a bill/pay system",
			"Involved in tasks related to converting existing monolithic application to micro services architecture. Segregated the code into individual services using CQRS and Mediator pattern",
			"Assisted in development of asynchronous bulk tasks using RabbitMQ messaging queue",
			"Implemented dynamic filters in entity framework to achieve multitenancy. Worked on fine tuning performance of stored procedures and improved the performance by 50%",
			"Ensured test coverage by writing unit test cases, end to end automation test cases and api tests using selenium and karate framework"
		],
	},
	{
		role: "Project Intern",
		company: "Persistent Systems",
		companylogo: "/img/icons/common/Persistent.jpeg",
		date: "April 2018 - April 2019",
		desc: "Developed a generalized system to host hackathons which helped reduce manual work involved in hosting hackathon by automating tedious tasks such as problem statement classification and optimized allocation of nodal centers.",
	}
];

export const projects = [
	{
		name: "Hackathon as Service",
		desc: "Developed a generalized system to host hackathons which helped reduce manual work involved in hosting hackathon by automating tedious tasks such as problem statement classification and optimized allocation of nodal centers.",
		github: "https://github.com/purkar/HackathonAsAService",
		// link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "Development Of Social Entrereneurship Platform",
		desc: "Developed a project featured in Smart India hackathon 2018 by Government of India for problem statement given by Ministry of skill development and Entrepreneurship. Implemented platform to help aid ministries bring all social issues on a common platform and help entrepreneurs explore these issues.",
		github: "https://github.com/purkar/DevelopmentOfSocialEntrereneurshipPlatform",
	},
	{
		name: "Standardization Of Marks",
		desc: "Designed and developed a adaptive percentile based solution for problem statement by Ministry for human resource and development to solve problems in existing grading system used by education boards in India.",
		github: "https://github.com/purkar/StandardizationOfMarks",
	},
	{
		name: "Imart (Ecommerce)",
		desc: "Online product marketing and selling platform built using Django Framework and sqlite database",
		github: "https://github.com/purkar/Imart",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: " Saurabh Purkar",
	description:
		"A passionate Full Stack Web Developer ",
	author: "Saurabh Purkar",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://purkar.github.io/",
	keywords: [
		"Saurabh",
		"Saurabh Purkar",
		"Portfolio",
		"Saurabh Portfolio ",
		"Saurabh Portfolio",
	],
}
