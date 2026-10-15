import {
  Tv,
  Wifi,
  ShowerHead,
  Coffee,
  Sparkles,
  Check,
  BedDouble,
  Sofa,
  DoorOpen,
  Baby,
  Armchair,
  Gift,
} from "lucide-react";

const amenityIcons: { match: RegExp; icon: typeof Check }[] = [
  { match: /tv|televisor/i, icon: Tv },
  { match: /wifi/i, icon: Wifi },
  { match: /baño/i, icon: ShowerHead },
  { match: /café|agua/i, icon: Coffee },
  { match: /limpieza/i, icon: Sparkles },
  { match: /zona de estar/i, icon: Sofa },
  { match: /balcón/i, icon: DoorOpen },
  { match: /cuna/i, icon: Baby },
  { match: /habitaciones?/i, icon: DoorOpen },
  { match: /aire acondicionado/i, icon: Sparkles },
  { match: /cama king/i, icon: BedDouble },
  { match: /cama queen/i, icon: BedDouble },
  { match: /plaza y media/i, icon: BedDouble },
  { match: /mobiliario/i, icon: Armchair },
  { match: /sala independiente/i, icon: Sofa },
  { match: /detalle de bienvenida/i, icon: Gift },
];

export function iconForAmenity(label: string) {
  return amenityIcons.find((a) => a.match.test(label))?.icon ?? Check;
}
