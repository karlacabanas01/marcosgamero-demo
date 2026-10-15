export type RoomVariant = {
  name: string;
  bedType: string;
  price: string;
  capacity?: string;
  desc?: string;
  longDesc?: string;
  amenities?: string[];
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
    tag: "Habitación",
    door: "112",
    name: "Single",
    meta: ["16 m²", "1 cama", "2º piso"],
    desc: "Compacta y luminosa, pensada para el viajero que anda solo: TV por cable, baño privado y todo lo esencial, sin nada de más.",
    longDesc:
      "Pensada para estadías de negocios o viajes en solitario, la Habitación Single incluye TV de pantalla plana con canales por cable y baño privado. Disponible en cuatro variantes de cama según disponibilidad y presupuesto.",
    price: "desde $60.000",
    image: "/hotel/single-habitacion.jpg",
    alt: "Habitación Single con cama, ventana y televisor de pantalla plana",
    gallery: [
      {
        src: "/hotel/single-habitacion.jpg",
        alt: "Habitación Single con cama, ventana y televisor de pantalla plana",
      },
      {
        src: "/hotel/single-escritorio.jpg",
        alt: "Escritorio con espejo circular y velador junto a la cama",
      },
      {
        src: "/hotel/single-bano.jpg",
        alt: "Baño privado con mueble de madera y azulejo verde",
      },
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
    tag: "Habitaciones Familiares",
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
    variants: [
      {
        name: "Familiar - 6 personas",
        bedType: "1 cama King, 1 cama Queen y 2 camas de plaza y media",
        price: "$145.000",
        capacity: "6 personas",
        desc: "2 habitaciones para familias grandes. 2 baños y 2 aires acondicionados. Terraza interior",
        longDesc:
          "Se incluyen 2 habitaciones conectadas, con 2 baños y 2 aires acondicionados. 1 cama King, 1 cama Queen más 2 camas de plaza y media.",
        amenities: [
          "2 habitaciones conectadas",
          "2 baños",
          "2 aires acondicionados",
          "1 cama King",
          "1 cama Queen",
          "2 camas de plaza y media",
        ],
      },
      {
        name: "Familiar doble Superior",
        bedType: "2 camas de plaza y media",
        price: "$85.000",
        desc: "Habitación Familiar Superior con dos camas de plaza y media",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 2 camas de tamaño plaza y media.",
      },
      {
        name: "Familiar Cuadruple",
        bedType: "4 camas de plaza y media",
        price: "$98.000",
        desc: "Habitación Familiar con cuatro camas de plaza y media",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece camas de plaza y media.",
      },
      {
        name: "Familiar King con terraza",
        bedType: "1 cama de plaza y media y 1 cama King",
        price: "$94.000",
        desc: "Habitación Familiar con una cama de plaza y media, una cama King y acceso a terraza.",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 2 camas, 1 de plaza y media y la otra tamaño King.",
      },
      {
        name: "Familiar Triple Superior",
        bedType: "3 camas de plaza y media",
        price: "$94.000",
        desc: "Habitación Familiar Superior con 3 camas de plaza y media.",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 3 camas de plaza y media.",
      },
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
