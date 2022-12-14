<script lang="ts" setup>
import type { ProjectExperience } from '~/types/cv'
import { createNewProjectExperience } from '~/pages/resumes/utils'

type Props = {
  modelValue: ProjectExperience;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => createNewProjectExperience()
})
const localValue = computed({
  get () {
    return props.modelValue
  },
  set (value: ProjectExperience) {
    Object.assign(props.modelValue, value)
  }
})

</script>

<script lang="ts">
export default {
  name: 'ProjectExperienceItem'
}
</script>

<template lang="pug">
.project-experience.grid.grid-cols-2.gap-2
  .form-control
    label.label(:for="'project-name-' + localValue._id") 项目名称
    input.input(
      type="text"
      placeholder="请输入项目名称"
      required,
      :id="'project-name-' + localValue._id"
      v-model="localValue.name"
    )
  .form-control
    label.label(:for="'project-role-' + localValue._id") 在项目承担的角色
    input.input(
      type="text"
      placeholder="请输入项目角色"
      required,
      :id="'project-role-' + localValue._id"
      v-model="localValue.role"
    )
  .form-control.col-span-2
    label.label(:for="'project-description-' + localValue._id") 项目描述
    textarea.textarea.textarea-bordered.h-24(
      placeholder="请输入项目描述"
      row="3"
      required
      :id="'project-description-' + localValue._id"
      v-model="localValue.description"
    )
  .form-control
    label.label(:for="'project-link-' + localValue._id") 项目链接
    input.input(
      type="url"
      placeholder="请输入项目链接"
      :id="'project-link-' + localValue._id"
      v-model="localValue.link"
    )
  .form-control
    label.label(:for="'project-start-date-' + localValue._id") 项目开始时间
    input.input(
      type="date"
      placeholder="请输入项目开始时间"
      required
      :id="'project-start-date-' + localValue._id"
      v-model="localValue.startDate"
    )
  .form-control
    label.label(:for="'project-end-date-' + localValue._id") 项目结束时间
    input.input(
      type="date"
      placeholder="请输入项目结束时间"
      required
      :id="'project-end-date-' + localValue._id"
      v-model="localValue.endDate"
    )
  .form-control.col-span-2
    label.label(:for="'project-highlights-' + localValue._id") 项目亮点
    textarea.textarea.textarea-bordered.h-24(
      placeholder="请输入项目成果"
      row="3"
      required
      :id="'project-achievements-' + localValue._id"
      v-model="localValue.highlights"
    )
  .form-control
    label.label(:for="'project-techStack-' + localValue._id") 项目使用的技术
    input.input(
      type="text"
      placeholder="请输入项目使用的技术"
      required
      :id="'project-technologies-' + localValue._id"
      v-model="localValue.techStack"
    )
</template>
