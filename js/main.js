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

    // ── Pre-filter store by artist from URL ───────────────────
    const urlParams = new URLSearchParams(window.location.search);
    const artistFilter = urlParams.get('artist');
    
    if (artistFilter) {
        document.querySelectorAll('.product-card[data-product]').forEach(card => {
            if (card.dataset.productArtist !== artistFilter) {
                card.style.display = 'none';
            }
        });
        
        // Remove active class from category tabs to show a filtered view
        setTimeout(() => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        }, 50);
    }

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
    const modalSns = document.getElementById('modal-sns');

    document.querySelectorAll('.artist-card[data-modal]').forEach(card => {
        card.addEventListener('click', () => {
            if (modalImg) {
                modalImg.src = card.dataset.img || '';
                if (card.dataset.modalContain === 'true') {
                    modalImg.style.objectFit = 'contain';
                    modalImg.style.width = '85%';
                    modalImg.style.height = '85%';
                } else {
                    modalImg.style.objectFit = '';
                    modalImg.style.width = '';
                    modalImg.style.height = '';
                }
            }
            if (modalName) modalName.textContent = card.dataset.name || '';
            if (modalCountry) modalCountry.textContent = card.dataset.country || '';
            if (modalGenre) modalGenre.textContent = card.dataset.genre || '';

            if (modalBio) {
                if (card.dataset.bioKey) {
                    modalBio.innerHTML = t(card.dataset.bioKey);
                } else {
                    modalBio.innerHTML = card.dataset.bio || '';
                }
            }

            if (modalSns) {
                modalSns.innerHTML = '';
                if (card.dataset.snsInstagram) {
                    modalSns.innerHTML += `<a href="${card.dataset.snsInstagram}" target="_blank" rel="noopener" class="modal__sns-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>`;
                }
                if (card.dataset.snsX) {
                    modalSns.innerHTML += `<a href="${card.dataset.snsX}" target="_blank" rel="noopener" class="modal__sns-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>`;
                }
            }

            const modalStoreLink = document.getElementById('modal-store-link');
            if (modalStoreLink) {
                if (card.dataset.name) {
                    modalStoreLink.href = `store.html?artist=${encodeURIComponent(card.dataset.name)}`;
                } else {
                    modalStoreLink.href = 'store.html';
                }
            }

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

    // ── Lightbox (Product Image) ──────────────────────────────
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.product-card__img-wrap').forEach(wrap => {
        wrap.addEventListener('click', () => {
            const img = wrap.querySelector('img');
            if (img && lightboxImg && lightboxOverlay) {
                lightboxImg.src = img.src;
                lightboxOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    lightboxClose?.addEventListener('click', () => {
        lightboxOverlay?.classList.remove('open');
        document.body.style.overflow = '';
    });

    lightboxOverlay?.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.remove('open');
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
            lightboxOverlay?.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});
