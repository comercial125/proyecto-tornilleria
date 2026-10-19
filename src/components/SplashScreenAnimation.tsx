import React, { useEffect } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';

interface Props {
  onFinish: () => void;
}

export const SplashScreenAnimation: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    // 7.5 segundos de duración para completar la animación de la brida y la gota
    const duracion = Platform.OS === 'web' ? 7500 : 7500;
    const timer = setTimeout(() => {
      onFinish();
    }, duracion);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // VISTA PARA WEB: Video MP4 en Alta Definición 1080p
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <video
          src={require('../../assets/images/splash.mp4')}
          autoPlay
          muted
          playsInline
          onEnded={() => onFinish()}
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '90vh',
            maxWidth: '900px',
            objectFit: 'contain',
          }}
        />
      </View>
    );
  }

  // VISTA PARA MÓVIL (Android / iOS): GIF Animado
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.gif')}
        style={styles.imagenMovil}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5', // Coincide perfectamente con el nuevo fondo claro
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
  imagenMovil: {
    width: '85%',
    height: '85%',
    alignSelf: 'center',
  },
});