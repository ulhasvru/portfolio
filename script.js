// ===== DARK MODE =====
const modeToggle = document.getElementById('modeToggle');
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
  document.body.classList.add('dark');
  modeToggle.textContent = '☀️';
}

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  modeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===== STICKY NAV SHADOW =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== SMOOTH SCROLL FIX (offset for fixed nav) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== RESUME KNOWLEDGE BASE (from actual resume) =====
const resumeKnowledge = {
  summary: `Ulhas Suresh Rane is a Senior Configuration Manager with 15+ years of experience delivering enterprise-grade loyalty programs and CRM solutions on SaaS platforms. He has deep expertise in loyalty program configuration, campaign orchestration, CMS management, REST API integration, and UAT leadership. He is based in Bangalore, India.`,

  experience: `Ulhas has 15+ years of experience in enterprise SaaS, loyalty platforms, and product operations. He has worked extensively at Capillary Technologies since 2010 across multiple roles including Operations Executive, Associate Manager, Delivery Manager, and Configuration Manager.`,

  current: `Ulhas currently works as Configuration Manager I (PSV) at Capillary Technologies India Pvt. Ltd. in Bangalore since August 2023. He leads end-to-end configuration and deployment of enterprise loyalty campaigns and manages full UAT cycles for mobile and web loyalty features.`,

  skills: `Ulhas's core skills include: Loyalty Program Configuration, Campaign Orchestration, CMS Management, REST API Integration using Postman/cURL, Microservices Validation, UAT Leadership, Production Deployment, Stakeholder Management, Root Cause Analysis (RCA), Customer Success, Enterprise Onboarding, Process Optimization, Technical Documentation, and QBR Delivery.`,

  platforms: `Ulhas is proficient in Capillary Loyalty Platform, CMS Platforms, JIRA, Agile/Scrum, and AI tools like ChatGPT, Claude, and Gemini including Prompt Engineering.`,

  ai: `Ulhas is an early adopter of Generative AI tools including ChatGPT, Claude, and Gemini. He has introduced AI-assisted documentation and test case generation workflows, reducing documentation effort by ~40% and accelerating cross-team knowledge transfer. He actively uses AI for automated test case generation, technical documentation, and troubleshooting acceleration.`,

  achievements: `Key achievements include: spearheaded 10+ enterprise loyalty program launches across retail, FMCG, and fashion verticals; reduced production incidents through rigorous pre-deployment API validation; introduced AI-assisted workflows reducing documentation effort by ~40%; received SPOT Award for exceptional operational performance; and delivered QBRs supporting contract renewals and upsell opportunities for enterprise retail clients.`,

  award: `Ulhas received the SPOT Award for outstanding operational performance and client service excellence during high-volume program launches at Capillary Technologies. He also received this recognition during his time as Operations Executive.`,

  company: `Ulhas has primarily worked at Capillary Technologies India Pvt. Ltd. in Bangalore for most of his career (2010–present with a break). He also worked at Spurtree Technologies Pvt. Ltd. (Dec 2021–Mar 2022) and Altai Solution Pvt. Ltd. (Oct 2020–Nov 2021) as Manager – Customer Success.`,

  capillary: `Capillary Technologies is where Ulhas has spent most of his career. He joined in April 2010 as Operations Executive, then became Associate Manager – Key Accounts (Apr 2012–Sep 2020), Delivery Manager – Customer Success (Apr 2022–Aug 2023), and currently Configuration Manager I (PSV) since August 2023.`,

  loyalty: `Ulhas has configured and launched 10+ enterprise loyalty programs across retail, FMCG, and fashion verticals. He manages loyalty campaign orchestration, points, tiers, rewards modules, and large-scale campaign execution using the Capillary Loyalty Platform.`,

  api: `Ulhas validates REST APIs, microservices, and configuration changes pre-deployment using Postman and cURL. His rigorous pre-deployment API and microservice validation protocols have reduced production incidents and rollback rates significantly.`,

  career: `Ulhas's career timeline: Operations Executive at Capillary (Apr 2010–Mar 2012) → Associate Manager Key Accounts at Capillary (Apr 2012–Sep 2020) → Manager Customer Success at Altai Solution (Oct 2020–Nov 2021) → Manager Customer Success at Spurtree Technologies (Dec 2021–Mar 2022) → Delivery Manager at Capillary (Apr 2022–Aug 2023) → Configuration Manager I at Capillary (Aug 2023–Present).`,

  education: `Ulhas holds a Bachelor of Commerce degree from Vinayaka Mission University (2012–2014). He is open to hybrid and remote opportunities and is available for immediate joining.`,

  location: `Ulhas Suresh Rane is based in Bangalore, India. He is open to hybrid and remote opportunities and available for immediate joining.`,

  contact: `Ulhas can be reached via LinkedIn at linkedin.com/in/ulhasrane. He is based in Bangalore, India and is open to hybrid and remote opportunities.`,

  linkedin: `Ulhas's LinkedIn profile is at linkedin.com/in/ulhasrane. Feel free to connect with him there for professional opportunities.`,

  clients: `Ulhas has worked with enterprise retail clients including Raymond and Siyaram for loyalty program configuration. He has managed portfolios of 5+ enterprise clients, conducting QBRs and executive business reviews.`,

  qbr: `Ulhas has delivered QBRs (Quarterly Business Reviews) and executive business reviews surfacing engagement metrics and ROI insights, supporting contract renewals and upsell opportunities for enterprise retail clients.`,

  uat: `Ulhas has led UAT (User Acceptance Testing) cycles for mobile and web loyalty features, coordinating with QA, product, and engineering teams to ensure zero-defect production releases.`,

  rca: `Ulhas authors detailed Root Cause Analysis (RCA) documentation and technical incident reports for cross-functional stakeholders including product, engineering, and client success teams.`,

  delivery: `As Delivery Manager at Capillary Technologies (Apr 2022–Aug 2023), Ulhas managed a portfolio of 5+ enterprise client relationships, ensuring on-time delivery of loyalty platform solutions and feature enhancements aligned to contractual SLAs.`,

  onboarding: `Ulhas led enterprise client onboarding and platform configuration, reducing time-to-launch by standardizing configuration templates and runbooks. He also coordinated client training sessions for successful program launches.`,

  automation: `Ulhas has implemented Generative AI workflows using ChatGPT and Claude for automated test case generation, technical documentation, and troubleshooting acceleration, achieving ~40% reduction in documentation effort.`,

  efficiency: `Through AI-assisted documentation and workflow automation using ChatGPT and Claude, Ulhas has reduced documentation effort by approximately 40% and accelerated cross-team knowledge transfer significantly.`,
};

