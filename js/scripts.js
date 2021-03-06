$(document).ready(function() {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();


    // build a scene
    var sectionList = new TimelineMax();
    sectionList
        .staggerFrom('.list li', 1, { x: '-50%', autoAlpha: 0, ease: Power0.easeNone }, "-1")
        .staggerTo('.list li', 1, { x: '+50%', autoAlpha: 0, ease: Power0.easeNone }, "-1")
    var ourScene = new ScrollMagic.Scene({
            triggerElement: '.is-consumer .pin-wrapper',
            triggerHook: 0.5,
            duration: '100%'

        })
        .setTween(sectionList)
        .addTo(controller);




    // build a scene
    var lastTitles = new TimelineMax();
    lastTitles
        .staggerFrom('.titles h2', 1, { cycle:{x: ["50%","-50%"]}, autoAlpha: 0, ease: Power0.easeNone }, "-1")
    var ourScene = new ScrollMagic.Scene({
            triggerElement: '.is-consumers .pin-wrapper',
            triggerHook: 0.5,
            duration: '50%'

        })
        .setTween(lastTitles)
        .addTo(controller);

    // pin the intro
    var bigTitle = new TimelineMax();
    bigTitle
        .from('.title', 0.2, { y: '-50%', autoAlpha: 0, ease: Power0.easeNone }, 0)
        .to('.title', 1, { y: '+50%', autoAlpha: 0, ease: Power0.easeNone }, 0.2);


    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.is-business .pin-wrapper',
            triggerHook: 0,
            duration: '100%'
        })
        .setPin('.is-business .pin-wrapper', { pushFollowers: false })
        .setTween(bigTitle)
        .addTo(controller);

    // pin 2
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.is-consumer .pin-wrapper',
            triggerHook: 1

        })
        .setPin('.is-consumer .pin-wrapper', { pushFollowers: false })
        .addTo(controller);
    // pin 3
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.is-consumers .pin-wrapper',
            triggerHook: 1

        })
        .setPin('.is-consumers .pin-wrapper', { pushFollowers: false })
        .addTo(controller);
});
