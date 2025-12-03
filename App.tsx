import React, { useMemo, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';

import { FISH_LIBRARY } from './src/bassTrailsData/fishLibrary';
import { ONBOARDING_SLIDES } from './src/bassTrailsData/onboardingSlides';
import { TASK_LIBRARY } from './src/bassTrailsData/taskLibrary';
import { AquariumScreen } from './src/bassTrailsScreens/AquariumScreen';
import { HomeScreen } from './src/bassTrailsScreens/HomeScreen';
import { MyTasksScreen } from './src/bassTrailsScreens/MyTasksScreen';
import { SettingsScreen } from './src/bassTrailsScreens/SettingsScreen';
import { TaskScreen } from './src/bassTrailsScreens/TaskScreen';
import { OnboardingScreen } from './src/bassTrailsScreens/OnboardingScreen';
import { NameInputScreen } from './src/bassTrailsScreens/NameInputScreen';
import type { RewardFish, ScreenName, Task } from './src/bassTrailsTypes';

function App() {
  const [screen, setScreen] = useState<ScreenName>('onboarding');
  const [userName, setUserName] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [aquarium, setAquarium] = useState<RewardFish[]>([]);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  const activeTask = useMemo(
    () => tasks.find(task => task.taskId === activeTaskId),
    [activeTaskId, tasks],
  );

  const completedTasks = useMemo(
    () => tasks.filter(task => task.status === 'completed'),
    [tasks],
  );

  const startNewTask = () => {
    const template =
      TASK_LIBRARY[Math.floor(Math.random() * TASK_LIBRARY.length)];
    const newTask: Task = {
      ...template,
      taskId: `${template.id}-${Date.now()}`,
      status: 'pending',
    };
    setTasks(prev => [newTask, ...prev]);
    setActiveTaskId(newTask.taskId);
    setScreen('task');
  };

  const addPhotoToTask = async () => {
    if (!activeTask) {
      return;
    }

    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    const asset = result.assets?.[0];
    if (asset?.uri) {
      setTasks(current =>
        current.map(task =>
          task.taskId === activeTask.taskId
            ? { ...task, photoUri: asset.uri }
            : task,
        ),
      );
    }
  };

  const completeTask = () => {
    if (!activeTask || !activeTask.photoUri) {
      return;
    }

    const reward =
      FISH_LIBRARY[Math.floor(Math.random() * FISH_LIBRARY.length)];
    setTasks(current =>
      current.map(task =>
        task.taskId === activeTask.taskId
          ? {
              ...task,
              status: 'completed',
              reward,
            }
          : task,
      ),
    );
    setAquarium(prev => [reward, ...prev]);
  };

  const resetToHome = () => {
    setScreen('home');
    setAboutExpanded(false);
  };

  const handleOnboardingFinish = () => {
    if (!userName) {
      setScreen('nameInput');
    } else {
      setScreen('home');
    }
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setScreen('home');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding':
        return (
          <OnboardingScreen
            slides={ONBOARDING_SLIDES}
            onFinish={handleOnboardingFinish}
          />
        );
      case 'nameInput':
        return <NameInputScreen onContinue={handleNameSubmit} />;
      case 'home':
        return (
          <HomeScreen
            userName={userName || 'NICK'}
            onGetTask={startNewTask}
            onShowMyTasks={() => setScreen('myTasks')}
            onShowAquarium={() => setScreen('aquarium')}
            onShowSettings={() => setScreen('settings')}
          />
        );
      case 'task':
        return (
          activeTask && (
            <TaskScreen
              task={activeTask}
              userName={userName || 'NICK'}
              onPickPhoto={addPhotoToTask}
              onComplete={completeTask}
              onExit={resetToHome}
            />
          )
        );
      case 'myTasks':
        return (
          <MyTasksScreen tasks={completedTasks} onExit={resetToHome} />
        );
      case 'aquarium':
        return (
          <AquariumScreen 
            fish={aquarium} 
            onExit={resetToHome}
            aquariumImage={require('./src/bassTrailsArt/033d9203c0e2f58d6a1a2bc4439572225b85ac76.png')}
            backgroundImage={require('./src/bassTrailsArt/8c908a6e4573443a4a59abee3016066deec196fd.png')}
          />
        );
      case 'settings':
        return (
          <SettingsScreen
            vibrationEnabled={vibrationEnabled}
            musicEnabled={musicEnabled}
            aboutExpanded={aboutExpanded}
            onToggleVibration={setVibrationEnabled}
            onToggleMusic={setMusicEnabled}
            onToggleAbout={() => setAboutExpanded(prev => !prev)}
            onExit={resetToHome}
            onBack={resetToHome}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {screen !== 'aquarium' && (
          <>
            <ImageBackground
              source={require('./src/bassTrailsArt/c02ae3312f8aefe306ef7b4a9453a70e7ff31bb7.png')}
              resizeMode="cover"
              style={styles.background}
            />
            <View style={styles.overlay} />
          </>
        )}
        <ScrollView
          contentContainerStyle={[
            styles.content,
            screen === 'aquarium' && styles.aquariumContent,
          ]}
          showsVerticalScrollIndicator={false}>
          {renderScreen()}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 48,
    width: '100%',
  },
  aquariumContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default App;
