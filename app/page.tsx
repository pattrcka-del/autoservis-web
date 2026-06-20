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
      {/* Header */}
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

          <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold">
            Objednat servis
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-500 font-semibold">
              Profesionální servis vozidel
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Profesionální autoservis pro váš klid na cestách
            </h1>

            <p className="text-zinc-400 text-lg mt-6">
              Postaráme se o váš vůz rychle, kvalitně a za férovou cenu.
              Servis všech běžných značek s důrazem na bezpečnost a
              spolehlivost.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-700">
                Objednat servis
              </button>

              <button className="border border-zinc-700 px-8 py-4 rounded-lg hover:border-red-500">
                Zavolat nyní
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
              alt="Autoservis"
              className="rounded-2xl object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield />,
              title: "Férové ceny"
            },
            {
              icon: <Clock />,
              title: "Rychlé termíny"
            },
            {
              icon: <Gauge />,
              title: "Moderní diagnostika"
            },
            {
              icon: <Wrench />,
              title: "Zkušení mechanici"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
            >
              <div className="text-red-500 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Naše služby
          </h2>

          <p className="text-zinc-400 text-center mb-14">
            Kompletní péče o váš automobil.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition"
              >
                {service.icon}

                <h3 className="text-2xl font-bold mt-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="onas" className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Servis, kterému můžete věřit
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Každému vozidlu věnujeme maximální péči. Naším cílem je
            dlouhodobá spokojenost zákazníků, transparentní komunikace
            a kvalitně odvedená práce.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Reference zákazníků
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Skvělý přístup a rychlé vyřízení.",
              "Férové ceny a profesionální jednání.",
              "Perfektní komunikace a kvalitní práce."
            ].map((review, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
              >
                <div className="text-red-500 mb-4">
                  ★★★★★
                </div>

                <p>{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Potřebujete servis nebo opravu?
          </h2>

          <p className="mt-4 text-lg">
            Kontaktujte nás ještě dnes a domluvte si termín.
          </p>

          <button className="mt-8 bg-black px-8 py-4 rounded-lg font-semibold">
            Objednat servis
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Phone className="mx-auto text-red-500 mb-4" size={40} />

          <h2 className="text-4xl font-bold">
            Kontaktujte nás
          </h2>

          <div className="mt-8 space-y-3 text-zinc-300">
            <p>+420 123 456 789</p>
            <p>info@autoservis.cz</p>
            <p>Po–Pá: 8:00–17:00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
