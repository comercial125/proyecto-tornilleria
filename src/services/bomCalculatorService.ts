import { MATRIZ_ASME_B16_47_A } from '../data/asmeB16_47_A';
import { MATRIZ_ASME_B16_5 } from '../data/asmeB16_5';
import { FilaUnion, ItemBOM, KitBOM, ResultadoBOM } from '../domain/models/bom.types';

export const procesarCalculoBOM = (filas: FilaUnion[]): ResultadoBOM => {
  const mapaConsolidado: Record<string, ItemBOM> = {};
  const kits: KitBOM[] = [];

  filas.forEach((fila, idx) => {
    const claveMatriz = `${fila.diametro}_${fila.clase}`;
    
    // Selección dinámica de la matriz según la norma seleccionada
    const matriz = fila.norma === 'ASME B16.47 Serie A' 
      ? MATRIZ_ASME_B16_47_A 
      : MATRIZ_ASME_B16_5;

    const datos = matriz[claveMatriz];

    if (!datos) return;

    const esTornillo = fila.tipoFijacion === 'Tornillo';
    const cantUniones = Number(fila.cantidadUniones) || 1;
    const materialSel = fila.material || 'A193 B7 / A194 2H (Acero al Carbono Aleado)';

    const numOrificios = datos.numTaladros;
    const diamPerno = datos.diametroPerno;
    const longitud = esTornillo ? datos.longitudTornillo : datos.longitudEsparrago;

    // Multiplicador dinámico de arandelas (Doble = 2, Sencilla = 1)
    const factorArandela = (fila.tipoArandela || 'Doble') === 'Sencilla' ? 1 : 2;

    let itemsUnitarios: ItemBOM[] = [];

    if (esTornillo) {
      itemsUnitarios = [
        {
          categoria: 'Tornillo Hexagonal',
          descripcion: `Tornillo Hexagonal ${diamPerno} x ${longitud} (${materialSel})`,
          cantidad: numOrificios,
          unidad: 'und',
        },
        {
          categoria: 'Tuerca',
          descripcion: `Tuerca Hexagonal Pesada ${diamPerno} (${materialSel})`,
          cantidad: numOrificios,
          unidad: 'und',
        },
        {
          categoria: 'Arandela',
          descripcion: `Arandela Plana F436 ${diamPerno}`,
          cantidad: numOrificios * factorArandela,
          unidad: 'und',
        },
        {
          categoria: 'Empaque',
          descripcion: `Empaque Neopreno ${fila.diametro} Clase ${fila.clase}`,
          cantidad: 1,
          unidad: 'und',
        },
      ];
    } else {
      itemsUnitarios = [
        {
          categoria: 'Espárrago',
          descripcion: `Espárrago ${diamPerno} x ${longitud} (${materialSel})`,
          cantidad: numOrificios,
          unidad: 'und',
        },
        {
          categoria: 'Tuerca',
          descripcion: `Tuerca Hexagonal Pesada ${diamPerno} (${materialSel})`,
          cantidad: numOrificios * 2,
          unidad: 'und',
        },
        {
          categoria: 'Arandela',
          descripcion: `Arandela Plana F436 ${diamPerno}`,
          cantidad: numOrificios * factorArandela,
          unidad: 'und',
        },
        {
          categoria: 'Empaque',
          descripcion: `Empaque Neopreno ${fila.diametro} Clase ${fila.clase}`,
          cantidad: 1,
          unidad: 'und',
        },
      ];
    }

    const itemsTotalesKit: ItemBOM[] = itemsUnitarios.map((item) => {
      const cantidadTotalKit = item.cantidad * cantUniones;
      const claveConsolidado = `${item.categoria}_${item.descripcion}`.trim();

      if (mapaConsolidado[claveConsolidado]) {
        mapaConsolidado[claveConsolidado].cantidad += cantidadTotalKit;
      } else {
        mapaConsolidado[claveConsolidado] = {
          categoria: item.categoria,
          descripcion: item.descripcion,
          cantidad: cantidadTotalKit,
          unidad: item.unidad,
        };
      }

      return {
        ...item,
        cantidad: cantidadTotalKit,
      };
    });

    kits.push({
      numeroKit: idx + 1,
      fila,
      itemsUnitarios,
      itemsTotalesKit,
    });
  });

  return {
    kits,
    itemsConsolidados: Object.values(mapaConsolidado),
  };
};