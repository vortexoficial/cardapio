const carouselItems = [
    {
        kicker: "Destaque do chef",
        title: "Picanha maturada com manteiga de alho",
        description: "Corte alto, finalização na brasa e legumes tostados com ervas frescas.",
        price: "R$ 96,90",
        note: "Serve 2 pessoas",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
        fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    },
    {
        kicker: "Clássico da casa",
        title: "Feijoada premium com trio de acompanhamentos",
        description: "Feijão preto encorpado, carnes selecionadas e finalização com crocante de couve.",
        price: "R$ 89,90",
        note: "Mais pedido no almoço",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
        fallbackImage: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80"
    },
    {
        kicker: "Sobremesa assinatura",
        title: "Torta morna de doce de leite com flor de sal",
        description: "Camadas delicadas, creme leve e contraste na medida para fechar a experiência.",
        price: "R$ 24,90",
        note: "Finalização artesanal",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
        fallbackImage: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
    }
];

const products = [
    {
        id: 1,
        category: "todos",
        group: "pratos",
        name: "Feijoada Completa Premium",
        description: "Arroz soltinho, torresmo, couve na manteiga, laranja bahia e farofa da casa.",
        price: 89.9,
        badge: "Mais pedido",
        prep: "35 min",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 2,
        category: "todos",
        group: "pratos",
        name: "Moqueca de peixe com camarão",
        description: "Caldo aveludado, arroz de coco, pirão leve e coentro fresco para finalizar.",
        price: 82.0,
        badge: "Autoral",
        prep: "40 min",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 3,
        category: "todos",
        group: "pratos",
        name: "Arroz cremoso de cogumelos",
        description: "Mix de cogumelos salteados, queijo curado e óleo verde de salsa.",
        price: 58.5,
        badge: "Vegetariano",
        prep: "22 min",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 4,
        category: "todos",
        group: "grelhados",
        name: "Picanha na manteiga de alho",
        description: "Batatas rústicas, maionese defumada e molho de ervas tostadas.",
        price: 96.9,
        badge: "Brasa",
        prep: "30 min",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 5,
        category: "todos",
        group: "grelhados",
        name: "Frango caipira grelhado",
        description: "Crocante por fora, suculento por dentro, com legumes assados e molho cítrico.",
        price: 54.9,
        badge: "Leve",
        prep: "24 min",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 6,
        category: "todos",
        group: "grelhados",
        name: "Salmão na crosta de gergelim",
        description: "Purê de mandioquinha, legumes baby e toque cítrico de limão siciliano.",
        price: 78.9,
        badge: "Fresh",
        prep: "26 min",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 7,
        category: "todos",
        group: "massas",
        name: "Tagliatelle ao ragu lento",
        description: "Molho encorpado por oito horas, parmesão curado e finalização com manjericão.",
        price: 63.9,
        badge: "Conforto",
        prep: "28 min",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 8,
        category: "todos",
        group: "massas",
        name: "Nhoque tostado ao molho de tomates assados",
        description: "Textura macia, molho rústico e lascas generosas de grana padano.",
        price: 57.0,
        badge: "Feito na casa",
        prep: "20 min",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 9,
        category: "todos",
        group: "sobremesas",
        name: "Pudim brûlée de baunilha",
        description: "Pudim clássico com topo crocante e calda intensa de caramelo âmbar.",
        price: 22.0,
        badge: "Assinatura",
        prep: "Pronto",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 10,
        category: "todos",
        group: "sobremesas",
        name: "Cheesecake de frutas vermelhas",
        description: "Base amanteigada, creme leve e cobertura fresca com acidez equilibrada.",
        price: 24.9,
        badge: "Gelado",
        prep: "Pronto",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 11,
        category: "todos",
        group: "bebidas",
        name: "Limonada da casa com hortelã",
        description: "Refrescante, equilibrada e servida com gelo de limão para manter o sabor.",
        price: 14.9,
        badge: "Refrescante",
        prep: "Pronto",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 12,
        category: "todos",
        group: "bebidas",
        name: "Drink tropical sem álcool",
        description: "Abacaxi, maracujá, xarope cítrico e espuma leve para acompanhar pratos intensos.",
        price: 18.9,
        badge: "Mixologia",
        prep: "Pronto",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80"
    }
];

