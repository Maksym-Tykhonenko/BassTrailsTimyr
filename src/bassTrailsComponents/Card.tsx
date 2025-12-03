import React from 'react';
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

const CARD_BACKGROUND = require('../bassTrailsArt/containerBG.png');

type CardProps = ViewProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  variant?: 'standard' | 'accent' | 'flat';
};

export function Card({
  children,
  style,
  innerStyle,
  variant = 'standard',
  ...rest
}: CardProps) {
  return (
    <ImageBackground
      source={CARD_BACKGROUND}
      resizeMode="stretch"
      style={[
        styles.card,
        variant === 'flat' && styles.flatCard,
        style,
      ]}
      imageStyle={[
        styles.image,
        variant === 'flat' && styles.flatImage,
      ]}
      {...rest}>
      <View
        style={[
          styles.overlay,
          variant === 'accent' && styles.accentOverlay,
          variant === 'flat' && styles.flatOverlay,
          innerStyle,
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 32,
    padding: 18,
    marginBottom: 20,
  },
  flatCard: {
    padding: 0,
    borderRadius: 28,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 32,
  },
  flatImage: {
    borderRadius: 28,
  },
  overlay: {
    backgroundColor: '#fffdf4',
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  accentOverlay: {
    backgroundColor: '#fffbec',
  },
  flatOverlay: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

