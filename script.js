gsap.from("#about img",{
    
    duration: 2,
    rotateX:360,
    scrollTrigger:{
        trigger:"#about img",
        scroll:"body",
        scrub:2,
    }

})