const categories = [
    { id: "todos", label: "Todos" },
    { id: "pratos", label: "Pratos principais" },
    { id: "grelhados", label: "Grelhados" },
    { id: "massas", label: "Massas" },
    { id: "sobremesas", label: "Sobremesas" },
    { id: "bebidas", label: "Bebidas" }
];

const track = document.querySelector("#carousel-track");
const dotsContainer = document.querySelector("#carousel-dots");
const titleElement = document.querySelector("#carousel-title");
const descriptionElement = document.querySelector("#carousel-description");
const kickerElement = document.querySelector("#carousel-kicker");
const priceElement = document.querySelector("#carousel-price");
const noteElement = document.querySelector("#carousel-note");
const prevButton = document.querySelector("#carousel-prev");
const nextButton = document.querySelector("#carousel-next");
const heroCarousel = document.querySelector(".hero-carousel");

const productsGrid = document.querySelector("#products-grid");
const categoryFilter = document.querySelector("#category-filter");
const navMenu = document.querySelector("#nav-menu");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

const overlay = document.querySelector("#overlay");
const cartSidebar = document.querySelector("#cart-sidebar");
const cartBody = document.querySelector("#cart-body");
const openCartButton = document.querySelector("#open-cart");
const closeCartButton = document.querySelector("#close-cart");
const mobileCartBar = document.querySelector("#mobile-cart-bar");
const cartCountDesktop = document.querySelector("#cart-count-desktop");
const cartCountMobile = document.querySelector("#cart-count-mobile");
const cartTotalMobile = document.querySelector("#cart-total-mobile");
const cartTotalSidebar = document.querySelector("#cart-total-sidebar");

let currentSlide = 0;
let currentCategory = "todos";
let cart = [];
let autoplayId;
let touchStartX = 0;
let touchStartY = 0;

const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

function renderCarousel() {
    track.innerHTML = carouselItems
        .map(
            (item, index) => `
                <article class="carousel-slide">
                    <img class="carousel-image" src="${item.image}" alt="${item.title}" data-fallback="${item.fallbackImage}" loading="${index === 0 ? "eager" : "lazy"}">
                </article>
            `
        )
        .join("");

    track.querySelectorAll(".carousel-image").forEach((imageElement) => {
        imageElement.addEventListener("error", () => {
            const fallbackImage = imageElement.dataset.fallback;

            if (fallbackImage && imageElement.src !== fallbackImage) {
                imageElement.src = fallbackImage;
            }
        });
    });

    dotsContainer.innerHTML = carouselItems
        .map(
            (_, index) => `
                <button class="carousel-dot ${index === 0 ? "is-active" : ""}" type="button" data-slide="${index}" aria-label="Ir para o slide ${index + 1}"></button>
            `
        )
        .join("");

    updateCarousel(0);
}

function updateCarousel(index) {
    currentSlide = (index + carouselItems.length) % carouselItems.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    const activeItem = carouselItems[currentSlide];
    kickerElement.textContent = activeItem.kicker;
    titleElement.textContent = activeItem.title;
    descriptionElement.textContent = activeItem.description;
    priceElement.textContent = activeItem.price;
    noteElement.textContent = activeItem.note;

    document.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
}

function startAutoplay() {
    stopAutoplay();
    autoplayId = window.setInterval(() => updateCarousel(currentSlide + 1), 5000);
}

function stopAutoplay() {
    if (autoplayId) {
        window.clearInterval(autoplayId);
    }
}

function renderCategoryFilters() {
    categoryFilter.innerHTML = categories
        .map(
            (category) => `
                <button
                    class="category-pill ${category.id === currentCategory ? "is-active" : ""}"
                    type="button"
                    data-category="${category.id}"
                    role="tab"
                    aria-selected="${category.id === currentCategory}">
                    ${category.label}
                </button>
            `
        )
        .join("");
}

function getVisibleProducts() {
    if (currentCategory === "todos") {
        return products;
    }

    return products.filter((product) => product.group === currentCategory);
}

