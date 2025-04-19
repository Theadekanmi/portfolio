"use client";
import { CiMail } from "react-icons/ci";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiVercel,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section
  id="home"
  className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden"
>
  <div className="max-w-6xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
      I'm Adekanmi — I design, build, and optimize smooth, high-performing
      digital experiences for the web.
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
      Specializing in responsive design, performance optimization, and
      seamless user experience — powered by React & Next.js.
    </p>
  </div>
</section>


        {/* About section */}
        <section id="about" className="pt-20 pb-16 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl text-blue-500 text-center font-semibold mb-10 leading-relaxed max-w-3xl mx-auto">
      “Great design is more than how it looks — it's how it works, feels, and flows.
      Code is my language, design is my voice. I build digital experiences that speak, solve, and scale.”
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Left content */}
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="leading-relaxed mb-6">
          I'm Adekanmi, a Full-Stack Developer with a focus on crafting visually compelling,
          high-performance web experiences. On the front end, I specialize in responsive design,
          clean, scalable code, and user-first interfaces that not only look stunning but also
          perform seamlessly across devices. Leveraging the power of React and Next.js, I build
          smooth, fast-loading websites and optimize performance for both users and search engines.
          I'm also experienced with Python and Django, allowing me to create robust backend systems
          that power dynamic and scalable applications. Beyond development, I help startups and individuals
          optimize their websites for speed and responsiveness, ensuring that every site I touch loads
          quickly, works efficiently, and provides a seamless experience from start to finish.
        </p>

        {/* Certifications */}
        <div
          className="bg-blue-600 p-5 rounded-lg text-white mb-6 md:mb-0"
          data-aos="zoom-out"
        >
          <h3 className="text-xl font-bold mb-4 text-center">CERTIFICATIONS</h3>
          <ul className="space-y-3 text-sm">
            <li className="border-b border-blue-300 pb-2">Frontend Development – 3MTT Certification (2024)</li>
            <li className="border-b border-blue-300 pb-2">Frontend Development — Classic Info-Tech (2024)</li>
            <li className="border-b border-blue-300 pb-2">AI Career Essential (Aice) — ALX Africa (2024)</li>
            <li className="border-b border-blue-300 pb-2">Back-End Development — ALX Africa (2024)</li>
            <li className="pb-2">Generative AI Essentials — Microsoft & LinkedIn (2024)</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4" data-aos="fade-in">
          <a href="#contact">
            <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <CiMail className="text-xl" />
              <span>HIRE ME</span>
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-5 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-blue-700 hover:text-white transition">
              <CiMail className="text-xl" />
              <span>MY CV</span>
            </button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex flex-col gap-4 md:w-1/2 items-center">
        
        <div className="w-full" data-aos="zoom-out">
          <img
            src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744380261/half_pic_p3b2kp.jpg"
            alt="Adekanmi Profile"
            className="rounded-xl w-full object-cover shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Skills Section */}

        <section className="py-12 bg-white dark:bg-gray-900" data-aos="zoom-out">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
      TECHNOLOGIES & TOOLS
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
      {/* Next.js */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <SiNextdotjs className="text-white" size={50} />
        <p className="mt-2 text-white">Next.js</p>
      </div>

      {/* Tailwind CSS */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <SiTailwindcss size={50} className="text-cyan-500" />
        <p className="mt-2 text-white">Tailwind CSS</p>
      </div>

      {/* HTML */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <FaHtml5 size={50} className="text-orange-500" />
        <p className="mt-2 text-white">HTML</p>
      </div>

      {/* CSS */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <FaCss3Alt size={50} className="text-blue-600" />
        <p className="mt-2 text-white">CSS</p>
      </div>

      {/* Boostrap */}
      <div className="flex flex-col items-center border p-4 rounded-md">
        <SiBootstrap className="text-purple-600 text-4xl mb-2" />
        <span className="text-white">Bootstrap</span>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <FaJs size={50} className="text-yellow-400" />
        <p className="mt-2 text-white">JavaScript</p>
      </div>

      {/* Python */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <SiPython size={50} className="text-yellow-500" />
        <p className="mt-2 text-white">Python</p>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <FaGitAlt size={50} className="text-orange-600" />
        <p className="mt-2 text-white">Git</p>
      </div>

      {/* Vercel */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <SiVercel size={50} className="text-black dark:text-white" />
        <p className="mt-2 text-white">Vercel</p>
      </div>

      {/* DSA */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <FaDatabase size={50} className="text-purple-500" />
        <p className="mt-2 text-white">DSA</p>
      </div>

      {/* Github */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <SiGithub size={50} className="text-white" />
        <p className="mt-2 text-white">Github</p>
      </div>

      {/* Shadcn UI */}
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <img
          src="/logos/shadcn-logo.svg"
          alt="Shadcn UI"
          className="w-12 h-12"
        />
        <p className="mt-2 text-white">Shadcn UI</p>
      </div>
    </div>
  </div>
</section>

        {/* Projects Section */}
        <section id="projects" className="pt-20 pb-16 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2
      className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white"
      data-aos="fade-in"
    >
      MY PROJECTS
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Metal-Scrap Web-App */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816361/img1_oudkje.jpg"
          alt="Metal-Scrap Web-App"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            METAL‑SCRAP WEB‑APP
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Connects users with nearby recycling facilities and buyers, simplifying logistics and integrating AI for measuring and weighing metals.
          </p>
          <a
            href="https://metal-connect.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>

      {/* Pato's‑Place Restaurant */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816466/img6_utlsou.jpg"
          alt="Pato's‑Place Restaurant"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            PATO'S‑PLACE RESTAURANT
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Sleek, modern site for an upscale continental restaurant blending European, Asian, and African cuisine in a sophisticated UI.
          </p>
          <a
            href="https://pato-place-restaurant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>

      {/* Omni‑Food Web‑App */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816370/img2_mk0lby.jpg"
          alt="Omni‑Food Web‑App"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            OMNI‑FOOD WEB‑APP
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Responsive restaurant website with clean layout, dynamic menu display, and easy navigation for reservations.
          </p>
          <a
            href="https://omnifood-dusky.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>

      {/* Super‑Jara Web‑App */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816380/img3_ubyssh.jpg"
          alt="Super‑Jara Web‑App"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            SUPER‑JARA WEB‑APP
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Modern app for airtime/data top‑ups, bill payments, and digital services—fast, reliable, and affordable.
          </p>
          <a
            href="https://super-jara.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>

      {/* Church Web‑App */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816394/img4_wxkwpc.jpg"
          alt="Church Web‑App"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            CHURCH WEB‑APP
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Community‑focused app for church members: share sermons, events, updates, and foster engagement.
          </p>
          <a
            href="https://church‑app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>

      {/* Med‑Care Web‑App */}
      <div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816444/img5_pzybgh.jpg"
          alt="Med‑Care Web‑App"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            MED‑CARE WEB‑APP
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
            Healthcare app to connect patients with providers, manage appointments, and access health resources seamlessly.
          </p>
          <a
            href="https://med-care.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Project
          </a>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 border border-blue-500 text-blue-500 rounded-full text-xs">HTML</span>
            <span className="px-2 py-1 border border-green-500 text-green-500 rounded-full text-xs">CSS</span>
            <span className="px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full text-xs">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Go-to Section */}

        <section id="tried" className="pt-24 pb-12 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <h1 className="flex justify-center font-bold text-4xl p-3 text-white" data-aos="fade-in">
      MY GO-TO DEVELOPMENT <br /> METHODS
    </h1>
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 p-3 m-3" data-aos="fade-out">
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300 mt-10">
        <p className="p-3 font-bold">(I)</p>
        <h2 className="p-2 font-bold mt-2">USER-CENTERED DESIGN: BUILDING WITH THE USER IN MIND</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          By collaborating closely with designers, I focus on delivering user-centered solutions that prioritize usability, accessibility, and seamless navigation, ensuring that every interface is both intuitive and purposeful for its users.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(II)</p>
        <h2 className="p-2 font-bold mt-2">DEVICE-FRIENDLY INTERFACES</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          My projects are designed to perform beautifully on any device, from desktops to smartphones, delivering smooth, responsive layouts that adjust fluidly to every screen.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(III)</p>
        <h2 className="p-2 font-bold mt-2">COMPONENT-DRIVEN DESIGN</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          I follow a component-driven approach, breaking down complex interfaces into small, reusable, and manageable pieces for greater flexibility and efficiency.
        </p>
      </div>
    </div>
  </div>

  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 p-3 m-3" data-aos="fade-out">
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300 mt-10">
        <p className="p-3 font-bold">(I)</p>
        <h2 className="p-2 font-bold mt-2">PERFORMANCE OPTIMIZATION</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          Through Web Performance Engineering, I optimize code, images, and server responses to deliver high-speed, efficient digital experiences.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(II)</p>
        <h2 className="p-2 font-bold mt-2">CROSS-BROWSER COMPATIBILITY</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          I ensure multi-browser support, delivering consistent functionality and visuals across Chrome, Firefox, Safari, Edge, and other modern browsers.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(III)</p>
        <h2 className="p-2 font-bold mt-2">VERSION CONTROL AND COLLABORATION</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          Through collaborative development practices, I work efficiently within teams, ensuring smooth code integration and conflict resolution.
        </p>
      </div>
    </div>
  </div>

  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 p-3 m-3" data-aos="fade-out">
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300 mt-10">
        <p className="p-3 font-bold">(I)</p>
        <h2 className="p-2 font-bold mt-2">KEEPING UP WITH EMERGING TECHNOLOGIES</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          I actively engage in continuous learning and growth by exploring new frameworks, tools, and industry best practices to stay ahead in the fast-evolving tech landscape.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(II)</p>
        <h2 className="p-2 font-bold mt-2">SCALABLE AND CLEAN CODE</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          I follow clean, maintainable code principles to ensure my projects are scalable, readable, and easy to enhance or debug.
        </p>
      </div>
      <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
        <p className="p-2 font-bold">(III)</p>
        <h2 className="p-2 font-bold mt-2">TEAMWORK & COMMUNICATION</h2>
        <p className="p-3 text-gray-500 font-bold mt-3">
          I thrive in collaborative environments, working closely with designers, developers, and stakeholders to ensure seamless project delivery.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Experience Section */}
        <section id="experience" className="pt-24 pb-12 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      RELEVANT EXPERIENCE
    </h2>
    <div className="space-y-8">
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">
          Fullstack Developer — Metal-Connect (3MTT Team Project)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">AUG 2023 - DEC 2024</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Collaborated with a multidisciplinary team of 3MTT participants from UI/UX, Data Analysis, and AI/Machine Learning tracks.
          </li>
          <li>
            Developed a web application enabling users to buy and sell scrap metals in a streamlined marketplace platform.
          </li>
          <li>
            Handled frontend development using HTML, CSS, and JavaScript, integrating responsive UI components and interactive features.
          </li>
          <li>
            Worked closely with the AI/ML member to incorporate intelligent scrap pricing suggestions based on market data.
          </li>
          <li>
            Coordinated with the Data Analyst to visualize market trends and transaction history using interactive charts.
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">
          Team Lead — Africa Health Care and Education (ALX Prototype Project)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">2024</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Led a cross-functional team in designing a prototype for Africa Health Care and Education, a platform aimed at connecting healthcare professionals and educators across Africa for mentorship and knowledge sharing.
          </li>
          <li>
            Coordinated task delegation, project milestones, and progress tracking to deliver the prototype within deadlines.
          </li>
          <li>
            Facilitated effective communication between team members with diverse skill sets, fostering a productive and collaborative environment.
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">
          Freelance Web Developer
        </h3>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Designed and built portfolio and business websites for clients using Next.js and Tailwind CSS.
          </li>
          <li>
            Implemented custom features like contact forms, blog sections, and interactive animations.
          </li>
          <li>
            Ensured cross-browser compatibility and mobile responsiveness for all projects.
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">
          Frontend Developer Intern — Cognifyz Technologies
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Feb 2025 – Mar 2025</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Worked on real-world frontend projects using HTML, CSS, and JavaScript.
          </li>
          <li>
            Collaborated with a development team to improve user interfaces and optimize website performance.
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">
          Frontend Developer Intern — Classic Info-Tech
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">April 2025 - Dec 2025</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Developed and maintained responsive web pages using modern frontend technologies.
          </li>
          <li>
            Contributed to the design and functionality improvements of client websites.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* Contact Secton */}
        <section id="contact" className="pt-24 pb-12 bg-white dark:bg-gray-900">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      CONTACT ME
    </h2>
    <form
      action="https://usebasin.com/f/8ecaf1613235"
      method="POST"
      className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          required
          className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your message..."
          required
          className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

      </main>
    </div>
  );
};

export default HomePage;
