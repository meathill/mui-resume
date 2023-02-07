<script lang="ts" setup>
import { useResumeStore, useUserStore } from '~/store';

const resumeStore = useResumeStore();
const userStore = useUserStore();
const noOnlineResume = computed(() => {
  return !resumeStore.onlineResumes?.length;
});

onBeforeMount(() => {
  if (!resumeStore.localResume) {
    resumeStore.initLocalResume();
  }
});
</script>

<template lang="pug">
.my-resumes.container.mx-auto.py-6
  h2.text-xl 我的简历

  .divider

  .border-2.border-gray-200.rounded.w-48.h-64.border-dashed.flex.justify-center.items-center
    nuxt-link.text-center(to="/resumes/new")
      i.bi.bi-plus-circle.text-4xl.text-gray-200.mb-4
      br
      span 创建简历

footer.container.mx-auto.border-t.border-gray-200.py-4
  article.prose.prose-sm.text-gray-400
    ul
      li 未登录用户只能创建一份本地简历。
      li 登录后可以通过网络同步简历
</template>
