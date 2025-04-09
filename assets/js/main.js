// Slider
$(".slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerPadding: "40px",
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
});
/*============= Portfolio Item Filter ======*/
const FilterContainer = document.querySelector(".portfolio-filter");
const filterBtns = FilterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    const activeBtn = FilterContainer.querySelector(".active");
    if (activeBtn) activeBtn.classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    for (let k = 0; k < totalPortfolioItem; k++) {
      if
        (filterValue === portfolioItems[k].getAttribute("data-category") || filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
      else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
    }
  });
}

/*============= Portfolio Item Filter end ======*/
/*============= Lightbox======*/
lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxClose = lightbox.querySelector(".lightbox-close"),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
portfolioItems[i].addEventListener("click", function () {
  itemIndex = i;
  changeItem();
  toggleLightbox()
  // console.log(i);
})
}
     function nextItem()
     {
      if (itemIndex == totalPortfolioItem - 1)
      {
        itemIndex = 0;

      }
      else
      {
       itemIndex++
      }
     changeItem();
     }
    //  
    function prevItem()
    {
     if (itemIndex == 0)
     {
       itemIndex = totalPortfolioItem -1;

     }
     else
     {
      itemIndex--
     }
    changeItem();
    }
    function toggleLightbox() {
lightbox.classList.toggle("open");
}
function changeItem() {
imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
lightboxImg.src = imgSrc;
lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML=(itemIndex+1) + " of  " + totalPortfolioItem;
}
               /*============= Close Lightbox======*/
               lightbox.addEventListener("click", function(event)
              {
               if(event.target === lightboxClose || event.target === lightbox)
              {
              toggleLightbox()
            }
           })
            




/* ------Typing Effect ------- */

var TypingEffect = new Typed(".typedText", {
  strings: [
    "Wordpress Developer",
    "Web Developer",
    "Frontend Developer",
    "Freelancer",
    "UI/UX Designer",
    "Graphic Designer",
    "Content Writer",
  ],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ------ Scroll Animation ------- */

const sr = scrollReveal({
  origin: "top",
  Distance: "80px",
  duration: 2000,
  reset: true,
});



/* ------Home Page ------- */
sr.reveal(".banner-text", {});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".button", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* ------ PROJECT BOX ------- */

sr.reveal(".box", { interval: 200 });

/* ------ Top Header ------- */

sr.reveal(".top-header", {});

const srRight = scrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });
