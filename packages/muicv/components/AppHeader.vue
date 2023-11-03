<script lang="ts" setup>
import { useUserStore } from '~/store';

const userStore = useUserStore();
</script>

<script lang="ts">
export default {
  name: 'AppHeader',
};
</script>

<template lang="pug">
.navbar.bg-base-300
  .container.mx-auto
    .flex-1
      nuxt-link.btn.btn-ghost.text-xl.text-orange-600(to="/")
        img.w-8.h-8.object-cover.rounded-full.mr-2(src="https://evereditor.com/mui2.jpg")
        | 姆伊求职助手
    .flex-none
      slot

</template>
