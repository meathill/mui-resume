<script lang="ts" setup>
const email = ref<string>('');
const password = ref<string>('');
const remember = ref<boolean>(false);
</script>

<script lang="ts">
export default {
  name: 'LoginForm',
}
</script>

<template lang="pug">
.form.card.bg-base-100.shadow-md
  p.card-header.px-6.py-4.bg-primary.text-primary-content.rounded-t-xl
    slot 登录
  .card-body
    label.label
      span.sr-only 邮箱
      input.input.input-bordered.w-full(
        type="email"
        placeholder="用户名"
        required
        v-model="email"
      )
    label.label
      span.sr-only 密码
      input.input.input-bordered.w-full(
        type="password"
        placeholder="密码"
        v-model="password"
      )
    label.label.cursor-pointer.justify-start
      input.checkbox(
        type="checkbox"
        v-model="remember"
      )
      span.label-text.ml-2 记住我
    button.btn.btn-primary(type="submit") 登录
</template>
