// Center card will have hover effects 
const cards = document.querySelectorAll('.project-card');
const serviceCards = document.querySelectorAll('.services-card');
const servicesContent = document.querySelector('.services-content');

function checkCenter() {
  const viewportCenter = window.innerHeight / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2 && window.innerWidth <= 768) {
      card.classList.add('projects-in-view');
    } else {
      card.classList.remove('projects-in-view');
    }
  });

  const servicesRect = servicesContent.getBoundingClientRect();
  const servicesContentCenter = servicesRect.top + servicesRect.height / 2;

  if (Math.abs(servicesContentCenter - viewportCenter) < servicesRect.height / 2 && window.innerWidth <= 768) {
    servicesContent.classList.add('service-content-in-view');
  } else {
    servicesContent.classList.remove('service-content-in-view');
  }

  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2 && window.innerWidth <= 768) {
      card.classList.add('services-in-view');
    } else {
      card.classList.remove('services-in-view');
    }
  });
}

window.addEventListener('scroll', checkCenter);
window.addEventListener('resize', checkCenter);
checkCenter();


// Mouse Follower 
let mouseFollower = document.querySelector(".mouse-follower");

document.addEventListener("mousemove", (e) => {
  mouseFollower.style.left = e.clientX + "px";
  mouseFollower.style.top = e.clientY + "px";
});

// Hidden Tablets
let hiddenTabs = document.querySelectorAll(".hide-dot");
hiddenTabs.forEach((hiddenTablet) => {
  hiddenTablet.addEventListener("mouseover", (e) => {
    let hiddenText = hiddenTablet.querySelector(".hidden-tablet");
    mouseFollower.innerText = hiddenText.innerText;
  });

  hiddenTablet.addEventListener("mouseleave", (e) => {
    let hiddenText = hiddenTablet.querySelector(".hidden-tablet");
    mouseFollower.innerText = "";
  })
});