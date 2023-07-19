window.addEventListener("DOMContentLoaded", () => {

    const stickyHeader = document.querySelector('.top'),
          desktopMenu = document.querySelector('nav'),
          headerMobile = document.querySelector('.header__mobile'),
          hamburgerButton = document.querySelector('.hamburger'),
          mobileMenu = document.querySelector('.header__mm'),
          closeButton = document.querySelector('.close__close');
    
    //STICKY HEADER
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            stickyHeader.classList.add("sticky");
        } else {
            stickyHeader.classList.remove("sticky");
        }

    });

    //MOBILE HEADER
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
        mobileMenu.style.display = 'block';
        mobileMenu.style.transform = 'translateX(0%)';
    });
    closeButton.addEventListener('click', () => {
        mobileMenu.style.display = '';
        mobileMenu.style.transform = 'translateX(0%)';
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

    const forColorBlindText = document.querySelectorAll('*'),
          forColorBlindImg = document.querySelectorAll('img'),
          forColorBlindBtn = document.querySelector('.forcolorblind');
    
    forColorBlindBtn.addEventListener('click', () => {
        console.log('click');
        forColorBlindText.forEach( (el) => {
                el.style.color = 'black';
                el.style.filter = 'grayscale(100%)';
        });
        forColorBlindImg.forEach( (el) => {
            el.style.filter = 'grayscale(100%)';
    });

    });

    


});