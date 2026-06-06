export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#hero',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'My Work',
        href: '#mywork',
    },
    {
        id: 4,
        name:'Experience',
        href:'#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 6,
        name: 'Resume',
        href: 'https://drive.google.com/file/d/1BsXm0aZNkBAADM_iaHoB3i7SOQUMBSql/view?usp=sharing',
    }
];

export const myProjects = [
    {
        title: 'LVing - Vulnerability Detection Framework',
        desc: 'A comprehensive static analysis tool built for identifying memory safety and concurrency vulnerabilities in programming languages leveraging the LLVM compiler framework, with a particular interest in the Rust language, through graph-based visualization and analysis. This tool constructs Code Property Graphs (CPGs) from LLVM Intermediate Representation, enabling systematic analysis of low-level memory operations and vulnerability patterns.',
        subdesc:
            'Built on the Fraunhofer Institute\'s CPG library, LVing provides a scalable platform for automated vulnerability detection and interactive program exploration via Neo4j graph visualization.',
        href: 'https://www.youtube.com/watch?v=UDjsMJq9QBg&t=41s',
        texture: '/textures/project/project_lving.mp4',
        logo: '/assets/neo4j.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Neo4j',
                path: 'assets/neo4j.svg',
            },
            {
                id: 3,
                name: 'llvm',
                path: '/assets/llvm.svg',
            },
            {
                id: 4,
                name: 'rust',
                path: '/assets/rust.svg',
            },
        ],
    },
    {
        title: 'VulGPT - Vulnerability Intelligence Platform',
        desc: 'A high-performance vulnerability detection platform built with Python FastAPI microservices architecture and Neo4j graph database, processing 500K+ vulnerability records across 30+ software ecosystems. The system leverages OR-Tools CP-SAT optimization algorithms to compute minimal hitting sets for dependency vulnerability mitigation, delivered through a responsive Vue.js/Vite frontend dashboard with real-time package ecosystem monitoring.',
        subdesc:
            'VulGPT automates complex vulnerability management, enabling developers to instantly identify optimal security configurations and minimize risk across dependency trees. This platform transforms time-intensive manual security assessments into automated, data-driven decision making for modern development workflows.',
        href: 'https://github.com/ediaz029/Senior-Project-REPO',
        texture: '/textures/project/vulgpt.mp4',
        logo: '/assets/osv.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Vue.js',
                path: 'assets/vue.svg',
            },
            {
                id: 3,
                name: 'Neo4j',
                path: '/assets/neo4j.svg',
            },
            {
                id: 4,
                name: 'Docker',
                path: '/assets/docker.svg',
            },
        ],
    },
    {
        title: 'Burgers N\' Chill - Restaurant E-Commerce Platform',
        desc: 'A full-stack restaurant web application built with React/Next.js framework and MongoDB database, featuring comprehensive online ordering capabilities, admin management panels, and integrated payment processing. The platform leverages JavaScript with modern technologies including PayPal integration, Cloudinary image hosting, and Redux state management, demonstrating expertise in e-commerce development, API routing, and secure authentication systems through cookie-based authorization.',
        subdesc:
            'By implementing secure payment processing, dynamic inventory management, and role-based access control, this platform demonstrates the practical application of modern web technologies to solve genuine industry challenges that drive revenue and enhance customer experience.',
        href: 'https://github.com/ediaz029/Web_Dev_Project-Restaurant',
        texture: '/textures/project/burgersnchill.mp4',
        logo: '/assets/logo.png',
        logoStyle: {
            backgroundColor: '#654321',
            background:
                'linear-gradient(0deg, rgba(101, 67, 33, 0.5), rgba(101, 67, 33, 0.5)), linear-gradient(180deg, rgba(139, 99, 66, 0.9) 0%, rgba(101, 67, 33, 0.8) 100%)',
            border: '0.2px solid rgba(139, 99, 66, 1)',
            boxShadow: '0px 0px 60px 0px rgba(101, 67, 33, 0.4)',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'JavaScript',
                path: 'assets/js.svg',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 4,
                name: 'Node.js',
                path: '/assets/nodejs.svg',
            },
        ],
    },
    {
        title: 'HeartBeats - Fitness Music Synchronization App',
        desc: 'An innovative iOS fitness application built with Swift and Core Audio framework, featuring a real-time heartbeat simulation and dynamic music tempo adjustment capabilities. The app leverages advanced iOS audio processing APIs to seamlessly synchronize workout music playback with heartbeat rhythms.',
        subdesc:
            'This project addresses the growing intersection of fitness technology and personalized user experiences, showcasing the ability to create immersive applications that enhance human performance through innovative audio-visual synchronization. ',
        href: 'https://github.com/ediaz029/HeartBeatss38',
        texture: '/textures/project/heartbeats.mp4',
        logo: '/assets/iOS.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Swift',
                path: '/assets/swift.svg',
            },
            {
                id: 2,
                name: 'iOS',
                path: 'assets/iOS.svg',
            },
            {
                id: 3,
                name: 'Core Audio',
                path: '/assets/coreaudio.svg',
            },
            {
                id: 4,
                name: 'XCode',
                path: '/assets/xcode.svg',
            },
        ],
    }
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Frost Bank',
        pos: 'AI Engineer I',
        duration: 'Nov 2025 - present',
        title: "Develop and deploy AI-powered solutions for enterprise banking systems. Build intelligent applications leveraging LLMs, prompt engineering, and RAG systems to enhance operational efficiency in SDLC and customer experience across digital banking platforms.",
        icon: '/assets/frostlogo.svg',
        animation: 'rallying',
    },
    {
        id: 2,
        name: 'Texas A&M University-San Antonio',
        pos: 'CAHSI Google Institution Student Researcher',
        duration: 'Sep 2024 - May 2025',
        title: "Led security vulnerability research in concurrent software systems through the Google CAHSI IRP program. Developed LVing, a Neo4j-based static analysis tool leveraging LLVM IR and Code Property Graphs to visualize concurrency vulnerabilities, hosted on Google Cloud Platform.",
        icon: '/assets/cahsi.svg',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'Texas A&M University-San Antonio',
        pos: 'NSF SmartSAT Project Research Assistant',
        duration: 'Jun 2024 - Sep 2024',
        title: "Led research on advanced static code analysis targeting vulnerability detection methodologies aligned with DevSecOps and shift-left approaches. Utilized Joern's CPG taint-flow visualization to invalidate false positives from popular static code analysis tools, achieving 72.7% efficiency and 77.3% accuracy improvements in vulnerability detection while significantly reducing analyst validation time.",
        icon: '/assets/nsf.svg',
        animation: 'clapping',
    },
    {
        id: 4,
        name: 'Texas A&M University-San Antonio',
        pos: 'Student Tutor',
        duration: 'Jan 2022 - May 2023',
        title: " Strengthened technical communication and documentation skills by helping students articulate complex ideas clearly and logically, experience that directly translates to writing clean code documentation, security reports, and collaborating effectively in development teams.",
        icon: '/assets/tamusa_logo3.svg',
        animation: 'salute',
    },
];