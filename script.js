const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const skillsContainer = document.getElementById('skillsContainer');
const projectsContainer = document.getElementById('projectsContainer');
const currentYearSpan = document.getElementById('currentYear');

const skills = [
    {
        name: 'HTML',
        description: 'Estruturação de conteúdo web com semântica e acessibilidade.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'CSS',
        description: 'Estilização avançada e layouts responsivos com Flexbox e Grid.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'Tailwind',
        description: 'Desenvolvimento rápido com classes utilitárias e design system.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
        name: 'JavaScript',
        description: 'Programação dinâmica e interativa para web moderna.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'React',
        description: 'Construção de interfaces de usuário componentizadas e reativas.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'PHP',
        description: 'Desenvolvimento web dinâmico e servidores. ',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    }
];

const projects = [
    {
        id: 1,
        name: 'Portfólio',
        description: 'Meu portfólio, feito com linguagens básicas que ainda está em desenvolvimento.',
        image: 'site.png',
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/muzayx/Portfolio'
    },
    {
        id: 2,
        name: 'Verificar Senhas',
        description: 'Verificação de sneha simples, diz oque falta e quais caracteres ja tem.',
        image: 'senha.png',
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/muzayx/Check-Password'
    },
    {
        id: 3,
        name: 'Neon Store',
        description: 'Web Store, fiz para treinar meu conhecimento em tailwind.',
        image: 'store.png',
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/muzayx/Neon-Store'
    },
    {
        id: 4,
        name: 'Poke API',
        description: 'Uma API desenvolvida por mim e outros integrantes do meu grupo, que faz a busca de pokemons, e devolve suas respectivas informações.',
        image: 'poke.png',
        technologies: ['HTML', 'Tailwind CSS', 'API', 'Java Script'],
        link: 'https://github.com/muzayx/Poke-API'
    }
];

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('#darkModeToggle svg, #darkModeToggleMobile svg').forEach(icon => {
        icon.classList.toggle('hidden', isDark === icon.classList.contains('dark:hidden'));
    });
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
}

function enableScroll() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        mobileMenu.style.opacity = "1";
        disableScroll();
    } else {
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.style.opacity = "0";
        enableScroll();
    }
}

function populateSkills() {
    skillsContainer.innerHTML = skills.map((skill, index) => `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-500 opacity-0 theme-transition scroll-animation" style="transition-delay: ${index * 100}ms;">
            <div class="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full p-3 mb-4">
                <img src="${skill.icon}" alt="${skill.name}" class="w-10 h-10" />
            </div>
            <h3 class="text-xl font-semibold my-2 text-blue-600 dark:text-blue-400">${skill.name}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">${skill.description}</p>
        </div>
    `).join('');
}

function populateProjects() {
    projectsContainer.innerHTML = projects.map((project, index) => `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 theme-transition scroll-animation group" style="transition-delay: ${index * 100}ms;">
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="text-white text-lg font-semibold">Ver Projeto</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors">${project.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm transition-colors hover:bg-primary-100 dark:hover:bg-primary-800">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

function handleScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 300) {
        scrollToTopBtn.classList.remove('hidden');
        setTimeout(() => scrollToTopBtn.style.opacity = '1', 50);
    } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => scrollToTopBtn.classList.add('hidden'), 300);
    }

    document.querySelectorAll('.scroll-animation').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
        enableScroll();
    }
}

function initializePage() {
    populateSkills();
    populateProjects();
    currentYearSpan.textContent = new Date().getFullYear();

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.documentElement.classList.add('dark');
    }
    updateDarkModeIcon();

    handleScroll();

    darkModeToggle.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}

document.addEventListener('DOMContentLoaded', initializePage);

const text = "Portfólio do Muza";
  const typingTextElement = document.getElementById("typing-text");
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = isDeleting ? text.slice(0, index--) : text.slice(0, index++);
    typingTextElement.innerText = currentText;

    if (!isDeleting && index === text.length) {
      setTimeout(() => isDeleting = true, 1700); // Espera antes de começar a apagar
    } else if (isDeleting && index === 0) {
      isDeleting = false;
    }

    setTimeout(typeEffect, isDeleting ? 70 : 100); // Velocidade da animação
  }

  window.onload = typeEffect;