<template>
  <div class="news-view">
    <div class="page">
      <a>&lt;prev</a>&nbsp;
      <span>1/19</span>&nbsp;
      <a>more&gt;</a>
    </div>
    <ul class="news-list">
      <my-item :item="item" v-for="item in itemData" :key="item.id"></my-item>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'ItemList',
  components: {
    'my-item': Item
  },
  data () {
    return {
      itemNum: [],
      itemData: [],
      itemSeq: {}
    }
  },
  created: async function () {
    await this.getSeq()
    await this.
  },
  methods: {
    getSeq: async function () {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        this.itemNum = response.json()
        for (let i = 0; i < this.itemNum.length; i++) {
          this.itemSeq[this.itemNum[i]] = i
        }
      } catch (error) {
        console.log(error)
      }
    },
    getData: async function (num) {
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`)
        this.itemData[this.itemSeq[num]] = response.json()
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style lang="scss">
  .news-view {
    padding-top: 45px;
  }

  .page {
    position: fixed;
    top: 55px;
    padding: 15px 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    z-index: 999;
  }

  .news-list {
    max-width: 800px;
    margin: 30px auto;
    padding: 0;
    background-color: #fff;
    list-style: none;
  }
</style>
