let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 3, { y: -300 })
  .to(".character", 3, { y: -200 }, "-=3")
  .fromTo(".background", {y:-50}, { y: 0,duration:3 }, "-=3")
  .to(".content-wrapper", 3, { top: "0%" }, "-=3")
  .fromTo(".content-images",{opacity:0},{opacity:1,duration:3},"-=3");
let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
