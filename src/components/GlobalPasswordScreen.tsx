import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../constants/theme';

// Lee la contraseña desde el archivo .env (o secretos de entorno en compilación)
const CONTRASENA_GLOBAL = process.env.EXPO_PUBLIC_APP_PASSWORD || '';

interface Props {
  onSuccess: () => void;
}

export const GlobalPasswordScreen: React.FC<Props> = ({ onSuccess }) => {
  const [claveIngresada, setClaveIngresada] = useState('');
  const [mostrarClave, setMostrarClave] = useState(false);
  const [error, setError] = useState(false);

  const verificarAcceso = () => {
    if (CONTRASENA_GLOBAL !== '' && claveIngresada.trim() === CONTRASENA_GLOBAL) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🔒 ACCESO RESTRINGIDO</Text>
        </View>

        <Text style={styles.titulo}>Proyecto Tornillería</Text>
        <Text style={styles.subtitulo}>
          Ingresa la clave global de autorización para acceder al calculador de materiales.
        </Text>

        <View style={[styles.inputWrapper, error && styles.inputWrapperError]}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña de acceso"
            placeholderTextColor="#94a3b8"
            secureTextEntry={!mostrarClave}
            value={claveIngresada}
            onChangeText={(texto) => {
              setClaveIngresada(texto);
              if (error) setError(false);
            }}
            onSubmitEditing={verificarAcceso}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={() => setMostrarClave(!mostrarClave)}
            style={styles.botonOjo}
          >
            <Text style={styles.textoOjo}>{mostrarClave ? 'Ocultar' : 'Ver'}</Text>
          </TouchableOpacity>
        </View>

        {error && (
          <Text style={styles.mensajeError}>
            Contraseña incorrecta. Verifica e intenta nuevamente.
          </Text>
        )}

        <TouchableOpacity style={styles.botonIngresar} onPress={verificarAcceso}>
          <Text style={styles.textoBoton}>Ingresar al Sistema</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 28,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 14,
  },
  badgeText: {
    color: '#0369a1',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 22,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
  },
  inputWrapperError: {
    borderColor: '#ef4444',
    backgroundColor: '#fef2f2',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 15,
    color: '#0f172a',
  },
  botonOjo: {
    paddingLeft: 10,
    paddingVertical: 8,
  },
  textoOjo: {
    color: COLORS.primary || '#0284c7',
    fontSize: 13,
    fontWeight: '600',
  },
  mensajeError: {
    color: '#dc2626',
    fontSize: 13,
    marginTop: 8,
    fontWeight: '500',
  },
  botonIngresar: {
    backgroundColor: COLORS.primary || '#0284c7',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GlobalPasswordScreen;