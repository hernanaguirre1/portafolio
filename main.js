const list = document.querySelector('.bi-list')
const header = document.querySelector('header')
let lastScroll = 0
let scrollTimeout
document.addEventListener('DOMContentLoaded', function(){
    scrollNav()
})
list.addEventListener('click', ()=>{
    header.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})

function scrollNav() {
    const navLinks = document.querySelectorAll('.item')

    navLinks.forEach(link => {
        link.addEventListener('click' , e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior : 'smooth'})
        })
    })
}

 document.querySelector('.btn-proyectos').addEventListener('click', function(e) {
    e.preventDefault(); 
    const destino = document.getElementById('proyectos');
    destino.scrollIntoView({ behavior: 'smooth' });
  });

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.classList.add("visible");
    header.classList.remove("hidden");
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      header.classList.remove("visible");
      header.classList.add("hidden");
    }, 1000);
  } else {
    header.classList.remove("visible", "hidden");
  }
});