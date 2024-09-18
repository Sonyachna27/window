document.addEventListener("DOMContentLoaded", () =>{
	toggleMenu();
	heroSliderInit();
	accordionFunction();
	openTabs();
	reviewsSliderFunction();
	stickyName();
	animateSectionPosition();
	showPopUpBook();
	fixedHeader();
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

const openTabs = () => {
  const tabGroups = document.querySelectorAll(".target__wrap"); // Знаходимо всі групи табів

  tabGroups.forEach((group) => {
    const tabsLinks = group.querySelectorAll(".target__list-item");
    const allContentBlocks = group.querySelectorAll(".target__content");
    let frontBlockId = tabsLinks[0].dataset.name; // Перша вкладка активна за замовчуванням

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
      allContentBlocks.forEach((block) => {
        if (block.getAttribute("id") === blockId) {
          block.style.display = "flex";
          block.style.opacity = 1;
        } else {
          block.style.opacity = 0;
          block.style.display = "none";
        }
      });
      frontBlockId = blockId;
    }

    function showContent(itemName, index) {
      changeSlide(itemName);
      updateActiveTab(index);
    }

    addTabsActive();
    showContent(frontBlockId, 0); 
  });
};


	const reviewsSliderFunction = () =>{
		const reviewsSliderWrapper = document.querySelector('.reviewSlider');
		if(!reviewsSliderWrapper) return;
		const reviewsSlider = new Swiper(reviewsSliderWrapper, {
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
	const stickyName = () => {
		const stickyNameWrap = document.querySelectorAll('.sticky-name');
		const footer = document.querySelector('footer');
		stickyNameWrap.forEach((sticky) => {
				function handleScroll() {
						const windowInnerWidth = window.innerWidth;
						const boundingRectHeight = sticky.getBoundingClientRect().height;
						const scrollThreshold = 200; 
						if (windowInnerWidth <= 1023) {
								const body = document.body;
								if (window.scrollY >= scrollThreshold) {
										body.classList.add('sticky-body');
										footer.style.marginBottom = `${boundingRectHeight}px`;
								} else {
										body.classList.remove('sticky-body');
										footer.style.marginBottom = `0px`;
								}
						} else {
								document.body.classList.remove('sticky-body');
						}
				}
				window.addEventListener('scroll', handleScroll);
		});
	};
	const animateSectionPosition = () =>{
		const sections = document.querySelectorAll(".sectionScroll");
		if(!sections) return;
		const options = {
			root: document,
			rootMargin: "0px",
			threshold: 0.1,
		};
	
		const callback = function (entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !entry.target.classList.contains("animate")) {
					entry.target.classList.add("animate");
				} else if (
					!entry.isIntersecting &&
					entry.target.classList.contains("animate")
				) {
					entry.target.classList.remove("animate");
				}
			});
		};
	
		const observer = new IntersectionObserver(callback, options);
	
		sections.forEach((section) => observer.observe(section));
	
	}
	const showPopUpBook = () =>{
		const popUpBook = document.querySelector(".popup-book");
		const popupBg = document.querySelectorAll(".popup-bg");
		const htmlElement = document.querySelector("html");
		if (!popUpBook) return 
			const closePopUpBook = document.querySelector(".popup-book-close");
			const popupButtons = document.querySelectorAll(
				'[data-button="popup-book"]'
			);
	
			popupButtons.forEach((popBtn) => {
				popBtn.addEventListener("click", () => {
					htmlElement.classList.add('open-popup')
					popUpBook.classList.add("open");
				});
			});
			closePopUpBook.addEventListener("click", () => {
				htmlElement.classList.remove('open-popup')
				popUpBook.classList.remove("open");
			});
			popupBg.forEach((bg) =>
				bg.addEventListener("click", () => {
					popUpBook.classList.remove("open");
				})
			);
		}
	const fixedHeader = () =>{
		let windowInnerWidth = window.innerWidth;
		const headerNav = document.querySelector(".header__bottom");
		let lastScrollTop = 0;

		window.addEventListener("scroll", function () {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
			if (windowInnerWidth >= 1024) {
				if (scrollTop > lastScrollTop) {
					if (scrollTop > 100) {
						headerNav.classList.add("fixed-header-nav");
						headerNav.style.animationName = "smoothScroll";
					}
				} else if (scrollTop <= 0) {
					headerNav.classList.remove("fixed-header-nav");
					headerNav.style.animationName = "removeSmoothScroll";
				}
				lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
			}
		});
	}