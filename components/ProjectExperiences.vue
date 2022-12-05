<script lang="ts" setup>
import {toRefs} from "vue";
import type {ProjectExperience} from "~/types/cv";
import {createNewProjectExperience} from "~/pages/resumes/utils";

type Props = {
  value: ProjectExperience[];
}
const props = withDefaults(defineProps<Props>(), {
  value: () => [] as ProjectExperience[],
});
const {
  value: projectExperiences,
} = toRefs(props);

function doAdd(): void {
  projectExperiences.value.push(createNewProjectExperience());
}
</script>

<script lang="ts">
export default {
  name: 'project-experiences',
}
</script>

<template lang="pug">
project-experience-item(v-for="item in projectExperiences" :key="item._id")
button.btn.btn-primary(type="button" @click="doAdd")
  i.bi.bi-plus-lg.mr-1
  | 添加项目经验
</template>
