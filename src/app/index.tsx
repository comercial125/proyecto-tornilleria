import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BomTableResult } from '../components/BomTableResult';
import { ParamSelector } from '../components/ParamSelector';
import { SplashScreenAnimation } from '../components/SplashScreenAnimation';
import { indexStyles as styles } from '../constants/styles/index.styles';
import { useBomCalculator } from '../hooks/useBomCalculator';

export default function IndexScreen() {
  const [cargandoSplash, setCargandoSplash] = useState(true);
  const {
    filas,
    resultado,
    kits,
    handleAgregarFila,
    handleEliminarFila,
    handleUpdateFila,
    calcularBOM,
  } = useBomCalculator();

  if (cargandoSplash) {
    return <SplashScreenAnimation onFinish={() => setCargandoSplash(false)} />;
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.tituloHeader}>Generador de Tornillería por Kits</Text>

      {/* Especificación de Uniones */}
      <ParamSelector
        filas={filas}
        onUpdateFila={handleUpdateFila}
        onAgregarFila={handleAgregarFila}
        onEliminarFila={handleEliminarFila}
      />

      {/* Botón de Cálculo */}
      <TouchableOpacity style={styles.botonConsultar} onPress={calcularBOM}>
        <Text style={styles.textoBoton}>Calcular Lista Total Consolidada</Text>
      </TouchableOpacity>

      <View style={styles.espacio} />

      {/* Resultados: Desglose por Kits + Total Consolidado */}
      <BomTableResult
        kits={kits}
        itemsConsolidados={resultado || []}
      />
    </ScrollView>
  );
}