import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { BarMenu, type MenuSection } from "@/components/BarMenu";

export const metadata: Metadata = {
  title: "Aldo'Bar | Hotel Marcos Gamero",
  description:
    "Aldo'Bar, el corazón íntimo del Hotel Marcos Gamero en Talca: coctelería de autor en un ambiente boutique.",
};

const schedule = [
  { label: "Cena", hours: "18:15 – 22:15 hrs", days: "Lunes a domingo" },
  { label: "Bar", hours: "18:00 – 23:30 hrs", days: "Martes a domingo" },
];

const menu: MenuSection[] = [
  {
    category: "Cocteles de autor",
    icon: "cocteles",
    items: [
      { name: "Russo Sour", desc: "Pisco, limón de pica, clara de huevo, amargo de angostura", price: "$7.500" },
      { name: "Maule Spritz", desc: "Espumante del valle, Aperol, agua tónica, naranja", price: "$7.000" },
      { name: "Jardín de Invierno", desc: "Gin, romero del patio, jugo de pera, jengibre", price: "$7.500" },
    ],
  },
  {
    category: "Clásicos",
    icon: "clasicos",
    items: [
      { name: "Pisco Sour", desc: "Receta tradicional, limón de pica", price: "$5.500" },
      { name: "Negroni", desc: "Gin, vermut rosso, Campari", price: "$6.500" },
      { name: "Old Fashioned", desc: "Whisky, azúcar, angostura", price: "$6.500" },
    ],
  },
  {
    category: "Para compartir",
    icon: "compartir",
    items: [
      { name: "Tabla de quesos del Maule", desc: "Selección de quesos locales, frutos secos, miel", price: "$9.500" },
      { name: "Croquetas de la abuela", desc: "Jamón serrano y queso, salsa alioli", price: "$6.000" },
      { name: "Tostadas de palta y camarón", desc: "Pan de masa madre, palta, camarón, limón", price: "$7.000" },
    ],
  },
  {
    category: "Sin alcohol",
    icon: "sinalcohol",
    items: [
      { name: "Limonada de hierbas del patio", desc: "Limón, menta y hierbas del jardín interior", price: "$4.000" },
      { name: "Agua tónica con especias", desc: "Tónica artesanal, cítricos, especias de estación", price: "$3.500" },
    ],
  },
];

const heroImage = {
  src: "/hotel/aldobar-barra.png",
  alt: "Barra de Aldo'Bar, con licores y sillas de terciopelo",
};

export default function AldoBarPage() {
  return (
    <ToastProvider>
      <Navbar compact />
      <main>
        {/* Hero a ancho completo */}
        <section className="relative h-[70svh] min-h-[440px] max-h-[640px] overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,15,18,0.45) 0%, rgba(13,15,18,0.15) 35%, rgba(13,15,18,0.55) 100%)",
            }}
          />

          <Link
            href="/"
            className="absolute top-24 md:top-28 left-6 md:left-10 inline-flex items-center gap-2 font-sans text-[13px] text-bg-light/90 hover:text-bg-light transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Volver al inicio
          </Link>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
            <p className="font-serif-italic text-[26px] text-bg-light">
              Encuentro
            </p>
            <h1 className="font-serif text-bg-light text-[clamp(2.4rem,6vw,4rem)] font-normal leading-[1.05] mt-3">
              Aldo&apos;Bar
            </h1>
            <p className="font-sans text-[14px] tracking-[0.1em] uppercase text-bg-light/80 mt-4">
              El corazón íntimo del hotel
            </p>
          </div>
        </section>

        {/* Presentación */}
        <section className="bg-bg-light py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <p className="text-text-muted text-[16px] leading-[1.85]">
              Un espacio boutique para quienes buscan algo distinto:
              coctelería de autor, ambiente sofisticado y una atmósfera
              cálida que invita a quedarse. Fusionamos detalles, música,
              diseño y sabores para crear un lugar único en Talca.
            </p>
            <p className="font-serif text-[20px] text-dark mt-6">
              Más que un bar, una nueva forma de vivir las noches en Talca.
            </p>
          </div>
        </section>

        {/* Horarios, franja compacta */}
        <section className="bg-bg-light py-8 md:py-10 border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-start gap-2 text-[13.5px] md:text-[14px] text-dark">
              <Clock3 className="w-4 h-4 text-text-muted shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-2 gap-y-1">
                {schedule.map((s, i) => (
                  <span key={s.label}>
                    <span className="font-medium">{s.label}</span>{" "}
                    <span className="text-text-muted">
                      {s.days}, {s.hours}
                    </span>
                    {i < schedule.length - 1 && (
                      <span className="text-text-muted mx-2 hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menú */}
        <section className="bg-bg-warm py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-[560px] mx-auto mb-14">
              <p className="font-serif-italic text-[26px] text-dark">
                Carta
              </p>
              <h2 className="text-[clamp(1.8rem,3vw,2.3rem)] font-normal mt-3">
                La carta de Aldo&apos;Bar
              </h2>
              <p className="text-text-muted text-[14px] leading-[1.75] mt-3">
                Una selección de ejemplo. La carta completa, sujeta a
                temporada, está disponible en el bar.
              </p>
            </div>

            <BarMenu menu={menu} />
          </div>
        </section>
      </main>
      <Footer />
    </ToastProvider>
  );
}
