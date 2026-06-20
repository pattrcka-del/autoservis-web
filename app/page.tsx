import {
  Phone,
  Wrench,
  Shield,
  Clock,
  Car,
  Settings,
  Gauge,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Diagnostika",
      icon: <Gauge className="w-8 h-8 text-red-500" />,
      text: "Moderní diagnostika všech běžných značek."
    },
    {
      title: "Brzdový servis",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      text: "Kontrola a výměna brzdových komponentů."
    },
    {
      title: "Pneuservis",
      icon: <Car className="w-8 h-8 text-red-500" />,
      text: "Přezutí, vyvážení a servis kol."
    },
    {
      title: "Klimatizace",
      icon: <Settings className="w-8 h-8 text-red-500" />,
      text: "Plnění a servis klimatizací."
    },
    {
      title: "Servis motoru",
      icon: <Wrench className="w-8 h-8 text-red-500" />,
      text: "Údržba i rozsáhlé opravy motorů."
    },
    {
      title: "STK příprava",
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      text: "Připravíme vozidlo na technickou kontrolu."
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold">
            AUTO<span className="text-red-500">SERVIS</span>
          </div>
          <nav className="hidden md:flex gap-8 text-zinc-300">
            <a href="#sluzby">Služby</a>
            <a href="#onas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <button className="bg-red-600 px-5 py-3 rounded-lg font-semibold">
            Objednat servis
          </button>
        </div>
      </header>

      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-500 font-semibold">
              Profesionální servis vozidel
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-4">
              Profesionální autoservis pro váš klid na cestách
            </h1>
            <p className="text-zinc-400 text-lg mt-6">
              Postaráme se o váš vůz rychle, kvalitně a za férovou cenu.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-red-600 px-8 py-4 rounded-lg font-semibold">
                Objednat servis
              </button>
              <button className="border border-zinc-700 px-8 py-4 rounded-lg">
                Zavolat nyní
              </button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
            alt="Autoservis"
            className="rounded-2xl h-[600px] object-cover w-full"
          />
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[Shield, Clock, Gauge, Wrench].map((Icon, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-xl">
              <Icon className="text-red-500 mb-4" />
              <h3 className="font-bold text-xl">Benefit</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="sluzby" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-xl">
              {s.icon}
              <h3 className="text-xl mt-4">{s.title}</h3>
              <p className="text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="py-24 text-center">
        <Phone className="mx-auto text-red-500 mb-4" size={40} />
        <h2 className="text-4xl font-bold">Kontaktujte nás</h2>
        <p className="mt-4">+420 123 456 789</p>
      </section>

    </main>
  );
}
``
