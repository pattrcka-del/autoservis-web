export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "white" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #222"
      }}>
        <h2>
          AUTO <span style={{ color: "red" }}>SERVIS</span>
        </h2>
        <div>
          <a href="#sluzby" style={{ margin: "0 10px", color: "#ccc" }}>Služby</a>
          <a href="#kontakt" style={{ margin: "0 10px", color: "#ccc" }}>Kontakt</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        padding: "100px 40px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div>
          <h1 style={{ fontSize: "48px" }}>
            Profesionální autoservis
          </h1>
          <p style={{ marginTop: "20px", color: "#aaa" }}>
            Rychlý, spolehlivý servis pro váš vůz.
          </p>

          <button style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "red",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            Objednat servis
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
          style={{ width: "400px", borderRadius: "10px" }}
        />
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" style={{ padding: "60px 40px" }}>
        <h2>Naše služby</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}>

          {[
            "Diagnostika",
            "Brzdy",
            "Pneuservis",
            "Klimatizace",
            "Motor",
            "STK příprava"
          ].map((s, i) => (
            <div key={i} style={{
              padding: "20px",
              background: "#111",
              border: "1px solid #222"
            }}>
              <h3>{s}</h3>
              <p style={{ color: "#aaa" }}>
                Kvalitní servis pro vaše auto.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h2>Kontakt</h2>
        <p style={{ marginTop: "20px" }}>+420 123 456 789</p>
        <p>info@autoservis.cz</p>
      </section>

    </main>
  );
}
