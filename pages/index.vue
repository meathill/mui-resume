<template lang="pug">
.container.mx-auto
  .h-96.flex.justify-center.items-center.bg-primary
    .prose.text-white
      h1.text-white 姆伊简历
      p.leading-tight 做最好的 Web 全栈简历网站
      h2.text-white 亮点
      ul
        li 免费
        li 敏感信息密码可见
        li AI 智能评价
  article.bg-secondary.text-white
    h2.text-2xl.font-bold.pt-8.mb-8.text-center 亮点解析
    .h-80(class="lg:px-16 lg:gap-16 lg:grid lg:grid-cols-2 xl:grid-cols-4")
      .flex.flex-col.justify-center.items-center.py-8
        i.bi.bi-save-fill.text-4xl
        h3.text-xl.leading-loose.py-4 开源
        p 支持自主部署。
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
