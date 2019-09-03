// Your code goes here
const navLink = document.querySelectorAll('nav .nav-link');

  navLink[0].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[1].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[2].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[3].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})

  // Nav Bar Prevention

const navPop = document.querySelector(".main-navigation");
navPop.addEventListener('mouseover', (e) => {
     navPop.style.backgroundColor = 'black';
     navPop.style.color = 'white';
 });

const imgWut = document.querySelectorAll("img");
    imgWut.forEach(item => {
        item.addEventListener('wheel', event => {
         item.style.transform = 'scale(.01)';
        })
    })
    
const h2Hah = document.querySelectorAll("h2");
        h2Hah.forEach(item => {
            item.addEventListener('mouseenter', event => {
                item.textContent="ERRORRRR";
            })
        })

const uhOh = document.querySelector("*");
        uhOh.addEventListener('dblclick', event => {
            uhOh.style.backgroundColor = 'red';
            uhOh.addEventListener('keydown', event => {
                uhOh.style.color = 'red';
            })
        })

const kidNap = document.querySelectorAll("h4");
        kidNap.forEach(item => {
            item.addEventListener('drag', event => {
                item.textContent="Kidnapper!!"
            })
        })

const noTouchie = document.querySelectorAll(".btn");
        noTouchie.forEach(item => {
            item.addEventListener('auxclick', event => {
                item.textContent='No Touchie!!!'
            })
        })

const buhBye = document.querySelectorAll('.destination p');
    buhBye.forEach(item => {
        item.addEventListener('mouseleave', event => {
            item.style.transform = 'scale(5)';
        })
    })

const textTurn = document.querySelector('.intro p');
    textTurn.addEventListener('mousedown', event => {
        textTurn.style.transform = 'skew(100deg)';
    })

const ree = document.querySelector('.content-section .text-content p');
    ree.addEventListener('mouseout', event => {
        ree.textContent = 'RRRREEEEEEEEEEEEEEEEEEEEEE RRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
    })

const footPain = document.querySelector('.footer');
    footPain.addEventListener('mousemove', event => {
        footPain.style.display = 'none';
    })