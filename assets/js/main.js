
// Slider 
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:1000,
    autoplay: true,
    autoplaySpeed:3000,
    infinite:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow:1
        }
      },
    ]
  });
  /* ------Typing Effect ------- */

 var TypingEffect = new Typed(".typedText",{
  strings:["Wordpress Developer","Web Designer", "Coder", "Frontend Developer","Freelancer", "UI/UX Designer","Graphic Designer","Content Writer"],

  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:2000,
 })


 /* ------ Scroll Animation ------- */

const sr = scrollReveal({
  origin: 'top',
  Distance: '80px',
  duration:2000,
  reset: true

})
/* ------Home Page ------- */
sr.reveal('.banner-text', {});

sr.reveal('.featured-name', {delay: 100});
sr.reveal('.text-info', {delay: 200});
sr.reveal('.button', {delay: 200});
sr.reveal('.social-icons', {delay: 200});
sr.reveal('.featured-image', {delay: 300});

/* ------ PROJECT BOX ------- */


sr.reveal('.box', {interval:200});

/* ------ Top Header ------- */

sr.reveal('.top-header', {});

const srRight = scrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
})
srRight.reveal('.skill',{delay:100});
srRight.reveal('.skill-box',{delay:100});
