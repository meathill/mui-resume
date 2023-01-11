<template lang="pug">
.h-full.min-h-full.flex.flex-col
  app-header
    nuxt-link.btn.btn-ghost(to="/about") 关于
    nuxt-link.btn.btn-primary.ml-4(to="/resumes/my") 我的简历

  app-footer.mt-auto
</template>
