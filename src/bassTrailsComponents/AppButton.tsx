import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type ButtonSize = 'large' | 'medium' | 'small';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: ButtonSize;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

const BUTTON_HEIGHT: Record<ButtonSize, number> = {
  large: 68,
  medium: 58,
  small: 48,
};

export function AppButton({
  label,
  onPress,
  disabled,
  variant = 'primary',
  size = 'medium',
  icon,
  style,
  contentStyle,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variant === 'secondary' && styles.secondaryBase,
        disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}>
      <ImageBackground
        source={require('../bassTrailsArt/btnBG.png')}
        resizeMode="stretch"
        style={[styles.imageBackground, { height: 200 }]}
        imageStyle={styles.image}>
        <View
          style={[
            styles.content,
            variant === 'secondary' && styles.secondaryOverlay,
            disabled && styles.disabledOverlay,
            contentStyle,
          ]}>
          {icon && <View style={styles.iconSlot}>{icon}</View>}
          <Text style={styles.label}>{label}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 24,
    overflow: 'hidden',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  secondaryBase: {
    shadowColor: '#a45100',
  },
  imageBackground: {
    overflow: 'hidden',
    alignItems: 'center',
    // height: 300,
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    borderRadius: 24,
  },
  content: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  secondaryOverlay: {
    // backgroundColor: '#f68d35d0',
    borderRadius: 24,
  },
  iconSlot: {
    marginTop: 2,
  },
  disabled: {
    opacity: 0.7,
  },
  disabledOverlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 24,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  label: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1.2,
  },
});

