export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];


export const myProjects = [
    {
        title: 'TravelNow - Yelp, but for Travel',
        desc: 'TravelNow is a full-stack web application that allows users to explore, review, and share travel experiences. It provides a platform for travelers to connect with other travellers, discover new destinations, and share their own adventures.',
        subdesc: 'This project enhanced my backend skills through implementing MongoDB, Express.js, and Node.js, while also building upon my frontend expertise with HTML, CSS, and Bootstrap. I also learned to implement various APIs like Cloudinary and Mapbox',
        href: 'https://github.com/dumburger3/TravelNow',
        texture: '/textures/project/travelnow.mkv',
        logo: '/assets/travelnow.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Node.js',
                path: '/assets/nodejs.svg',
            },
            {
                id: 2,
                name: 'Express.js',
                path: 'assets/express.svg',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap.svg',
            },
            {
                id: 5,
                name: 'Cloudinary',
                path: '/assets/cloudinary.svg',
            },
            {
                id: 6,
                name: 'Mapbox',
                path: '/assets/mapbox.svg',
            },
        ],
    },
    {
        title: 'React Todo List',
        desc: 'This is a simple React application that allows users to create and delete their todos. It features a user-friendly interface and responsive design for optimal user experience.',
        subdesc: 'Through this project, I began to learn React.js and the basic fundamentals of component-based architecture. Additionally, integrating Material-UI provided me with a deeper understanding of styling and layout.',
        href: 'https://github.com/dumburger3/simple-todo-list',
        texture: '/textures/project/todos.mkv',
        logo: '/assets/todolist.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'MaterialUI',
                path: '/assets/MUI.svg',
            },
        ],
    },
    {
        title: 'Flavor Finder',
        desc: 'Flavor Finder is a web application that crafts personalized recipes based on user preferences through a series of questions. ',
        subdesc:
            'Working in a team of 4 in HackBUs annual hackathon, this was my first time getting into web development. Though there were a lot of challenges, it made me realize the joy of creating something from scratch and how much fun it is to learn new things. HTML, CSS, Python, and Flask were used in this project.',
        href: 'https://devpost.com/software/flavor-finder#updates',
        texture: '/textures/project/flavorfinder.mkv',
        logo: '/assets/flavorfinder.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 4,
                name: 'Flask',
                path: '/assets/flask.svg',
            },
        ],
    },
    {
        title: "Portfolio Website",
        desc: "This portfolio website, the one you're looking at right now, is a website that showcases my work and skills through my projects and resume related information.",
        subdesc:
            'I dove deeper into React.js and learned Tailwind CSS to create a modern and dynamic interface, while also learned Three.js, React Three Fiber, and Drei, to add immersive and fun 3D elements. Lastly integrated EmailJS for a functional contact form. Overall, this project boosted my frontend skills and design prowess.',
        href: 'https://github.com/dumburger3/portfolio',
        texture: '/textures/project/portfolio.mkv',
        logo: '/assets/portfolio.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Three.js',
                path: '/assets/threejs.png',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Email.js',
                path: '/assets/emailjs.png',
            },
            {
                id: 5,
                name: 'Gsap',
                path: '/assets/gsap.svg',
            },
        ],
    },
    {
        title: 'Bookings - University Library',
        desc: 'This project is a web application that allows users to browse, borrow books, and receive email reminds when they are due to return a book from the University Library database. Admins are able to manage the books and users of the library. ',
        subdesc: "With Bookings, I've learned technologies that have been gaining popularity like Next.js and TypeScript (though I won't lie they are still a bit confusing for me). I've also got to deal with PostgreSQL for data management and many more technologies like Auth.js, ImageKit, Upstash, and more!",
        href: 'https://github.com/dumburger3/uni-library',
        texture: '/textures/project/bookings.mkv',
        logo: '/assets/bookings.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: 'assets/typescript.svg',
            },
            {
                id: 3,
                name: 'PostgreSQL',
                path: '/assets/postgresql.svg',
            },
            {
                id: 4,
                name: 'Tailwind CSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 5,
                name: 'Upstash',
                path: '/assets/upstash.svg',
            },
            {
                id: 6,
                name: 'Resend',
                path: 'https://resend.com/static/brand/resend-icon-white.svg',
            },
            {
                id: 7,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.063,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -7, 0] : isMobile ? [5, -6, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 3, 0] : isMobile ? [5, 3, 0] : isTablet ? [6, 3, 0] : [9, 2, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-12, 10, 0] : isTablet ? [-16, 10, 0] : [-18, 6, 0],
        targetPosition: isSmall ? [-4, -7, -0] : isMobile ? [-6, -6, 0] : isTablet ? [-8, -5, 0] : [-9, -6, 0],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'MUJI',
        pos: 'Sales Associate',
        duration: 'June 2024 - August 2024',
        title: "-   Provided product recommendations, addressed inquiries, and interacted with buyers respectfully to enhance shopping experience, increase the store’s average value basket, and improve rate of purchasing customers\n" +
            "-   Maintained well-organized store displays, ensuring stock levels and shelves were replenished regularly\n" +
            "-   Processed transactions efficiently, handling cash and card payments while adhering to company policies\n" +
            "-   Assisted in store operations, including opening/closing procedures, inventory management, and maintaining cleanliness\n",
        icon: '/assets/MUJI.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Infinity Educational Program',
        pos: 'Project Based Learning (PBL) Virtual Program Assistant',
        duration: 'July 2023 - August 2023',
        title: "-   Assisted a PBL leader in instructing 2 groups of 30 students around ages 14 - 15 virtually\n" +
            "-   Graded the students’ work and submitted their hours to the timesheets through Google sheets and Google forms\n" +
            "-   Supported the groups in Zoom meetings twice a week with the leader, and held 12+ office hours to guide participants with their work on Lego building projects\n" +
            "-   Aided in-person events, like field days, held by Infinity for up to 200 students, setting up and helping the event run smoothly\n",
        icon: '/assets/infinity-bg.png',
        animation: 'clapping',
    },
];