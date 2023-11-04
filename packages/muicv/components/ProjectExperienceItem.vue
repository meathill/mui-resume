<script lang="ts" setup>
import type { ProjectExperience } from '~/types/cv';

type Props = {
  modelValue: ProjectExperience;
};
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => createNewProjectExperience(),
});
const localValue = computed({
  get () {
    return props.modelValue;
  },
  set (value: ProjectExperience) {
    Object.assign(props.modelValue, value);
  },
});

async function doSave (): Promise<void> {

}
function doCancel (): void {

}
</script>

<script lang="ts">
export default {
  name: 'ProjectExperienceItem',
};
</script>

<template lang="pug">
.project-experience.grid.grid-cols-2.gap-2
  .form-control
    label.label(:for="'project-name-' + localValue._id")
      span.label-text 项目名称
      span.label-text-alt(class="text-accent-content/50") 必填
    input.input.input-bordered(
      type="text"
      placeholder="请输入项目名称"
      required,
      :id="'project-name-' + localValue._id"
      v-model="localValue.name"
    )
  .form-control
    label.label(:for="'project-role-' + localValue._id")
      span.label-text 在项目承担的角色
      span.label-text-alt(class="text-accent-content/50") 必填
    input.input.input-bordered(
      type="text"
      placeholder="请输入项目角色"
      required,
      :id="'project-role-' + localValue._id"
      v-model="localValue.role"
    )
  .form-control.col-span-2
    label.label(:for="'project-description-' + localValue._id")
      span.label-text 项目描述
      span.label-text-alt(class="text-accent-content/50") 必填
    textarea.textarea.textarea-bordered.h-24(
      placeholder="请输入项目描述。建议使用容易理解的数字描述您在项目中的突出表现，比如：性能提升 50%；延迟减少 5s。"
      row="3"
      required
      :id="'project-description-' + localValue._id"
      v-model="localValue.description"
    )
  .form-control.col-span-2
    label.label(:for="'project-link-' + localValue._id") 项目链接
    input.input.input-bordered(
      type="url"
      placeholder="请输入项目链接"
      :id="'project-link-' + localValue._id"
      v-model="localValue.link"
    )
  .form-control
    label.label(:for="'project-start-date-' + localValue._id") 项目开始时间
    input.input.input-bordered(
      type="date"
      placeholder="请输入项目开始时间"
      :id="'project-start-date-' + localValue._id"
      v-model="localValue.startDate"
    )
  .form-control
    label.label(:for="'project-end-date-' + localValue._id") 项目结束时间
    input.input.input-bordered(
      type="date"
      placeholder="请输入项目结束时间"
      :id="'project-end-date-' + localValue._id"
      v-model="localValue.endDate"
    )

  .form-control
    label.label(:for="'project-techStack-' + localValue._id") 项目使用的技术
    input.input.input-bordered(
      type="text"
      placeholder="请输入项目使用的技术"
      required
      :id="'project-technologies-' + localValue._id"
      v-model="localValue.techStack"
    )

footer.sticky.bg-gray-50.mt-2
  button.btn.btn-primary(
    class="w-1/2"
    type="button"
    @click="doSave"
  ) 保存
  button.btn.btn-ghost.ml-2(type="button" @click="doCancel") 取消
</template>
