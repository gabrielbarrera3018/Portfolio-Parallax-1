const skillsSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress-bar");
const arrow = document.getElementsByClassName("arrow");
const project = document.getElementsByClassName("project");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const langWrap = document.querySelector(".langWrap");
const lang = document.querySelectorAll(".lang");
const head = document.querySelectorAll(".head");
const label = document.querySelectorAll("label");
const h1 = document.querySelector("h1");
const links = document.querySelectorAll("a");
const titleAbout = document.querySelector(".title-about");
const titleProjects = document.querySelector(".title-projects");
const titleContact = document.querySelector(".title-contact");
const cv = document.querySelector(".cv");
const send = document.querySelector(".send");
const profile = document.querySelector(".profile-description");
const todoApp = document.querySelector(".description-todoList");
const flappyBird = document.querySelector(".description-flappyBird");
const artworks = document.querySelector(".description-artworks");
const socialNetwork = document.querySelector(".description-socialNetwork");
const memoryCards = document.querySelector(".description-memoryCards");
const quiz = document.querySelector(".description-quiz");
const chatApp = document.querySelector(".description-chatApp");
const sushi = document.querySelector(".description-sushi");
const hulu = document.querySelector(".description-hulu");

const langData = {
  french: {
    h1: "Quentin, </br> développeur web junior",
    about: "À propos",
    projects: "Mes projets",
    profile:
      " Je m'appelle Quentin Cuoc, je suis développeur web full-stack junior. Après des études en langue étrangères appliquées, j'ai décidé de commencer un nouveau parcours pour devenir développeur. J'ai suivi une formation openclassrooms de niveau bac +2 dans laquelle j'ai appris à utiliser des outils tels que Bootstrap, Node.js, React.js, MySql, MongoDB ainsi que la création de sites web responsive, accessibles et bien référencés. J'ai aussi travaillé à titre personnel avec des outils tels que Wordpress, Next.js, Sanity.io, Puppeteer ou React Native.",
    name: "Nom",
    adress: "Adresse",
    cv: "Voir mon Curriculum",
    contact: "Contactez-moi",
    send: "Envoyer",
    todoApp:
      "<b>Une application Todo List</b> créée avec les languages HTML, CSS et Javascript.",
    artworks:
      "<b>Une application MERN</b> pour partager des images créée avec l'aide de Redux et multer.<i>Si le serveur ne répond pas merci de patienter quelques secondes et d'actualiser pour réveiller l'application Heroku.</i>",
    flappyBird:
      "<b>Un jeu Flappy Bird</b> créé à l'aide de Javascript et ses classes ES6.",
    socialNetwork:
      "<b>Un réseau social</b> pour partager des images créé avec React.js, Node.js, Express.js, MySQL et Cloudinary.<i>Si le serveur ne répond pas merci de patienter quelques secondes et d'actualiser pour réveiller l'application Heroku.</i>",
    memoryCards:
      "<b>Un jeu de carte à mémoriser</b> créé avec les languages HTML, CSS et Javascript.",
    quiz: "<b>Un quiz sur les citations célèbres</b> créé avec React Native et Expo.",
    chatApp:
      "<b>Une application de chat</b> créé avec React.js, Node.js et Socket.IO.",
    sushi:
      "<b>Un site de restaurant japonais</b> responsive créé avec React.js.",
    hulu: "<b>Un clone de la plateforme VOD Hulu</b> créé avec Next.js, Tailwind CSS et l'API The Movie Database.",
  },
  english: {
    h1: "Quentin, </br> web developper junior",
    about: "About Me",
    projects: "My projects",
    profile:
      "My name is Quentin Cuoc, I'm a junior full stack web developper. After studying foreign languages, I decided to change my goals and started to learn web development. I thus followed an openclassrooms formation during which I learned to use several tools such as Bootstrap, Node.js, React.js, MySql, MongoDB as well as responsive design, accessibility and referencement. I also worked on my own with tools like Wordpress, Next.js, Sanity.io, Puppeteer and React Native.",
    name: "Name",
    adress: "Adress",
    cv: "See my résumé",
    contact: "Contact me",
    send: "Send",
    todoApp:
      "<b>Todo List application</b> built with HTML, CSS and Javascript.",
    artworks:
      "<b>MERN application</b> built with Redux and Multer to share images.<i> Might need to reload the page after 30s to awake heroku app.</i>",
    flappyBird:
      "<b>Flappy bird game</b> built with Javascript and ES6 classes.",
    socialNetwork:
      "<b>A social network</b> built with React.js, Node.js, Express.js, MySQL and Cloudinary to share images.<i> Might need to reload the page after 30s to awake heroku app.</i>",
    memoryCards:
      "<b>Memory cards game</b> built with HTML, CSS and Javascript.",
    quiz: "<b>A famous quotes quiz</b> built with React Native and Expo.",
    chatApp:
      "<b>Chat application</b> built with React.js, Node.js and Socket.IO.",
    sushi: "<b>Responsive japanese restaurant website</b> built with React.js.",
    hulu: "<b>A clone of the streaming platform Hulu</b> built with Next.js, Tailwind CSS and The Movie Database API.",
  },
};

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

// Events Listeners

toggleButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
});
navbarLinks.addEventListener("click", (event) => {
  event.preventDefault();
  navbarLinks.classList.remove("active");
  toggleButton.classList.remove("active");
});

window.addEventListener("scroll", () => {
  console.log("ok");
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const sectionBot = skillsSection.getBoundingClientRect().bottom;
  const screenPos = window.innerHeight;
  if (sectionPos < screenPos || sectionBot > screenPos) {
    showProgress();
  }
  if (sectionPos > screenPos || sectionBot < screenPos - 1000) {
    hideProgress();
  }
});

lang.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(links);
    langWrap.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.getAttribute("language");
    h1.innerHTML = langData[attr].h1;
    todoApp.innerHTML = langData[attr].todoApp;
    flappyBird.innerHTML = langData[attr].flappyBird;
    artworks.innerHTML = langData[attr].artworks;
    socialNetwork.innerHTML = langData[attr].socialNetwork;
    memoryCards.innerHTML = langData[attr].memoryCards;
    quiz.innerHTML = langData[attr].quiz;
    chatApp.innerHTML = langData[attr].chatApp;
    sushi.innerHTML = langData[attr].sushi;
    hulu.innerHTML = langData[attr].hulu;
    profile.innerHTML = langData[attr].profile;
    titleAbout.innerHTML = langData[attr].about;
    titleProjects.innerHTML = langData[attr].projects;
    titleContact.innerHTML = langData[attr].contact;
    cv.innerHTML = langData[attr].cv;
    send.innerHTML = langData[attr].send;
    head[0].innerHTML = langData[attr].name;
    head[1].innerHTML = langData[attr].adress;
    label[0].innerHTML = langData[attr].name;
    links[3].innerHTML = langData[attr].about;
    links[4].innerHTML = langData[attr].projects;
  });
});
