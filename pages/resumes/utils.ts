import type { ProjectExperience } from '~/types/cv'

export function createNewProjectExperience (): ProjectExperience {
  return {
    name: '',
    description: '',
    link: '',
    images: [],
    tags: [],
    highlights: [],
    techStack: [],
    testimony: [],
    startDate: '',
    endDate: '',
    visible: true
  }
}
