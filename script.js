const whatsappNumber = "5521974307694";
const products = [
  { nome: "Calcinha Lesy Sexy", preco: 21.9, categoria: "Calcinha", cores: [
    { nome: "Preto", imagem: "assets/IMG_5168.webp", cor: "#151114" },
    { nome: "Vermelho", imagem: "assets/IMG_5170.webp", cor: "#9f1f32" },
    { nome: "Branco", imagem: "assets/IMG_5183.webp", cor: "#fffaf7" },
    { nome: "Rosa", imagem: "assets/IMG_5164.webp", cor: "#e7a6b7" },
  ]},
  { nome: "Calcinha Argola Rendada", preco: 20.9, categoria: "Calcinha", cores: [
    { nome: "Branco", imagem: "assets/argola/IMG_3206.webp", cor: "#fffaf7" },
    { nome: "Rosa", imagem: "assets/argola/IMG_3200.webp", cor: "#e7a6b7" },
    { nome: "Nude", imagem: "assets/argola/IMG_3209.webp", cor: "#E3C6A8" },
  ]},
  { nome: "Calcinha Regulável", preco: 16.9, categoria: "Calcinha", cores: [
    { nome: "Preto", imagem: "assets/IMG_2849.webp", cor: "#151114" },
  ]},
  { nome: "Calcinha Palloma", preco: 24.9, categoria: "Calcinha", cores: [
    { nome: "Preto", imagem: "assets/IMG_4698.webp", cor: "#151114" },
    { nome: "Rosa", imagem: "assets/IMG_0000.webp", cor: "#e2587d" },
    { nome: "Verde", imagem: "assets/IMG_7004.webp", cor: "#235834" },
  ]},
  { nome: "Conjunto Ravenna", preco: 44.9, categoria: "Conjunto", cores: [
    { nome: "Vermelho", imagem: "assets/EOSR2361.webp", cor: "#d10d0d" },
    { nome: "Preto", imagem: "assets/IMG_1111.webp", cor: "#000000" },
  ]},
  { nome: "Calcinha Comfy", preco: 21.9, categoria: "Calcinha", cores: [
    { nome: "Preto", imagem: "assets/IMG_6969.webp", cor: "#000000" },
    { nome: "Azul", imagem: "assets/IMG_6971.webp", cor: "#2e3f8f" },
  ]},
  { nome: "Conjunto Aura", preco: 54.9, categoria: "Conjunto", cores: [
    { nome: "Preto", imagem: "assets/IMG_4252.webp", cor: "#000000" },
    { nome: "Preto e branco", imagem: "assets/IMG_4248.webp", cor: "#ffffff" },
  ]},
  { nome: "Conjunto Afrontosa", preco: 69.9, categoria: "Conjunto", cores: [
    { nome: "Preto", imagem: "assets/IMG_2542.webp", cor: "#151114" },
  ]},
  { nome: "Calcinha Impulsiva", preco: 17.9, categoria: "Calcinha", cores: [
    { nome: "Branca", imagem: "assets/IMG_2222.webp", cor: "#ffffff" },
  ]},
  { nome: "Calcinha Thais", preco: 19.9, categoria: "Calcinha", cores: [
    { nome: "Azul Marinho", imagem: "assets/IMG_3331.webp", cor: "#1b285d" },
    { nome: "Rosa", imagem: "assets/IMG_3332.webp", cor: "#e836a6" },
    { nome: "Vermelho", imagem: "assets/IMG_3333.webp", cor: "#d10d0d" },
    { nome: "Preto", imagem: "assets/IMG_3334.webp", cor: "#000000" },
  ]},
];

