import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';
import { FISHERMAN_ART } from '../bassTrailsConstants/assets';
import { FISH_LIBRARY } from '../bassTrailsData/fishLibrary';

type SettingsScreenProps = {
  vibrationEnabled: boolean;
  musicEnabled: boolean;
  aboutExpanded: boolean;
  onToggleVibration: (value: boolean) => void;
  onToggleMusic: (value: boolean) => void;
  onToggleAbout: () => void;
  onExit: () => void;
  onBack?: () => void;
};

export function SettingsScreen({
  vibrationEnabled,
  musicEnabled,
  aboutExpanded,
  onToggleVibration,
  onToggleMusic,
  onToggleAbout,
  onExit,
  onBack,
}: SettingsScreenProps) {
  const toggleFish = FISH_LIBRARY[2]?.image;

  return (
    <View style={styles.screen}>
    
      <Text style={styles.title}>SETTINGS:</Text>

      <View style={styles.togglePanel}>
        <ToggleRow
          label="VIBRATION:"
          value={vibrationEnabled}
          accent="#4cd964"
          fishImage={toggleFish}
          onToggle={() => onToggleVibration(!vibrationEnabled)}
        />
        {/* <ToggleRow
          label="MUSIC:"
          value={musicEnabled}
          accent="#ff4d4f"
          fishImage={toggleFish}
          onToggle={() => onToggleMusic(!musicEnabled)}
        /> */}
      </View>

      <Text style={styles.subtitle}>ABOUT THE APP:</Text>
      <Card style={styles.aboutCard} innerStyle={styles.aboutInner}>
        <Image source={require('../bassTrailsArt/man.png')} style={styles.aboutImage} />
        <Text style={styles.aboutText}>
          {aboutExpanded
            ? 'Bass Trails of the Big Lake is a daily fishing challenge from your friendly guide. Complete photo missions, grow your aquarium, and enjoy an offline adventure without logins or extra menus.'
            : 'Complete missions, upload proof, and build your own fish collection.'}
        </Text>
        <AppButton
          label={aboutExpanded ? 'HIDE STORY' : 'READ MORE'}
          onPress={onToggleAbout}
          size="small"
        />
      </Card>

      <AppButton
        label="EXIT TO HOME"
        variant="secondary"
        onPress={onExit}
        size="large"
      />
    </View>
  );
}

type ToggleRowProps = {
  label: string;
  value: boolean;
  accent: string;
  onToggle: () => void;
  fishImage?: { uri: string };
};

function ToggleRow({
  label,
  value,
  accent,
  onToggle,
  fishImage,
}: ToggleRowProps) {
  return (
    <View style={styles.toggleRow}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Pressable
        onPress={onToggle}
        style={[
          styles.toggle,
          { borderColor: accent },
          value ? { backgroundColor: accent } : styles.toggleOff,
        ]}>
        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    alignSelf: 'flex-start',
    width: 140,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 24,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 24,
    marginBottom: 12,
  },
  togglePanel: {
    width: '100%',
    backgroundColor: 'rgba(10, 40, 70, 0.6)',
    borderRadius: 28,
    padding: 24,
    gap: 18,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
  },
  toggle: {
    width: 88,
    height: 40,
    borderRadius: 24,
    padding: 4,
    justifyContent: 'center',
    borderWidth: 2,
  },
  toggleOff: {
    backgroundColor: '#1b3552',
  },
  toggleThumb: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
  thumbOff: {
    alignSelf: 'flex-start',
  },
  toggleFish: {
    width: 26,
    height: 18,
    resizeMode: 'contain',
  },
  aboutCard: {
    width: '100%',
    marginBottom: 28,
  },
  aboutInner: {
    alignItems: 'center',
    gap: 16,
  },
  aboutImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  aboutText: {
    color: '#1f1200',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 22,
  },
});

