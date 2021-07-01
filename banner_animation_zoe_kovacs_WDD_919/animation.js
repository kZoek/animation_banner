
// timeline for text animations
let firstTextanimation = gsap.timeline();

firstTextanimation
    .from('.first', { duration: 2, scale: 0 })
    .to('.first', { duration: 1.5, left: -1500, delay: 1 })
    .from('.second', { duration: 2, scale: 0 })
    .to('.second', { duration: 1.5, left: -1500, delay: 1 })

//timeline for red background
let rednessAnimation = gsap.timeline();

rednessAnimation
    .to('.redness', { duration: 3, left: -1600, delay: 7.5 })
    .from('.third', { duration: 2, scale: 0 })
    .to('.third', { duration: 1.5, scale: 0.5, top: -300 })


//timeline for pokeballs
let pokeballsTL = gsap.timeline();

pokeballsTL
    .from('.fire', { duration: 3, scale: 0, rotate: 360, left: 255, top: -400, }, 13)
    .from('.grass', { duration: 3, scale: 0, rotate: 360, top: -500 }, 13)
    .from('.water', { duration: 3, scale: 0, rotate: 360, left: 350, top: -700 }, 13)

const pokeBall = document.querySelectorAll('.pokeball');

const openBunny = gsap.timeline();
const openGrookey = gsap.timeline();
const openSobble = gsap.timeline();
// animation to open first ball
openBunny
    .to('.topfire', { duration: 3, rotate: '-90deg', top: '-55px', left: "-95px" },0)
    .to('.bunny', { duration: 2, display: "inline", top: '-50', scale: 1.5 })
    .to('.topfire, .bottomfire', { duration: 1, scale: 0, top: '-80px', left: '-115px' },3)
    .to('.grass, .water', { duration: 0.5, scale:0 },0)
    .to('.third',{duration:0.5, scale: 0},3)
    .to('.bunny',{duration:1, top: '-65px' ,left:'-80px'})
openBunny.pause();
// animation to open second ball
openGrookey
    .to('.topgrass', { duration: 3, rotate: '-90deg', top: '-55px', left: "-95px" },0)
    .to('.grookey', { duration: 2, display: "inline", top: '-50', scale: 1.5 })
    .to('.topgrass, .bottomgrass', { duration: 0.5, scale: 0, top: '-80px', left: '-115px' },3)
    .to('.fire, .water', { duration: 1, scale:0 },0)
    .to('.third',{duration:0.5, scale: 0},3)
    .to('.grookey',{duration:1, top: '-65px', left:'-290px'})
openGrookey.pause();
// animation to open third ball
openSobble
    .to('.topwater', { duration: 3, rotate: '-90deg', top: '-55px', left: "-95px" },0)
    .to('.sobble', { duration: 2, display: "inline", top: '-50', scale: 1.5 })
    .to('.topwater, .bottomwater', { duration: 0.5, scale: 0, top: '-80px', left: '-115px' },3)
    .to('.fire, .grass', { duration: 1, scale:0 },0)
    .to('.third',{duration:0.5, scale: 0},3)
    .to('.sobble',{duration:1, top: '-65px', left:'-520px'})
openSobble.pause();
// function on click event 
function openBall(ball) {
    if (ball.classList.contains('fire')) {
        ball.style.background = 'none';
        ball.style.pointerEvents = 'none';
        openBunny.play();

    } else if (ball.classList.contains('grass')) {
        ball.style.background = 'none';
        ball.style.pointerEvents = 'none';
        openGrookey.play();

    } else if (ball.classList.contains('water')) {
        ball.style.background = 'none';
        ball.style.pointerEvents = 'none';
        openSobble.play();

    };
};
// click event on pokeballs
pokeBall.forEach(balls => {
    balls.addEventListener('click', () => {
        openBall(balls);

    });
});
// callback function to check if the pokeballs are opened to move 
// forward with the animations
openBunny.eventCallback('onComplete',function(){
    congratTL.play();
})
openGrookey.eventCallback('onComplete',function(){
    congratTL.play();
})
openSobble.eventCallback('onComplete',function(){
    congratTL.play();
})
// timeline for congrats and game selection

const congratTL = gsap.timeline();

congratTL
.from('.congrats, .leon',{duration:1, scale:0})
.from('.sword, .shield', {duration:1, scale:0},3)
.to('.congrats',{duration: 0.5,scale:0},2.5)
.to('.sword, .shield',{duration: 1, scale:1.1 ,ease:'easeInOut',repeat:-1})
congratTL.pause();


