import project_img from './images/project.png';
import Weather from './images/weather.png';
import calculator from './images/calculator.png';
import faq from './images/faq.png';
import jetbite from './images/jetbite.png';

export let Project_data = [
 {
    id: 1,
    initiallyHidden: false,
    thumb: project_img,
    thumbAlt: 'Desk Master project screenshot',
    href: null,
    title: 'Desk Master',
    github: { href: '', text: 'Internal Project', icon: false },
    text: `I created an internal Desk Master system to manage and assign employee seating within the company. Since it was
          built for internal use only, it cannot be accessed outside the organization.`,
    stack: 'HTML • CSS • PHP • JS • JQUERY • SQL • BOOTSTRAP',
  },
  {
    id: 2,
    initiallyHidden: false,
    thumb: faq,
    thumbAlt: 'faq',
    href: null,
    title: 'FAQ Admin Management System',
    github: { href: 'https://github.com/Sa-ran23/FAQ-Admin', text: 'GitHub', icon: true },
    text: 'Built a back-end FAQ Admin Management System using Core Java with full CRUD operations and SQL database integration.Implemented Toggle Status feature to dynamically activate or deactivate FAQs with clean modular code structure.',
    stack: 'Java • SQL ',
  },
  {
    id: 3,
    initiallyHidden: false,
    thumb: jetbite,
    thumbAlt: 'Food Delivery web App',
    href: 'https://jet-bite.vercel.app/',
    title: 'Weather Forecast Web App',
    github: { href: 'https://github.com/Sa-ran23/JetBite', text: 'GitHub', icon: true },
    text: 'Built a responsive food delivery web application that use real-time restaurant and menu data, with restaurant browsing, cart management, and a seamless user experience.',
    stack: 'React • Tailwind • JS ',
  },
  {
    id: 4,
    initiallyHidden: true,
    thumb: Weather,
    thumbAlt: 'weather Project screenshot',
    href: 'https://sa-ran23.github.io/Weather-App/',
    title: 'Weather Forecast Web App',
    github: { href: 'https://github.com/Sa-ran23/Weather-App', text: 'GitHub', icon: true },
    text: 'Built a responsive weather application that provides real-time weather updates, including temperature, humidity, and wind speed. Integrated live weather data through APIs and designed an intuitive user interface to deliver a seamless experience across desktop and mobile devices.',
    stack: 'HTML • CSS • JS • OpenWeatherMap API',
  },
  {
    id: 5,
    initiallyHidden: true,
    thumb: calculator,
    thumbAlt: 'Calculator App screenshot',
    href: 'https://sa-ran23.github.io/Calculator/',
    title: 'Calculator App',
    github: { href: 'https://github.com/Sa-ran23/Calculator', text: 'GitHub', icon: true },
    text: 'Built a fully functional web-based calculator supporting basic arithmetic operations with a clean and responsive UI.Implemented dynamic button interactions and real-time calculation logic using JavaScript.',
    stack: 'HTML • CSS • JS',
  },
];