const productImages = {
  "assets/argola/IMG_3200.webp": { width: 1200, height: 1600, srcset: "assets/argola/IMG_3200-480.webp 480w, assets/argola/IMG_3200-800.webp 800w, assets/argola/IMG_3200.webp 1200w" },
  "assets/argola/IMG_3206.webp": { width: 1200, height: 1600, srcset: "assets/argola/IMG_3206-480.webp 480w, assets/argola/IMG_3206-800.webp 800w, assets/argola/IMG_3206.webp 1200w" },
  "assets/argola/IMG_3209.webp": { width: 1200, height: 1600, srcset: "assets/argola/IMG_3209-480.webp 480w, assets/argola/IMG_3209-800.webp 800w, assets/argola/IMG_3209.webp 1200w" },
  "assets/EOSR2361.webp": { width: 1200, height: 1594, srcset: "assets/EOSR2361-480.webp 480w, assets/EOSR2361-800.webp 800w, assets/EOSR2361.webp 1200w" },
  "assets/IMG_0000.webp": { width: 1086, height: 1448, srcset: "assets/IMG_0000-480.webp 480w, assets/IMG_0000-800.webp 800w, assets/IMG_0000.webp 1086w" },
  "assets/IMG_1111.webp": { width: 1086, height: 1448, srcset: "assets/IMG_1111-480.webp 480w, assets/IMG_1111-800.webp 800w, assets/IMG_1111.webp 1086w" },
  "assets/IMG_2222.webp": { width: 1200, height: 900, srcset: "assets/IMG_2222-480.webp 480w, assets/IMG_2222-800.webp 800w, assets/IMG_2222.webp 1200w" },
  "assets/IMG_2542.webp": { width: 1200, height: 1600, srcset: "assets/IMG_2542-480.webp 480w, assets/IMG_2542-800.webp 800w, assets/IMG_2542.webp 1200w" },
  "assets/IMG_2849.webp": { width: 1200, height: 1600, srcset: "assets/IMG_2849-480.webp 480w, assets/IMG_2849-800.webp 800w, assets/IMG_2849.webp 1200w" },
  "assets/IMG_3331.webp": { width: 439, height: 580, srcset: "assets/IMG_3331-480.webp 480w, assets/IMG_3331.webp 439w" },
  "assets/IMG_3332.webp": { width: 433, height: 578, srcset: "assets/IMG_3332-480.webp 480w, assets/IMG_3332.webp 433w" },
  "assets/IMG_3333.webp": { width: 428, height: 574, srcset: "assets/IMG_3333-480.webp 480w, assets/IMG_3333.webp 428w" },
  "assets/IMG_3334.webp": { width: 514, height: 645, srcset: "assets/IMG_3334-480.webp 480w, assets/IMG_3334-800.webp 800w, assets/IMG_3334.webp 514w" },
  "assets/IMG_4248.webp": { width: 1200, height: 1600, srcset: "assets/IMG_4248-480.webp 480w, assets/IMG_4248-800.webp 800w, assets/IMG_4248.webp 1200w" },
  "assets/IMG_4252.webp": { width: 1200, height: 1600, srcset: "assets/IMG_4252-480.webp 480w, assets/IMG_4252-800.webp 800w, assets/IMG_4252.webp 1200w" },
  "assets/IMG_4698.webp": { width: 1200, height: 1600, srcset: "assets/IMG_4698-480.webp 480w, assets/IMG_4698-800.webp 800w, assets/IMG_4698.webp 1200w" },
  "assets/IMG_5164.webp": { width: 1200, height: 1600, srcset: "assets/IMG_5164-480.webp 480w, assets/IMG_5164-800.webp 800w, assets/IMG_5164.webp 1200w" },
  "assets/IMG_5168.webp": { width: 1200, height: 1600, srcset: "assets/IMG_5168-480.webp 480w, assets/IMG_5168-800.webp 800w, assets/IMG_5168.webp 1200w" },
  "assets/IMG_5170.webp": { width: 1200, height: 1600, srcset: "assets/IMG_5170-480.webp 480w, assets/IMG_5170-800.webp 800w, assets/IMG_5170.webp 1200w" },
  "assets/IMG_5183.webp": { width: 1200, height: 1600, srcset: "assets/IMG_5183-480.webp 480w, assets/IMG_5183-800.webp 800w, assets/IMG_5183.webp 1200w" },
  "assets/IMG_6969.webp": { width: 1200, height: 1600, srcset: "assets/IMG_6969-480.webp 480w, assets/IMG_6969-800.webp 800w, assets/IMG_6969.webp 1200w" },
  "assets/IMG_6971.webp": { width: 1200, height: 1600, srcset: "assets/IMG_6971-480.webp 480w, assets/IMG_6971-800.webp 800w, assets/IMG_6971.webp 1200w" },
  "assets/IMG_7004.webp": { width: 1200, height: 1600, srcset: "assets/IMG_7004-480.webp 480w, assets/IMG_7004-800.webp 800w, assets/IMG_7004.webp 1200w" },
};

