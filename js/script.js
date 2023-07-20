window.addEventListener("DOMContentLoaded", () => {

    const stickyHeader = document.querySelector('.top'),
          desktopMenu = document.querySelector('nav'),
          headerMobile = document.querySelector('.header__mobile'),
          hamburgerButton = document.querySelector('.hamburger'),
          mobileMenu = document.querySelector('.header__mm'),
          closeButton = document.querySelector('.close__close');
    
    //STICKY HEADER
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            stickyHeader.classList.add('sticky');
        } else {
            stickyHeader.classList.remove('sticky');
        }

    });

    //MOBILE HEADER
    if (window.innerWidth <= 992) {
        desktopMenu.classList.add('hide');
        headerMobile.classList.remove('hide');
    }

    window.addEventListener('resize', function() {
        if(window.innerWidth <= 992) {
            desktopMenu.classList.add('hide');
            headerMobile.classList.remove('hide');
        } else {
            desktopMenu.classList.remove('hide');
            headerMobile.classList.add('hide');
        }
    });

    //HAMBURGER MENU
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(0%)';
        mobileMenu.style.display = 'block';
    });
    closeButton.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(150%)';
        mobileMenu.style.display = 'none';
    });

    //TABS
    const tabsBtn = document.querySelectorAll('.tabs__nav-btn'),
          tabsItem = document.querySelectorAll('.tabs__item');

    tabsBtn.forEach( (item) => {
        item.addEventListener('click', () => {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if(!currentBtn.classList.contains('active')) {
                tabsBtn.forEach( (item) => {
                    item.classList.remove('active');
                });
                tabsItem.forEach( (item) => {
                    item.classList.remove('active');
                });
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

        });
    });
    document.querySelector('.tabs__nav-btn').click();





    //WCAG 
    //colorblind
    const forColorBlind = document.querySelectorAll('*'),
          noGrayscaleBody = document.querySelector('body'),
          noGrayscaleHeader = document.querySelector('.top'),
          noGrayscaleMenu = document.querySelector('.header'),
          noGrayscaleContainer = document.querySelector('.container'),
          forColorBlindImg = document.querySelectorAll('img'),
          forColorBlindBtn = document.querySelector('.forcolorblind');
    

    function colorBlind () {
        forColorBlind.forEach( (el) => {
            const textColor = getComputedStyle(el),
                textColorBlack = textColor.color;
            if (textColorBlack === 'rgb(248, 248, 248)') {
                el.style.backgroundColor = '#0E0E0E';
                el.style.color = 'rgb(248, 248, 248)';
                
            } 
            else {
                el.style.filter = 'grayscale(1)';
                el.style.borderRadus = 'none';
            }

        });
        forColorBlindImg.forEach( (el) => {
            el.style.filter = 'grayscale(1)';
        });

        noGrayscaleBody.style.filter = '';
        noGrayscaleHeader.style.filter = '';
        noGrayscaleMenu.style.filter = '';
        noGrayscaleContainer.style.filter = '';
    }

    

    forColorBlindBtn.addEventListener('click', () => {
        colorBlind();
    });
    
    function resetColorBlind () {
        forColorBlindBtn.addEventListener('click', () => {
            forColorBlind.forEach((el) => {
                el.style.filter = '';
                el.style.borderRadus = '';
            });
        });
        
    }

    forColorBlindBtn.addEventListener('click', () => {
        resetColorBlind ();
        
    });

    
    
    //fontsize
    const textElem = document.querySelectorAll('*'),
          fontSizeMore = document.querySelector('.fontsizemore'),
          fontSizeLess = document.querySelector('.fontsizeless');

    function fontSizeBig () {
        textElem.forEach((el) => {
            const computedStyle = getComputedStyle(el),
                currentFontSize = parseInt(computedStyle.fontSize);
                el.style.fontSize = `${currentFontSize + 1}px`;
        });
    }
    function fontSizeSmall () {
        textElem.forEach((el) => {
            const computedStyle = getComputedStyle(el),
                currentFontSize = parseInt(computedStyle.fontSize);
                el.style.fontSize = `${currentFontSize - 1}px`;
        });
    }

    fontSizeMore.addEventListener('click', () => {
        fontSizeBig();
    });

    fontSizeLess.addEventListener('click', () => {
        fontSizeSmall();
    });



    //reset fonts
    const resetFont = document.querySelectorAll("*"),
          resetFontBtn = document.querySelector('.fontreset'),
          originalFont = [];

    resetFont.forEach((el) => {
        originalFont.push(getComputedStyle(el).fontFamily);
    });
    

    function newFont() {
        resetFont.forEach((el, index) => {
            const computedStyle = getComputedStyle(el),
                  currentFont = computedStyle.fontFamily;
            if (currentFont === '"Montserrat", sans-serif' || currentFont === 'Garamond') {
                el.style.fontFamily = 'Arial';
            } else {
                el.style.fontFamily = originalFont[index];
            }
            
        });
    }

    resetFontBtn.addEventListener('click', () => {
            newFont();
    });
    



   //FAQ 
   const accordions = document.querySelectorAll('.accordion__item');

   accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
        const single = e.currentTarget,
          control = single.querySelector('.accordion__control'),
          content = single.querySelector('.accordion__content'),
          icon = single.querySelector('.accordion__icon');

    content.classList.toggle('open');
    icon.classList.toggle('open');


    if(single.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-expanded', false);
    } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-expanded', true);
    }
    });

   });
    
});


