import uniqueId from 'lodash/uniqueId';
import type { ProjectExperience } from '~/types/cv';

export function createNewProjectExperience (): ProjectExperience {
  return {
    _id: uniqueId('project_'),
    name: '',
    description: '',
    role: '',
    link: '',
    images: [],
    techStack: [],
    startDate: '',
    endDate: '',
    visible: true,
    isEditing: true,
  };
}

export function sleep (duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
