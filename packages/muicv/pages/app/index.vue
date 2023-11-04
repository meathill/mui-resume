<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template lang="pug">
.flex.flex-col.gap-4.container.mx-auto.py-4(class="sm:flex-row")
  aside.w-72.flex-none
    ul.menu.bg-base-200.rounded-box
      li
        nuxt-link(
          active-class="active"
          to="/app/profile"
        )
          i.bi.bi-info-circle-fill
          | 基本信息
      li
        nuxt-link(
          active-class="active"
          to="/app/career"
        )
          i.bi.bi-journal-bookmark-fill
          | 我的经历
      li
        nuxt-link(
          active-class="active"
          to="/app/resume"
        )
          i.bi.bi-file-person-fill
          | 我的简历
      li
        nuxt-link(
          active-class="active"
          to="/app/jd"
        )
          i.bi.bi-chat-left-heart-fill
          | 模拟面试
      li
        nuxt-link(
          active-class="active"
          to="/app/config"
        )
          i.bi.bi-gear-fill
          | 设置

  .flex-1
    nuxt-page
</template>

<script lang="ts">
export default {
  name: 'MuicvApp',
};
</script>
