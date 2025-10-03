   // Cart functionality
        document.addEventListener('DOMContentLoaded', function() {
            const cartIcon = document.getElementById('cart-icon');
            const cartSidebar = document.getElementById('cart-sidebar');
            const closeCart = document.getElementById('close-cart');
            const cartOverlay = document.getElementById('cart-overlay');
            
            // Toggle cart sidebar
            cartIcon.addEventListener('click', function() {
                cartSidebar.classList.add('active');
                cartOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close cart sidebar
            closeCart.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            // Close cart when clicking on overlay
            cartOverlay.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });