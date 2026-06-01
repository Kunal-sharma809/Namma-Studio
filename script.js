const cards = document.querySelectorAll('.project-card');
const serviceCards = document.querySelectorAll('.services-card');
const servicesContent = document.querySelector('.services-content');

function checkCenter() {
  const viewportCenter = window.innerHeight / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2) {
      card.classList.add('projects-in-view');
    } else {
      card.classList.remove('projects-in-view');
    }
  });

    const servicesRect = servicesContent.getBoundingClientRect();
    const servicesContentCenter = servicesRect.top + servicesRect.height / 2;

    if (Math.abs(servicesContentCenter - viewportCenter) < servicesRect.height / 2) {
      servicesContent.classList.add('service-content-in-view');
    } else {
      servicesContent.classList.remove('service-content-in-view');
    }

  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2) {
      card.classList.add('services-in-view');
    } else {
      card.classList.remove('services-in-view');
    }
  });
}

window.addEventListener('scroll', checkCenter);
window.addEventListener('resize', checkCenter);
checkCenter();