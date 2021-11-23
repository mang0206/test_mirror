const divePath = {
    curve: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: -90},
        {x: window.innerWidth, y: -50}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.diving-animation', 1, {
        bezier: divePath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000,
    triggerHook: 0.5
})
    .setTween(tween)
    // .addIndicators()
    .setPin('.animation')
    .addTo(controller);

// svg

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotinPathPlugin);

gsap.defaults({ease: "none"});

const main = gsap.timeline()
.from(".theLine", {drawSVG:0, duration:4});