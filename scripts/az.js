const data = {
  Routers: [
    {
      id: 1,
      name: "Router AC1200",
      price: "$85.000",
      desc: "Dual-band, 4 puertos LAN, ideal para hogares medianos",
      img: "images/Router AC1200.png",
    },
    {
      id: 2,
      name: "Router AX3000",
      price: "$220.000",
      desc: "Wi-Fi 6, MU-MIMO, mejor rendimiento en múltiples dispositivos",
      img: "images/Router AX3000.png",
    },
    {
      id: 3,
      name: "Router 4G LTE",
      price: "$140.000",
      desc: "Soporte SIM, ideal para zonas sin fibra o como backup",
      img: "images/Router AX3000Router 4G LTE.png",
    },
  ],
  Switches: [
    {
      id: 10,
      name: "Switch 8 puertos Gigabit",
      price: "$120.000",
      desc: "Plug & play, montaje en escritorio",
      img: "https://images.unsplash.com/photo-1614064648228-42b4a0c8a276?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Switch PoE 24 puertos",
      price: "$680.000",
      desc: "Suministra energía a cámaras y puntos de acceso",
      img: "https://images.unsplash.com/photo-1614079065027-8b5b4cfb4b5b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Switch administrable 48",
      price: "$1.300.000",
      desc: "VLAN, QoS y gestión por web/CLI",
      img: "https://images.unsplash.com/photo-1631815586721-9b923e16c6b2?auto=format&fit=crop&w=800&q=80",
    },
  ],
  "Cámaras Inteligentes": [
    {
      id: 20,
      name: "Cámara IP 1080p",
      price: "$180.000",
      desc: "Visión nocturna, detección de movimiento, app móvil",
      img: "https://images.unsplash.com/photo-1581092334651-ddf57eae1d4a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 21,
      name: "Cámara 4K con IA",
      price: "$480.000",
      desc: "Reconocimiento facial y notificaciones inteligentes",
      img: "https://images.unsplash.com/photo-1594737625785-cabc88bcbba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 22,
      name: "Cámara Bullet PoE",
      price: "$260.000",
      desc: "Instalación exterior, resistente al agua",
      img: "https://images.unsplash.com/photo-1606220838310-4844e76e9b9c?auto=format&fit=crop&w=800&q=80",
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
      <div class="thumb">
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

// Inicializar con la primera pestaña
selectTab(0);
