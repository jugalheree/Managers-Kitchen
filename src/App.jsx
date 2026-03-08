import { useState } from "react";

const MENU = {
  "Kulhad Pizza": [
    { name: "Cheese Kulhad", price: 80 },
    { name: "Corn Kulhad", price: 90 },
    { name: "Veg Peri Kulhad", price: 90 },
    { name: "Margarita Kulhad", price: 100 },
    { name: "Paneer Kulhad Pizza", price: 110 },
    { name: "Tandoori Paneer Kulhad", price: 120 },
    { name: "Paneer Piri Piri Kulhad", price: 120 },
    { name: "Manager's Special Kulhad Pizza", price: 140 },
  ],
  "Pizza": [
    { name: "Onion Cheese Pizza", price: 70 },
    { name: "Capsicum Cheese Pizza", price: 80 },
    { name: "Corn Cheese Pizza", price: 80 },
    { name: "Veg Cheese Pizza", price: 80 },
    { name: "Margherita Pizza", price: 100 },
    { name: "Mexican Pizza", price: 110 },
    { name: "Tandoori Paneer Pizza", price: 120 },
    { name: "Double Veg Cheese Pizza", price: 120 },
    { name: "Peri Peri Paneer Pizza", price: 130 },
    { name: "4 Cheese Pizza", price: 140 },
    { name: "Manager's Special Pizza", price: 160 },
  ],
  "Sandwiches": [
    { name: "Chocolate Sandwich", price: 60 },
    { name: "Veg Sandwich", price: 60 },
    { name: "Veg Cheese Sandwich", price: 70 },
    { name: "Corn Cheese Sandwich", price: 80 },
    { name: "Veg Cheese Grill Sandwich", price: 90 },
    { name: "Mexican Sandwich", price: 90 },
    { name: "Mexican Paneer Sandwich", price: 110 },
    { name: "Manager's Special Sandwich", price: 140 },
  ],
  "Burgers": [
    { name: "Veg Burger", price: 40 },
    { name: "Tandoori Burger", price: 50 },
    { name: "Schezwan Burger", price: 60 },
    { name: "Peri Peri Burger", price: 70 },
    { name: "Tandoori Paneer Burger", price: 80 },
  ],
  "Fries": [
    { name: "Salted Fries", price: 50 },
    { name: "Peri Peri Fries", price: 60 },
    { name: "Cheese Fries", price: 70 },
    { name: "Extra Dip", price: 20 },
  ],
  "Mocktails": [
    { name: "Orange Crush", price: 50 },
    { name: "Pineapple", price: 60 },
    { name: "Blue Lagoon", price: 60 },
    { name: "Mint Mojito", price: 60 },
    { name: "Green Apple", price: 60 },
  ],
  "Shakes": [
    { name: "Cold Coffee", price: 30 },
    { name: "Chocolate Shake", price: 80 },
    { name: "Oreo Shake", price: 90 },
    { name: "Kitkat Shake", price: 100 },
  ],
};

const CATEGORY_EMOJIS = {
  "Kulhad Pizza": "🏺",
  "Pizza": "🍕",
  "Sandwiches": "🥪",
  "Burgers": "🍔",
  "Fries": "🍟",
  "Mocktails": "🧃",
  "Shakes": "🥤",
};

const FEATURED = [
  {
    name: "Kulhad Pizza",
    desc: "Our iconic street-style pizza served hot in an earthen kulhad",
    price: "From ₹80",
    emoji: "🏺",
    color: "#FF6B00",
    badge: "BESTSELLER",
  },
  {
    name: "Cheese Fries",
    desc: "Golden crispy fries drenched in rich, melted cheese sauce",
    price: "₹70",
    emoji: "🍟",
    color: "#FFD600",
    badge: "FAN FAVOURITE",
  },
  {
    name: "Veg Burger",
    desc: "Juicy veggie patty stacked with fresh veggies & zesty sauce",
    price: "₹40",
    emoji: "🍔",
    color: "#FF4136",
    badge: "VALUE PICK",
  },
  {
    name: "Oreo Shake",
    desc: "Thick, creamy shake blended with real Oreo cookies",
    price: "₹90",
    emoji: "🥤",
    color: "#2563EB",
    badge: "MUST TRY",
  },
];

