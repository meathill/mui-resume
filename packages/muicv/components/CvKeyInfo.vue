<script lang="ts" setup>
import type { KeyInfo } from '~/types/cv';

type Props = {
  modelValue: KeyInfo;
};
const props = defineProps<Props>();
const localValue = ref(props.modelValue);
</script>

<script lang="ts">
export default {
  name: 'CvKeyInfo',
};
</script>

<template lang="pug">
cv-card#key-info(title="重点信息" card-class="grid grid-cols-2 gap-2")
  .form-control
    label.label(for="full-name")
      span.label-text 姓名
      span.label-text-alt(class="text-accent-content/50") 必填
    input#full-name.input.input-bordered.w-full(
      type="text"
      placeholder="请输入姓名"
      required
      v-model="localValue.fullName"
    )
  .form-control
    label.label(for="title")
      span.label-text 目标岗位
      span.label-text-alt(class="text-accent-content/50") 必填
    input#title.input.input-bordered.w-full(
      type="text"
      placeholder="请输入职位"
      required
      v-model="localValue.title"
    )
  .form-control
    label.label(for="phone")
      span.label-text 手机
      span.label-text-alt(class="text-accent-content/50") 必填
    input#phone.input.input-bordered.w-full(
      type="phone"
      placeholder="请输入手机号码"
      v-model="localValue.phone"
      required
    )
  .form-control
    label.label(for="wechat")
      span.label-text 微信
      span.label-text-alt(class="text-accent-content/50") 必填
    input#wechat.input.input-bordered.w-full(
      type="wechat"
      placeholder="请输入微信号"
      v-model="localValue.wechat"
      required
    )
  .form-control
    label.label(for="email")
      span.label-text 邮箱
      span.label-text-alt(class="text-accent-content/50") 选填
    input#email.input.input-bordered.w-full(
      type="email"
      placeholder="请输入邮箱"
      v-model="localValue.email"
    )
  .form-control
    label.label(for="location")
      span.label-text 工作地点
      span.label-text-alt(class="text-accent-content/50") 选填
    input#about-me.textarea.textarea-bordered.w-full(
      placeholder="请输入工作地点"
      v-model="localValue.location"
    )
  p.text-sm.text-gray-500.col-span-2.pt-2 让招聘方能快速了解简历概况，缩短阅读时间。
    br
    | 请留下别人能联系到你的方式，包括手机、微信、邮箱等。
</template>
