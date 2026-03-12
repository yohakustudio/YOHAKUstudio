// ============================================================
// YOHAKU studio — Cart (localStorage)
// ============================================================

const CART_KEY = 'yohaku_cart';

function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(i => i.id === product.id);
    if (existing) { existing.qty += 1; }
    else { cart.push({ ...product, qty: 1 }); }
    saveCart(cart);
    renderCart();
    updateCartCount();
    openCartDrawer();
}

function removeFromCart(id) {
    const cart = getCart().filter(i => i.id !== id);
    saveCart(cart);
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const count = getCart().reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
}

function renderCart() {
    const body = document.getElementById('cart-body');
    if (!body) return;
    const cart = getCart();
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'jp';

    if (cart.length === 0) {
        const emptyLabel = typeof t === 'function' ? t('cart_empty') : 'カートは空です';
        const emptySubLabel = typeof t === 'function' ? t('cart_empty_sub') : '';
        body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">○</div>
        <p>${emptyLabel}</p>
        <p class="body-sm">${emptySubLabel}</p>
      </div>`;
        updateCartTotal(0);
        return;
    }

    let total = 0;
    body.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item__img" src="${item.img}" alt="${item.name}">
      <div class="cart-item__info">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__artist">${item.artist}</p>
        <p class="cart-item__price">¥${item.price.toLocaleString()} × ${item.qty}</p>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart('${item.id}')" aria-label="Remove">✕</button>
    </div>`;
    }).join('');
    updateCartTotal(total);
}

function updateCartTotal(total) {
    const el = document.getElementById('cart-total-amount');
    if (el) el.textContent = `¥${total.toLocaleString()}`;
}

function openCartDrawer() {
    document.getElementById('cart-drawer')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('[data-product]');
            if (!card) return;
            addToCart({
                id: card.dataset.productId,
                name: card.dataset.productName,
                artist: card.dataset.productArtist,
                price: parseInt(card.dataset.productPrice, 10),
                img: card.dataset.productImg,
            });
        });
    });

    const checkoutBtn = document.querySelector('.cart-checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) {
                alert(typeof t === 'function' ? t('cart_empty') : 'カートは空です');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }
});
