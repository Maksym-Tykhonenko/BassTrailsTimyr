import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import type { RewardFish } from '../bassTrailsTypes';

type AquariumScreenProps = {
  fish: RewardFish[];
  onExit: () => void;
  aquariumImage?: number;
  backgroundImage?: number;
};

export function AquariumScreen({ 
  fish, 
  onExit,
  aquariumImage,
  backgroundImage,
}: AquariumScreenProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.screen}>
        <Text style={styles.title}>MY AQUARIUM:</Text>

        <View style={styles.scene}>
          {aquariumImage ? (
            <Image 
              source={aquariumImage} 
              style={styles.aquariumImage}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.placeholderAquarium}>
              <Text style={styles.placeholderText}>Aquarium Image</Text>
            </View>
          )}
        </View>

        <AppButton
          label="EXIT TO HOME"
          variant="secondary"
          size="large"
          onPress={onExit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 20,
    zIndex: 1,
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  scene: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 28,
    zIndex: 1,
  },
  aquariumImage: {
    width: '100%',
    maxWidth: 400,
    height: 400,
  },
  placeholderAquarium: {
    width: '100%',
    maxWidth: 400,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff33',
  },
  placeholderText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

