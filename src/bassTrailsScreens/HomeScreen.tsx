import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';
import { IconButton } from '../bassTrailsComponents/IconButton';
import {
  ClipboardGlyph,
  FishGlyph,
  SettingsGlyph,
} from '../bassTrailsComponents/Icons';

type HomeScreenProps = {
  userName: string;
  onGetTask: () => void;
  onShowMyTasks: () => void;
  onShowAquarium: () => void;
  onShowSettings: () => void;
};

export function HomeScreen({
  userName,
  onGetTask,
  onShowMyTasks,
  onShowAquarium,
  onShowSettings,
}: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      <Card style={styles.heroCard} innerStyle={styles.heroInner}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroGreeting}>HELLO,</Text>
          <Text style={styles.heroName}>{userName.toUpperCase()}</Text>
        </View>
        <Image source={require('../bassTrailsArt/man.png')} style={styles.heroImage} />
      </Card>

      <AppButton
        label="GET A TASK"
        onPress={onGetTask}
        size="large"
        icon={<ClipboardGlyph size={28} />}
        style={styles.primaryButton}
      />

      <View style={styles.quickButtonsRow}>
        <View style={styles.quickShortcut}>
          <IconButton 
            onPress={onShowAquarium} 
            icon={<Image source={require('../bassTrailsArt/main/q.png')} style={styles.iconImage} />} 
          />
          <Text style={styles.quickLabel}>AQUARIUM</Text>
        </View>
        <View style={styles.quickShortcut}>
          <IconButton 
            onPress={onShowSettings} 
            icon={<Image source={require('../bassTrailsArt/main/2.png')} style={styles.iconImage} />} 
          />
          <Text style={styles.quickLabel}>SETTINGS</Text>
        </View>
      </View>

      <AppButton
        label="MY TASKS"
        onPress={onShowMyTasks}
        variant="secondary"
        size="large"
        icon={<ClipboardGlyph size={28} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heroCard: {
    width: '100%',
    marginBottom: 30,
  },
  heroInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 22,
    paddingHorizontal: 28,
  },
  heroTextContainer: {
    flex: 1,
  },
  heroGreeting: {
    fontSize: 26,
    color: '#231100',
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  heroName: {
    fontSize: 40,
    color: '#231100',
    fontWeight: '900',
    marginTop: -4,
    letterSpacing: 3,
  },
  heroImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  primaryButton: {
    marginBottom: 20,
  },
  quickButtonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    gap: 12,
  },
  quickShortcut: {
    alignItems: 'center',
    gap: 10,
  },
  quickLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
  },
  iconImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
});

