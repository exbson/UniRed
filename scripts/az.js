const data = {
  Routers: [
    {
      id: 1,
      name: "Router AC1200",
      price: "$85.000",
      desc: "Dual-band, 4 puertos LAN, ideal para hogares medianos",
      img: "images/Productos/Router AC1200.png",
    },
    {
      id: 2,
      name: "Router AX3000",
      price: "$220.000",
      desc: "Wi-Fi 6, MU-MIMO, mejor rendimiento en múltiples dispositivos",
      img: "images/Productos/Router AX3000.png",
    },
    {
      id: 3,
      name: "Router 4G LTE",
      price: "$140.000",
      desc: "Soporte SIM, ideal para zonas sin fibra o como backup",
      img: "images/Productos/Router AX3000Router 4G LTE.png",
    },
  ],
  Switches: [
    {
      id: 10,
      name: "Switch 8 puertos Gigabit",
      price: "$120.000",
      desc: "Plug & play, montaje en escritorio",
      img: "images/Productos/Switch 8 puertos Gigabit.png",
    },
    {
      id: 11,
      name: "Switch PoE 24 puertos",
      price: "$680.000",
      desc: "Suministra energía a cámaras y puntos de acceso",
      img: "images/Productos/Switch PoE 24 puertos.png",
    },
    {
      id: 12,
      name: "Switch administrable 48",
      price: "$1.300.000",
      desc: "VLAN, QoS y gestión por web/CLI",
      img: "images/Productos/Switch administrable 48.jpg",
    },
  ],
  "Cámaras Inteligentes": [
    {
      id: 20,
      name: "Cámara IP 1080p",
      price: "$180.000",
      desc: "Visión nocturna, detección de movimiento, app móvil",
      img: "images/Productos/Camera IP 1080P.jpg",
    },
    {
      id: 21,
      name: "Cámara 4K con IA",
      price: "$480.000",
      desc: "Reconocimiento facial y notificaciones inteligentes",
      img: "images/Productos/Cámara 4K con IA.jpg",
    },
    {
      id: 22,
      name: "Cámara Bullet PoE",
      price: "$260.000",
      desc: "Instalación exterior resistente al agua, visión nocturna y alimentación PoE.",
      img: "images/Productos/Cámara Bullet PoE.jpg",
    },
  ],
};

const tabsEl = document.getElementById("tabs");
const productsEl = document.getElementById("products");
const categories = Object.keys(data);

// Crear pestañas dinámicamente
categories.forEach((cat, idx) => {
  const btn = document.createElement("button");
  btn.className = "tab";
  btn.setAttribute("role", "tab");
  btn.id = `tab-${idx}`;
  btn.setAttribute("aria-selected", idx === 0 ? "true" : "false");
  btn.textContent = cat;
  btn.addEventListener("click", () => selectTab(idx));
  tabsEl.appendChild(btn);
});

function selectTab(index) {
  const buttons = tabsEl.querySelectorAll(".tab");
  buttons.forEach((b, i) => {
    const selected = i === index;
    b.setAttribute("aria-selected", selected);
  });
  renderProducts(categories[index]);
}

function renderProducts(category) {
  const list = data[category] || [];
  productsEl.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb" onclick="ampliarImagen('${p.img}', '${p.name}')">
      <img src="${p.img}" alt="${p.name}">
      </div>

      <div class="name">${p.name}</div>
      <div class="desc">${p.desc}</div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px">
        <div class="price">${p.price}</div>
        <div class="actions">
          <button class="btn" onclick="addToCart(${p.id})">Agregar</button>
          <button class="btn secondary" onclick="verDetalles(${p.id})">Detalles</button>
        </div>
      </div>
    `;
    productsEl.appendChild(card);
  });
}

function addToCart(id) {
  const producto = findProductById(id);
  alert(`Agregado: ${producto ? producto.name : id}`);
}

function verDetalles(id) {
  const producto = findProductById(id);
  if (!producto) return alert("Producto no encontrado");
  alert(`${producto.name}\n\n${producto.desc}\nPrecio: ${producto.price}`);
}

function findProductById(id) {
  for (const cat of Object.values(data)) {
    const found = cat.find((x) => x.id === id);
    if (found) return found;
  }
  return null;
}

function ampliarImagen(src, alt) {
  const modalImg = document.getElementById("modalImage");
  modalImg.src = src;
  modalImg.alt = alt;

  const modal = new bootstrap.Modal(document.getElementById('imgModal'));
  modal.show();
}

// Inicializar con la primera pestaña
selectTab(0);
