export type TipoFijacion = 'Espárrago' | 'Tornillo';
export type TipoArandela = 'Doble' | 'Sencilla';

export interface FilaUnion {
  id: string;
  norma: string;
  diametro: string;
  clase: string;
  cantidadUniones: number;
  tipoFijacion: TipoFijacion;
  tipoArandela?: TipoArandela; // Campo para seleccionar Doble (x2) o Sencilla (x1)
  material?: string;
}

export interface ItemBOM {
  categoria: string;
  descripcion: string;
  cantidad: number;
  unidad: string;
}

export interface KitBOM {
  numeroKit: number;
  fila: FilaUnion;
  itemsUnitarios: ItemBOM[];
  itemsTotalesKit: ItemBOM[];
}

export interface ResultadoBOM {
  kits: KitBOM[];
  itemsConsolidados: ItemBOM[];
}