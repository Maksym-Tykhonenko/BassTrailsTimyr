export type ScreenName =
  | 'onboarding'
  | 'nameInput'
  | 'home'
  | 'task'
  | 'myTasks'
  | 'aquarium'
  | 'settings';

export type TaskTemplate = {
  id: string;
  title: string;
  description: string;
  instructions: string;
};

export type RewardFish = {
  id: string;
  name: string;
  image: { uri: string };
};

export type Task = TaskTemplate & {
  taskId: string;
  status: 'pending' | 'completed';
  photoUri?: string;
  reward?: RewardFish;
};

export type OnboardingSlide = {
  id: string;
  headline?: string;
  body: string;
  buttonLabel: string;
  image?: { uri: string } | number;
};


