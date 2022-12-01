var liIcons  = document.querySelectorAll('.li_habilidade_icons')
var infHabilidades = document.querySelector('#habilidades_inf')

liIcons.forEach((li)=>{
    
li.addEventListener('mouseover', (a)=>{
    if(a.target.innerHTML == 'Html'){
        infHabilidades.innerHTML = `<p> /*
        Linguagem de marcação, usada para adicionar textos, imagens, videos, botões, e etc.
        */</p>`
    }
    if(a.target.innerHTML == 'Css'){
        infHabilidades.innerHTML = `<p> /*
        Linguagem de estilização, usada para dar estilo para o seu site colocando cores, tamanhos, animações, e muito mais.
        */</p>`
    }
    if(a.target.innerHTML == 'Javascript'){
        infHabilidades.innerHTML = `<p> /*
        Linguagem de programação, usada para adicionar interatividade ao seu site, por exemplo: estilo dinâmico, respostas quando botões são pressionados ou dados são inseridos em formulários, …
        */</p>`
    }
    if(a.target.innerHTML == 'Photoshop'){
        infHabilidades.innerHTML = `<p> /*
        Editor de imagem, eu utilizo exclusivamente para desenhar o site antes começar a programa-lo, assim acelerando o desenvolvimento do site e facilitando caso o cliente deseje fazer alguma alteração.
        */</p>`
    }
   
    
}

    
)

li.addEventListener('mouseleave' , ()=>{
    if (window.matchMedia("(max-width: 630px)").matches) {
 
    infHabilidades.innerHTML = `
    <p> /* clique no icone para ver as informações */ </p>
    `
    }else{
        infHabilidades.innerHTML = `
        <p> /* Passe o mouse sobre o icone para ver as informações */ </p>
        `
    }
})
})



// menu mobile

var ulMenu = document.querySelector('#ul_menu')
var fechar = document.querySelector('.fechar')
var abrir = document.querySelector('.abrir')
var nav = document.querySelector('#nav')
document.querySelectorAll('.menu').forEach((e)=>{
    console.log(e)
    var abrirOuFechar = e.classList.contains('abrir')

    e.addEventListener('click', ()=>{
        if(abrirOuFechar){
            e.style.display = 'none'
            fechar.style.display = 'flex'
            ulMenu.classList.remove('of')
            nav.classList.add('change_bg')
        }else{
            e.style.display = 'none'
            abrir.style.display = 'flex'

            nav.classList.remove('change_bg')
            ulMenu.classList.add('of')  
            
        }
    })
   
   
})

// const menuA = document.querySelectorAll('#ul_menu li a');
// const menuLi = document.querySelectorAll('#ul_menu li')
// const body = document.querySelector('body')
// menuA.forEach(item => {
//   item.addEventListener('click', ()=>{
//     for (var i = 0; i < 4; i++) {
//      menuLi[i].classList.remove('foco')
//      menuLi[i].classList.remove('li_contato_foco')
//    }
//    console.log(item)
//    if(document.querySelector('#li_'+item.id).classList.contains('li_contato')){
      
//     document.querySelector('#li_'+item.id).classList.add('li_contato_foco')
//   }else{
//     document.querySelector('#li_'+item.id).classList.add('foco')
   
//   }
//   });
  

  
// })


document.querySelector('#logo_header a').
addEventListener('click', (event)=>{
  event.preventDefault();
  smoothScrollTo(0, -80, 700)
})

const menuItems = document.querySelectorAll('#ul_menu a[href^="#"]');
 
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;

}

function scrollToIdOnClick(event) {
  
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
//   window.scroll({
//     top: to,
//     behavior: "smooth",
//   });
  smoothScrollTo(0, to, 700);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};