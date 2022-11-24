<template lang="pug">
.home
  h1 这是首页
  App-Alert 将来弄个模版放在这里

  .flex
    nuxt-link(to="/about") 关于
    nuxt-link(to="/resumes/my") 我的简历
</template>
