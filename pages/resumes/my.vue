<script lang="ts" setup>
import {useResumeStore} from "~/store";
import {computed} from "vue";

const resumeStore = useResumeStore();
const noResume = computed(() => {
  return !resumeStore.localResume;
});

onBeforeMount(() => {
  if (noResume) {
    resumeStore.initLocalResume();
  }
});
</script>

<template lang="pug">
.my-resumes.container.mx-auto.py-6
  // 没有简历
  .w-full.mx-auto(class="md:w-1/2")(v-if="noResume")
    h3.text-lg.text-center.mb-4 未找到您的简历。
    p.text-center.mb-4 您可以选择：
    .flex.w-full
      .grid.flex-grow.h-32.card.bg-base-100.rounded-box.place-items-center
        nuxt-link.btn.btn-primary(
          to="/resumes/editor"
        ) 创建本地简历
      .divider(class="lg:divider-horizontal") OR
      .grid.flex-grow.h-32.card.bg-base-100.rounded-box.place-items-center
        button.btn.btn-secondary(
          type="button"
        ) 登录以查看在线简历

  div(v-else)
    h2.text-xl 本地简历

    // 有本地简历
    // 有在线简历
    nuxt-link.btn.btn-primary(to="/resumes/editor") 新建简历
</template>
