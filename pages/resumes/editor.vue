<script lang="ts" setup>
import {ref} from 'vue';

const aboutMe = ref<string>('');
const phone = ref<string>('');
const email = ref<string>('');
const wechat = ref<string>('');
</script>

<template lang="pug">
.editor
  app-header

  .container.mx-auto.flex.mt-4

    aside.flex-none.w-60
      ul.menu.bg-base-300.p-2.rounded-box
        li.menu-title
          span 简历大纲
        li
          a(href="#about-me") 求职信
        li
          a(href="contact") 联系方式
        li
          a(href="education") 个人信息
        li
          a(href="experience") 项目经验
        li
          a(href="jobs") 工作经验
        li
          a(href="education") 教育经历
        li
          a(href="skills") 技能清单
        li
          a(href="awards") 获奖情况
        li
          a(href="thanks") 致谢

    .flex-1.ml-4
      fieldset#about-me.mb-4
        legend.mb-2.text-xl 求职信
        .form-control.mb-2
          textarea#about-me-input.textarea.textarea-bordered.h-24(
            placeholder="请输入个人简介"
            rows="4"
            required
            v-model="aboutMe"
          )
        p.text-sm.text-gray-500 求职信，让招聘方能够对你有初步了解，重点是把你和其他求职者区分开，让你的形象更加具体，更像一个人，而不是某个概念物。
          br
          | 不要太长，但要包含一些关键词。

      fieldset#contact.mb-4
        legend.mb2.text-xl 联系方式
        .form-control.mb-2
          .grid.grid-cols-6.gap-2.justify-items-end
            label.label(for="phone") 手机
            input#phone.input.input-bordered.w-full.col-span-2(
              type="phone"
              placeholder="请输入手机号码"
              v-model="phone"
              required
            )
            label.label(for="email") 邮箱
            input#email.input.input-bordered.w-full.col-span-2(
              type="email"
              placeholder="请输入邮箱"
              v-model="email"
              required
            )
            label.label(for="wechat") 邮箱
            input#wechat.input.input-bordered.w-full.col-span-2(
              type="wechat"
              placeholder="请输入微信号"
              v-model="wechat"
              required
            )
        p.text-sm.text-gray-500 请留下别人能联系到你的方式，包括手机、邮箱、微信等。
</template>
