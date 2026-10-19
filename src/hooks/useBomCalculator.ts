import { useState } from 'react';
import { FilaUnion, ItemBOM, KitBOM } from '../domain/models/bom.types';
import { procesarCalculoBOM } from '../services/bomCalculatorService';

export const useBomCalculator = () => {
  const [filas, setFilas] = useState<FilaUnion[]>([
    {
      id: '1',
      norma: 'ASME B16.5',
      diametro: '2"',
      clase: '150',
      cantidadUniones: 1,
      tipoFijacion: 'Tornillo',
      tipoArandela: 'Doble',
      material: 'A193 B7 / A194 2H (Acero al Carbono Aleado)',
    },
  ]);
  const [resultado, setResultado] = useState<ItemBOM[]>([]);
  const [kits, setKits] = useState<KitBOM[]>([]);

  const handleAgregarFila = () => {
    const nuevaFila: FilaUnion = {
      id: Date.now().toString(),
      norma: 'ASME B16.5',
      diametro: '2"',
      clase: '150',
      cantidadUniones: 1,
      tipoFijacion: 'Tornillo',
      tipoArandela: 'Doble',
      material: 'A193 B7 / A194 2H (Acero al Carbono Aleado)',
    };
    setFilas([...filas, nuevaFila]);
  };

  const handleEliminarFila = (id: string) => {
    if (filas.length > 1) {
      setFilas(filas.filter((f) => f.id !== id));
    }
  };

  const handleUpdateFila = (id: string, campoOrObject: any, valor?: any) => {
    setFilas((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f;
        if (typeof campoOrObject === 'object') {
          return { ...f, ...campoOrObject };
        }
        return { ...f, [campoOrObject]: valor };
      })
    );
  };

  const calcularBOM = () => {
    const res = procesarCalculoBOM(filas);
    setKits(res.kits);
    setResultado(res.itemsConsolidados);
  };

  return {
    filas,
    resultado,
    kits,
    handleAgregarFila,
    handleEliminarFila,
    handleUpdateFila,
    calcularBOM,
  };
};