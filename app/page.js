"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallax = document.querySelector(".parallax");

      if (parallax) {
        parallax.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "Arial" }}>

      <style>
        {`
          .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          .parallax-container {
            height: 80vh;
            overflow: hidden;
            position: relative;
          }

          .parallax {
            position: absolute;
            width: 100%;
            height: 120%;
            object-fit: cover;
            top: -10%;
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
      <section className="hero">
        <h1 style={{ fontSize: "64px" }}>
          Autoservis budoucnosti
        </h1>

        <p style={{ color: "#aaa" }}>
          Rychlost. Kvalita. Důvěra.
        </p>
      </section>

      {/* PARALLAX IMAGE */}
      <section className="parallax-container">
        <img
          className="parallax"
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
        />
      </section>

      {/* TEXT */}
      <section className="section">
        <h1>Prémiový servis</h1>
        <p style={{ color: "#aaa" }}>
          Technologie a zkušenosti, na které se můžete spolehnout.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h1>Naše služby</h1>

        <div className="services">
          {[
            "Diagnostika",
            "Brzdy",
            "Pneuservis",
            "Klimatizace",
            "Motor",
            "STK"
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s}</h3>
              <p style={{ color: "#aaa" }}>
                Kvalita bez kompromisů.
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
``
