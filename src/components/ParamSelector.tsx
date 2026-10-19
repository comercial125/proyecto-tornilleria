import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import {
  CLASES_DISPONIBLES,
  DIAMETROS_POR_NORMA,
  MATERIALES_TORNILLERIA,
  NORMAS_DISPONIBLES,
  TIPOS_ARANDELA_DISPONIBLES,
  TIPOS_FIJACION_DISPONIBLES,
} from '../constants/bomOptions';
import { paramSelectorStyles as styles } from '../constants/styles/paramSelector.styles';
import { FilaUnion, TipoArandela, TipoFijacion } from '../domain/models/bom.types';

interface Props {
  filas: FilaUnion[];
  onUpdateFila: (id: string, campoOrObject: any, valor?: any) => void;
  onAgregarFila: () => void;
  onEliminarFila: (id: string) => void;
}

export const ParamSelector: React.FC<Props> = ({
  filas,
  onUpdateFila,
  onAgregarFila,
  onEliminarFila,
}) => {
  const { width } = useWindowDimensions();
  const esWebDesktop = width > 768;

  const estiloColumna = esWebDesktop ? styles.columnaWeb : styles.columnaMovil;
  const estiloColumnaCant = esWebDesktop ? styles.columnaCantWeb : styles.columnaCantMovil;

  // Cambiar norma y resetear diámetro al primer valor válido de la nueva norma
  const handleNormaChange = (id: string, nuevaNorma: string) => {
    const listaDiametros = DIAMETROS_POR_NORMA[nuevaNorma] || DIAMETROS_POR_NORMA['ASME B16.5'];
    onUpdateFila(id, {
      norma: nuevaNorma,
      diametro: listaDiametros[0],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSeccion}>Especificación de Uniones Flanjeadas</Text>

      {filas.map((fila, index) => {
        // Obtener arreglo de diámetros dinámico según la norma de esta fila
        const diametrosDisponibles = DIAMETROS_POR_NORMA[fila.norma] || DIAMETROS_POR_NORMA['ASME B16.5'];

        return (
          <View key={fila.id} style={styles.cardFila}>
            <View style={styles.headerFila}>
              <Text style={styles.labelUnion}>Unión #{index + 1}</Text>
              {filas.length > 1 && (
                <TouchableOpacity onPress={() => onEliminarFila(fila.id)}>
                  <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.gridCampos}>
              {/* Norma */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Norma</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.norma}
                    onValueChange={(val: string) => handleNormaChange(fila.id, val)}
                    style={styles.picker}
                  >
                    {NORMAS_DISPONIBLES.map((n) => (
                      <Picker.Item key={n} label={n} value={n} style={{ fontSize: 13 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Diámetro Dinámico */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Diámetro</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.diametro}
                    onValueChange={(val: string) => onUpdateFila(fila.id, 'diametro', val)}
                    style={styles.picker}
                  >
                    {diametrosDisponibles.map((d) => (
                      <Picker.Item key={d} label={d} value={d} style={{ fontSize: 13 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Clase (150 / 300) */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Clase</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.clase}
                    onValueChange={(val: string) => onUpdateFila(fila.id, 'clase', val)}
                    style={styles.picker}
                  >
                    {CLASES_DISPONIBLES.map((c) => (
                      <Picker.Item key={c} label={`Clase ${c}`} value={c} style={{ fontSize: 13 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Tipo Fijación */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Tipo Fijación</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.tipoFijacion || 'Tornillo'}
                    onValueChange={(val: string) => onUpdateFila(fila.id, 'tipoFijacion', val as TipoFijacion)}
                    style={styles.picker}
                  >
                    {TIPOS_FIJACION_DISPONIBLES.map((tf) => (
                      <Picker.Item key={tf} label={tf} value={tf} style={{ fontSize: 13 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Configuración de Arandela (Doble / Sencilla) */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Arandela</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.tipoArandela || 'Doble'}
                    onValueChange={(val: string) => onUpdateFila(fila.id, 'tipoArandela', val as TipoArandela)}
                    style={styles.picker}
                  >
                    {TIPOS_ARANDELA_DISPONIBLES.map((ta) => (
                      <Picker.Item key={ta} label={ta} value={ta} style={{ fontSize: 13 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Material Tornillería */}
              <View style={estiloColumna}>
                <Text style={styles.label}>Material</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={fila.material || MATERIALES_TORNILLERIA[0]}
                    onValueChange={(val: string) => onUpdateFila(fila.id, 'material', val)}
                    style={styles.picker}
                  >
                    {MATERIALES_TORNILLERIA.map((m) => (
                      <Picker.Item key={m} label={m} value={m} style={{ fontSize: 12 }} />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Cantidad de Uniones */}
              <View style={estiloColumnaCant}>
                <Text style={esWebDesktop ? styles.label : styles.labelCenter}>Cant. Uniones</Text>
                <TextInput
                  style={styles.inputCantidad}
                  keyboardType="numeric"
                  value={String(fila.cantidadUniones)}
                  onChangeText={(val: string) => onUpdateFila(fila.id, 'cantidadUniones', val)}
                />
              </View>
            </View>
          </View>
        );
      })}

      <TouchableOpacity style={styles.botonAgregar} onPress={onAgregarFila}>
        <Text style={styles.textoBotonAgregar}>+ Agregar Otra Fila de Unión</Text>
      </TouchableOpacity>
    </View>
  );
};