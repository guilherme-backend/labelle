// Substitua este número pelo WhatsApp real da La Belle, com DDI e DDD.
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
  "assets/IMG_3331.webp": { width: 439, height: 580, srcset: "assets/IMG_3331.webp 439w" },
  "assets/IMG_3332.webp": { width: 433, height: 578, srcset: "assets/IMG_3332.webp 433w" },
  "assets/IMG_3333.webp": { width: 428, height: 574, srcset: "assets/IMG_3333.webp 428w" },
  "assets/IMG_3334.webp": { width: 514, height: 645, srcset: "assets/IMG_3334-480.webp 480w, assets/IMG_3334.webp 514w" },
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

const productsContainer = document.getElementById("products");
const productImageSizes = "(max-width: 520px) 90vw, (max-width: 800px) 45vw, 29vw";
const loadedImages = new Set();
const pendingImages = new Map();

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

function productImageMarkup(product, color) {
  const info = imageInfo(color.imagem);

  return `
    <img
      src="${color.imagem}"
      srcset="${info.srcset}"
      sizes="${productImageSizes}"
      alt="${product.nome} - ${color.nome}"
      loading="lazy"
      fetchpriority="auto"
      decoding="async"
      width="${info.width}"
      height="${info.height}"
      data-current-image="${color.imagem}">
  `;
}

function renderProducts() {
  productsContainer.innerHTML = products.map((product, productIndex) => {
    const selectedColor = product.cores[0];
    const hasMultipleColors = product.cores.length > 1;

    return `
      <article class="product-card" data-category="${product.categoria}" data-product-index="${productIndex}" data-selected-color="0">
        <div class="product-img">
          ${productImageMarkup(product, selectedColor)}
        </div>
        <div class="product-info">
          <span>${categoryLabel(product.categoria)}</span>
          <h3>${product.nome}</h3>
          <strong>${money(product.preco)}</strong>
          <p class="selected-color">Cor selecionada: <b>${selectedColor.nome}</b></p>
          ${hasMultipleColors ? `<div class="color-options" aria-label="Escolha a cor de ${product.nome}">
            ${product.cores.map((color, colorIndex) => `
              <button class="color-swatch${colorIndex === 0 ? " active" : ""}" type="button" style="--swatch-color:${color.cor}" data-color-index="${colorIndex}" aria-label="${color.nome}" title="${color.nome}"></button>
            `).join("")}
          </div>` : ""}
          <p class="order-note">Faça sua encomenda diretamente pelo WhatsApp ♡</p>
          <button class="order-whatsapp" type="button">Encomendar pelo WhatsApp</button>
        </div>
      </article>
    `;
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
  image.src = color.imagem;
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
  document.querySelectorAll(".product-card").forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
}

renderProducts();

document.querySelectorAll(".filter").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    applyFilter(filterButton.dataset.filter);
  });
});

productsContainer.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const swatch = event.target.closest(".color-swatch");
  const orderButton = event.target.closest(".order-whatsapp");

  if (swatch) {
    const card = swatch.closest(".product-card");
    if (card) selectColor(card, Number(swatch.dataset.colorIndex));
  }

  if (orderButton) {
    const card = orderButton.closest(".product-card");
    if (!card) return;

    const product = products[Number(card.dataset.productIndex)];
    const color = product.cores[Number(card.dataset.selectedColor)];
    const message = `Olá! Tenho interesse em encomendar:\n\nProduto: ${product.nome}\nCor: ${color.nome}\nPreço: ${money(product.preco)}\n\nGostaria de saber mais informações sobre disponibilidade, tamanhos e entrega.`;
    openWhatsapp(message);
  }
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
  openWhatsapp("Olá! Vim pelo catálogo da La Belle e gostaria de conhecer as opções disponíveis.");
});
