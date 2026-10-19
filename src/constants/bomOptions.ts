import { TipoArandela } from '../domain/models/bom.types';

export const NORMAS_DISPONIBLES = ['ASME B16.5', 'ASME B16.47 Serie A'];

export const CLASES_DISPONIBLES = ['150', '300'];

export const TIPOS_FIJACION_DISPONIBLES = ['Tornillo', 'Espárrago'];

export const TIPOS_ARANDELA_DISPONIBLES: TipoArandela[] = ['Doble', 'Sencilla'];

export const MATERIALES_TORNILLERIA = [
  'A193 B7 / A194 2H (Acero al Carbono Aleado)',
  'A193 B8 Cl.1 / A194 8 (Inox AISI 304)',
  'A193 B8M Cl.1 / A194 8M (Inox AISI 316)',
  'A320 L7 / A194 7L (Baja Temperatura)',
  'Grado 5 / Galvanizado',
];

export const DIAMETROS_ASME_B16_5 = [
  '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"', '2"', '2-1/2"', '3"', '3-1/2"',
  '4"', '5"', '6"', '8"', '10"', '12"', '14"', '16"', '18"', '20"', '24"'
];

export const DIAMETROS_ASME_B16_47_A = [
  '26"', '28"', '30"', '32"', '34"', '36"', '38"', '40"', '42"', '44"',
  '46"', '48"', '50"', '52"', '54"', '56"', '58"', '60"'
];

export const DIAMETROS_POR_NORMA: Record<string, string[]> = {
  'ASME B16.5': DIAMETROS_ASME_B16_5,
  'ASME B16.47 Serie A': DIAMETROS_ASME_B16_47_A,
};