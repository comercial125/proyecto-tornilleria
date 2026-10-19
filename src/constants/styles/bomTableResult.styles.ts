import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS } from '../theme';

export const bomTableStyles = StyleSheet.create({
  container: { marginTop: 12 },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 10, marginTop: 10 },
  cardUnion: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
    ...SHADOWS.card,
  },
  cardConsolidado: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
    ...SHADOWS.card,
  },
  headerUnion: { fontSize: 15, fontWeight: 'bold', color: COLORS.textPrimary },
  subHeaderUnion: { fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 },
  tabla: { marginTop: 6 },
  filaHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingBottom: 6, marginBottom: 6 },
  celdaHeader: { fontSize: 12, fontWeight: 'bold', color: COLORS.textMuted },
  filaData: { flexDirection: 'row', paddingVertical: 4 },
  celdaData: { fontSize: 13, color: COLORS.textPrimary },
});