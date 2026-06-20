"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "Arial" }}>

      <style>
        {`
          section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
          }

          h1 {
            font-size: 64px;
            text-align: center;
          }

          p {
            color: #aaa;
            margin-top: 20px;
            font-size: 18px;
          }

          .image-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow: hidden;
          }

          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(${1 + scroll * 0.0005});
            transition: transform 0.1s ease;
          }
        `}
      </style>

      {/* HERO */}
      <section>
        <h1>Autoservis budoucnosti</h1>
        <p>Rychlost. Kvalita. Důvěra.</p>
      </section>

      {/* PARALLAX IMAGE */}
      <div className="image-wrapper">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
        />
      </div>

      {/* TEXT SECTIONS */}
      <section>
        <h1>Precizní servis</h1>
        <p>Každý detail je důležitý</p>
      </section>

      <section>
        <h1>Moderní technologie</h1>
        <p>Diagnostika nové generace</p>
      </section>

      <section>
        <h1>Objednejte se</h1>
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
