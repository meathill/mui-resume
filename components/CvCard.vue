<script lang="ts" setup>
type Props = {
  id: string;
  title: string;
  cardClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  title: '',
  cardClass: ''
})
</script>

<script lang="ts">
export default {
  name: 'AppCard'
}
</script>

<template lang="pug">
fieldset.card.bg-base-200.shadow-xl.mb-4(:id="props.id")
  legend.bg-primary.px-6.py-2.rounded-lg.ml-4.text-primary-content.text-lg {{props.title}}
  .card-body.pt-2(:class="props.cardClass")
    slot
</template>
