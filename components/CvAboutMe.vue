<script lang="ts" setup>
type Props = {
  modelValue: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})
</script>

<script lang="ts">
export default {
  name: 'CvAboutMe'
}
</script>

<template lang="pug">
cv-card(id="about-me" title="求职信")
  .form-control.mb-2
    textarea#about-me-input.textarea.textarea-bordered.h-24(
      placeholder="请输入个人简介"
      rows="4"
      required
      v-model="props.modelValue"
    )
  p.text-sm.text-gray-500 求职信，让招聘方能够对你有初步了解，重点是把你和其他求职者区分开，让你的形象更加具体，更像一个人，而不是某个概念产物。
    br
    | 不要太长，但要包含一些关键词。
</template>
