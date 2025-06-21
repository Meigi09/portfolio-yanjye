
    // Projects Data - ADD NEW PROJECTS HERE!
    const projects = [
      {
        title: "Urban Farming Management System",
        category: "Backend Development",
        description: "Comprehensive backend system for farmers to track crops, staff, volunteers, and sustainability metrics. Future integration with ML models for crop analysis.",
        technologies: ["Java", "Spring Boot", "REST API"],
        links: [
          { type: "github", url: "https://github.com/Meigi09/Urban-Farming-Mgt-System", text: "View Code" }
        ]
      },
      {
        title: "Digital Library Landing Page",
        category: "Frontend Development",
        description: "Responsive landing page for a digital library. Future expansion planned for a comprehensive online library platform for university students.",
        technologies: ["HTML5", "CSS3", "Responsive Design"],
        links: [
          { type: "demo", url: "https://meigi09.github.io/simple-digital-library-UI/Landing-Page/", text: "Live Demo" }
        ]
      },
      {
        title: "Train Ticket Booking System",
        category: "Full Stack Development",
        description: "Complete booking platform enabling users to book train tickets, view available trains and seats, and manage their reservations efficiently.",
        technologies: ["JavaScript", "REST APIs", "Database Integration"],
        links: [
          { type: "github", url: "https://github.com/Meigi09/booking-train-ticket", text: "View Code" }
        ]
      },
      {
        title: "Employee Management System",
        category: "Database Development",
        description: "Robust employee management system built with PL/SQL for efficient handling of employee data, payroll, and organizational structure.",
        technologies: ["PL/SQL", "Oracle SQL", "Database Design"],
        links: [
          { type: "github", url: "https://github.com/Meigi09/oracle_sql_employee_management_system", text: "View Code" }
        ]
      }
    ];

    // Mobile Menu Functions
    function toggleMobileMenu() {
      const navLinks = document.getElementById('nav-links');
      const icon = document.getElementById('mobile-menu-icon');

      navLinks.classList.toggle('active');

      // Toggle hamburger/close icon
      if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }

    function closeMobileMenu() {
      const navLinks = document.getElementById('nav-links');
      const icon = document.getElementById('mobile-menu-icon');

      navLinks.classList.remove('active');
      icon.className = 'fas fa-bars';
    }

    // Function to generate project cards
    function generateProjects() {
      const container = document.getElementById('projects-container');
      container.innerHTML = '';

      projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const linksHTML = project.links.map(link => {
          const icon = link.type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt';
          return `<a href="${link.url}" class="project-link" target="_blank">
                        <i class="${icon}"></i> ${link.text}
                    </a>`;
        }).join('');

        const techTagsHTML = project.technologies.map(tech =>
          `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <p>${project.category}</p>
                    </div>
                    <div class="project-content">
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${techTagsHTML}
                        </div>
                        <div class="project-links">
                            ${linksHTML}
                        </div>
                    </div>
                `;

        container.appendChild(projectCard);
      });
    }

    // Dark Mode Functionality
    function toggleTheme() {
      const body = document.body;
      const themeIcon = document.getElementById('theme-icon');
      const themeText = document.getElementById('theme-text');

      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
      }
    }

    // Load saved theme
    function loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      const themeIcon = document.getElementById('theme-icon');
      const themeText = document.getElementById('theme-text');

      if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
      }
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
      const navLinks = document.getElementById('nav-links');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

      if (!navLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    // Initialize everything when page loads
    document.addEventListener('DOMContentLoaded', function () {
      generateProjects();
      loadTheme();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Add animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });
  