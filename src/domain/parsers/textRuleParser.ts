export interface ParametrosExtraidos {
  norma?: string;
  diametro?: string;
  clase?: string;
}

export const parsearTextoIngenieria = (texto: string): ParametrosExtraidos => {
  const t = texto.toLowerCase();
  const resultado: ParametrosExtraidos = {};

  if (t.includes('b16.5') || t.includes('brida') || t.includes('asme')) {
    resultado.norma = 'ASME B16.5';
  }

  if (t.includes('2"') || t.includes('2 pulgada') || t.includes('2.0') || t.includes(' 2 ')) {
    resultado.diametro = '2.0';
  } else if (t.includes('3"') || t.includes('3 pulgada') || t.includes('3.0') || t.includes(' 3 ')) {
    resultado.diametro = '3.0';
  }

  if (t.includes('150')) {
    resultado.clase = '150';
  } else if (t.includes('300')) {
    resultado.clase = '300';
  }

  return resultado;
};