const featuredIndexes = [6, 4, 0, 7];
const productsContainer = document.getElementById("products");
const featuredContainer = document.getElementById("featuredProducts");
const productImageSizes = "(max-width: 520px) 90vw, (max-width: 800px) 45vw, 29vw";
const loadedImages = new Set();
const pendingImages = new Map();
const bag = [];

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function categoryLabel(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function openWhatsapp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}

function imageInfo(src) {
  return productImages[src] || { width: 800, height: 1000, srcset: `${src} 800w` };
}

function imageKey(color) {
  return `${color.imagem}|${imageInfo(color.imagem).srcset}`;
}

function previewSrc(src) {
  return src.replace(/(\.webp)$/i, "-480.webp");
}

function productImageMarkup(product, color, sizes = productImageSizes) {
  const info = imageInfo(color.imagem);

  return `
    <img
      src="${previewSrc(color.imagem)}"
      srcset="${info.srcset}"
      sizes="${sizes}"
      alt="${product.nome} - ${color.nome}"
      loading="lazy"
      decoding="async"
      width="${info.width}"
      height="${info.height}"
      data-current-image="${color.imagem}">
  `;
}

function productCardMarkup(product, productIndex, options = {}) {
  const selectedColor = product.cores[0];
  const hasMultipleColors = product.cores.length > 1;
  const badge = options.badge ? `<span class="product-badge">${options.badge}</span>` : "";

  return `
    <article class="product-card" data-category="${product.categoria}" data-product-index="${productIndex}" data-selected-color="0">
      <div class="product-img">
        ${badge}
        ${productImageMarkup(product, selectedColor)}
        <div class="product-actions">
          <button class="btn btn-light view-product" type="button">Visualizar</button>
          <button class="btn btn-solid add-bag" type="button">Comprar</button>
        </div>
      </div>
      <div class="product-info">
        <span>${categoryLabel(product.categoria)}</span>
        <h3>${product.nome}</h3>
        <div class="price-block">
          <strong>${money(product.preco)}</strong>
          <small>Encomenda via WhatsApp</small>
        </div>
        <p class="selected-color">Cor selecionada: <b>${selectedColor.nome}</b></p>
        ${hasMultipleColors ? `<div class="color-options" aria-label="Escolha a cor de ${product.nome}">
          ${product.cores.map((color, colorIndex) => `
            <button class="color-swatch${colorIndex === 0 ? " active" : ""}" type="button" style="--swatch-color:${color.cor}" data-color-index="${colorIndex}" aria-label="${color.nome}" title="${color.nome}"></button>
          `).join("")}
        </div>` : ""}
        <p class="order-note">Faça sua encomenda diretamente pelo WhatsApp</p>
        <button class="order-whatsapp" type="button">Encomendar pelo WhatsApp</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  productsContainer.innerHTML = products.map((product, productIndex) => {
    const badge = productIndex === products.length - 1 ? "Novidade" : "";
    return productCardMarkup(product, productIndex, { badge });
  }).join("");
}

function renderFeatured() {
  if (!featuredContainer) return;
  featuredContainer.innerHTML = featuredIndexes.map((productIndex) => {
    return productCardMarkup(products[productIndex], productIndex, { badge: "Destaque" });
  }).join("");
}

function loadProductImage(color) {
  const key = imageKey(color);
  if (loadedImages.has(key)) return Promise.resolve();
  if (pendingImages.has(key)) return pendingImages.get(key);

  const info = imageInfo(color.imagem);
  const nextImage = new Image();

  const loadPromise = new Promise((resolve, reject) => {
    nextImage.onload = () => {
      loadedImages.add(key);
      pendingImages.delete(key);
      resolve();
    };
    nextImage.onerror = () => {
      pendingImages.delete(key);
      reject(new Error(`Não foi possível carregar ${color.imagem}`));
    };
  });

  nextImage.decoding = "async";
  nextImage.sizes = productImageSizes;
  nextImage.srcset = info.srcset;
  nextImage.src = color.imagem;

  pendingImages.set(key, loadPromise);
  return loadPromise;
}

function updateProductImage(image, product, color) {
  const info = imageInfo(color.imagem);

  image.srcset = info.srcset;
  image.sizes = productImageSizes;
  image.src = previewSrc(color.imagem);
  image.alt = `${product.nome} - ${color.nome}`;
  image.width = info.width;
  image.height = info.height;
  image.dataset.currentImage = color.imagem;
}

function selectColor(card, colorIndex) {
  const product = products[Number(card.dataset.productIndex)];
  const color = product.cores[colorIndex];
  const image = card.querySelector(".product-img img");
  const selectedColor = card.querySelector(".selected-color b");

  if (!product || !color || !image || !selectedColor) return;
  if (image.dataset.currentImage === color.imagem) return;

  card.dataset.selectedColor = String(colorIndex);
  selectedColor.textContent = color.nome;
  card.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("active", Number(swatch.dataset.colorIndex) === colorIndex);
  });

  image.classList.add("is-loading");
  loadProductImage(color)
    .then(() => {
      if (card.dataset.selectedColor === String(colorIndex)) {
        updateProductImage(image, product, color);
      }
    })
    .catch(() => {
      selectedColor.textContent = product.cores[Number(card.dataset.selectedColor)].nome;
    })
    .finally(() => {
      image.classList.remove("is-loading");
    });
}

function applyFilter(category) {
  const cards = productsContainer.querySelectorAll(".product-card");
  let visible = 0;
  cards.forEach((card) => {
    const hide = category !== "all" && card.dataset.category !== category;
    card.hidden = hide;
    if (!hide) visible += 1;
  });
  const emptyState = document.getElementById("emptyState");
  if (emptyState) emptyState.hidden = visible !== 0;
}

function setFilter(category) {
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
  applyFilter(category);
}

function productFromCard(card) {
  const product = products[Number(card.dataset.productIndex)];
  const color = product.cores[Number(card.dataset.selectedColor)];
  return { product, color };
}

function orderMessage(product, color) {
  return `Olá! Tenho interesse em encomendar:\n\nProduto: ${product.nome}\nCor: ${color.nome}\nPreço: ${money(product.preco)}\n\nGostaria de saber mais informações sobre disponibilidade, tamanhos e entrega.`;
}

function addToBag(productIndex, colorIndex) {
  const product = products[productIndex];
  const color = product.cores[colorIndex];
  const existing = bag.find((item) => item.productIndex === productIndex && item.colorIndex === colorIndex);
  if (existing) {
    existing.qty += 1;
  } else {
    bag.push({ productIndex, colorIndex, qty: 1 });
  }
  renderBag();
  openBag();
}

function removeFromBag(index) {
  bag.splice(index, 1);
  renderBag();
}

function renderBag() {
  const bagItems = document.getElementById("bagItems");
  const bagCount = document.getElementById("bagCount");
  const bagFoot = document.getElementById("bagFoot");
  const bagTotal = document.getElementById("bagTotal");
  const totalQty = bag.reduce((sum, item) => sum + item.qty, 0);

  bagCount.textContent = String(totalQty);
  bagCount.hidden = totalQty === 0;
  bagFoot.hidden = bag.length === 0;

  if (!bag.length) {
    bagItems.innerHTML = `<p class="bag-empty">Sua sacola está vazia. Escolha uma peça da coleção para encomendar pelo WhatsApp.</p>`;
    return;
  }

  const total = bag.reduce((sum, item) => sum + products[item.productIndex].preco * item.qty, 0);
  bagTotal.textContent = money(total);
  bagItems.innerHTML = bag.map((item, index) => {
    const product = products[item.productIndex];
    const color = product.cores[item.colorIndex];
    return `
      <article class="bag-item">
        <img src="${color.imagem}" alt="${product.nome} - ${color.nome}">
        <div>
          <h3>${product.nome}</h3>
          <p>${color.nome} · ${item.qty}x</p>
          <strong>${money(product.preco * item.qty)}</strong>
        </div>
        <button class="bag-remove" type="button" data-remove-bag="${index}">Remover</button>
      </article>
    `;
  }).join("");
}

function openBag() {
  document.getElementById("bagDrawer").hidden = false;
  syncPageScrollLock();
}

function closeBag() {
  document.getElementById("bagDrawer").hidden = true;
  syncPageScrollLock();
}

function syncPageScrollLock() {
  const bagIsOpen = !document.getElementById("bagDrawer").hidden;
  const modalIsOpen = !document.getElementById("productModal").hidden;
  document.body.style.overflow = bagIsOpen || modalIsOpen ? "hidden" : "";
}

function openModal(productIndex, colorIndex) {
  const product = products[productIndex];
  const color = product.cores[colorIndex];
  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");
  const hasMultipleColors = product.cores.length > 1;

  content.innerHTML = `
    <div class="modal-media">
      ${productImageMarkup(product, color, "(max-width: 900px) 100vw, 50vw")}
    </div>
    <div class="modal-copy">
      <p class="eyebrow">${categoryLabel(product.categoria)}</p>
      <h2 id="modalTitle">${product.nome}</h2>
      <div class="price-block">
        <strong>${money(product.preco)}</strong>
        <small>Encomenda via WhatsApp · consulta de tamanho e disponibilidade</small>
      </div>
      <p class="selected-color">Cor selecionada: <b>${color.nome}</b></p>
      ${hasMultipleColors ? `<div class="color-options" aria-label="Escolha a cor de ${product.nome}">
        ${product.cores.map((item, index) => `
          <button class="color-swatch${index === colorIndex ? " active" : ""}" type="button" style="--swatch-color:${item.cor}" data-modal-color="${index}" aria-label="${item.nome}" title="${item.nome}"></button>
        `).join("")}
      </div>` : ""}
      <p class="order-note">Peça selecionada da coleção La Belle. Finalize sua encomenda pelo WhatsApp para conferir tamanhos, cores e entrega.</p>
      <div class="modal-actions">
        <button class="btn btn-solid" type="button" id="modalOrder">Encomendar pelo WhatsApp</button>
        <button class="btn btn-line" type="button" id="modalBag">Adicionar à sacola</button>
      </div>
    </div>
  `;

  content.dataset.productIndex = String(productIndex);
  content.dataset.selectedColor = String(colorIndex);
  modal.hidden = false;
  syncPageScrollLock();
}

function closeModal() {
  document.getElementById("productModal").hidden = true;
  syncPageScrollLock();
}

function bindCardEvents(root) {
  root.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const swatch = event.target.closest(".color-swatch");
    const orderButton = event.target.closest(".order-whatsapp");
    const viewButton = event.target.closest(".view-product");
    const addButton = event.target.closest(".add-bag");

    if (swatch && !swatch.dataset.modalColor) {
      const card = swatch.closest(".product-card");
      if (card) selectColor(card, Number(swatch.dataset.colorIndex));
    }

    if (orderButton) {
      const card = orderButton.closest(".product-card");
      if (!card) return;
      const { product, color } = productFromCard(card);
      openWhatsapp(orderMessage(product, color));
    }

    if (viewButton) {
      const card = viewButton.closest(".product-card");
      if (!card) return;
      openModal(Number(card.dataset.productIndex), Number(card.dataset.selectedColor));
    }

    if (addButton) {
      const card = addButton.closest(".product-card");
      if (!card) return;
      addToBag(Number(card.dataset.productIndex), Number(card.dataset.selectedColor));
    }
  });
}

const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto) {
  const markHeroReady = () => {
    heroPhoto.classList.add("is-loaded");
    const media = heroPhoto.closest(".hero-media");
    if (media) media.classList.add("is-ready");
  };
  if (heroPhoto.complete) markHeroReady();
  else heroPhoto.addEventListener("load", markHeroReady, { once: true });
}

renderProducts();
renderFeatured();
renderBag();
bindCardEvents(productsContainer);
if (featuredContainer) bindCardEvents(featuredContainer);

document.querySelectorAll(".filter").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    setFilter(filterButton.dataset.filter);
  });
});

document.querySelectorAll("[data-jump-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.jumpFilter);
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
  openWhatsapp("Olá! Vim pelo catálogo da La Belle e gostaria de conhecer as opções disponíveis.");
});

document.getElementById("footerWhatsapp").addEventListener("click", () => {
  openWhatsapp("Olá! Vim pelo catálogo da La Belle e gostaria de conhecer as opções disponíveis.");
});

document.getElementById("accountBtn").addEventListener("click", () => {
  openWhatsapp("Olá! Vim pelo catálogo da La Belle e gostaria de conhecer as opções disponíveis.");
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

const mobileNav = document.getElementById("mobileNav");
const menuToggle = document.querySelector(".menu-toggle");
function closeMobileNav() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.addEventListener("click", (event) => {
  if (event.target === mobileNav || event.target.closest("a") || event.target.closest(".mobile-nav-close")) {
    closeMobileNav();
  }
});

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
document.getElementById("searchOpen").addEventListener("click", () => {
  searchOverlay.hidden = false;
  searchInput.focus();
});
document.getElementById("searchClose").addEventListener("click", () => {
  searchOverlay.hidden = true;
});
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  searchOverlay.hidden = true;
  setFilter("all");
  productsContainer.querySelectorAll(".product-card").forEach((card) => {
    const product = products[Number(card.dataset.productIndex)];
    const match = !query || product.nome.toLowerCase().includes(query) || product.categoria.toLowerCase().includes(query);
    card.hidden = !match;
  });
  const visible = [...productsContainer.querySelectorAll(".product-card")].filter((card) => !card.hidden).length;
  document.getElementById("emptyState").hidden = visible !== 0;
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("bagOpen").addEventListener("click", openBag);
document.getElementById("bagDrawer").addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (event.target.closest("[data-close-bag]")) closeBag();
  const remove = event.target.closest("[data-remove-bag]");
  if (remove) removeFromBag(Number(remove.dataset.removeBag));
});
document.getElementById("bagCheckout").addEventListener("click", () => {
  if (!bag.length) return;
  const lines = bag.map((item) => {
    const product = products[item.productIndex];
    const color = product.cores[item.colorIndex];
    return `- ${product.nome} (${color.nome}) · ${item.qty}x · ${money(product.preco * item.qty)}`;
  });
  const total = bag.reduce((sum, item) => sum + products[item.productIndex].preco * item.qty, 0);
  openWhatsapp(`Olá! Gostaria de encomendar as seguintes peças da La Belle:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(total)}\n\nGostaria de saber mais informações sobre disponibilidade, tamanhos e entrega.`);
});

const productModal = document.getElementById("productModal");
productModal.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }
  const content = document.getElementById("modalContent");
  const colorBtn = event.target.closest("[data-modal-color]");
  if (colorBtn) {
    const productIndex = Number(content.dataset.productIndex);
    openModal(productIndex, Number(colorBtn.dataset.modalColor));
  }
  if (event.target.id === "modalOrder") {
    const product = products[Number(content.dataset.productIndex)];
    const color = product.cores[Number(content.dataset.selectedColor)];
    openWhatsapp(orderMessage(product, color));
  }
  if (event.target.id === "modalBag") {
    addToBag(Number(content.dataset.productIndex), Number(content.dataset.selectedColor));
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeBag();
  closeModal();
  searchOverlay.hidden = true;
  closeMobileNav();
});
