import React from 'react';
import { StyleSheet, View } from 'react-native';

type IconProps = {
  size?: number;
  color?: string;
};

export function CameraGlyph({ size = 48, color = '#ffffff' }: IconProps) {
  const lensSize = size * 0.46;
  return (
    <View
      style={[
        styles.cameraBody,
        {
          width: size,
          height: size * 0.66,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.cameraFlash,
          {
            width: size * 0.24,
            height: size * 0.16,
            borderRadius: size * 0.08,
            backgroundColor: color,
          },
        ]}
      />
      <View
        style={[
          styles.cameraLensOuter,
          {
            width: lensSize,
            height: lensSize,
            borderRadius: lensSize / 2,
            borderColor: color,
          },
        ]}>
        <View
          style={[
            styles.cameraLensInner,
            {
              width: lensSize * 0.55,
              height: lensSize * 0.55,
            },
          ]}
        />
      </View>
    </View>
  );
}

export function FishGlyph({ size = 46 }: IconProps) {
  return (
    <View
      style={[
        styles.fishBody,
        {
          width: size,
          height: size * 0.62,
          borderRadius: size * 0.31,
        },
      ]}>
      <View
        style={[
          styles.fishEye,
          {
            width: size * 0.12,
            height: size * 0.12,
            borderRadius: size * 0.06,
          },
        ]}
      />
      <View
        style={[
          styles.fishTail,
          {
            right: -size * 0.22,
            width: size * 0.45,
            height: size * 0.45,
          },
        ]}
      />
    </View>
  );
}

export function ClipboardGlyph({ size = 44 }: IconProps) {
  return (
    <View
      style={[
        styles.clipboard,
        {
          width: size,
          height: size * 0.72,
          borderRadius: size * 0.12,
        },
      ]}>
      <View
        style={[
          styles.clipboardTab,
          {
            width: size * 0.6,
            height: size * 0.22,
            top: -size * 0.12,
            borderRadius: size * 0.08,
          },
        ]}
      />
      <View style={[styles.clipboardLine, { width: size * 0.7 }]} />
      <View style={[styles.clipboardLine, { width: size * 0.55 }]} />
      <View style={[styles.clipboardLine, { width: size * 0.65 }]} />
    </View>
  );
}

export function SettingsGlyph({ size = 44 }: IconProps) {
  const toothSize = size * 0.16;
  return (
    <View
      style={[
        styles.settingsGear,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}>
      {Array.from({ length: 6 }).map((_, index) => {
        const rotate = index * 60;
        return (
          <View
            key={rotate}
            style={[
              styles.settingsTooth,
              {
                width: toothSize,
                height: size * 0.34,
                transform: [
                  { rotate: `${rotate}deg` },
                  { translateY: -(size * 0.4) / 2 },
                ],
              },
            ]}
          />
        );
      })}
      <View
        style={[
          styles.settingsHub,
          {
            width: size * 0.38,
            height: size * 0.38,
            borderRadius: (size * 0.38) / 2,
          },
        ]}
      />
    </View>
  );
}

export function ArrowGlyph({ size = 28 }: IconProps) {
  return (
    <View
      style={[
        styles.arrowHead,
        {
          width: size,
          height: size,
          borderRightWidth: size * 0.18,
          borderBottomWidth: size * 0.18,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  cameraBody: {
    borderWidth: 2,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cameraFlash: {
    position: 'absolute',
    top: 6,
    right: 10,
  },
  cameraLensOuter: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraLensInner: {
    borderRadius: 999,
    backgroundColor: '#27a0ff',
  },
  fishBody: {
    backgroundColor: '#fcd231',
    borderWidth: 2,
    borderColor: '#ffffff',
    position: 'relative',
    justifyContent: 'center',
  },
  fishEye: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: '20%',
    top: '28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fishTail: {
    position: 'absolute',
    top: '10%',
    backgroundColor: '#f7a11a',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  clipboard: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    gap: 6,
    position: 'relative',
  },
  clipboardTab: {
    backgroundColor: '#fff',
    position: 'absolute',
  },
  clipboardLine: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  settingsGear: {
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  settingsTooth: {
    borderRadius: 6,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  settingsHub: {
    backgroundColor: '#0a2744',
    borderWidth: 2,
    borderColor: '#fff',
  },
  arrowHead: {
    borderColor: '#fff',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
});


