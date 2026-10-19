import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
  onProcesarTexto: (texto: string) => void;
}

export const InputSection: React.FC<Props> = ({ onProcesarTexto }) => {
  const [texto, setTexto] = useState('');

  const handleAnalizar = () => {
    if (!texto.trim()) return;
    onProcesarTexto(texto);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Dictado o Descripción Libre:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Ej: "Tornillería para brida de 3 pulgadas clase 150"'
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity style={styles.botonInterpretar} onPress={handleAnalizar}>
          <Text style={styles.textoBoton}>Autocompletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', marginBottom: 16 },
  label: { fontSize: 13, fontWeight: '600', color: '#475569', marginBottom: 6 },
  inputContainer: { flexDirection: 'row', gap: 8 },
  input: { flex: 1, height: 44, borderColor: '#cbd5e1', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, backgroundColor: '#f8fafc' },
  botonInterpretar: { backgroundColor: '#0f172a', paddingHorizontal: 14, justifyContent: 'center', borderRadius: 8 },
  textoBoton: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
});