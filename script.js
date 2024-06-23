let tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    duration:0.6,
    stagger:0.25,
    delay:0.5,

});

tl.to(".line-timer",{
    opacity:1,
    duration:0.3,
    onStart:() =>{
        let timer = document.querySelector(".line-timer h5");
        let grow = 0;

        setInterval(() => {
            if (grow < 100) {
                
                grow++;
                timer.innerText = grow;
            }else{
                grow = 100;
                timer.innerText = grow;
            }
        },33)

    }
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
    
})

tl.to(".loader",{
    opacity:0,
    duration:0.2,
    delay:3.5,
    
})

tl.from("#page1",{
    opacity:0,
    y:1600,
    duration:0.5,
    ease:Power4,
})
tl.to(".loader",{
    display:"none",
})



