<script lang="ts" setup>
import { ref } from 'vue';
import type { KeyInfo, ProjectExperience } from '~/types/cv';
import CvAboutMe from '~/components/CvAboutMe.vue';
import CvAcknowledgement from '~/components/CvAcknowledgement.vue';

const keyInfo = reactive<KeyInfo>({
  fullName: '',
  email: '',
  phone: '',
  title: '',
  wechat: '',
  location: '',
});
const aboutMe = ref<string>('');
const projects = ref<ProjectExperience[]>([]);
const acknowledgement = ref<string>('');

function doPreview () {

}
function doSave () {

}
</script>

<script lang="ts">
export default {
  name: 'ResumeEditor',
};
</script>

<template lang="pug">
.container.mx-auto.flex.mt-4
  aside.flex-none.w-60
    ul.menu.bg-base-300.p-2.rounded-box
      li.menu-title
        span 简历大纲
      li
        a(href="#key-info")
          i.bi.bi-star-fill.mr-1
          | 重点信息
      li
        a(href="#about-me")
          i.bi.bi-star-fill.mr-1
          | 求职信
      li
        a(href="#project-exp")
          i.bi.bi-star-fill.mr-1
          | 项目经验
      li
        a(href="#jobs")
          i.bi.bi-star-half.mr-1
          | 工作经验
      li
        a(href="#education")
          i.bi.bi-star-half.mr-1
          | 教育经历
      li
        a(href="#skills")
          i.bi.bi-star.mr-1
          | 技能清单
      li
        a(href="#awards")
          i.bi.bi-blank.mr-1
          | 获奖情况
      li
        a(href="#extra-info")
          i.bi.bi-blank.mr-1
          | 个人信息
      li
        a(href="#acknowledgement")
          i.bi.bi-star.mr-1
          | 致谢

  .flex-1.ml-4
    cv-key-info(v-model="keyInfo")
    cv-about-me(v-model="aboutMe")
    project-experiences(v-model="projects")
    cv-acknowledgement(v-model="acknowledgement")
</template>
