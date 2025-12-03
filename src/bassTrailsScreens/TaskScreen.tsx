import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';
import { IconButton } from '../bassTrailsComponents/IconButton';
import { ArrowGlyph, CameraGlyph } from '../bassTrailsComponents/Icons';
import type { Task } from '../bassTrailsTypes';

type TaskScreenProps = {
  task: Task;
  userName: string;
  onPickPhoto: () => void;
  onComplete: () => void;
  onExit: () => void;
};

export function TaskScreen({
  task,
  userName,
  onPickPhoto,
  onComplete,
  onExit,
}: TaskScreenProps) {
  const hasPhoto = Boolean(task.photoUri);
  const isCompleted = task.status === 'completed';
  const taskTitle = task.title.replace('NICK', userName.toUpperCase());

  return (
    <View style={styles.screen}>
      <Card style={styles.headerCard} innerStyle={styles.headerInner}>
        <Text style={styles.sectionTitle}>{taskTitle}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskInstructions}>{task.instructions}</Text>
      </Card>

      {hasPhoto ? (
        <View style={styles.photoFrame}>
          <Image source={{ uri: task.photoUri }} style={styles.photoPreview} />
        </View>
      ) : (
        <IconButton
          onPress={onPickPhoto}
          icon={<Image source={require('../bassTrailsArt/main/ka.png')} style={styles.cameraIconImage} />}
          style={styles.cameraButton}
        />
      )}

      <AppButton
        label={hasPhoto ? 'COMPLETE TASK' : 'TAKE A PHOTO'}
        onPress={hasPhoto ? onComplete : onPickPhoto}
        disabled={isCompleted}
        size="large"
        icon={<Image source={require('../bassTrailsArt/main/ka.png')} style={styles.buttonIconImage} />}
        style={styles.primaryAction}
      />

      {isCompleted && task.reward && (
        <Card style={styles.successCard} innerStyle={styles.successInner}>
          <View style={styles.successHeader}>
            <Image
              source={require('../bassTrailsArt/man.png')}
              style={styles.successHero}
            />
            <View style={styles.successCopy}>
              <Text style={styles.successText}>GOOD!</Text>
              <Text style={styles.rewardText}>
                New fish is already in the aquarium
              </Text>
            </View>
          </View>
          <View style={styles.rewardPanel}>
            <Image source={require('../bassTrailsArt/onb/4.png')} style={styles.rewardImage} />
            <Text style={styles.rewardName}>{task.reward.name}</Text>
          </View>
        </Card>
      )}

      <AppButton
        label="EXIT TO HOME"
        variant="secondary"
        onPress={onExit}
        size="large"
        icon={<ArrowGlyph />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  headerCard: {
    width: '100%',
  },
  headerInner: {
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#201100',
    fontWeight: '900',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 1,
  },
  taskDescription: {
    color: '#ef6100',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  taskInstructions: {
    color: '#201100',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  cameraButton: {
    marginVertical: 30,
    width: 96,
    height: 96,
  },
  cameraIconImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  buttonIconImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  photoFrame: {
    width: '100%',
    borderRadius: 26,
    borderWidth: 4,
    borderColor: '#c9742a',
    overflow: 'hidden',
    marginVertical: 20,
    backgroundColor: '#fff',
  },
  photoPreview: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  primaryAction: {
    marginBottom: 24,
    width: '100%',
  },
  successCard: {
    width: '100%',
    marginBottom: 24,
  },
  successInner: {
    paddingVertical: 24,
    gap: 18,
  },
  successHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  successHero: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  successCopy: {
    flex: 1,
  },
  successText: {
    color: '#201100',
    fontSize: 30,
    fontWeight: '900',
  },
  rewardText: {
    color: '#201100',
    fontWeight: '700',
    textAlign: 'center',
  },
  rewardPanel: {
    backgroundColor: '#fff4d4',
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#c8741e',
    padding: 16,
    alignItems: 'center',
    gap: 10,
  },
  rewardImage: {
    width: 160,
    height: 110,
    resizeMode: 'contain',
  },
  rewardName: {
    color: '#201100',
    fontWeight: '900',
    fontSize: 18,
  },
});


