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
  /** Short label used in the rooms filter tabs. */
  filterLabel: string;
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
    filterLabel: "Single",
    tag: "Habitación",
    door: "112",
    name: "Single",
    meta: ["16 m²", "1 cama", "2º piso"],
    desc: "Compacta y luminosa, pensada para el viajero que anda solo: TV por cable, baño privado y todo lo esencial, sin nada de más.",
    longDesc:
      "Pensada para estadías de negocios o viajes en solitario, la Habitación Single incluye TV de pantalla plana con canales por cable y baño privado. Disponible en cuatro variantes de cama según disponibilidad y presupuesto.",
    price: "desde $65.000",
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
        name: "Mini Single Superior",
        bedType: "1 cama plaza y media",
        price: "$65.000",
      },
      {
        name: "Single Superior Queen",
        bedType: "1 cama Queen",
        price: "$70.000",
      },
      {
        name: "Single Superior King",
        bedType: "1 cama King",
        price: "$75.000",
      },
      {
        name: "Single Superior Super King",
        bedType: "1 cama Super King",
        price: "$76.000",
      },
    ],
  },
  {
    slug: "familiares",
    filterLabel: "Familiares",
    tag: "Habitaciones Familiares",
    door: "204",
    name: "Habitación Familiar",
    meta: ["34 m²", "1 Queen + 2 Twin", "2º piso"],
    desc: "Más espacio y capacidad para venir con los niños o en grupo, con zona de estar y vigas a la vista junto al pasillo de fotografías.",
    longDesc:
      "Diseñada para familias o grupos de hasta cuatro personas, combina una cama Queen con dos camas Twin adicionales en una zona de estar independiente. Las vigas de madera a la vista y la cercanía al pasillo de fotografías familiares le dan un carácter propio, cálido y espacioso.",
    price: "desde $85.000",
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
        name: "Doble Superior",
        bedType: "2 camas de plaza y media",
        price: "$85.000",
        desc: "Habitación Familiar Superior con dos camas de plaza y media",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 2 camas de tamaño plaza y media.",
      },
      {
        name: "Doble Superior Queen",
        bedType: "2 camas, una de ellas Queen",
        price: "$90.000",
      },
      {
        name: "Triple Superior",
        bedType: "3 camas de plaza y media",
        price: "$94.000",
        desc: "Habitación Familiar Superior con 3 camas de plaza y media.",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 3 camas de plaza y media.",
      },
      {
        name: "Cuádruple",
        bedType: "4 camas de plaza y media",
        price: "$98.000",
        desc: "Habitación Familiar con cuatro camas de plaza y media",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece camas de plaza y media.",
      },
      {
        name: "Queen Familiar",
        bedType: "Cama Queen y camas adicionales",
        price: "$98.000",
      },
      {
        name: "King Familiar",
        bedType: "1 cama de plaza y media y 1 cama King",
        price: "$94.000",
        desc: "Habitación Familiar con una cama de plaza y media, una cama King y acceso a terraza.",
        longDesc:
          "Esta habitación incluye TV de pantalla plana con canales por cable y baño privado. La unidad ofrece 2 camas, 1 de plaza y media y la otra tamaño King.",
      },
      {
        name: "Familiar",
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
    ],
  },
  {
    slug: "matrimoniales",
    filterLabel: "Matrimoniales",
    tag: "Matrimoniales",
    door: "301",
    name: "Habitación Matrimonial",
    meta: ["24 m²", "1 cama King", "3º piso"],
    desc: "Pensada para parejas: cama King, mobiliario de época restaurado y buena luz natural en la ala principal de la casona.",
    longDesc:
      "En la ala principal de la casona, esta habitación reúne cama King, mobiliario de época cuidadosamente restaurado y una luz natural generosa durante todo el día. Ideal para parejas que buscan una estadía tranquila con el carácter histórico del edificio.",
    price: "desde $85.000",
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
    variants: [
      {
        name: "Queen Superior",
        bedType: "1 cama Queen",
        price: "$85.000",
      },
      {
        name: "King",
        bedType: "1 cama King",
        price: "$90.000",
      },
      {
        name: "Super King",
        bedType: "1 cama Super King",
        price: "$96.000",
      },
      {
        name: "Super King con terraza",
        bedType: "1 cama Super King",
        price: "$98.000",
        desc: "Habitación matrimonial con cama Super King y acceso a terraza.",
      },
    ],
  },
  {
    slug: "novios",
    filterLabel: "Suite Novios",
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

/** A single bookable room: one variant of a category, or the category itself when it has no variants. */
export type RoomUnit = {
  slug: string;
  name: string;
  category: Room;
  bedType: string;
  capacity?: string;
  price: string;
  desc: string;
  longDesc: string;
  amenities: string[];
};

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getRoomUnits(room: Room): RoomUnit[] {
  if (!room.variants?.length) {
    return [
      {
        slug: slugify(room.name),
        name: room.name,
        category: room,
        bedType: room.meta[1] ?? "",
        price: room.price,
        desc: room.desc,
        longDesc: room.longDesc,
        amenities: room.amenities,
      },
    ];
  }
  return room.variants.map((v) => ({
    slug: slugify(v.name),
    name: v.name,
    category: room,
    bedType: v.bedType,
    capacity: v.capacity,
    price: v.price,
    desc: v.desc ?? room.desc,
    longDesc: v.longDesc ?? v.desc ?? room.desc,
    amenities: v.amenities ?? room.amenities,
  }));
}

export const roomUnits: RoomUnit[] = rooms.flatMap(getRoomUnits);

export function getRoomUnit(categorySlug: string, unitSlug: string) {
  return roomUnits.find(
    (u) => u.category.slug === categorySlug && u.slug === unitSlug,
  );
}

export function roomUnitHref(unit: RoomUnit) {
  return `/habitaciones/${unit.category.slug}/${unit.slug}`;
}
