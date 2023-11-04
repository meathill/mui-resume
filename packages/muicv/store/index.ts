import { type Resume } from '~/types/cv';

export const LOCAL_RESUME = 'muicv';

export const useUserStore = defineStore('user', () => {

});

export const useResumeStore = defineStore('resume', () => {
  const localResume = ref<Resume>();
  const onlineResumes = [] as Resume[];

  async function fetchResumes (start: number): Promise<void> {

  }
  async function saveResume (data: Resume): Promise<void> {

  }
  function initLocalResume (): void {
    const local = localStorage.getItem(LOCAL_RESUME);
    if (local) {
      localResume.value = JSON.parse(local);
    }
  }
  function saveLocalResume (data: Resume): void {
    localStorage.setItem(LOCAL_RESUME, JSON.stringify(localResume));
  }

  return {
    localResume,
    onlineResumes,
    fetchResumes,
    saveResume,
    initLocalResume,
    saveLocalResume,
  };
});