function renderProducts() {
    const visibleProducts = getVisibleProducts();

    productsGrid.innerHTML = visibleProducts
        .map(
            (product) => `
                <article class="product-card">
                    <div class="product-image" style="background-image: url('${product.image}');"></div>
                    <div class="product-body">
                        <div class="product-head">
                            <div>
                                <span class="product-meta">${product.badge}</span>
                                <h3>${product.name}</h3>
                            </div>
                            <strong class="product-price">${priceFormatter.format(product.price)}</strong>
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-footer">
                            <span class="product-meta">${product.prep}</span>
                            <button class="add-btn" type="button" data-product-id="${product.id}">Adicionar</button>
                        </div>
                    </div>
                </article>
            `
        )
        .join("");
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartCountDesktop.textContent = String(cart.length);
    cartCountMobile.textContent = `${cart.length} ${cart.length === 1 ? "item" : "itens"}`;
    cartTotalMobile.textContent = priceFormatter.format(total);
    cartTotalSidebar.textContent = priceFormatter.format(total);
}

function renderCart() {
    if (!cart.length) {
        cartBody.innerHTML = '<p class="empty-cart">Seu carrinho está vazio. Adicione um item para começar.</p>';
        updateCartCount();
        return;
    }

    cartBody.innerHTML = `
        <div class="cart-list">
            ${cart
                .map(
                    (item) => `
                        <article class="cart-item">
                            <div>
                                <strong>${item.name}</strong>
                                <p class="cart-item-meta">${item.badge}</p>
                            </div>
                            <strong>${priceFormatter.format(item.price)}</strong>
                        </article>
                    `
                )
                .join("")}
        </div>
    `;

    updateCartCount();
}

function openCart() {
    cartSidebar.classList.add("is-open");
    overlay.classList.add("is-open");
    cartSidebar.setAttribute("aria-hidden", "false");
    renderCart();
}

function closeCart() {
    cartSidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
    cartSidebar.setAttribute("aria-hidden", "true");
}

function toggleMenu() {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function addToCart(productId) {
    const product = products.find((item) => item.id === Number(productId));

    if (!product) {
        return;
    }

    cart.push(product);
    renderCart();
    mobileCartBar.animate(
        [
            { transform: "translateY(0) scale(1)" },
            { transform: "translateY(-3px) scale(1.02)" },
            { transform: "translateY(0) scale(1)" }
        ],
        { duration: 260, easing: "ease-out" }
    );
}

function bindEvents() {
    prevButton.addEventListener("click", () => {
        updateCarousel(currentSlide - 1);
        startAutoplay();
    });

    nextButton.addEventListener("click", () => {
        updateCarousel(currentSlide + 1);
        startAutoplay();
    });

    dotsContainer.addEventListener("click", (event) => {
        const target = event.target.closest(".carousel-dot");

        if (!target) {
            return;
        }

        updateCarousel(Number(target.dataset.slide));
        startAutoplay();
    });

    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("mouseleave", startAutoplay);

    heroCarousel.addEventListener(
        "touchstart",
        (event) => {
            const [touch] = event.changedTouches;
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            stopAutoplay();
        },
        { passive: true }
    );

    heroCarousel.addEventListener(
        "touchend",
        (event) => {
            const [touch] = event.changedTouches;
            const diffX = touch.clientX - touchStartX;
            const diffY = touch.clientY - touchStartY;

            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                updateCarousel(diffX < 0 ? currentSlide + 1 : currentSlide - 1);
            }

            startAutoplay();
        },
        { passive: true }
    );

    categoryFilter.addEventListener("click", (event) => {
        const target = event.target.closest(".category-pill");

        if (!target) {
            return;
        }

        currentCategory = target.dataset.category;
        renderCategoryFilters();
        renderProducts();
    });

    productsGrid.addEventListener("click", (event) => {
        const target = event.target.closest(".add-btn");

        if (!target) {
            return;
        }

        addToCart(target.dataset.productId);
    });

    menuToggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((item) => item.classList.remove("is-active"));
            link.classList.add("is-active");
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    openCartButton.addEventListener("click", openCart);
    closeCartButton.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);
    mobileCartBar.addEventListener("click", openCart);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeCart();
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

renderCarousel();
renderCategoryFilters();
renderProducts();
renderCart();
bindEvents();
startAutoplay();