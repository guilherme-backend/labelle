// Substitua este número pelo WhatsApp real da La Belle, com DDI e DDD.
const whatsappNumber = "5521974307694";

const products = [
  {
    nome: "Calcinha Lesy Sexy",
    preco: 21.9,
    categoria: "renda",
    cores: [
      { nome: "Preto", imagem: "assets/IMG_5168.JPG", cor: "#151114" },
      { nome: "Vermelho", imagem: "assets/IMG_5170.JPG", cor: "#9f1f32" },
      { nome: "Branco", imagem: "assets/IMG_5183.JPG", cor: "#fffaf7" },
      { nome: "Rosa", imagem: "assets/IMG_5164.JPG", cor: "#e7a6b7" },
    ],
  },
  { 
    nome: "Calcinha Confort",
    preco: 24.9,
    categoria: "conforto",
    cores: [
      { nome: "Branco", imagem: "assets/IMG_5183.JPG", cor: "#fffaf7" },
      { nome: "Rosa", imagem: "assets/IMG_5164.JPG", cor: "#e7a6b7" },
      { nome: "Azul", imagem: "assets/IMG_5170.JPG", cor: "#557c9f" },
    ],
  },
  {
    nome: "Calcinha Elegance",
    preco: 34.9,
    categoria: "premium",
    cores: [
      { nome: "Vinho", imagem: "assets/IMG_5170.JPG", cor: "#571d2d" },
      { nome: "Preto", imagem: "assets/IMG_5168.JPG", cor: "#151114" },
      { nome: "Champagne", imagem: "assets/IMG_5183.JPG", cor: "#d8b891" },
    ],
  },
  {
    nome: "Calcinha Romance",
    preco: 32.9,
    categoria: "renda",
    cores: [
      { nome: "Vermelho", imagem: "assets/IMG_5170.JPG", cor: "#9f1f32" },
      { nome: "Rosa", imagem: "assets/IMG_5164.JPG", cor: "#e7a6b7" },
      { nome: "Branco", imagem: "assets/IMG_5183.JPG", cor: "#fffaf7" },
    ],
  },
  {
    nome: "Calcinha Soft",
    preco: 27.9,
    categoria: "conforto",
    cores: [
      { nome: "Rosa", imagem: "assets/IMG_5164.JPG", cor: "#e7a6b7" },
      { nome: "Branco", imagem: "assets/IMG_5183.JPG", cor: "#fffaf7" },
      { nome: "Preto", imagem: "assets/IMG_5168.JPG", cor: "#151114" },
    ],
  },
  {
    nome: "Calcinha Premium",
    preco: 39.9,
    categoria: "premium",
    cores: [
      { nome: "Preto", imagem: "assets/IMG_5168.JPG", cor: "#151114" },
      { nome: "Vinho", imagem: "assets/IMG_5170.JPG", cor: "#571d2d" },
      { nome: "Champagne", imagem: "assets/IMG_5183.JPG", cor: "#d8b891" },
    ],
  },
];

const productsContainer = document.getElementById("products");

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

function renderProducts() {
  productsContainer.innerHTML = products
    .map((product, productIndex) => {
      const selectedColor = product.cores[0];
      const hasMultipleColors = product.cores.length > 1;

      return `
        <article class="product-card" data-category="${product.categoria}" data-product-index="${productIndex}" data-selected-color="0">
          <div class="product-img">
            <img src="${selectedColor.imagem}" alt="${product.nome} - ${selectedColor.nome}" data-fallback-image="${selectedColor.imagem}">
          </div>
          <div class="product-info">
            <span>${categoryLabel(product.categoria)}</span>
            <h3>${product.nome}</h3>
            <strong>${money(product.preco)}</strong>
            <p class="selected-color">Cor selecionada: <b>${selectedColor.nome}</b></p>
            ${
              hasMultipleColors
                ? `<div class="color-options" aria-label="Escolha a cor de ${product.nome}">
                    ${product.cores
                      .map(
                        (color, colorIndex) => `
                          <button
                            class="color-swatch${colorIndex === 0 ? " active" : ""}"
                            type="button"
                            style="--swatch-color:${color.cor}"
                            data-color-index="${colorIndex}"
                            aria-label="${color.nome}"
                            title="${color.nome}"
                          ></button>
                        `
                      )
                      .join("")}
                  </div>`
                : ""
            }
            <p class="order-note">Faça sua encomenda diretamente pelo WhatsApp ♡</p>
            <button class="order-whatsapp" type="button">Encomendar pelo WhatsApp</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function selectColor(card, colorIndex) {
  const product = products[Number(card.dataset.productIndex)];
  const color = product.cores[colorIndex];
  const image = card.querySelector(".product-img img");
  const selectedColor = card.querySelector(".selected-color b");

  card.dataset.selectedColor = String(colorIndex);
  selectedColor.textContent = color.nome;

  card.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("active", Number(swatch.dataset.colorIndex) === colorIndex);
  });

  image.classList.add("is-changing");

  const nextImage = new Image();
  nextImage.onload = () => {
    image.src = color.imagem;
    image.alt = `${product.nome} - ${color.nome}`;
    image.classList.remove("is-changing");
  };
  nextImage.onerror = () => {
    image.src = product.cores[0].imagem;
    image.alt = `${product.nome} - ${color.nome}`;
    image.classList.remove("is-changing");
  };
  nextImage.src = color.imagem;
}

function applyFilter(category) {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
}

renderProducts();

document.querySelectorAll(".filter").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.remove("active");
    });

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
    selectColor(card, Number(swatch.dataset.colorIndex));
  }

  if (orderButton) {
    const card = orderButton.closest(".product-card");
    const product = products[Number(card.dataset.productIndex)];
    const color = product.cores[Number(card.dataset.selectedColor)];
    const message = `Olá! Tenho interesse em encomendar:

Produto: ${product.nome}
Cor: ${color.nome}
Preço: ${money(product.preco)}

Gostaria de saber mais informações sobre disponibilidade, tamanhos e entrega.`;

    openWhatsapp(message);
  }
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
  openWhatsapp("Olá! Vim pelo catálogo da La Belle e gostaria de conhecer as opções disponíveis.");
});
