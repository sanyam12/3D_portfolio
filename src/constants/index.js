import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    gdsc,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    sturec,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    starbucks,
    flutter,
    android,
    kotlin,
    dart,
    firebase,
    compose,
    cpp,
    flavr,
    veza,
    dscconnect
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Android Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Android",
        icon: android,
    },
    // {
    //     name: "Kotlin",
    //     icon: kotlin,
    // },
    {
        name: "Dart",
        icon: dart
    },
    {
        name: "Firebase",
        icon: firebase
    },
    {
        name: "Jetpack Compose",
        icon: compose
    },
    {
        name: "C++",
        icon: cpp
    }
];

const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "Sturec",
        icon: sturec,
        iconBg: "#383E56",
        date: "Jan 2023 - April 2023",
        points: [
            "Developed Student Record Management Applications and Administration Solutions.",
            "Suggested solutions to employ as per the business requirements.",
            "Technologies used: Firebase, Kotlin, XML and Jetpack Compose.",
        ],
    },
    {
        title: "Core Team Member",
        company_name: "GDSC NITJ",
        icon: gdsc,
        iconBg: "#E6DEDD",
        date: "Sept 2022 - Present",
        points: [
            "I am core Team member of Google Developer Student Club NITJ.",
            "I am part of Android and Flutter Team."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "FlavR",
        description:
            "A point of service for restaurants and outlets to order online and manage their orders easily.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: flavr,
        source_code_link: "https://github.com/sanyam12/FlavR",
    },
    {
        name: "Veza",
        description:
            "An Android app where users can ask doubts from community of their school/college itself. Notes can be shared with community to help each other in academics and earn rewards.",
        tags: [
            {
                name: "android",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
        ],
        image: veza,
        source_code_link: "https://github.com/sanyam12/Veza",
    },
    {
        name: "DSC Connect",
        description:
            "DSC Connect is a one stop application to get yourself up-to-date about the latest news and announcements made by DSC group. Moreover, users can interact with each other and resolve each other's queries.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
        ],
        image: dscconnect,
        source_code_link: "https://github.com/sanyam12/DSC-Connect",
    },
];

export { services, technologies, experiences, testimonials, projects };