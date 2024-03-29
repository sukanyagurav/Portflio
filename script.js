
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('#menu-toggler ul a')
const linkAction =()=>{
    document.querySelector('.menu-checkbox').checked=false
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
// blur header
const blurHeader = ()=>{
    const header = document.getElementById('header')
    if(this.scrollY >=50){
        header.classList.add('blur-header')
    }
    else{
        header.classList.remove('blur-header');
    }
}

window.addEventListener('scroll',blurHeader)
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", activeLink);
function activeLink(){
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight,
        sectionTop= current.offsetTop- 58,
        
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('#menu-toggler  a[href*='+sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
//carousel 
const carousel=document.querySelector('.carousel')
const arrowBtn=document.querySelectorAll('.arrowBtn')
const firstCardWidth =carousel.querySelector('.card').offsetWidth;
arrowBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
       carousel.scrollLeft+= btn.id ===  'left' ? (-firstCardWidth ) : firstCardWidth
        
    })
    
})


// animation
let tl = gsap.timeline({defaults: {ease: "power4.inOut"}})
let points = CSSRulePlugin.getRule(".divider::before")
tl.to('.name',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.5})
.to('.text',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.7})
.to('.downloadCV',{opacity:1,scale:1,duration:0.9},"-=1")
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'.summary',
        scroller:'body',
        start:"top 70%",
        end:'bottom 2%',
        ease:Expo.easeInOut,
    //    toggleActions:"restart none none reverse"
    },
})
tl2.to('.summary',{'height':'auto',opacity:1,duration:1})
.to('.summary .title',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,duration:1,y:0})
.from(points,{opacity:0,transform:'translateY(100px)'})
.to('.event',{'height':'auto',opacity:1,duration:1,y:0,delay:0.3},"-=3")
.to('.date, .company, .university, .profession',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',duration:1},"-=2")
.from('.divider',{scaleY:0,duration:1},"-=1")


let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:'.skills',
        start:"top 50%",
        end:"bottom 10px",
        // toggleActions:"restart none none reverse"
    },
})
tl3.to('.skills-title',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,duration:1,y:0})


let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:'.projects',
        start:"top 50%",
        end:"bottom 50px",
        // toggleActions:"restart none none reverse"
    },
})
tl4.to('.heading--3',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.4})
.to('.project-title',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',duration:1.3})
.to('.project-description',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',duration:0.9},"-=1")
.to('.project-technology',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',delay:1,duration:0.6},"-=1")