// ===== AI CHAT =====
const chatBox = document.getElementById('chatBox');
const questionInput = document.getElementById('question');
const askBtn = document.getElementById('askBtn');

function appendMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  msg.innerHTML = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg typing';
  typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typing;
}

function findAnswer(query) {
  const q = query.toLowerCase().trim();

  // Match keywords to knowledge base
  const rules = [
    { keys: ['summary', 'about', 'who is', 'introduce', 'overview', 'profile'], key: 'summary' },
    { keys: ['experience', 'years', 'how long', 'background'], key: 'experience' },
    { keys: ['current', 'now', 'present', 'currently', 'today', 'role', 'position', 'job'], key: 'current' },
    { keys: ['skill', 'expertise', 'competenc', 'good at', 'specializ', 'what can'], key: 'skills' },
    { keys: ['platform', 'tool', 'software', 'technology', 'tech stack'], key: 'platforms' },
    { keys: ['ai', 'artificial intelligence', 'chatgpt', 'claude', 'gemini', 'generative'], key: 'ai' },
    { keys: ['achievement', 'accomplish', 'success', 'milestone', 'proud', 'highlight'], key: 'achievements' },
    { keys: ['award', 'spot', 'recognition', 'honor'], key: 'award' },
    { keys: ['company', 'employer', 'organization', 'where work', 'where has'], key: 'company' },
    { keys: ['capillary', 'capilary'], key: 'capillary' },
    { keys: ['loyalty', 'program', 'reward', 'campaign', 'points', 'tier'], key: 'loyalty' },
    { keys: ['api', 'postman', 'curl', 'rest', 'microservice', 'integration'], key: 'api' },
    { keys: ['career', 'timeline', 'history', 'journey', 'path', 'progression'], key: 'career' },
    { keys: ['education', 'degree', 'university', 'college', 'study', 'qualification'], key: 'education' },
    { keys: ['location', 'where', 'city', 'country', 'bangalore', 'india', 'based'], key: 'location' },
    { keys: ['contact', 'reach', 'email', 'connect', 'hire', 'available', 'hiring', 'join'], key: 'contact' },
    { keys: ['linkedin'], key: 'linkedin' },
    { keys: ['client', 'customer', 'raymond', 'siyaram', 'retail', 'brand', 'fmcg'], key: 'clients' },
    { keys: ['qbr', 'quarterly', 'review', 'business review'], key: 'qbr' },
    { keys: ['uat', 'testing', 'test', 'qa', 'quality'], key: 'uat' },
    { keys: ['rca', 'root cause', 'incident', 'analysis'], key: 'rca' },
    { keys: ['delivery', 'deliver', 'deployment', 'deploy', 'launch'], key: 'delivery' },
    { keys: ['onboard', 'onboarding'], key: 'onboarding' },
    { keys: ['automat', 'workflow', 'automation'], key: 'automation' },
    { keys: ['efficienc', 'productivity', '40%', 'improve'], key: 'efficiency' },
  ];

  for (const rule of rules) {
    if (rule.keys.some(k => q.includes(k))) {
      return resumeKnowledge[rule.key];
    }
  }

  return null;
}

async function handleAsk() {
  const question = questionInput.value.trim();
  if (!question) return;

  questionInput.value = '';
  askBtn.disabled = true;

  // Show user message
  appendMessage(`<b>You:</b> ${question}`, 'user');

  // Show typing indicator
  const typingEl = showTyping();

  // Simulate thinking delay
  await new Promise(r => setTimeout(r, 800 + Math.random() * 600));

  // Remove typing
  typingEl.remove();

  // Find answer
  const answer = findAnswer(question);

  if (answer) {
    appendMessage(`<span class="msg-name">Ulhas's AI:</span> ${answer}`, 'bot');
  } else {
    appendMessage(`<span class="msg-name">Ulhas's AI:</span> Sorry! I am too busy answering other colleagues. Please try Later!!`, 'bot');
  }

  askBtn.disabled = false;
  questionInput.focus();
}

askBtn.addEventListener('click', handleAsk);

questionInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleAsk();
});

// ===== INTERSECTION OBSERVER for scroll animations =====
const observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOpts);

// Apply to cards and timeline items on load
document.addEventListener('DOMContentLoaded', () => {
  const animEls = document.querySelectorAll('.stat-card, .exp-card, .tl-info, .chat-card');
  animEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease`;
    observer.observe(el);
  });
});