const GALLERY_ITEMS = [
  { emoji: "🏺", label: "Kulhad Pizza", bg: "#1a0a00" },
  { emoji: "🍕", label: "Cheesy Pizza", bg: "#0a0015" },
  { emoji: "🥤", label: "Thick Shakes", bg: "#001a10" },
  { emoji: "🍔", label: "Juicy Burgers", bg: "#1a0010" },
  { emoji: "🥪", label: "Grill Sandwiches", bg: "#1a1000" },
  { emoji: "🍟", label: "Crispy Fries", bg: "#001015" },
];

export default function ManagersKitchen() {
  const [activeCategory, setActiveCategory] = useState("Kulhad Pizza");
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/91XXXXXXXXXX?text=Hi!%20I'd%20like%20to%20order%20from%20Manager's%20Kitchen%20%F0%9F%8D%95";

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0d0d0d", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .nunito { font-family: 'Nunito', sans-serif; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #FF6B00; border-radius: 3px; }

        .hero-text {
          animation: fadeUp 0.9s ease both;
        }
        .hero-sub { animation: fadeUp 0.9s 0.2s ease both; }
        .hero-btns { animation: fadeUp 0.9s 0.4s ease both; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-link {
          color: #ccc;
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color 0.2s;
          font-family: 'Nunito', sans-serif;
        }
        .nav-link:hover { color: #FF6B00; }

        .btn-primary {
          background: #FF6B00;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,107,0,0.5); }

        .btn-outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.4);
          padding: 13px 32px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover { border-color: #FF6B00; color: #FF6B00; }

        .btn-whatsapp {
          background: #25D366;
          color: #fff;
          border: none;
          padding: 18px 48px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .btn-whatsapp:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(37,211,102,0.45); }

        .featured-card {
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .featured-card:hover { transform: translateY(-6px); }

        .menu-tab {
          padding: 10px 22px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .menu-tab.active {
          background: #FF6B00;
          color: #fff;
          border-color: #FF6B00;
        }
        .menu-tab.inactive {
          background: transparent;
          color: #888;
          border-color: #2a2a2a;
        }
        .menu-tab.inactive:hover { border-color: #FF6B00; color: #FF6B00; }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          border-radius: 14px;
          background: #1a1a1a;
          border: 1px solid #242424;
          transition: border-color 0.2s, background 0.2s;
        }
        .menu-item:hover { border-color: #FF6B00; background: #1f1510; }

        .gallery-card {
          border-radius: 20px;
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 64px;
          transition: transform 0.3s;
          cursor: default;
          border: 1px solid #222;
          position: relative;
          overflow: hidden;
        }
        .gallery-card:hover { transform: scale(1.04); }

        .glow-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          font-family: 'Nunito', sans-serif;
          text-transform: uppercase;
        }

        .section-label {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #FF6B00;
        }

        .neon-border {
          border: 2px solid #FF6B00;
          box-shadow: 0 0 20px rgba(255,107,0,0.3), inset 0 0 20px rgba(255,107,0,0.05);
        }

        .tab-scroll::-webkit-scrollbar { height: 0; }

        .combo-card {
          background: linear-gradient(135deg, #1a0d00, #2a1500);
          border: 1px solid #FF6B00;
          border-radius: 20px;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .combo-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,107,0,0.15), transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 72px !important; }
          .featured-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 52px !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }

        .pulse-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(13,13,13,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid #1a1a1a", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 28 }}>🏺</span>
            <div>
              <div className="bebas" style={{ fontSize: 22, letterSpacing: 2, color: "#fff", lineHeight: 1 }}>MANAGER'S KITCHEN</div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#FF6B00", fontFamily: "Nunito", fontWeight: 900, textTransform: "uppercase" }}>Vadodara, Gujarat</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 28 }} className="desktop-nav">
              {["#featured", "#menu", "#gallery", "#location", "#order"].map(href => (
                <a key={href} href={href} className="nav-link">{href.slice(1)}</a>
              ))}
            </div>
            <a href={whatsappLink} className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>Order Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", textAlign: "center", padding: "120px 24px 80px", overflow: "hidden" }}>
        {/* Background layers */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,107,0,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

        {/* Floating emoji decorations */}
        {[
          { top: "15%", left: "8%", e: "🍕", size: 48, delay: 0 },
          { top: "20%", right: "10%", e: "🏺", size: 56, delay: 0.3 },
          { bottom: "25%", left: "6%", e: "🍔", size: 40, delay: 0.6 },
          { bottom: "20%", right: "8%", e: "🥤", size: 44, delay: 0.2 },
          { top: "45%", left: "3%", e: "🍟", size: 36, delay: 0.5 },
          { top: "60%", right: "4%", e: "🥪", size: 36, delay: 0.4 },
        ].map((item, i) => (
          <div key={i} style={{ position: "absolute", top: item.top, left: item.left, right: item.right, bottom: item.bottom, fontSize: item.size, opacity: 0.25, animation: `fadeUp 1s ${item.delay}s ease both`, pointerEvents: "none" }}>
            {item.e}
          </div>
        ))}

        {/* Open badge */}
        <div style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 8, background: "#111", border: "1px solid #2a2a2a", borderRadius: 50, padding: "8px 20px" }} className="hero-text">
          <span className="pulse-dot" />
          <span style={{ fontSize: 12, fontFamily: "Nunito", fontWeight: 800, letterSpacing: 1, color: "#aaa" }}>OPEN TODAY · 12 PM – 11 PM</span>
        </div>

        <h1 className="bebas hero-text" style={{ fontSize: 110, lineHeight: 0.9, letterSpacing: 3, marginBottom: 8 }}>
          <span style={{ color: "#FF6B00" }}>MANAGER'S</span><br />
          <span style={{ color: "#fff" }}>KITCHEN</span>
        </h1>

        <div className="hero-sub" style={{ marginTop: 20, marginBottom: 16 }}>
          <div style={{ display: "inline-block", background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.4)", borderRadius: 8, padding: "6px 18px" }}>
            <span style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 16, letterSpacing: 2, color: "#FF6B00", textTransform: "uppercase" }}>
              🏺 Famous Kulhad Pizza in Vadodara
            </span>
          </div>
        </div>

        <p className="hero-sub" style={{ fontSize: 16, color: "#777", maxWidth: 480, lineHeight: 1.7, fontFamily: "Nunito", marginBottom: 40 }}>
          Vadodara's most loved street food spot — cheesy kulhad pizzas, loaded burgers, thick shakes & so much more. Starting at just ₹40!
        </p>

        <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#menu" className="btn-primary" style={{ fontSize: 15 }}>🍕 View Full Menu</a>
          <a href={whatsappLink} className="btn-outline" style={{ fontSize: 15 }}>💬 Order on WhatsApp</a>
        </div>

        {/* Stats row */}
        <div className="hero-sub" style={{ marginTop: 64, display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {[["200+", "Happy Customers Daily"], ["₹40", "Starting Price"], ["12–11", "Open Hours PM"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div className="bebas" style={{ fontSize: 42, color: "#FF6B00", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#555", fontFamily: "Nunito", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>⭐ Must Try</div>
          <h2 className="bebas" style={{ fontSize: 64, letterSpacing: 2 }}>FEATURED ITEMS</h2>
        </div>

        <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {FEATURED.map((item) => (
            <div key={item.name} className="featured-card" style={{ background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`, border: `1px solid ${item.color}30` }}>
              <div style={{ position: "absolute", top: 16, right: 16 }}>
                <span className="glow-badge" style={{ background: `${item.color}25`, color: item.color, border: `1px solid ${item.color}50` }}>{item.badge}</span>
              </div>
              <div style={{ fontSize: 64, marginBottom: 16 }}>{item.emoji}</div>
              <h3 style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 18, marginBottom: 8 }}>{item.name}</h3>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "Nunito", marginBottom: 16 }}>{item.desc}</p>
              <div className="bebas" style={{ fontSize: 28, color: item.color }}>{item.price}</div>
            </div>
          ))}
        </div>

        {/* Combo Deals */}
        <div style={{ marginTop: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div className="section-label" style={{ marginBottom: 8 }}>🔥 Limited Time</div>
            <h3 className="bebas" style={{ fontSize: 44, letterSpacing: 2 }}>COMBO OFFERS</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { label: "Student Special", desc: "1 Veg Burger + Fries + Thums Up", price: "₹99" },
              { label: "Pizza Deal", desc: "1 Onion Cheese Pizza + Cheese Wafers + Coke + Thums Up", price: "₹99" },
            ].map((combo) => (
              <div key={combo.label} className="combo-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span className="glow-badge" style={{ background: "rgba(255,107,0,0.2)", color: "#FF6B00", border: "1px solid rgba(255,107,0,0.4)", marginBottom: 10, display: "inline-block" }}>COMBO</span>
                    <h4 style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 18, marginBottom: 6 }}>{combo.label}</h4>
                    <p style={{ fontFamily: "Nunito", fontSize: 13, color: "#888", lineHeight: 1.6 }}>{combo.desc}</p>
                  </div>
                  <div className="bebas" style={{ fontSize: 40, color: "#FF6B00", whiteSpace: "nowrap", marginLeft: 16 }}>{combo.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: "80px 0", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>📋 Full Menu</div>
            <h2 className="bebas" style={{ fontSize: 64, letterSpacing: 2 }}>WHAT WE SERVE</h2>
            <p style={{ fontFamily: "Nunito", color: "#666", marginTop: 12, fontSize: 15 }}>Fresh, fast & flavourful — made to order every time</p>
          </div>

          {/* Category Tabs */}
          <div className="tab-scroll" style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, marginBottom: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {Object.keys(MENU).map((cat) => (
              <button key={cat} className={`menu-tab ${activeCategory === cat ? "active" : "inactive"}`} onClick={() => setActiveCategory(cat)}>
                {CATEGORY_EMOJIS[cat]} {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {MENU[activeCategory].map((item) => (
              <div key={item.name} className="menu-item">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>{CATEGORY_EMOJIS[activeCategory]}</span>
                  <span style={{ fontFamily: "Nunito", fontWeight: 700, fontSize: 15 }}>{item.name}</span>
                </div>
                <div className="bebas" style={{ fontSize: 22, color: "#FF6B00", whiteSpace: "nowrap", marginLeft: 12 }}>₹{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>📸 Gallery</div>
          <h2 className="bebas" style={{ fontSize: 64, letterSpacing: 2 }}>THE VIBE</h2>
          <p style={{ fontFamily: "Nunito", color: "#666", marginTop: 12, fontSize: 15 }}>Street food culture meets late-night cravings</p>
        </div>

        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {GALLERY_ITEMS.map((item) => (
            <div key={item.label} className="gallery-card" style={{ background: `radial-gradient(ellipse at center, ${item.bg} 0%, #0d0d0d 100%)` }}>
              <div style={{ marginBottom: 12 }}>{item.emoji}</div>
              <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 14, color: "#888", letterSpacing: 1, textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,0,0.04), transparent)", pointerEvents: "none", borderRadius: 20 }} />
            </div>
          ))}
        </div>

        {/* Ambience strip */}
        <div style={{ marginTop: 32, background: "#111", border: "1px solid #222", borderRadius: 20, padding: "28px 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: 24 }}>
          {[["🪑", "Colourful Seating"], ["✨", "Fairy Lights"], ["🌙", "Open till 11 PM"], ["🎓", "Student Friendly"], ["⚡", "Quick Service"]].map(([emoji, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{emoji}</div>
              <div style={{ fontFamily: "Nunito", fontWeight: 700, fontSize: 13, color: "#666" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" style={{ padding: "80px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>📍 Find Us</div>
            <h2 className="bebas" style={{ fontSize: 64, letterSpacing: 2 }}>LOCATION</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "center" }}>
            {/* Map placeholder */}
            <div className="neon-border" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 64 }}>🗺️</div>
              <div style={{ fontFamily: "Nunito", fontWeight: 700, color: "#555", fontSize: 14, textAlign: "center", padding: "0 24px" }}>
                Manager's Kitchen<br />Vadodara, Gujarat
              </div>
              <a href="https://maps.google.com/?q=Managers+Kitchen+Vadodara" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "10px 24px" }}>
                📍 Open in Google Maps
              </a>
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "📍", label: "Address", val: "Manager's Kitchen\nVadodara, Gujarat, India" },
                { icon: "🕐", label: "Hours", val: "12:00 PM – 11:00 PM\nOpen all days" },
                { icon: "📞", label: "Order", val: "WhatsApp to place order\nQuick & easy" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 28, flexShrink: 0, width: 48, height: 48, background: "#FF6B0015", border: "1px solid #FF6B0030", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 12, color: "#FF6B00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: "Nunito", fontWeight: 600, fontSize: 14, color: "#ccc", whiteSpace: "pre-line", lineHeight: 1.6 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section id="order" style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,107,0,0.1), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>🛵 Order Now</div>
          <h2 className="bebas" style={{ fontSize: 72, letterSpacing: 2, lineHeight: 0.9, marginBottom: 24 }}>
            READY TO<br /><span style={{ color: "#FF6B00" }}>EAT?</span>
          </h2>
          <p style={{ fontFamily: "Nunito", color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Tap below to send us your order on WhatsApp — we'll confirm it instantly. Fresh food, fast delivery, best prices in Vadodara.
          </p>
          <a href={whatsappLink} className="btn-whatsapp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060606", borderTop: "1px solid #1a1a1a", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, flexWrap: "wrap" }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>🏺</span>
                <div className="bebas" style={{ fontSize: 20, letterSpacing: 2, color: "#fff" }}>MANAGER'S KITCHEN</div>
              </div>
              <p style={{ fontFamily: "Nunito", color: "#555", fontSize: 14, lineHeight: 1.8, maxWidth: 280 }}>
                Vadodara's favourite street food hub. Kulhad pizzas, cheesy snacks, and thick shakes — because good food shouldn't break the bank.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                {[
                  { label: "Instagram", href: "https://www.instagram.com", emoji: "📸" },
                  { label: "Google Maps", href: "https://maps.google.com/?q=Managers+Kitchen+Vadodara", emoji: "🗺️" },
                  { label: "WhatsApp", href: whatsappLink, emoji: "💬" },
                ].map(({ label, href, emoji }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{ width: 40, height: 40, background: "#111", border: "1px solid #222", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none", transition: "border-color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#FF6B00"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}>
                    {emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 12, letterSpacing: 2, color: "#FF6B00", textTransform: "uppercase", marginBottom: 20 }}>Quick Links</div>
              {["#featured", "#menu", "#gallery", "#location", "#order"].map(href => (
                <a key={href} href={href} style={{ display: "block", fontFamily: "Nunito", fontWeight: 600, fontSize: 14, color: "#555", textDecoration: "none", marginBottom: 10, textTransform: "capitalize", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#FF6B00"}
                  onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                  {href.slice(1)}
                </a>
              ))}
            </div>

            {/* Info */}
            <div>
              <div style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 12, letterSpacing: 2, color: "#FF6B00", textTransform: "uppercase", marginBottom: 20 }}>Info</div>
              <div style={{ fontFamily: "Nunito", fontSize: 14, color: "#555", lineHeight: 2 }}>
                <div>📍 Vadodara, Gujarat</div>
                <div>🕐 12 PM – 11 PM</div>
                <div>🟢 Open Daily</div>
                <div style={{ marginTop: 12, color: "#FF6B00", fontWeight: 700 }}>Starting at just ₹40!</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #1a1a1a", marginTop: 48, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontFamily: "Nunito", fontSize: 13, color: "#444" }}>© 2025 Manager's Kitchen, Vadodara. All rights reserved.</div>
            <div style={{ fontFamily: "Nunito", fontSize: 13, color: "#333" }}>Made with ❤️ for Vadodara's food lovers</div>
          </div>
        </div>
      </footer>
    </div>
  );
}