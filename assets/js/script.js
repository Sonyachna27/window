document.addEventListener("DOMContentLoaded", () =>{
	toggleMenu();
	heroSliderInit();
	accordionFunction();
	openTabs();
	reviewsSliderFunction();
});
const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("nav a");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}
const heroSliderInit = () =>{
	const heroSliderWrap = document.querySelector('.heroSlider');
	if(heroSliderWrap){
		const swiper = new Swiper(heroSliderWrap, {
			pagination: {
				el: ".hero-pagination",
				type: "fraction",
				formatFractionCurrent: function (number) {
					return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
					return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
								 ' / ' +
								 '<span class="' + totalClass + '"></span>';
			}
			},
			navigation: {
				nextEl: ".hero-button-next",
				prevEl: ".hero-button-prev",
			},
	
		});
	
	}
	
}
const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");
  
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
  });
};
const openTabs = () =>{
	const targetList = document.querySelectorAll(".target__tabs");
  if (!targetList) return;

    const allContentBlocks = Array.from(
      document.querySelectorAll(".target__content")
    );

    let frontBlockId = "target-1";
    const tabsLinks = document.querySelectorAll(".target__list-item");
    function addTabsActive() {
      tabsLinks.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabsLinks.forEach((otherButton) => {
            otherButton.classList.remove("active");
          });
          button.classList.add("active");
          showContent(button.dataset.name, index);
        });
      });
    }
    addTabsActive();
    function updateActiveTab(index) {
      tabsLinks.forEach((button, i) => {
        if (i === index) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    function changeSlide(blockId) {
      allContentBlocks.forEach((block, index) => {
        if (block.getAttribute("id") === blockId) {
          block.style.display = "flex";
          block.style.opacity = 1;
          currentIndex = index;
        } else {
          block.style.opacity = 0;
          block.style.display = "none";
        }
      });
      frontBlockId = blockId;
    }
    function showContent(itemName, index) {
      changeSlide(itemName, index);
      updateActiveTab(index);
    }
    addTabsActive();
    showContent(frontBlockId, 0);
  }
	const reviewsSliderFunction = () =>{
		const reviewsSliderWrapper = document.querySelector('.reviewSlider');
		if(!reviewsSliderWrapper) return;
		const reviewsSlider = new Swiper(reviewsSliderWrapper, {
			mousewheel: true,
			centeredSlides: true,
			keyboard: true,
			spaceBetween: 20,
			loop: true,
			breakpoints: {
					320: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
				
					990: {
						slidesPerView: 2,
					}
				},
			pagination: {
				el: '.reviews-pagination', 
				clickable: true,
			},
			navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
      },
		});
	}