import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { bomTableStyles as styles } from '../constants/styles/bomTableResult.styles';
import { COLORS } from '../constants/theme';
import { ItemBOM, KitBOM } from '../domain/models/bom.types';
import { exportarBOMaPDF } from '../services/pdfExporter';
import { enviarBOMporWhatsApp } from '../services/whatsappExporter';

interface Props {
  desglosePorUnion?: KitBOM[];
  kits?: KitBOM[];
  itemsConsolidados: ItemBOM[];
}

export const BomTableResult: React.FC<Props> = ({ kits = [], desglosePorUnion = [], itemsConsolidados }) => {
  const listaKits = kits.length > 0 ? kits : desglosePorUnion;

  if (!listaKits.length && !itemsConsolidados.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSeccion}>Desglose por Kit de Unión</Text>

      {/* Renderizado de Kits */}
      {listaKits.map((kit, index) => {
        const itemsUnitarios = kit.itemsUnitarios || [];
        const itemsTotales = kit.itemsTotalesKit || [];

        return (
          <View key={kit.fila.id || index} style={styles.cardUnion}>
            <Text style={styles.headerUnion}>
              Kit #{kit.numeroKit || index + 1}: {kit.fila.norma} - {kit.fila.diametro} - Clase {kit.fila.clase}
            </Text>
            <Text style={styles.subHeaderUnion}>
              Fijación: {kit.fila.tipoFijacion || 'Espárrago'} | Cantidad de Uniones: {kit.fila.cantidadUniones}
            </Text>

            <View style={styles.tabla}>
              {/* Encabezado con nueva columna */}
              <View style={styles.filaHeader}>
                <Text style={[styles.celdaHeader, { flex: 2 }]}>Elemento</Text>
                <Text style={[styles.celdaHeader, { flex: 3 }]}>Descripción Técnica</Text>
                <Text style={[styles.celdaHeader, { flex: 1.2, textAlign: 'center' }]}>Cant. / Unión</Text>
                <Text style={[styles.celdaHeader, { flex: 1.2, textAlign: 'right' }]}>Total Kit</Text>
              </View>

              {itemsTotales.map((itemTotal, i) => {
                const itemUnitario = itemsUnitarios[i] || itemTotal;

                return (
                  <View key={i} style={styles.filaData}>
                    <Text style={[styles.celdaData, { flex: 2, fontWeight: '500' }]}>{itemTotal.categoria}</Text>
                    <Text style={[styles.celdaData, { flex: 3 }]}>{itemTotal.descripcion}</Text>

                    {/* Cantidad para 1 sola unión */}
                    <Text style={[styles.celdaData, { flex: 1.2, textAlign: 'center', color: '#64748b' }]}>
                      {itemUnitario.cantidad} {itemUnitario.unidad}
                    </Text>

                    {/* Total acumulado del Kit */}
                    <Text style={[styles.celdaData, { flex: 1.2, textAlign: 'right', fontWeight: 'bold' }]}>
                      {itemTotal.cantidad} {itemTotal.unidad}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}

      {/* Tabla global acumulada */}
      {itemsConsolidados.length > 0 && (
        <>
          <Text style={styles.tituloSeccion}>Lista Consolidada (Totales Globales de Compra)</Text>
          <View style={styles.cardConsolidado}>
            <View style={styles.filaHeader}>
              <Text style={[styles.celdaHeader, { flex: 2 }]}>Categoría</Text>
              <Text style={[styles.celdaHeader, { flex: 3 }]}>Descripción</Text>
              <Text style={[styles.celdaHeader, { flex: 1, textAlign: 'right' }]}>Total General</Text>
            </View>
            {itemsConsolidados.map((item, i) => (
              <View key={i} style={styles.filaData}>
                <Text style={[styles.celdaData, { flex: 2, fontWeight: 'bold' }]}>{item.categoria}</Text>
                <Text style={[styles.celdaData, { flex: 3 }]}>{item.descripcion}</Text>
                <Text style={[styles.celdaData, { flex: 1, textAlign: 'right', fontWeight: 'bold', color: COLORS.primary }]}>
                  {item.cantidad} {item.unidad}
                </Text>
              </View>
            ))}
          </View>

          {/* Botones de Exportación */}
          <View style={localStyles.contenedorBotones}>
            <TouchableOpacity
              style={localStyles.botonPDF}
              onPress={() => exportarBOMaPDF(listaKits, itemsConsolidados)}
            >
              <Text style={localStyles.textoBoton}>📄 Descargar Reporte PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={localStyles.botonWhatsApp}
              onPress={() => enviarBOMporWhatsApp(listaKits, itemsConsolidados)}
            >
              <Text style={localStyles.textoBoton}>📲 Compartir en WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  contenedorBotones: {
    marginVertical: 20,
    gap: 12,
  },
  botonPDF: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonWhatsApp: {
    backgroundColor: '#25D366',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default BomTableResult;