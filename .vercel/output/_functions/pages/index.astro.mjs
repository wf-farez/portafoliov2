/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as renderComponent, e as addAttribute, s as spreadAttributes, f as renderScript, g as renderHead, h as renderSlot } from '../chunks/astro/server_B2f1wVgE.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_Cy0re4OI.mjs';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="p-1 bg-custom-purple_darker pt-32"> <div class="mx-auto max-w-screen-xl text-center"></div> </footer>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/Footer.astro", undefined);

const $$Astro$5 = createAstro();
const $$JobCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$JobCard;
  const { date, title, empresa, description } = Astro2.props.job;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-4 border border-gray-500 p-2"> <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${date}</time> <h3 class="text-lg font-semibold text-white"> ${title} </h3> <h3 class="text-lg font-semibold text-white"> ${empresa} </h3> <p class="text-base font-normal text-gray-300 dark:text-gray-400"> ${description} </p> </li>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/JobCard.astro", undefined);

const $$JobTimeline = createComponent(($$result, $$props, $$slots) => {
  const JOBS = [
    {
      date: "2023",
      title: "Data Analyst and Software Developer",
      empresa: "Futura -Ec",
      description: "Encargado de la migraci\xF3n de base de datos antigua, corrigiendo errores y duplicados en las tablas. Generacion de scripts de migraci\xF3n en Python con Psycopg para transferir los datos a una nueva estructura en PostgreSQL. An\xE1lisis y correcci\xF3n de datos. Generaci\xF3n y ejecuci\xF3n de scripts de migraci\xF3n. Validaci\xF3n y documentaci\xF3n del proceso."
    },
    {
      date: "2023-2024",
      title: "Software Developer",
      empresa: "Universidad de Cuenca",
      description: "Participaci\xF3n en diversos proyectos universitarios enfocados en  desarrollo de software. Estos proyectos me permitieron aplicar conceptos te\xF3ricos en soluciones pr\xE1cticas y fortalecer mi capacidad de resoluci\xF3n de problemas."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200"> ${JOBS.map((job) => renderTemplate`${renderComponent($$result, "JobCard", $$JobCard, { "job": job })}`)} </ol>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/JobTimeline.astro", undefined);

const $$Astro$4 = createAstro();
const $$NavbarElement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavbarElement;
  const { href, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="block py-2 px-3 text-gray-900 rounded hover:bg-custom-purple hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-custom-purple md:p-0">${title}</a> </li>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/NavbarElement.astro", undefined);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white sticky "> <div class="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4"> <div class="relative h-16 mr-28"> ${renderComponent($$result, "Image", $$Image, { "width": "64", "height": "64", "alt": "logo", "src": "/logo.jpg", "class": "absolute object-contain object-center max-w-24 rounded-b-2xl" })} </div> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:flex gap-24 md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> ${renderComponent($$result, "NavbarElement", $$NavbarElement, { "title": "Inicio", "href": "#inicio" })} ${renderComponent($$result, "NavbarElement", $$NavbarElement, { "title": "Sobre mi", "href": "#about" })} ${renderComponent($$result, "NavbarElement", $$NavbarElement, { "title": "Proyectos", "href": "#projects" })} ${renderComponent($$result, "NavbarElement", $$NavbarElement, { "title": "Contacto", "href": "#contact" })} </ul> <ul class="hidden md:flex gap-4"> <li class="p-1 hover:bg-custom-purple rounded-full filt-gray-700 hover:filt-white border border-gray-500"> <a href="#"><svg class="size-5"${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg></a></li> <li class="p-1 hover:bg-custom-purple rounded-full filt-gray-700 hover:filt-white border border-gray-500"> <a href="#"><svg class="size-5 "${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#545454"></path></svg></a></li> </ul> </div> </div> </nav>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/Navbar.astro", undefined);

const $$Astro$2 = createAstro();
const $$Skill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skill;
  const { name, iconUrl } = Astro2.props.skill;
  const id = crypto.randomUUID();
  return renderTemplate`${maybeRenderHead()}<div class="p-2 hover:bg-gray-500/20 rounded-lg"> <img${addAttribute(id, "data-tooltip-target")}${addAttribute(iconUrl, "src")} alt="Skill" class="size-8 object-contain object-center"> <div${addAttribute(id, "id")} role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"> ${name} <div class="tooltip-arrow" data-popper-arrow></div> </div> </div>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/Skill.astro", undefined);

const $$Astro$1 = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { index, project } = Astro2.props;
  const { title, description, urlImg, usedSkills, link } = project;
  const itShouldBeReverse = index % 2 == 0;
  const className = itShouldBeReverse ? "w-full flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8 max-w-96 p-4 md:p-0 md:max-w-screen-md" : "w-full flex flex-col items-center md:items-start md:flex-row-reverse gap-4 md:gap-8 max-w-96 p-4 md:p-0 md:max-w-screen-md";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": urlImg, "alt": "Project image", "width": "128", "height": "128", "class": "w-full object-contain object-center md:max-w-80" })} <div class="flex flex-col gap-2 flex-1"> <div class="flex flex-col"> <h3 class="text-xl md:text-2xl lg:text-3xl font-bold">${title}</h3> <a${addAttribute(link, "href")} class="underline text-blue-600 italic">${link}</a> </div> <div class="mt-2 flex flex-wrap gap-2"> ${usedSkills.map((usedSkill) => renderTemplate`${renderComponent($$result, "Skill", $$Skill, { "skill": usedSkill })}`)} </div> <p class="text-pretty">${description}</p> </div> </div>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/components/Project.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderScript($$result, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/layouts/Layout.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const SKILLS = [
    {
      name: "JavaScript",
      iconUrl: "/icons/javascript.png"
    },
    {
      name: "TypeScript",
      iconUrl: "/icons/typescript.png"
    },
    {
      name: "TailwindCSS",
      iconUrl: "/icons/tailwindcss.png"
    },
    {
      name: "Angular",
      iconUrl: "/icons/angular.png"
    },
    {
      name: "HTML5",
      iconUrl: "/icons/html.svg"
    },
    {
      name: "CSS3",
      iconUrl: "/icons/css.svg"
    },
    {
      name: "PostgreSQL",
      iconUrl: "/icons/postgresql.png"
    },
    {
      name: "Git",
      iconUrl: "/icons/git.png"
    }
  ];
  const PROJECTS = [
    {
      title: "Frontend: Soluci\xF3n de Software para transporte de pasajeros",
      urlImg: "/project1.png",
      description: "Sistema de administrador para ingreso de informaci\xF3n de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollado en Angular",
      link: "https://github.com/wf-farez/frontend_transporte",
      usedSkills: [
        {
          name: "Angular",
          iconUrl: "/icons/angular.png"
        }
      ]
    },
    {
      title: "Backend: Soluci\xF3n de Software para transporte de pasajeros",
      urlImg: "/project1.png",
      description: "Backend Sistema de administrador para ingreso de informacion de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollo en Spring. Base de datos Postgres y Firebase",
      link: "https://github.com/wf-farez/backend_transporte",
      usedSkills: [
        {
          name: "Spring",
          iconUrl: "/icons/spring.png"
        },
        {
          name: "Firebase",
          iconUrl: "/icons/firebase.png"
        },
        {
          name: "Postgres",
          iconUrl: "/icons/postgresql.png"
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Walter Farez | FullStack Web Developer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header id="inicio" class="h-dvh bg-[url('/fondo1.jpg')] bg-cover bg-center flex flex-col justify-between"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="flex flex-col items-center gap-1"> <h2 class="text-2xl md:text-3xl lg:text-4xl text-center">
Transformando ideas en codigo
</h2> <div class="float-center lg:float-end "> <img class="mb-20 mt-20" src="/perfil.png" alt="" width="200" height="200"> </div> <h1 class="text-2xl md:text-3xl lg:text-4xl text-center">
Hola, soy Walter, un apasionado desarrollador web.
</h1> </div> <div></div> <!-- <div class="flex justify-center mb-10">
            <a href="#about" class="p-4 bg-custom-purple_darker rounded-full">
                <img
                    src="/icons/down-arrow.svg"
                    class="size-6 animate-bounce motion-reduce:animate-none"
                    alt="Arrow"
                />
            </a>
        </div> --> </header> <main> <section id="about" class="bg-custom-purple_darker flex flex-col md:flex-row gap-4 md:gap-12 p-4"> <article class="flex flex-col gap-2"> <h3 class="text-center text-lg md:text-xl text-white font-bold">
Habilidades Profesionales
</h3> <div class="flex justify-center -mt-2"> <span class="text-center text-gray-300"></span> </div> <div class="flex justify-center gap-2 flex-wrap"> ${SKILLS.map((skill) => renderTemplate`${renderComponent($$result2, "Skill", $$Skill, { "skill": skill })}`)} </div> <div class="flex flex-col gap-1 text-gray-300 p-2"> <p>
Mi experiencia como desarrollador web abarca JavaScript y TypeScript para la creación de aplicaciones dinámicas y escalables. Utilizo TailwindCSS para implementar diseños modernos y responsivos de manera eficiente. En términos de desarrollo frontend, tengo un manejo sólido de HTML5 y CSS3. Además, cuento con experiencia en la integración y gestión de bases de datos utilizando PostgreSQL y MySQL, y el control de versiones a través de Git para un flujo de trabajo colaborativo y organizado.
</p> </div> </article> <article> <h3 class="text-center text-lg md:text-xl text-white font-bold mb-2">
Experiencia
</h3> ${renderComponent($$result2, "JobTimeline", $$JobTimeline, {})} </article> </section> <section id="projects" class="max-w-screen-lg mx-auto grid place-content-center gap-12"> <div class="flex justify-center mt-8"> <h3 class="w-fit border-b border-b-custom-purple text-xl md:text-2xl lg:text-4xl font-semibold">
Proyectos
</h3> </div> <div class="w-full grid place-content-center gap-16"> ${PROJECTS.map((project, index) => renderTemplate`${renderComponent($$result2, "Project", $$Project, { "project": project, "index": index })}`)} </div> </section> <section id="contact" class="mt-40 relative h-[610px] xs:h-[590px] sl:h-[540px] sm:h-[560px] lg:h-[610px]"> <div class=" bg-white shadow-2xl py-4 lg:py-8 px-4 mx-auto max-w-screen-md"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
Contactame!
</h2> <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
Si tienes alguna pregunta o un proyecto no dudes en comunicarte.
<a href="mailto:fabian.fp95@gmail.com" target="_blank" class="mt-20 mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">fabian.fp95@gmail.com</a> </p> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/pages/index.astro", undefined);

const $$file = "D:/PROYECTOS NUEVOS/ASTRO/portafolio_walter/portafoliov2/portafoliov2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
