import { Wifi, SquareParking, Martini, Flower2, MapPin, AlarmClock } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "WiFi de alta velocidad",
    desc: "Conexión rápida en todo el hotel, ideal para trabajar o mantenerte conectado.",
  },
  {
    icon: SquareParking,
    title: "Estacionamiento",
    desc: "Disponible para huéspedes, sin costo adicional.",
  },
  {
    icon: Martini,
    title: "Lounge bar",
    desc: "Un espacio elegante para una copa antes o después de salir a recorrer Talca.",
  },
  {
    icon: Flower2,
    title: "Jardín interior",
    desc: "Ideal para relajarte, leer, conversar o simplemente reconectar con la naturaleza.",
  },
  {
    icon: MapPin,
    title: "Ubicación inmejorable",
    desc: "En el corazón de Talca, a solo pasos de la Plaza de Armas.",
  },
  {
    icon: AlarmClock,
    title: "Servicio de despertar",
    desc: "Apaga tu teléfono con tranquilidad: nosotros nos encargamos de despertarte.",
  },
];

export function Amenities() {
  return (
    <section id="amenidades" className="bg-bg-warm py-[clamp(96px,12vw,160px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-14">
          <p className="font-serif-italic text-[26px] text-botanical">
            Comodidades
          </p>
          <h2 className="font-sans text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] mt-3">
            Todo lo que necesitas para una estadía perfecta
          </h2>
          <p className="text-text-muted text-[15px] leading-[1.75] mt-3.5">
            Pensado para el viajero moderno: los detalles que hacen la
            diferencia, disponibles durante toda tu estadía en el Maule.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {amenities.map((a) => (
            <div key={a.title} className="flex gap-3.5">
              <div className="w-[38px] h-[38px] rounded-full bg-dark text-bg-light flex items-center justify-center shrink-0">
                <a.icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-sans text-[13.5px] font-semibold tracking-[0.03em]">
                  {a.title}
                </h4>
                <p className="mt-1 text-text-muted text-sm leading-[1.6]">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
