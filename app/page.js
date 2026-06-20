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
          html {
            scroll-behavior: smooth;
          }

          section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            position: relative;
          }

          h1 {
            font-size: 64px;
            transition: all 0.6s ease;
          }

          p {
            color: #aaa;
            margin-top: 20px;
          }

          .sticky {
            position: sticky;
            top: 0;
          }

          .image {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            transform: scale(${1 + scroll * 0.0006});
            filter: brightness(${1 - scroll * 0.0005});
            transition: all 0.1s ease;
          }

          .fade {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }

          .fade.show {
            opacity: 1;
            transform: translateY(0);
          }

          button {
            margin-top: 30px;
            padding: 15px 30px;
            background: red;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
          }
        `}
      </style>

      {/* HERO */}
      <section>
        <h1>Autoservis budoucnosti</h1>
        <p>Rychlost. Kvalita. Důvěra.</p>
      </section>

      {/* STICKY IMAGE PARALLAX */}
      <section className="sticky">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
        />
      </section>

      {/* TEXT SECTIONS */}
      <section>
        <h1>Perfektní péče</h1>
        <p>Každý detail má význam</p>
      </section>

      <section>
        <h1>Moderní technologie</h1>
        <p>Diagnostika nové generace</p>
      </section>

      <section>
        <h1>Objednejte se</h1>
        <button>Kontaktovat</button>
      </section>

    </main>
  );
}
