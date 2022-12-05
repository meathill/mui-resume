<script lang="ts" setup>
import type {ProjectExperience} from "~/types/cv";
import {createNewProjectExperience} from "~/pages/resumes/utils";

type Props = {
  value: ProjectExperience;
}
const props = withDefaults(defineProps<Props>(), {
  value: () => createNewProjectExperience(),
});
const localValue = computed({
  get() {
    return props.value;
  },
  set(value: ProjectExperience) {
    Object.assign(props.value, value);
  },
})


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
    input.input(type="text" id="project-name" placeholder="请输入项目名称" v-model="localValue.name")
</template>
