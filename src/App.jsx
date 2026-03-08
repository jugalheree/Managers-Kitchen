import { useState, useEffect } from "react";

const C = {
  navy: "#2B3C79",
  navyDark: "#1e2d5e",
  navyLight: "#3a4f9e",
  white: "#ffffff",
  offWhite: "#f4f6ff",
  red: "#E8192C",
  redLight: "#ff3347",
  green: "#1a9e3f",
  greenLight: "#22c55e",
  yellow: "#FFD600",
};

const MENU = {
  "Kulhad Pizza": {
    emoji: "🏺",
    color: C.red,
    items: [
      { name: "Cheese Kulhad", price: 80 },
      { name: "Corn Kulhad", price: 90 },
      { name: "Veg Peri Kulhad", price: 90 },
      { name: "Margarita Kulhad", price: 100 },
      { name: "Paneer Kulhad Pizza", price: 110 },
      { name: "Tandoori Paneer Kulhad", price: 120 },
      { name: "Paneer Piri Piri Kulhad", price: 120 },
      { name: "Manager's Special Kulhad Pizza", price: 140, special: true },
    ],
  },
  "Pizza": {
    emoji: "🍕",
    color: C.navyLight,
    items: [
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
      { name: "Manager's Special Pizza", price: 160, special: true },
    ],
  },
  "Sandwiches": {
    emoji: "🥪",
    color: C.green,
    items: [
      { name: "Chocolate Sandwich", price: 60 },
      { name: "Veg Sandwich", price: 60 },
      { name: "Veg Cheese Sandwich", price: 70 },
      { name: "Corn Cheese Sandwich", price: 80 },
      { name: "Veg Cheese Grill Sandwich", price: 90 },
      { name: "Mexican Sandwich", price: 90 },
      { name: "Mexican Paneer Sandwich", price: 110 },
      { name: "Manager's Special Sandwich", price: 140, special: true },
    ],
  },
  "Burgers": {
    emoji: "🍔",
    color: C.red,
    items: [
      { name: "Veg Burger", price: 40 },
      { name: "Tandoori Burger", price: 50 },
      { name: "Schezwan Burger", price: 60 },
      { name: "Peri Peri Burger", price: 70 },
      { name: "Tandoori Paneer Burger", price: 80 },
    ],
  },
  "Fries": {
    emoji: "🍟",
    color: C.navy,
    items: [
      { name: "Salted Fries", price: 50 },
      { name: "Peri Peri Fries", price: 60 },
      { name: "Cheese Fries", price: 70 },
      { name: "Extra Dip", price: 20 },
    ],
  },
  "Mocktails": {
    emoji: "🧃",
    color: C.green,
    items: [
      { name: "Orange Crush", price: 50 },
      { name: "Pineapple", price: 60 },
      { name: "Blue Lagoon", price: 60 },
      { name: "Mint Mojito", price: 60 },
      { name: "Green Apple", price: 60 },
    ],
  },
  "Shakes": {
    emoji: "🥤",
    color: C.navyLight,
    items: [
      { name: "Cold Coffee", price: 30 },
      { name: "Chocolate Shake", price: 80 },
      { name: "Oreo Shake", price: 90 },
      { name: "Kitkat Shake", price: 100 },
    ],
  },
};

const FEATURED = [
  { name: "Kulhad Pizza", tag: "SIGNATURE", price: "From ₹80", emoji: "🏺", bg: C.red, desc: "Hot pizza in an earthen pot" },
  { name: "Cheese Fries", tag: "FAN FAV", price: "₹70", emoji: "🍟", bg: C.green, desc: "Golden, cheesy & crispy" },
  { name: "Veg Burger", tag: "VALUE", price: "₹40", emoji: "🍔", bg: C.navy, desc: "Stacked & saucy" },
  { name: "Oreo Shake", tag: "MUST TRY", price: "₹90", emoji: "🥤", bg: C.navyLight, desc: "Thick blended goodness" },
];

