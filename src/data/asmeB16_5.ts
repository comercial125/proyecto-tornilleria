export interface DatosBridaASME {
  numTaladros: number;
  diametroTaladro: string;
  diametroPerno: string;
  longitudEsparrago: string;
  longitudTornillo: string;
}

export const MATRIZ_ASME_B16_5: Record<string, DatosBridaASME> = {
  // --- CLASE 150 ---
  '1/2"_150': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '2-1/2"', longitudTornillo: '2"' },
  '3/4"_150': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '2-1/2"', longitudTornillo: '2"' },
  '1"_150': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '2-3/4"', longitudTornillo: '2-1/4"' },
  '1-1/4"_150': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '2-3/4"', longitudTornillo: '2-1/4"' },
  '1-1/2"_150': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '3"', longitudTornillo: '2-1/2"' },
  '2"_150': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/4"', longitudTornillo: '2-3/4"' },
  '2-1/2"_150': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '2-3/4"' },
  '3"_150': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '3"' },
  '3-1/2"_150': { numTaladros: 8, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '2-3/4"' },
  '4"_150': { numTaladros: 8, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '3"' },
  '5"_150': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '3-3/4"', longitudTornillo: '3-1/2"' },
  '6"_150': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4"', longitudTornillo: '3-1/2"' },
  '8"_150': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4-1/4"', longitudTornillo: '3-1/2"' },
  '10"_150': { numTaladros: 12, diametroTaladro: '1"', diametroPerno: '7/8"', longitudEsparrago: '4-1/2"', longitudTornillo: '4"' },
  '12"_150': { numTaladros: 12, diametroTaladro: '1"', diametroPerno: '7/8"', longitudEsparrago: '4-3/4"', longitudTornillo: '4"' },
  '14"_150': { numTaladros: 12, diametroTaladro: '1-1/8"', diametroPerno: '1"', longitudEsparrago: '5-1/4"', longitudTornillo: '4-1/2"' },
  '16"_150': { numTaladros: 16, diametroTaladro: '1-1/8"', diametroPerno: '1"', longitudEsparrago: '5-1/2"', longitudTornillo: '4-1/2"' },
  '18"_150': { numTaladros: 16, diametroTaladro: '1-1/4"', diametroPerno: '1-1/8"', longitudEsparrago: '6"', longitudTornillo: '5"' },
  '20"_150': { numTaladros: 20, diametroTaladro: '1-1/4"', diametroPerno: '1-1/8"', longitudEsparrago: '6-1/4"', longitudTornillo: '5-1/2"' },
  '24"_150': { numTaladros: 20, diametroTaladro: '1-3/8"', diametroPerno: '1-1/4"', longitudEsparrago: '7"', longitudTornillo: '6"' },

  // --- CLASE 300 ---
  '1/2"_300': { numTaladros: 4, diametroTaladro: '5/8"', diametroPerno: '1/2"', longitudEsparrago: '2-3/4"', longitudTornillo: '2-1/4"' },
  '3/4"_300': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3"', longitudTornillo: '2-1/2"' },
  '1"_300': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/4"', longitudTornillo: '2-1/2"' },
  '1-1/4"_300': { numTaladros: 4, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '2-3/4"' },
  '1-1/2"_300': { numTaladros: 4, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '3-3/4"', longitudTornillo: '3"' },
  '2"_300': { numTaladros: 8, diametroTaladro: '3/4"', diametroPerno: '5/8"', longitudEsparrago: '3-1/2"', longitudTornillo: '3"' },
  '2-1/2"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4"', longitudTornillo: '3-1/4"' },
  '3"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4-1/4"', longitudTornillo: '3-1/2"' },
  '3-1/2"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4-1/2"', longitudTornillo: '3-1/2"' },
  '4"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4-1/2"', longitudTornillo: '3-3/4"' },
  '5"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '4-3/4"', longitudTornillo: '3-3/4"' },
  '6"_300': { numTaladros: 8, diametroTaladro: '7/8"', diametroPerno: '3/4"', longitudEsparrago: '5"', longitudTornillo: '4-1/2"' },
  '8"_300': { numTaladros: 8, diametroTaladro: '1"', diametroPerno: '7/8"', longitudEsparrago: '5-1/2"', longitudTornillo: '4"' },
  '10"_300': { numTaladros: 16, diametroTaladro: '1-1/8"', diametroPerno: '1"', longitudEsparrago: '6-1/4"', longitudTornillo: '5-1/2"' },
  '12"_300': { numTaladros: 16, diametroTaladro: '1-1/4"', diametroPerno: '1-1/8"', longitudEsparrago: '6-3/4"', longitudTornillo: '6"' },
  '14"_300': { numTaladros: 20, diametroTaladro: '1-1/4"', diametroPerno: '1-1/8"', longitudEsparrago: '7"', longitudTornillo: '6-1/2"' },
  '16"_300': { numTaladros: 20, diametroTaladro: '1-3/8"', diametroPerno: '1-1/4"', longitudEsparrago: '7-1/2"', longitudTornillo: '6-1/2"' },
  '18"_300': { numTaladros: 24, diametroTaladro: '1-3/8"', diametroPerno: '1-1/4"', longitudEsparrago: '7-3/4"', longitudTornillo: '7"' },
  '20"_300': { numTaladros: 24, diametroTaladro: '1-3/8"', diametroPerno: '1-1/4"', longitudEsparrago: '8"', longitudTornillo: '7-1/2"' },
  '24"_300': { numTaladros: 24, diametroTaladro: '1-5/8"', diametroPerno: '1-1/2"', longitudEsparrago: '9"', longitudTornillo: '8"' },
};