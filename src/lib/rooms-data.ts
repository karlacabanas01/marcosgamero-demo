export type RoomVariant = {
  name: string;
  bedType: string;
  price: string;
};

export type Room = {
  slug: string;
  tag: string;
  door: string;
  name: string;
  meta: string[];
  desc: string;
  longDesc: string;
  price: string;
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  amenities: string[];
  variants?: RoomVariant[];
};

export const rooms: Room[] = [
  {
    slug: "single",
    tag: "Single",
    door: "112",
    name: "Habitación Single",
    meta: ["16 m²", "1 cama", "2º piso"],
    desc: "Compacta y luminosa, pensada para el viajero que anda solo: TV por cable, baño privado y todo lo esencial, sin nada de más.",
    longDesc:
      "Pensada para estadías de negocios o viajes en solitario, la Habitación Single incluye TV de pantalla plana con canales por cable y baño privado. Disponible en cuatro variantes de cama según disponibilidad y presupuesto.",
    price: "desde $60.000",
    image: "/hotel/40HMG.jpg",
    alt: "Habitación Single con cama y cortinas junto a la ventana",
    gallery: [
      { src: "/hotel/40HMG.jpg", alt: "Cama y cortinas junto a la ventana" },
      { src: "/hotel/72HMG.jpg", alt: "Detalle de mesa y lámpara" },
    ],
    amenities: [
      "TV de pantalla plana con cable",
      "Wifi de alta velocidad",
      "Baño privado",
      "Agua y café de cortesía",
      "Limpieza diaria",
    ],
    variants: [
      {
        name: "Single Superior Super King",
        bedType: "1 cama Super King",
        price: "$76.000",
      },
      {
        name: "Single Superior King",
        bedType: "1 cama King",
        price: "$72.000",
      },
      {
        name: "Single Superior Queen",
        bedType: "1 cama Queen",
        price: "$68.000",
      },
      {
        name: "Mini Single Superior",
        bedType: "1 cama plaza y media",
        price: "$60.000",
      },
    ],
  },
  {
    slug: "familiares",
    tag: "Familiares",
    door: "204",
    name: "Habitación Familiar",
    meta: ["34 m²", "1 Queen + 2 Twin", "2º piso"],
    desc: "Más espacio y capacidad para venir con los niños o en grupo, con zona de estar y vigas a la vista junto al pasillo de fotografías.",
    longDesc:
      "Diseñada para familias o grupos de hasta cuatro personas, combina una cama Queen con dos camas Twin adicionales en una zona de estar independiente. Las vigas de madera a la vista y la cercanía al pasillo de fotografías familiares le dan un carácter propio, cálido y espacioso.",
    price: "$89.000",
    image: "/hotel/50HMG.jpg",
    alt: "Habitación Familiar con balcón y vista al centro de Talca",
    gallery: [
      { src: "/hotel/50HMG.jpg", alt: "Balcón con vista al centro de Talca" },
      { src: "/hotel/168HMG.jpg", alt: "Pasillo de fotografías familiares" },
    ],
    amenities: [
      "Zona de estar independiente",
      "Balcón privado",
      "Wifi de alta velocidad",
      "Baño privado",
      "Cuna disponible a pedido",
      "Limpieza diaria",
    ],
  },
  {
    slug: "matrimoniales",
    tag: "Matrimoniales",
    door: "301",
    name: "Habitación Matrimonial",
    meta: ["24 m²", "1 cama King", "3º piso"],
    desc: "Pensada para parejas: cama King, mobiliario de época restaurado y buena luz natural en la ala principal de la casona.",
    longDesc:
      "En la ala principal de la casona, esta habitación reúne cama King, mobiliario de época cuidadosamente restaurado y una luz natural generosa durante todo el día. Ideal para parejas que buscan una estadía tranquila con el carácter histórico del edificio.",
    price: "$72.000",
    image: "/hotel/218HMG.jpg",
    alt: "Habitación Matrimonial con escalera de hierro forjado y chimenea de mármol",
    gallery: [
      {
        src: "/hotel/218HMG.jpg",
        alt: "Escalera de hierro forjado junto a chimenea de mármol",
      },
      { src: "/hotel/184HMG.jpg", alt: "Salón con vigas y pintura de época" },
    ],
    amenities: [
      "Cama King",
      "Mobiliario de época restaurado",
      "Wifi de alta velocidad",
      "Baño privado",
      "Limpieza diaria",
    ],
  },
  {
    slug: "novios",
    tag: "Novios",
    door: "305",
    name: "Suite Novios",
    meta: ["42 m²", "1 King", "3º piso · Esquina"],
    desc: "La suite de esquina de la casona, con sala independiente y detalles especiales para una luna de miel o una ocasión a celebrar.",
    longDesc:
      "La suite de esquina de la casona, con sala independiente y los metros cuadrados más generosos del hotel. Pensada para una luna de miel o cualquier ocasión que merezca un detalle especial, combina el carácter histórico del edificio con comodidades pensadas para dos.",
    price: "$135.000",
    image: "/hotel/184HMG.jpg",
    alt: "Suite Novios con salón de vigas de madera y pintura de época",
    gallery: [
      { src: "/hotel/184HMG.jpg", alt: "Salón de vigas de madera y pintura de época" },
      { src: "/hotel/218HMG.jpg", alt: "Escalera de hierro forjado y chimenea" },
    ],
    amenities: [
      "Sala independiente",
      "Cama King",
      "Detalle de bienvenida",
      "Wifi de alta velocidad",
      "Baño privado",
      "Limpieza diaria",
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((r) => r.slug === slug);
}
