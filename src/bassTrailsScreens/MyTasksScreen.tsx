import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';
import type { Task } from '../bassTrailsTypes';

type MyTasksScreenProps = {
  tasks: Task[];
  onExit: () => void;
};

export function MyTasksScreen({ tasks, onExit }: MyTasksScreenProps) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>MY TASKS:</Text>

      {tasks.length === 0 ? (
        <Card style={styles.emptyCard} innerStyle={styles.emptyInner}>
          <Image
            source={require('../bassTrailsArt/man.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyLabel}>NO COMPLETED TASKS</Text>
        </Card>
      ) : (
        <View style={styles.taskList}>
          {tasks.map(task => (
            <Card key={task.taskId} style={styles.taskCard} innerStyle={styles.taskInner}>
              <Text style={styles.taskLabel}>TASK:</Text>
              <Text style={styles.taskDescription}>{task.description}</Text>
              {task.photoUri && (
                <Image
                  source={{ uri: task.photoUri }}
                  style={styles.taskPhoto}
                />
              )}
              {task.reward && (
                <View style={styles.rewardRow}>
                  <Image source={require('../bassTrailsArt/onb/4.png')} style={styles.rewardImage} />
                  <Text style={styles.rewardLabel}>{task.reward.name}</Text>
                </View>
              )}
            </Card>
          ))}
        </View>
      )}

      <AppButton
        label="EXIT TO HOME"
        variant="secondary"
        onPress={onExit}
        size="large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 20,
  },
  emptyCard: {
    width: '100%',
    marginBottom: 32,
  },
  emptyInner: {
    alignItems: 'center',
    paddingVertical: 36,
  },
  emptyImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  emptyLabel: {
    color: '#1f1200',
    fontSize: 18,
    fontWeight: '900',
  },
  taskList: {
    width: '100%',
    gap: 20,
    marginBottom: 28,
  },
  taskCard: {
    width: '100%',
  },
  taskInner: {
    paddingBottom: 20,
  },
  taskLabel: {
    color: '#f18a00',
    fontWeight: '900',
    marginBottom: 6,
  },
  taskDescription: {
    color: '#1f1200',
    fontWeight: '900',
    fontSize: 18,
    marginBottom: 12,
  },
  taskPhoto: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: 12,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  rewardImage: {
    width: 72,
    height: 48,
    resizeMode: 'contain',
  },
  rewardLabel: {
    color: '#1f1200',
    fontWeight: '900',
  },
});


