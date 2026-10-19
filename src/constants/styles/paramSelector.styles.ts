import { Platform, StyleSheet } from 'react-native';
import { COLORS, SHADOWS } from '../theme';

export const paramSelectorStyles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary || '#0f172a',
    marginBottom: 12,
  },
  cardFila: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...SHADOWS.card,
  },
  headerFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 8,
  },
  labelUnion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary || '#0284c7',
  },
  textoEliminar: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '600',
  },
  gridCampos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    gap: 12,
  },
  columnaWeb: {
    flex: 1,
    minWidth: 140,
  },
  columnaMovil: {
    width: '48%',
  },
  columnaCantWeb: {
    width: 100,
  },
  columnaCantMovil: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 4,
  },
  labelCenter: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 4,
    textAlign: 'center',
  },
  pickerContainer: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 44,
  },
  picker: {
    width: '100%',
    height: Platform.OS === 'android' ? 50 : '100%',
    color: '#0f172a',
    backgroundColor: 'transparent',
  },
  inputCantidad: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 12,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    width: '100%',
  },
  botonAgregar: {
    borderWidth: 1,
    borderColor: COLORS.primary || '#0284c7',
    borderStyle: 'dashed',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#f0f9ff',
  },
  textoBotonAgregar: {
    color: COLORS.primary || '#0284c7',
    fontWeight: 'bold',
    fontSize: 14,
  },
});