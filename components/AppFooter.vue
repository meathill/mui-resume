<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template lang="pug">
footer.footer.items-center.p-4.bg-neutral.text-neutral-content
  .items-center.grid-flow-col
    img.w-8.h-8.object-cover.rounded-full.mr-2(src="https://evereditor.com/mui2.jpg")
    p Copyright © {{year}} - All right reserved

  .grid-flow-col.gap-4(class="md:place-self-center md:justify-self-end")
    a
      i.bi.bi-facebook
    a
      i.bi.bi-twitter
    a
      i.bi.bi-youtube
</template>
