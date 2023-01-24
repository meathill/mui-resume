<template lang="pug">
section.container.mx-auto.py-6
  h1.text-2xl.mb-4 会员权益
  p 开发不易，运营花钱，感谢大家的支持。
  p 针对学生和各领域贡献者，我们有特殊优惠政策，可以直接获赠若干月的高级会员。

  .grid.grid-cols-3.gap-4.mt-4
    .card.bg-base-100.shadow-lg
      figure
        img(src="https://placeimg.com/400/225/arch" alt="Shoes")
      .card-body
        h2.card-title 月付高级会员
        p 半杯奶茶，支持我们
        p
          strong.text-red ¥5
          span / 月
        .card-actions.justify-end
          button.btn.btn-primary 购买支持

    .card.bg-base-100.shadow-lg
      figure
        img(src="https://placeimg.com/400/225/arch" alt="Shoes")
      .card-body
        h2.card-title 年付高级会员
        p 每月不到 ¥4，一个肉包子
        p
          strong.text-red ¥45
          span / 年
        .card-actions.justify-end
          button.btn.btn-primary 购买支持

    .card.bg-primary-100.shadow-lg
      figure
        img(src="https://placeimg.com/400/225/arch" alt="Shoes")
      .card-body
        h2.card-title 终身会员
        p 以后我们就是朋友了
        p
          strong.text-red ¥118
        .card-actions.justify-end
          button.btn.btn-primary 购买支持

  h2.text-xl.mt-6.mb-4 功能对比
  table.table.w-full
    thead
      tr
        th 功能
        th 匿名用户
        th 普通用户
        th 高级会员
    tbody
      tr
        th 简历数量
        td
          strong 1
        td
          strong 3
        td
          strong 无限
</template>
