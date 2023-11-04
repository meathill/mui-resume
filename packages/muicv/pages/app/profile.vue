<script setup lang="ts">
import type { MyProfile } from '~/types/cv';
import type { ApiResponse } from '~/types';

const isSaving = ref<boolean>(false);
const isSaved = ref<boolean>(false);
const message = ref<string>('');
const { data: profile } = await useAsyncData<MyProfile>(
  'profile',
  async function () {
    const headers = useRequestHeaders(['cookie']) as HeadersInit;
    const { data } = await $fetch<ApiResponse<MyProfile>>('/api/user/profile', { headers });
    return data;
  },
  {
    default () {
      return {
        fullName: '',
        email: '',
        phone: '',
        wechat: '',
        location: '',
        title: '',
      } as MyProfile;
    },
  },
);

async function doSave (event: Event): Promise<void> {
  if ((event.target as HTMLFormElement).matches(':invalid')) { return }
  if (isSaving.value) { return }

  isSaving.value = true;
  let isSuccessful = false;
  try {
    await $fetch('/api/user/profile', {
      method: 'POST',
      body: profile.value as Record<string, string>,
    });
    isSuccessful = true;
  } catch (e) {
    message.value = (e as Error).message || String(e);
  }
  isSaving.value = false;
  if (isSuccessful) {
    isSaved.value = true;
    await sleep(1500);
    isSaved.value = false;
  }
}
</script>

<template lang="pug">
header.flex.items-center.pb-2.mb-4.border-b
  h1.text-xl.font-bold.mr-auto 基本信息
  .alert.alert-error.mr-2(v-if="message")
    p {{message}}
  button.btn(
    form="profile-form"
    :class="isSaved ? 'btn-success' : 'btn-primary'"
    :disabled="isSaving"
  )
    i.bi.bi-check-lg(v-if="isSaved")
    i.bi.bi-floppy-fill(v-else)
    | 保存

form#profile-form.grid.gap-4(
  class="sm:grid-cols-2"
  @submit.prevent="doSave"
)
  .form-control
    label.label(for="full-name")
      span.label-text 姓名
    input#full-name.input.input-bordered(
      required
      v-model="profile.fullName"
    )
  .form-control
    label.label(for="email")
      span.label-text 邮箱
    input#email.input.input-bordered(
      type="email"
      required
      v-model="profile.email"
    )
  .form-control
    label.label(for="phone")
      span.label-text 手机
    input#phone.input.input-bordered(
      type="tel"
      required
      v-model="profile.phone"
    )
  .form-control
    label.label(for="wechat")
      span.label-text 微信
    input#wechat.input.input-bordered(
      required
      v-model="profile.wechat"
    )
  .form-control
    label.label(for="location")
      span.label-text 工作地点
    input#location.input.input-bordered(
      required
      v-model="profile.location"
    )
  .form-control
    label.label(for="title")
      span.label-text 职位
    input#title.input.input-bordered(
      required
      v-model="profile.title"
    )
</template>
