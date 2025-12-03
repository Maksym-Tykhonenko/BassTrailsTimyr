import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type IconButtonProps = {
  onPress: () => void;
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export function IconButton({ onPress, icon, style, disabled }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}>
      <ImageBackground
        source={require('../bassTrailsArt/btnBG.png')}
        resizeMode="stretch"
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.iconWrap}>{icon}</View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 94,
    height: 94,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 24,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  disabled: {
    opacity: 0.5,
  },
});


