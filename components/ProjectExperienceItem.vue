<script lang="ts" setup>

</script>

<script lang="ts">
export default {
  name: 'project-experience-item',
}
</script>

<template lang="pug">
.project-experience
  .form-control
    label.label(for="project-name") 项目名称
    input.input(type="text" id="project-name" placeholder="请输入项目名称")
</template>
