<script lang="ts" setup>
import {ref} from 'vue';
import type {ProjectExperience} from "~/types/cv";
import ProjectExperiencesComponent from "~/components/ProjectExperiences.vue";

const fullname = ref<string>('');
const title = ref<string>('');
const phone = ref<string>('');
const email = ref<string>('');
const wechat = ref<string>('');
const location = ref<string>('');
const aboutMe = ref<string>('');
const projectExperiences = ref<ProjectExperience[]>([]);

function doPreview() {

}
function doSave() {

}
</script>

<script lang="ts">
export default {
  name: 'resume-editor',
}
</script>

<template lang="pug">
.editor
  app-header
    button.btn.btn-primary(
      type="button"
      @click="doSave"
    )
      i.bi.bi-save-fill.mr-2
      | 保存
    button.btn.btn-success.ml-2(
      type="button"
      @click="doPreview"
    ) 预览

  .container.mx-auto.flex.mt-4

    aside.flex-none.w-60
      ul.menu.bg-base-300.p-2.rounded-box
        li.menu-title
          span 简历大纲
        li
          a(href="#key-info")
            i.bi.bi-star-fill.mr-1
            | 重点信息
        li
          a(href="#about-me")
            i.bi.bi-star-fill.mr-1
            | 求职信
        li
          a(href="project-exp")
            i.bi.bi-star-fill.mr-1
            | 项目经验
        li
          a(href="jobs")
            i.bi.bi-star-half.mr-1
            | 工作经验
        li
          a(href="education")
            i.bi.bi-star-half.mr-1
            | 教育经历
        li
          a(href="skills")
            i.bi.bi-star.mr-1
            | 技能清单
        li
          a(href="awards")
            i.bi.bi-blank.mr-1
            | 获奖情况
        li
          a(href="extra-info")
            i.bi.bi-blank.mr-1
            | 个人信息
        li
          a(href="thanks")
            i.bi.bi-star.mr-1
            | 致谢

    .flex-1.ml-4
      fieldset#key-info.card.bg-base-200.shadow-xl.mb-4
        legend.bg-primary.px-6.py-2.rounded-lg.ml-4.text-primary-content.text-lg 重点信息
        .card-body.grid.grid-cols-2.gap-2
          .form-control
            label.label(for="fullname")
              span.label-text 姓名
              span.label-text-alt(class="text-accent-content/50") 必填
            input#fullname.input.input-bordered.w-full(
              type="text"
              placeholder="请输入姓名"
              required
              v-model="fullname"
            )
          .form-control
            label.label(for="title")
              span.label-text 目标岗位
              span.label-text-alt(class="text-accent-content/50") 必填
            input#title.input.input-bordered.w-full(
              type="text"
              placeholder="请输入职位"
              required
              v-model="title"
            )
          .form-control
            label.label(for="phone")
              span.label-text 手机
              span.label-text-alt(class="text-accent-content/50") 必填
            input#phone.input.input-bordered.w-full(
              type="phone"
              placeholder="请输入手机号码"
              v-model="phone"
              required
            )
          .form-control
            label.label(for="wechat")
              span.label-text 微信
              span.label-text-alt(class="text-accent-content/50") 必填
            input#wechat.input.input-bordered.w-full(
              type="wechat"
              placeholder="请输入微信号"
              v-model="wechat"
              required
            )
          .form-control
            label.label(for="email")
              span.label-text 邮箱
              span.label-text-alt(class="text-accent-content/50") 选填
            input#email.input.input-bordered.w-full(
              type="email"
              placeholder="请输入邮箱"
              v-model="email"
            )
          .form-control
            label.label(for="location")
              span.label-text 工作地点
              span.label-text-alt(class="text-accent-content/50") 选填
            input#about-me.textarea.textarea-bordered.w-full(
              placeholder="请输入工作地点"
              v-model="location"
            )
          p.text-sm.text-gray-500.col-span-2.pt-2 让招聘方能快速了解简历概况，缩短阅读时间。
            br
            | 请留下别人能联系到你的方式，包括手机、微信、邮箱等。

      fieldset#about-me.card.bg-base-200.shadow-xl.mb-4
        legend.bg-primary.px-6.py-2.rounded-lg.ml-4.text-primary-content.text-lg(for="about-me-input") 求职信
        .card-body
          .form-control.mb-2
            textarea#about-me-input.textarea.textarea-bordered.h-24(
              placeholder="请输入个人简介"
              rows="4"
              required
              v-model="aboutMe"
            )
          p.text-sm.text-gray-500 求职信，让招聘方能够对你有初步了解，重点是把你和其他求职者区分开，让你的形象更加具体，更像一个人，而不是某个概念产物。
            br
            | 不要太长，但要包含一些关键词。

      fieldset#project-exp.card.bg-base-200.shadow-xl.mb-4
        legend.bg-primary.px-6.py-2.rounded-lg.ml-4.text-primary-content.text-lg 项目经验
        .card-body
          project-experiences-component(v-model="projectExperiences")
</template>
