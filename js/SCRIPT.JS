
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart = document.getElementById('close-cart');
        const cartOverlay = document.getElementById('cart-overlay');

        if (cartIcon && cartSidebar && closeCart && cartOverlay) {
            cartIcon.addEventListener('click', () => {
                cartSidebar.classList.add('active');
                cartOverlay.classList.add('active');
            });

            closeCart.addEventListener('click', () => {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
            });

            cartOverlay.addEventListener('click', () => {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
            });
        }

  
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        const closeMobileNav = document.getElementById('close-mobile-nav');
        const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

        if (mobileMenuToggle && mobileNav && closeMobileNav && mobileNavOverlay) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileNav.classList.add('active');
                mobileNavOverlay.classList.add('active');
            });

            closeMobileNav.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
            });

            mobileNavOverlay.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
            });

            // Mobile dropdown functionality
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (link.querySelector('.fa-angle-down')) {
                        e.preventDefault();
                        const dropdown = link.parentElement.querySelector('.mobile-dropdown');
                        dropdown.classList.toggle('active');
                        
                        // Toggle icon
                        const icon = link.querySelector('.fa');
                        if (icon.classList.contains('fa-angle-down')) {
                            icon.classList.remove('fa-angle-down');
                            icon.classList.add('fa-angle-up');
                        } else {
                            icon.classList.remove('fa-angle-up');
                            icon.classList.add('fa-angle-down');
                        }
                    }
                });
            });
        }
