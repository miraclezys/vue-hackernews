<template>
  <div class="news-view">
    <div class="page">
      <a>&lt;prev</a>&nbsp;
      <span>1/19</span>&nbsp;
      <a>more&gt;</a>
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
      stories: []
    }
  },
  created: async function () {
    await this.getStoryIds()
    await this.getPageData(1)
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
        const pageSize = 3
        const requests = this.storyIds.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
          .map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
        const response = await Promise.all(requests)
        const stories = await Promise.all(response.map(res => res.json()))
        this.stories = this.processStories(stories)
      } catch (error) {
        console.log(error)
      }
    },
    processStories: function (stories) {
      return stories.map(story => ({
        ...story,
        website: /https?:\/\/(.*?)\//.exec(story.url)[1],
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
