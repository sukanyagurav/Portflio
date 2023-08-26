// blur header

const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header'):header.classList.remove('blur-header')

}
window.addEventListener('scroll',blurHeader)
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('#menu-toggler ul a')
const linkAction =()=>{
    document.querySelector('.menu-checkbox').checked=false
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

let tl = gsap.timeline({defaults: {ease: "power4.inOut"}})
let points = CSSRulePlugin.getRule(".divider::before")
tl.to('.name',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.7})
.to('.text',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.9})
.to('.downloadCV',{opacity:1,scale:1,duration:0.9},"-=1")
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'.summary',
        scroller:'body',
        start:"top 70%",
        end:'bottom 2%',
        ease:Expo.easeInOut,
     toggleActions:"restart none none reverse"
    },
})
tl2.to('.summary',{'height':'auto',opacity:1,duration:0.8})
.to('.summary .title',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,duration:0.5,y:0})
.from(points,{opacity:0,transform:'translateY(100px)'})
.to('.event',{'height':'auto',opacity:1,duration:0.9,y:0,delay:0.5},"-=3")
.to('.date, .company, .university, .profession',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',delay:0.9,duration:0.9},"-=2")
.from('.divider',{scaleY:0,duration:"0.6"},"-=1")


let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:'.skills',
        start:"top 50%",
        end:"bottom 10px",
        toggleActions:"restart none none reverse"
    },
})
tl3.to('.skills-title',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,duration:0.5,y:0})
.from('.skill-1',{scale:0,duration:0.2})
.from('.skill-2',{scale:0,delay:0.05,duration:0.3})
.from('.skill-3',{scale:0,delay:0.05,duration:0.3})
.from('.skill-4',{scale:0,delay:0.05,duration:0.3})
.from('.skill-5',{scale:0,delay:0.05,duration:0.3})
.from('.skill-6',{scale:0,delay:0.05,duration:0.3})

let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:'.projects',
        start:"top 50%",
        end:"bottom 50px",
        toggleActions:"restart none none reverse"
    },
})
tl4.to('.heading--3',{'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1,y:0,duration:0.4})
.to('.project-title',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',duration:1.3})
.to('.project-description',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',duration:0.9},"-=1")
.to('.project-technology',{'clip-path': 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)',delay:1,duration:0.6},"-=1")
document.querySelector('.downloadCV').addEventListener('click',function(){
    window.location.href=new URL('/Sukanya Gurav Resume.pdf', import.meta.url).href
})