<script lang="ts" setup>
import {useResumeStore, useUserStore} from "~/store";

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
  h2.text-xl 在线简历
  h3.text-lg.mb-4(v-if="noOnlineResume") 未找到您的在线简历。

  user-login-form.max-w-xs
    span 登录查看在线简历

  .divider

  h2.text-xl 本地简历
  nuxt-link.btn.btn-primary(to="/resumes/editor") 创建本地简历
</template>
