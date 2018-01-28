<template>
  <li class="item">
    <span class="item-num">{{ item.score }}</span>
    <span class="item-title">
      <a :href="item.url">{{ item.title }}</a>
      <span>({{ item.website }})</span>
    </span>
    <br>
    <span class="item-meta">
      by&nbsp;<a :href="item.authorLink">{{ item.by }}</a>&nbsp;
      {{ item.showTime }}&nbsp;|&nbsp;
      <a :href="item.commentLink">{{ item.commentNum }}&nbsp;comments</a>
    </span>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['item']
}
</script>

<style lang="scss" scoped>
  .item {
    display: block;
    position: relative;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    .item-num {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -10px;
      width: 80px;
      color: #f60;
      font-size: 1.1em;
      font-weight: 700;
      text-align: center;
    }

    .item-meta {
      font-size: .85em;
      color: #828282;

      a {
        color: #828282;
        text-decoration: underline;
      }
    }

  }
</style>
