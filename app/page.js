"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const onScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);

  return (
    <main style={{ fontFamily: "Arial", background: "#000", color: "#fff" }}>

      <style>
        {`
          .fade {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }

          .fade.show {
            opacity: 1;
            transform: translateY(0);
          }

          .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          h1 {
            font-size: 64px;
            margin-bottom: 20px;
          }

          .section {
            padding: 120px 40px;
            text-align: center;
          }

          .services {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 40px;
          }

          .card {
            background: #111;
            padding: 30px;
            border-radius: 10px;
            transition: transform .3s ease;
          }

          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      {/* HERO */}
      <section className="hero fade">
        <h1>Autoservis budoucnosti</h1>
        <p style={{ color: "#aaa" }}>
          Rychlost. Kvalita. Důvěra.
        </p>
      </section>

      {/* IMAGE BLOCK */}
      <section className="fade">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover"
          }}
        />
      </section>

      {/* TEXT BLOCK */}
      <section className="section fade">
        <h1>Perfektní péče o váš vůz</h1>
        <p style={{ color: "#aaa", maxWidth: "600px", margin: "auto" }}>
          Moderní autoservis s důrazem na detail, přesnost a zákaznický komfort.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section fade">
        <h1>Naše služby</h1>

        <div className="services">
          {[
            "Diagnostika",
            "Brzdový servis",
            "Pneuservis",
            "Klimatizace",
            "Motor",
            "STK"
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s}</h3>
              <p style={{ color: "#aaa" }}>
                Precizní servis bez kompromisů.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section fade">
        <h1>Objednejte se ještě dnes</h1>
        <button style={{
          marginTop: "20px",
          padding: "15px 30px",
          background: "red",
          border: "none",
          cursor: "pointer"
        }}>
          Kontaktovat
        </button>
      </section>

    </main>
  );
}
