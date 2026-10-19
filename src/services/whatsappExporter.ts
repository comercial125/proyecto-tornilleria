import { Alert, Linking } from 'react-native';
import { ItemBOM, KitBOM } from '../domain/models/bom.types';

export const enviarBOMporWhatsApp = (kits: KitBOM[], itemsConsolidados: ItemBOM[]) => {
  if (!kits.length && !itemsConsolidados.length) {
    Alert.alert('Atención', 'No hay datos de cálculo para compartir.');
    return;
  }

  let mensaje = `*RESUMEN DE COTIZACIÓN / BOM* 🛠️\n\n`;

  // 1. Desglose por Kit
  mensaje += `*DESGLOSE POR KIT DE UNIÓN:*\n`;
  kits.forEach((kit) => {
    mensaje += `\n📌 *Kit #${kit.numeroKit}:* ${kit.fila.norma} - ${kit.fila.diametro} - Clase ${kit.fila.clase}\n`;
    mensaje += `   _Fijación:_ ${kit.fila.tipoFijacion || 'Espárrago'} | _Cant. Uniones:_ ${kit.fila.cantidadUniones}\n`;

    const itemsTotales = kit.itemsTotalesKit || [];
    const itemsUnitarios = kit.itemsUnitarios || [];

    itemsTotales.forEach((itemTotal, i) => {
      const itemUnitario = itemsUnitarios[i] || itemTotal;
      mensaje += `   • ${itemTotal.categoria}: ${itemTotal.descripcion} -> [1 Unión: ${itemUnitario.cantidad} ${itemUnitario.unidad} | Total Kit: *${itemTotal.cantidad} ${itemTotal.unidad}*]\n`;
    });
  });

  // 2. Lista Consolidada
  mensaje += `\n-----------------------------------\n`;
  mensaje += `📦 *TOTALES CONSOLIDADOS DE COMPRA:*\n\n`;
  itemsConsolidados.forEach((item) => {
    mensaje += `✅ *${item.categoria}:* ${item.descripcion}\n   👉 *Total:* ${item.cantidad} ${item.unidad}\n\n`;
  });

  mensaje += `_Generado por la App Calculadora de Tornillería_ 🚀`;

  const urlWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;

  Linking.openURL(urlWhatsApp).catch(() => {
    Alert.alert('Error', 'No se pudo abrir WhatsApp en este dispositivo.');
  });
};