// ============================================================
// YOHAKU studio — Main JS (Navigation, Scroll, Animations)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Header scroll effect ──────────────────────────────────
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // ── Active nav link ───────────────────────────────────────
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ── Hamburger menu ────────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const open = hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        mobileNav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Scroll fade-in ────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        observer.observe(el);
    });

    // ── Smooth page-load entry ────────────────────────────────
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    });

    // ── Cart Drawer ───────────────────────────────────────────
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');

    function openCart() {
        cartDrawer?.classList.add('open');
        cartOverlay?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartDrawer?.classList.remove('open');
        cartOverlay?.classList.remove('open');
        document.body.style.overflow = '';
    }

    cartBtn?.addEventListener('click', openCart);
    cartClose?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    // ── Filter tabs ───────────────────────────────────────────
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.filter-tabs');
            parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            document.querySelectorAll('[data-category]').forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                card.style.display = show ? '' : 'none';
            });
        });
    });

    // ── Modal (artists) ───────────────────────────────────────
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalCountry = document.getElementById('modal-country');
    const modalGenre = document.getElementById('modal-genre');
    const modalBio = document.getElementById('modal-bio');

    document.querySelectorAll('.artist-card[data-modal]').forEach(card => {
        card.addEventListener('click', () => {
            if (modalImg) modalImg.src = card.dataset.img || '';
            if (modalName) modalName.textContent = card.dataset.name || '';
            if (modalCountry) modalCountry.textContent = card.dataset.country || '';
            if (modalGenre) modalGenre.textContent = card.dataset.genre || '';
            if (modalBio) modalBio.innerHTML = card.dataset.bio || '';
            modalOverlay?.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose?.addEventListener('click', () => {
        modalOverlay?.classList.remove('open');
        document.body.style.overflow = '';
    });
    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // ── Contact form ──────────────────────────────────────────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-success');
            if (msg) {
                msg.style.display = 'block';
                contactForm.style.opacity = '0.3';
                contactForm.style.pointerEvents = 'none';
            }
        });
    }

    // Escape key closes overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            modalOverlay?.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});