const WA = "https://wa.me/91XXXXXXXXXX?text=Hi!%20I'd%20like%20to%20order%20from%20Manager's%20Kitchen%20%F0%9F%8D%95";

export default function App() {
  const [activeTab, setActiveTab] = useState("Kulhad Pizza");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handler = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: C.offWhite, color: "#111", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: ${C.navy}; border-radius: 2px; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-12px); }
        }
        @keyframes pulse2 {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.5); }
        }
        @keyframes slideRight {
          from { transform:translateX(-110%); }
          to   { transform:translateX(0); }
        }

        .a1 { animation: fadeUp .7s .0s both; }
        .a2 { animation: fadeUp .7s .15s both; }
        .a3 { animation: fadeUp .7s .30s both; }
        .a4 { animation: fadeUp .7s .45s both; }

        /* NAV */
        .topnav {
          position: fixed; top:0; left:0; right:0; z-index:500;
          transition: background .3s, box-shadow .3s;
        }
        .topnav.solid {
          background: ${C.navy};
          box-shadow: 0 2px 16px rgba(0,0,0,.25);
        }
        .topnav.transparent { background: transparent; }
        .nav-inner {
          max-width:1200px; margin:0 auto;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 16px; height:62px;
        }
        .nav-brand { display:flex; align-items:center; gap:9px; text-decoration:none; }
        .nav-desk-links { display:none; gap:28px; }
        @media(min-width:768px){ .nav-desk-links { display:flex; } }
        .nlink {
          color:rgba(255,255,255,.8); font-weight:800; font-size:12px;
          letter-spacing:1.5px; text-transform:uppercase; text-decoration:none;
          transition:color .2s;
        }
        .nlink:hover { color:#fff; }
        .ham { background:none; border:none; cursor:pointer; display:flex; flex-direction:column; gap:5px; padding:5px; }
        @media(min-width:768px){ .ham { display:none; } }
        .ham span { display:block; width:22px; height:2.5px; background:#fff; border-radius:2px; transition: all .3s; }

        /* DRAWER */
        .overlay {
          position:fixed; inset:0; z-index:800;
          background:rgba(0,0,0,.55); backdrop-filter:blur(3px);
          display:flex;
        }
        .drawer {
          width:270px; background:${C.navy}; height:100%;
          display:flex; flex-direction:column; padding:0;
          animation: slideRight .3s ease;
          overflow-y:auto;
        }
        .drawer-head {
          display:flex; justify-content:space-between; align-items:center;
          padding:20px 20px 16px; border-bottom:1px solid rgba(255,255,255,.1);
        }
        .dlink {
          display:flex; align-items:center; gap:12px;
          color:#fff; text-decoration:none; font-weight:800; font-size:16px;
          padding:16px 20px; border-bottom:1px solid rgba(255,255,255,.07);
          transition:background .2s;
        }
        .dlink:hover { background:rgba(255,255,255,.07); }

        /* BUTTONS */
        .btn-r {
          display:inline-flex; align-items:center; justify-content:center; gap:7px;
          background:${C.red}; color:#fff; border:none;
          padding:13px 26px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:900; font-size:14px;
          cursor:pointer; text-decoration:none; transition:transform .2s, box-shadow .2s;
        }
        .btn-r:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(232,25,44,.4); }

        .btn-w {
          display:inline-flex; align-items:center; justify-content:center; gap:7px;
          background:#fff; color:${C.navy}; border:none;
          padding:13px 26px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:900; font-size:14px;
          cursor:pointer; text-decoration:none; transition:transform .2s, box-shadow .2s;
        }
        .btn-w:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.15); }

        .btn-g {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:${C.green}; color:#fff; border:none;
          padding:16px 38px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:900; font-size:17px;
          cursor:pointer; text-decoration:none; transition:transform .2s, box-shadow .2s;
        }
        .btn-g:hover { transform:translateY(-3px); box-shadow:0 10px 32px rgba(26,158,63,.45); }

        /* SECTION TAG */
        .stag {
          display:inline-block; padding:4px 14px; border-radius:50px;
          font-size:11px; font-weight:900; letter-spacing:2px; text-transform:uppercase;
        }

        /* FEAT CARD */
        .fcard {
          border-radius:18px; padding:22px 18px; position:relative; overflow:hidden;
          transition:transform .25s, box-shadow .25s; cursor:default;
        }
        .fcard:hover { transform:translateY(-5px); box-shadow:0 16px 36px rgba(0,0,0,.18); }

        /* MENU ITEM */
        .mitem {
          display:flex; align-items:center; justify-content:space-between;
          padding:13px 16px; border-radius:14px;
          background:#fff; border:1.5px solid #dde3f5;
          transition:border-color .2s, box-shadow .2s;
        }
        .mitem:hover { border-color:${C.navy}; box-shadow:0 4px 14px rgba(43,60,121,.1); }

        /* MENU TAB */
        .mtab {
          display:inline-flex; align-items:center; gap:5px;
          padding:9px 16px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:800; font-size:12px;
          cursor:pointer; white-space:nowrap; border:2px solid transparent;
          transition:all .2s;
        }
        .mtab.on { background:${C.navy}; color:#fff; }
        .mtab.off { background:#fff; color:#666; border-color:#dde3f0; }
        .mtab.off:hover { border-color:${C.navy}; color:${C.navy}; }

        /* PULSE */
        .pdot { display:inline-block; width:8px; height:8px; background:${C.greenLight}; border-radius:50%; animation:pulse2 2s infinite; }

        /* SPECIAL BADGE */
        .sbadge {
          font-size:9px; font-weight:900; letter-spacing:1px;
          background:${C.red}; color:#fff; padding:2px 8px;
          border-radius:50px; text-transform:uppercase; margin-left:6px;
        }

        /* RESPONSIVE GRIDS */
        .feat-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(min-width:768px){ .feat-grid { grid-template-columns:repeat(4,1fr); gap:20px; } }

        .combo-grid { display:grid; grid-template-columns:1fr; gap:14px; }
        @media(min-width:640px){ .combo-grid { grid-template-columns:1fr 1fr; } }

        .menu-grid { display:grid; grid-template-columns:1fr; gap:10px; }
        @media(min-width:560px){ .menu-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:900px){ .menu-grid { grid-template-columns:repeat(3,1fr); } }

        .vibe-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        @media(min-width:560px){ .vibe-grid { grid-template-columns:repeat(6,1fr); } }

        .loc-grid { display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width:768px){ .loc-grid { grid-template-columns:1fr 1fr; } }

        .footer-grid { display:grid; grid-template-columns:1fr; gap:28px; }
        @media(min-width:600px){ .footer-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:960px){ .footer-grid { grid-template-columns:2fr 1fr 1fr; } }

        /* TABS SCROLL */
        .tscroll { overflow-x:auto; -webkit-overflow-scrolling:touch; }
        .tscroll::-webkit-scrollbar { height:0; }
        .trow { display:flex; gap:8px; padding-bottom:4px; }
        @media(min-width:768px){ .trow { flex-wrap:wrap; justify-content:center; } }

        /* FLOATING WA */
        .wa-float {
          position:fixed; bottom:20px; right:16px; z-index:400;
          width:54px; height:54px; background:#25D366;
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 20px rgba(37,211,102,.55);
          text-decoration:none; transition:transform .2s;
        }
        .wa-float:hover { transform:scale(1.1); }

        /* STRIPE BG */
        .stripe {
          background: repeating-linear-gradient(
            -45deg, transparent, transparent 18px,
            rgba(43,60,121,.04) 18px, rgba(43,60,121,.04) 36px
          );
        }

        .hg { transition:transform .2s; }
        .hg:hover { transform:scale(1.03); }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`topnav ${navSolid ? "solid" : "transparent"}`} style={{ background: navSolid ? C.navy : C.navy }}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <span style={{ fontSize: 26 }}>🏺</span>
            <div>
              <div className="bebas" style={{ fontSize: 18, letterSpacing: 2, color: "#fff", lineHeight: 1 }}>MANAGER'S KITCHEN</div>
              <div style={{ fontSize: 8, letterSpacing: 3, color: "rgba(255,255,255,.55)", fontWeight: 900, textTransform: "uppercase" }}>Vadodara · Gujarat</div>
            </div>
          </a>
          <div className="nav-desk-links">
            {[["#featured","Featured"],["#menu","Menu"],["#gallery","Vibe"],["#location","Location"],["#order","Order"]].map(([h,l]) => (
              <a key={h} href={h} className="nlink">{l}</a>
            ))}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <a href={WA} className="btn-r" style={{ padding:"9px 16px", fontSize:12, display:"none" }}
              ref={el => { if(el) el.style.display = typeof window !== "undefined" && window.innerWidth >= 640 ? "inline-flex" : "none"; }}>
              Order Now
            </a>
            <button className="ham" onClick={() => setMobileMenuOpen(true)} aria-label="Menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* ── DRAWER ── */}
      {mobileMenuOpen && (
        <div className="overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-head">
              <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                <span style={{ fontSize:22 }}>🏺</span>
                <span className="bebas" style={{ fontSize:16, letterSpacing:2, color:"#fff" }}>MANAGER'S KITCHEN</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ background:"none", border:"none", color:"rgba(255,255,255,.7)", fontSize:22, cursor:"pointer", lineHeight:1 }}>✕</button>
            </div>
            {[["#featured","⭐","Featured"],["#menu","📋","Full Menu"],["#gallery","📸","Gallery"],["#location","📍","Location"],["#order","💬","Order"]].map(([h,e,l]) => (
              <a key={h} href={h} className="dlink" onClick={() => setMobileMenuOpen(false)}>
                <span style={{ fontSize:18 }}>{e}</span>{l}
              </a>
            ))}
            <div style={{ padding:"24px 20px", marginTop:"auto" }}>
              <a href={WA} className="btn-g" style={{ width:"100%", fontSize:15, padding:"14px" }}>
                💬 WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="top" style={{ background: C.navy, position:"relative", overflow:"hidden", paddingTop:62 }}>
        {/* decorative circles */}
        <div style={{ position:"absolute", top:-100, right:-100, width:400, height:400, borderRadius:"50%", background:"rgba(255,255,255,.03)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:80, left:-80, width:250, height:250, borderRadius:"50%", background:"rgba(232,25,44,.07)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", top:"30%", right:"8%", width:120, height:120, borderRadius:"50%", background:"rgba(26,158,63,.06)", pointerEvents:"none" }}/>

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 16px 100px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative" }}>

          {/* Floating emojis (decorative) */}
          <div style={{ position:"absolute", top:20, left:"4%", fontSize:36, opacity:.15, animation:"float 3.8s ease-in-out infinite", pointerEvents:"none" }}>🍕</div>
          <div style={{ position:"absolute", top:"15%", right:"5%", fontSize:40, opacity:.15, animation:"float 4.2s .4s ease-in-out infinite", pointerEvents:"none" }}>🏺</div>
          <div style={{ position:"absolute", bottom:"20%", left:"2%", fontSize:30, opacity:.12, animation:"float 5s 1s ease-in-out infinite", pointerEvents:"none" }}>🍔</div>
          <div style={{ position:"absolute", bottom:"12%", right:"4%", fontSize:32, opacity:.12, animation:"float 4.5s .6s ease-in-out infinite", pointerEvents:"none" }}>🥤</div>

          {/* Status pill */}
          <div className="a1" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.18)", borderRadius:50, padding:"7px 18px", marginBottom:22 }}>
            <span className="pdot"/>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:1.5, color:"rgba(255,255,255,.8)", textTransform:"uppercase" }}>Open Today · 12 PM – 11 PM</span>
          </div>

          <h1 className="bebas a2" style={{ fontSize:"clamp(58px,15vw,118px)", lineHeight:.88, letterSpacing:3, color:"#fff", marginBottom:10 }}>
            MANAGER'S<br/>
            <span style={{ color:C.red }}>KITCHEN</span>
          </h1>

          <div className="a3" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(232,25,44,.18)", border:"1px solid rgba(232,25,44,.45)", borderRadius:8, padding:"6px 16px", marginBottom:14 }}>
            <span style={{ fontSize:14 }}>🏺</span>
            <span style={{ fontSize:13, fontWeight:900, letterSpacing:1.5, color:"#fff", textTransform:"uppercase" }}>Famous Kulhad Pizza in Vadodara</span>
          </div>

          <p className="a3" style={{ fontSize:"clamp(13px,3.5vw,15px)", color:"rgba(255,255,255,.6)", maxWidth:400, lineHeight:1.75, marginBottom:30 }}>
            Vadodara's go-to spot for cheesy kulhad pizzas, loaded burgers, crispy fries & thick shakes.<br/>
            <strong style={{ color:"#fff" }}>Starting at just ₹40!</strong>
          </p>

          <div className="a4" style={{ display:"flex", gap:11, flexWrap:"wrap", justifyContent:"center" }}>
            <a href="#menu" className="btn-r" style={{ fontSize:"clamp(13px,3.5vw,15px)" }}>🍕 View Menu</a>
            <a href={WA} className="btn-w" style={{ fontSize:"clamp(13px,3.5vw,15px)" }}>💬 WhatsApp Order</a>
          </div>

          {/* Stats */}
          <div className="a4" style={{ display:"flex", gap:"clamp(18px,5vw,52px)", marginTop:44, flexWrap:"wrap", justifyContent:"center" }}>
            {[["200+","Customers Daily"],["₹40","Starting Price"],["7+","Menu Categories"]].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div className="bebas" style={{ fontSize:"clamp(34px,8vw,44px)", color:"#fff", lineHeight:1 }}>{v}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,.45)", fontWeight:900, letterSpacing:1.5, textTransform:"uppercase", marginTop:3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:56, marginTop:-2 }}>
          <path d="M0,28 Q360,0 720,28 Q1080,56 1440,28 L1440,56 L0,56 Z" fill={C.offWhite}/>
        </svg>
      </section>

      {/* ── FEATURED ── */}
      <section id="featured" style={{ padding:"56px 16px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <span className="stag" style={{ background:`${C.navy}14`, color:C.navy }}>⭐ Must Try</span>
          <h2 className="bebas" style={{ fontSize:"clamp(36px,7vw,62px)", letterSpacing:2, marginTop:10, color:C.navy }}>FEATURED ITEMS</h2>
        </div>

        <div className="feat-grid">
          {FEATURED.map(item => (
            <div key={item.name} className="fcard hg" style={{ background:item.bg, color:"#fff" }}>
              <span className="stag" style={{ background:"rgba(255,255,255,.18)", color:"#fff", fontSize:9, marginBottom:10, display:"inline-block" }}>{item.tag}</span>
              <div style={{ fontSize:"clamp(36px,9vw,52px)", margin:"8px 0" }}>{item.emoji}</div>
              <div style={{ fontWeight:900, fontSize:"clamp(13px,3.2vw,16px)", marginBottom:4, lineHeight:1.2 }}>{item.name}</div>
              <div style={{ fontSize:11, opacity:.72, marginBottom:10, lineHeight:1.5 }}>{item.desc}</div>
              <div className="bebas" style={{ fontSize:"clamp(20px,4.5vw,30px)" }}>{item.price}</div>
            </div>
          ))}
        </div>

        {/* Combos */}
        <div style={{ marginTop:36 }}>
          <div style={{ textAlign:"center", marginBottom:22 }}>
            <span className="stag" style={{ background:`${C.red}12`, color:C.red }}>🔥 Best Deals</span>
            <h3 className="bebas" style={{ fontSize:"clamp(28px,6vw,48px)", letterSpacing:2, marginTop:8, color:C.navy }}>COMBO OFFERS</h3>
          </div>
          <div className="combo-grid">
            {[
              { title:"Student Special 🎓", desc:"1 Veg Burger + Fries + Thums Up", price:"₹99" },
              { title:"Pizza Deal 🍕", desc:"1 Onion Cheese Pizza + Cheese Wafers + Coke + Thums Up", price:"₹99" },
            ].map(c => (
              <div key={c.title} className="hg" style={{ background:"#fff", border:`2px solid ${C.navy}1a`, borderRadius:18, padding:"20px 18px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:14, boxShadow:`0 4px 18px rgba(43,60,121,.08)` }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:900, fontSize:"clamp(13px,3.5vw,16px)", color:C.navy, marginBottom:5 }}>{c.title}</div>
                  <div style={{ fontSize:"clamp(11px,3vw,13px)", color:"#777", lineHeight:1.55 }}>{c.desc}</div>
                </div>
                <div className="bebas" style={{ fontSize:"clamp(32px,7vw,42px)", color:C.red, whiteSpace:"nowrap", flexShrink:0 }}>{c.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" style={{ background:C.navy, padding:"60px 0", position:"relative" }}>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:50, position:"absolute", top:-2, left:0 }}>
          <path d="M0,25 Q360,50 720,25 Q1080,0 1440,25 L1440,0 L0,0 Z" fill={C.offWhite}/>
        </svg>

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 16px" }}>
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <span className="stag" style={{ background:"rgba(255,255,255,.14)", color:"#fff" }}>📋 Full Menu</span>
            <h2 className="bebas" style={{ fontSize:"clamp(36px,7vw,62px)", letterSpacing:2, marginTop:10, color:"#fff" }}>WHAT WE SERVE</h2>
            <p style={{ color:"rgba(255,255,255,.5)", fontSize:"clamp(12px,3vw,14px)", marginTop:8 }}>Fresh & made to order every time</p>
          </div>

          {/* Category tabs */}
          <div className="tscroll" style={{ marginBottom:24 }}>
            <div className="trow">
              {Object.keys(MENU).map(cat => (
                <button key={cat} className={`mtab ${activeTab===cat?"on":"off"}`} onClick={() => setActiveTab(cat)}>
                  <span>{MENU[cat].emoji}</span>{cat}
                </button>
              ))}
            </div>
          </div>

          <div className="menu-grid">
            {MENU[activeTab].items.map(item => (
              <div key={item.name} className="mitem">
                <div style={{ display:"flex", alignItems:"center", gap:10, flex:1, minWidth:0 }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{MENU[activeTab].emoji}</span>
                  <span style={{ fontWeight:700, fontSize:"clamp(12px,3.2vw,14px)", color:"#1a1a1a", lineHeight:1.3 }}>
                    {item.name}
                    {item.special && <span className="sbadge">Chef's Pick</span>}
                  </span>
                </div>
                <div className="bebas" style={{ fontSize:"clamp(18px,4vw,22px)", color: MENU[activeTab].color, marginLeft:10, flexShrink:0 }}>₹{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:50, position:"absolute", bottom:-2, left:0 }}>
          <path d="M0,25 Q360,0 720,25 Q1080,50 1440,25 L1440,50 L0,50 Z" fill={C.offWhite}/>
        </svg>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ padding:"56px 16px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <span className="stag" style={{ background:`${C.green}15`, color:C.green }}>📸 Vibe Check</span>
          <h2 className="bebas" style={{ fontSize:"clamp(36px,7vw,62px)", letterSpacing:2, marginTop:10, color:C.navy }}>THE EXPERIENCE</h2>
        </div>

        <div className="vibe-grid" style={{ marginBottom:20 }}>
          {[
            { e:"🏺", l:"Kulhad Pizza", bg:C.red },
            { e:"🍕", l:"Fresh Pizza", bg:C.navy },
            { e:"🥤", l:"Shakes", bg:C.navyLight },
            { e:"🍔", l:"Burgers", bg:C.green },
            { e:"🥪", l:"Sandwiches", bg:C.red },
            { e:"🍟", l:"Fries", bg:C.navyDark },
          ].map(item => (
            <div key={item.l} className="hg" style={{ background:item.bg, borderRadius:14, aspectRatio:"1", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5 }}>
              <span style={{ fontSize:"clamp(26px,7vw,44px)" }}>{item.e}</span>
              <span style={{ fontWeight:800, fontSize:"clamp(7px,1.8vw,11px)", color:"rgba(255,255,255,.75)", letterSpacing:.5, textTransform:"uppercase", textAlign:"center", padding:"0 3px" }}>{item.l}</span>
            </div>
          ))}
        </div>

        {/* Ambience strip */}
        <div style={{ background:"#fff", borderRadius:18, padding:"22px 16px", display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"clamp(12px,4vw,28px)", boxShadow:`0 4px 20px rgba(43,60,121,.08)`, border:`1px solid ${C.navy}0d` }}>
          {[["🪑","Colourful Seating"],["✨","Fairy Lights"],["🌙","Open till 11 PM"],["🎓","Student Friendly"],["⚡","Quick Service"]].map(([e,l]) => (
            <div key={l} style={{ textAlign:"center", minWidth:70 }}>
              <div style={{ fontSize:"clamp(20px,5vw,26px)", marginBottom:4 }}>{e}</div>
              <div style={{ fontWeight:800, fontSize:"clamp(9px,2.5vw,11px)", color:"#888" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" style={{ background:`linear-gradient(135deg, ${C.navy}, ${C.navyDark})`, padding:"56px 16px" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <span className="stag" style={{ background:"rgba(255,255,255,.14)", color:"#fff" }}>📍 Find Us</span>
            <h2 className="bebas" style={{ fontSize:"clamp(36px,7vw,62px)", letterSpacing:2, marginTop:10, color:"#fff" }}>LOCATION</h2>
          </div>

          <div className="loc-grid">
            <div style={{ borderRadius:18, background:"rgba(255,255,255,.07)", border:"2px solid rgba(255,255,255,.18)", aspectRatio:"4/3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:14, padding:24 }}>
              <span style={{ fontSize:"clamp(40px,12vw,64px)" }}>🗺️</span>
              <div style={{ color:"rgba(255,255,255,.7)", fontWeight:700, fontSize:14, textAlign:"center", lineHeight:1.6 }}>
                Manager's Kitchen<br/>Vadodara, Gujarat, India
              </div>
              <a href="https://maps.google.com/?q=Managers+Kitchen+Vadodara" target="_blank" rel="noopener noreferrer" className="btn-w" style={{ fontSize:13, padding:"10px 20px" }}>
                📍 Open Google Maps
              </a>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:18, justifyContent:"center" }}>
              {[
                { icon:"📍", label:"Address", val:"Manager's Kitchen\nVadodara, Gujarat, India" },
                { icon:"🕐", label:"Hours", val:"12:00 PM – 11:00 PM\nOpen all days" },
                { icon:"💬", label:"Order", val:"WhatsApp us your order\nFast confirmation guaranteed" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <div style={{ fontSize:20, flexShrink:0, width:44, height:44, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.18)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center" }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight:900, fontSize:10, color:C.red, letterSpacing:2, textTransform:"uppercase", marginBottom:3 }}>{label}</div>
                    <div style={{ fontWeight:600, fontSize:"clamp(12px,3vw,14px)", color:"rgba(255,255,255,.75)", whiteSpace:"pre-line", lineHeight:1.65 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ORDER CTA ── */}
      <section id="order" style={{ padding:"64px 16px", textAlign:"center", position:"relative", overflow:"hidden" }} className="stripe">
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 70% 80% at 50% 50%, ${C.navy}07, transparent)`, pointerEvents:"none" }}/>
        <div style={{ maxWidth:520, margin:"0 auto", position:"relative" }}>
          <span className="stag" style={{ background:`${C.green}14`, color:C.green, marginBottom:14, display:"inline-block" }}>🛵 Quick Order</span>
          <h2 className="bebas" style={{ fontSize:"clamp(44px,11vw,78px)", letterSpacing:2, lineHeight:.88, color:C.navy, marginBottom:14 }}>
            HUNGRY?<br/><span style={{ color:C.red }}>ORDER NOW!</span>
          </h2>
          <p style={{ color:"#888", fontSize:"clamp(13px,3.5vw,15px)", lineHeight:1.7, marginBottom:32 }}>
            Tap below — send your order on WhatsApp and we'll confirm it instantly. Fresh, fast & affordable.
          </p>
          <a href={WA} className="btn-g">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Order on WhatsApp
          </a>
          <div style={{ marginTop:16, fontSize:12, color:"#bbb" }}>Open 12 PM – 11 PM · Every day 🕐</div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:C.navyDark, padding:"44px 16px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="footer-grid" style={{ marginBottom:36 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:13 }}>
                <span style={{ fontSize:24 }}>🏺</span>
                <div className="bebas" style={{ fontSize:17, letterSpacing:2, color:"#fff" }}>MANAGER'S KITCHEN</div>
              </div>
              <p style={{ color:"rgba(255,255,255,.38)", fontSize:13, lineHeight:1.8, maxWidth:250, marginBottom:18 }}>
                Vadodara's favourite street food hub. Good food, great vibes, unbeatable prices.
              </p>
              <div style={{ display:"flex", gap:10 }}>
                {[
                  { e:"📸", href:"https://instagram.com", t:"Instagram" },
                  { e:"🗺️", href:"https://maps.google.com/?q=Managers+Kitchen+Vadodara", t:"Google Maps" },
                  { e:"💬", href:WA, t:"WhatsApp" },
                ].map(({ e, href, t }) => (
                  <a key={t} href={href} target="_blank" rel="noopener noreferrer" title={t}
                    style={{ width:38, height:38, background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.1)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", fontSize:17, textDecoration:"none", transition:"background .2s" }}
                    onMouseEnter={ev => ev.currentTarget.style.background="rgba(255,255,255,.18)"}
                    onMouseLeave={ev => ev.currentTarget.style.background="rgba(255,255,255,.08)"}>
                    {e}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight:900, fontSize:10, letterSpacing:2, color:C.red, textTransform:"uppercase", marginBottom:14 }}>Quick Links</div>
              {[["#featured","Featured Items"],["#menu","Full Menu"],["#gallery","Gallery"],["#location","Location"],["#order","Order Now"]].map(([h,l]) => (
                <a key={h} href={h} style={{ display:"block", fontWeight:700, fontSize:13, color:"rgba(255,255,255,.38)", textDecoration:"none", marginBottom:9, transition:"color .2s" }}
                  onMouseEnter={ev => ev.currentTarget.style.color="#fff"}
                  onMouseLeave={ev => ev.currentTarget.style.color="rgba(255,255,255,.38)"}>
                  {l}
                </a>
              ))}
            </div>

            <div>
              <div style={{ fontWeight:900, fontSize:10, letterSpacing:2, color:C.green, textTransform:"uppercase", marginBottom:14 }}>Info</div>
              <div style={{ fontWeight:600, fontSize:13, color:"rgba(255,255,255,.42)", lineHeight:2 }}>
                <div>📍 Vadodara, Gujarat</div>
                <div>🕐 12 PM – 11 PM Daily</div>
                <div style={{ color:C.greenLight, fontWeight:800 }}>🟢 Open Now</div>
                <div style={{ color:C.red, fontWeight:900, marginTop:6 }}>Starting at just ₹40!</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:18, display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:10 }}>
            <div style={{ color:"rgba(255,255,255,.22)", fontSize:12 }}>© 2025 Manager's Kitchen, Vadodara</div>
            <div style={{ color:"rgba(255,255,255,.18)", fontSize:12 }}>Made with ❤️ for Vadodara's food lovers</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={WA} className="wa-float" title="Order on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}