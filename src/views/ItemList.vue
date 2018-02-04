<template>
  <div class="news-view">
    <div class="page">
      <a>&lt;prev</a>&nbsp;
      <span>{{ pageIndex }}/{{ pageSum }}</span>&nbsp;
      <router-link :to="'/' + $route.name + '/' + (pageIndex + 1)">more&gt;</router-link>
    </div>
    <ul class="news-list">
      <my-item :item="item" v-for="item in stories" :key="item.id"></my-item>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/StoryItem'

export default {
  name: 'ItemList',
  components: {
    'my-item': Item
  },
  data () {
    return {
      storyIds: [],
      stories: [],
      pageSize: 3,
      pageIndex: this.$route.params.page ? parseInt(this.$route.params.page) : 1,
      pageSum: ''
    }
  },
  created: async function () {
    await this.getStoryIds()
    await this.getPageData(this.pageIndex)
    console.log(this.$router)
  },
  methods: {
    getStoryIds: async function () {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        this.storyIds = await response.json()
      } catch (error) {
        console.log(error)
      }
    },
    getPageData: async function (pageIndex) {
      try {
        const requests = this.storyIds.slice((pageIndex - 1) * this.pageSize, pageIndex * this.pageSize)
          .map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
        const response = await Promise.all(requests)
        const stories = await Promise.all(response.map(res => res.json()))
        this.stories = this.processStories(stories)
        this.pageSum = Math.ceil(this.storyIds.length / this.pageSize)
        console.log(stories, this.stories, this.pageSum)
      } catch (error) {
        console.log(error)
      }
    },
    processStories: function (stories) {
      return stories.map(story => ({
        ...story,
        website: /https?:\/\/(.*?)\//.exec(story.url)[1],
        authorLink: '/user/' + story.by,
        commentNum: story.kids.length,
        showTime: (new Date(story.time * 1000)).toDateString()
      }))
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
