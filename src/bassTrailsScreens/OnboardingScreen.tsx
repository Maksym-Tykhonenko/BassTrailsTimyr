import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';
import type { OnboardingSlide } from '../bassTrailsTypes';

type OnboardingScreenProps = {
  slides: OnboardingSlide[];
  onFinish: () => void;
};

export function OnboardingScreen({ slides, onFinish }: OnboardingScreenProps) {
  const [index, setIndex] = useState(0);
  const current = slides[index];
  const isLast = index === slides.length - 1;

  const handlePress = () => {
    if (isLast) {
      onFinish();
    } else {
      setIndex(prev => Math.min(prev + 1, slides.length - 1));
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.artworkWrapper}>
        <Artwork source={current.image} />
      </View>

      <Card style={styles.board} innerStyle={styles.boardInner}>
        {current.headline && (
          <Text style={styles.headline}>{current.headline}</Text>
        )}
        <Text style={styles.body}>{current.body}</Text>
      </Card>

      <AppButton
        label={current.buttonLabel}
        onPress={handlePress}
        size="large"
        style={styles.cta}
      />

      <View style={styles.progressRow}>
        {slides.map((slide, slideIndex) => (
          <View
            key={slide.id}
            style={[
              styles.progressDot,
              slideIndex === index && styles.progressDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

function Artwork({ source }: { source?: ImageSourcePropType }) {
  if (!source) {
    return <View style={styles.placeholder} />;
  }

  return <Image source={source} style={styles.heroImage} />;
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    gap: 24,
  },
  artworkWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  heroImage: {
    width: 240,
    height: 280,
    resizeMode: 'contain',
  },
  placeholder: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 4,
    borderColor: '#ffffff55',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  board: {
    width: '100%',
  },
  boardInner: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 30,
    gap: 10,
  },
  headline: {
    color: '#1f1200',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  body: {
    color: '#1f1200',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  cta: {
    width: '100%',
    marginTop: -10,
  },
  progressRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  progressDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  progressDotActive: {
    backgroundColor: '#ffffff',
  },
});


