<script lang="ts">
export default {
  name: 'app-header',
}
</script>

<template lang="pug">
.navbar.bg-base-300
  .container.mx-auto
    .flex-1
      nuxt-link.btn.btn-ghost.text-xl(to="/") 姆伊简历
    .flex-none
      nuxt-link.btn.btn-primary(to="/resumes/editor") 新建简历
</template>
