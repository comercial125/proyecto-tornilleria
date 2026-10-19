import { StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export const indexStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background || '#f8fafc',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 40,
    paddingBottom: 60, // Margen extra para ver los botones completos en Android
  },
  tituloHeader: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: COLORS.textPrimary || '#0f172a', 
    textAlign: 'center', 
    marginBottom: 16 
  },
  botonConsultar: { 
    backgroundColor: COLORS.primary || '#0284c7', 
    padding: 14, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  textoBoton: { 
    color: '#ffffff', 
    fontWeight: 'bold', 
    fontSize: 15 
  },
  espacio: { 
    height: 16 
  },
});