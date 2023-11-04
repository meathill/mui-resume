<template lang="pug">
.container.mx-auto
  .h-96.flex.justify-center.items-center.bg-base-200
    .prose
      h1 姆伊求职助手
      p.leading-tight 姆伊 AI 帮你找到好工作。
      ul
        li 学会制作好简历
        li 针对不同岗位快速生成简历
        li 高效准备面试
        li 全面复盘面试
        li 帮你全网搜索工作机会
  article.bg-base-300
    h2.text-2xl.font-bold.pt-8.mb-8.text-center 亮点解析
    .h-80(class="lg:px-16 lg:gap-16 lg:grid lg:grid-cols-2 xl:grid-cols-4")
      .flex.flex-col.justify-center.items-center.py-8
        i.bi.bi-save-fill.text-4xl
        h3.text-xl.leading-loose.py-4 开源
        p 支持自主部署。可以完全掌控自己的数据。
      .flex.flex-col.justify-center.items-center
        i.bi.bi-star-fill.text-4xl
        h3.text-xl.leading-loose.py-4 简历辅导
        p 简历工具里集成了作者对简历的理解，帮助你写出更好的简历。
      .flex.flex-col.justify-center.items-center
        i.bi.bi-markdown.text-4xl
        h3.text-xl.leading-loose.py-4 多目标简历
        p 可以通过工作经历、项目经理管理，同时为多个目标维护多个简历，快速应聘多个不同的岗位。
      .flex.flex-col.justify-center.items-center
        i.bi.bi-star-fill.text-4xl
        h3.text-xl.leading-loose.py-4 AI 优化
        p 接入多个 AI 系统，帮你快速查找简历的问题，提前优化。
  article.prose.mx-auto.py-8(class="lg:prose-xl")
    h2.text-2xl.font-bold.text-center FAQ
    ul
      li
        details
          summary 付费与不付费有什么区别？
          p 付费用户可以使用更多的功能，比如多目标简历、AI 优化等。

</template>
