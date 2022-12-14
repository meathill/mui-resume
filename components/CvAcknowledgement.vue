<script lang="ts" setup>
type Props = {
  modelValue: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
});
</script>

<script lang="ts">
export default {
  name: 'CvAcknowledgement'
}
</script>

<template lang="pug">
cv-card#acknowledgement(title="致谢")
  .form-control.mb-2
    textarea#about-me-input.textarea.textarea-bordered.h-24(
      placeholder="请输入致谢语"
      rows="4"
      required
      v-model="props.modelValue"
    )
  p.text-sm.text-gray-500 一般会用明确的致谢语为整个简历收尾。
</template>
