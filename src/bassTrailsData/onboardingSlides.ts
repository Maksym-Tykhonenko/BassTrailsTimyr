import type { OnboardingSlide } from '../bassTrailsTypes';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'mentor',
    body: 'Hello! I am your fishing mentor. Every day I will give you a simple fishing task — interesting and useful.',
    buttonLabel: 'CONTINUE',
    image: require('../bassTrailsArt/onb/1.png'),
  },
  {
    id: 'task',
    body: 'Complete the task of the day and attach a photo report. This way you will prove that you are a real Bass-trailer!',
    buttonLabel: 'NEXT',
    image: require('../bassTrailsArt/onb/2.png'),
  },
  {
    id: 'reward',
    body: 'For each completed task you get a random fish. It immediately gets into your aquarium.',
    buttonLabel: 'OKAY',
    image: require('../bassTrailsArt/onb/3.png'),
  },
  {
    id: 'start',
    body: 'Ready to go on Bass Trails? Press — and catch your first fish!',
    buttonLabel: 'START',
    image: require('../bassTrailsArt/onb/4.png'),
  },
];


