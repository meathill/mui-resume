<script lang="ts" setup>
const { status } = useAuth();
</script>

<template lang="pug">
header.bg-base-300
  .navbar.container.mx-auto
    .mr-8
      nuxt-link.btn.btn-ghost.text-xl(to="/")
        img.w-8.h-8.object-cover.rounded-full(src="https://evereditor.com/mui2.jpg")
        | 姆伊求职助手
    .navbar-center
      ul.menu.menu-horizontal.px-1
        li
          nuxt-link(to="/pricing") 价格

    .ml-auto
      nuxt-link.btn.btn-primary(
        :to="status === 'authenticated' ? '/app' : '/auth'"
      )
        i.bi.bi-stars
        | 帮我求职

</template>

<script lang="ts">
export default {
  name: 'AppHeader',
};
</script>
