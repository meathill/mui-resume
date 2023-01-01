import type { ProjectExperience } from '~/types/cv';
import uniqueId from 'lodash/uniqueId';

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
  }
}
