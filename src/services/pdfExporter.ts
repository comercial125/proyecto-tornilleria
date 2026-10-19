import * as Print from 'expo-print';
import { Alert, Platform } from 'react-native';
import { ItemBOM, KitBOM } from '../domain/models/bom.types';

export const exportarBOMaPDF = async (kits: KitBOM[], itemsConsolidados: ItemBOM[]) => {
  if (!kits.length && !itemsConsolidados.length) {
    Alert.alert('Atención', 'No hay datos de cálculo para generar el PDF.');
    return;
  }

  const filasKitsHTML = kits
    .map((kit) => {
      const itemsUnitarios = kit.itemsUnitarios || [];
      const itemsTotales = kit.itemsTotalesKit || [];

      const filasItems = itemsTotales
        .map((itemTotal, i) => {
          const itemUnitario = itemsUnitarios[i] || itemTotal;
          return `
            <tr>
              <td><b>${itemTotal.categoria}</b></td>
              <td>${itemTotal.descripcion}</td>
              <td class="text-center">${itemUnitario.cantidad} ${itemUnitario.unidad}</td>
              <td class="text-right"><b>${itemTotal.cantidad} ${itemTotal.unidad}</b></td>
            </tr>`;
        })
        .join('');

      return `
        <div class="card-kit">
          <div class="title-kit">Kit #${kit.numeroKit}: ${kit.fila.norma} - ${kit.fila.diametro} - Clase ${kit.fila.clase}</div>
          <div class="subtitle-kit">Fijación: ${kit.fila.tipoFijacion || 'Tornillo'} | Cantidad de Uniones: ${kit.fila.cantidadUniones}</div>
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Elemento</th>
                <th style="width: 45%;">Descripción Técnica</th>
                <th class="text-center" style="width: 15%;">Cant. / Unión</th>
                <th class="text-right" style="width: 15%;">Total Kit</th>
              </tr>
            </thead>
            <tbody>
              ${filasItems}
            </tbody>
          </table>
        </div>`;
    })
    .join('');

  const filasConsolidadoHTML = itemsConsolidados
    .map(
      (item) => `
        <tr>
          <td><b>${item.categoria}</b></td>
          <td>${item.descripcion}</td>
          <td class="text-right"><b>${item.cantidad} ${item.unidad}</b></td>
        </tr>`
    )
    .join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reporte BOM Tornillería</title>
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    * { box-sizing: border-box; }
    html, body { width: 100%; height: auto; font-family: Arial, Helvetica, sans-serif; color: #0f172a; margin: 0; padding: 0; background: #ffffff; }
    h1 { text-align: center; color: #0284c7; margin: 0 0 4px 0; font-size: 18px; }
    .sub-header { text-align: center; color: #64748b; font-size: 10px; margin-bottom: 16px; }
    .card-kit { border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 12px; padding: 10px; page-break-inside: avoid !important; break-inside: avoid !important; }
    .title-kit { font-size: 12px; font-weight: bold; color: #0284c7; margin-bottom: 2px; }
    .subtitle-kit { font-size: 10px; color: #64748b; margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-top: 4px; }
    th { background-color: #f1f5f9; text-align: left; padding: 5px; font-size: 9px; color: #475569; border-bottom: 1px solid #cbd5e1; }
    td { padding: 5px; font-size: 9px; border-bottom: 1px solid #e2e8f0; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .section-title { font-size: 14px; font-weight: bold; color: #0f172a; margin-top: 20px; margin-bottom: 8px; border-bottom: 2px solid #0284c7; padding-bottom: 3px; page-break-after: avoid; }
    .card-consolidado { border: 1px solid #0284c7; border-radius: 6px; overflow: hidden; }
    .consolidado-table th { background-color: #0284c7; color: #ffffff; }
    .consolidado-table tr { page-break-inside: avoid; break-inside: avoid; }
  </style>
</head>
<body>
  <h1>Listado de Materiales - BOM</h1>
  <div class="sub-header">Reporte de Uniones Flanjeadas y Tornillería Estándar ASME</div>
  <div class="section-title">Desglose por Kit de Unión</div>
  ${filasKitsHTML}
  <div class="section-title">Lista Consolidada (Totales Globales de Compra)</div>
  <div class="card-consolidado">
    <table class="consolidado-table">
      <thead>
        <tr>
          <th style="width: 25%;">Categoría</th>
          <th style="width: 55%;">Descripción</th>
          <th class="text-right" style="width: 20%;">Total General</th>
        </tr>
      </thead>
      <tbody>
        ${filasConsolidadoHTML}
      </tbody>
    </table>
  </div>
</body>
</html>`;

  try {
    if (Platform.OS === 'web') {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 300);
      } else {
        await Print.printAsync({ html: htmlContent });
      }
    } else {
      await Print.printAsync({ html: htmlContent });
    }
  } catch (error) {
    Alert.alert('Error', 'Ocurrió un error al intentar generar la vista de impresión.');
  }
};