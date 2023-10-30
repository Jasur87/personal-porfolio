const servicesButtons = document.querySelectorAll('.services__item');
const servicesDetails = document.querySelector('.services__right');

const getService = (category) => {
  const details = servicesData.find(item => item.category === category);
  servicesDetails.innerHTML = `
  <h3>${details.title}</h3>
  ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
  `
}

const removeActiveClass = () => {
  servicesButtons.forEach(button => {
    button.classList.remove('active');
  })
}

servicesButtons.forEach(item => {
  item.addEventListener('click', () => {
    const serviceClass = item.classList[1];
    getService(serviceClass)
    item.classList.add('active')
    removeActiveClass();
  })
})

getService('frontend');

//---Mix it up-----//

const conatinerEl = document.querySelector('.projects__container');
var mixer = mixitup(conatinerEl, {
  animation: {
    enable: false
  }
});

mixer.filter('*');

//---Swiper-----//

const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// nav menu functionality // 

const menuBtn = document.querySelector('.nav__toggle-open');
const closeBtn = document.querySelector('.nav__toggle-close');
const menu = document.querySelector('.nav__menu');

// open nav menu 

const openNavHandler = () => {
  menu.style.display = 'flex';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
}

// close nav menu 

const closeNavHandler = () => {
  menu.style.display = 'none'; 
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
}

menuBtn.addEventListener('click', openNavHandler);
closeBtn.addEventListener('click', openNavHandler);

// close nav menu on click of nav link on small screens 

const navItems = menu.querySelectorAll('a');
if(window.innerWidth < 768) {
  navItems.forEach(item => {
    item.addEventListener('click', closeNavHandler);
  })
}

// Theme toggle 

const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className; 
  if(!bodyClass) {
    bodyClass = 'dark';
    document.body.className = bodyClass;
    // change toggle icon
    themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
    // save theme to local storage
    window.localStorage.setItem('theme', bodyClass);
  } else {
    bodyClass = ''; 
    document.body.className = bodyClass;
    // change toggle icon 
    themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
    // save theme to local storage
    window.localStorage.setItem('theme', bodyClass);
  }
})

// load theme on load 

window.addEventListener('load', () => {
  document.body.className = window.localStorage.getItem('theme');
})
