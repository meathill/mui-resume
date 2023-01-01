<script lang="ts" setup>
import { toRefs } from 'vue'
import type { ProjectExperience } from '~/types/cv'
import { createNewProjectExperience } from '~/pages/resumes/utils'

type Props = {
  modelValue: ProjectExperience[];
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [] as ProjectExperience[]
})
const {
  modelValue: projectExperiences
} = toRefs(props)

function doAdd (): void {
  projectExperiences.value.push(createNewProjectExperience())
}
function doReferExp (): void {

}
</script>

<script lang="ts">
export default {
  name: 'ProjectExperiences'
}
</script>

<template lang="pug">
cv-card#project-exp.project-experiences(title="项目经验")
  project-experience-item(
    v-for="(item, index) in projectExperiences"
    :key="item._id"
    v-model="projectExperiences[index]"
  )
  button.btn.btn-primary.mt-2(type="button" @click="doAdd")
    i.bi.bi-plus-lg.mr-1
    | 添加项目经验

  button.btn.btn-secondary(type="button" @click="doReferExp")
    i.bi.bi-link.mr-1
    | 使用已保存的项目经验
</template>
