<template>
  <Layout>
    <div class="author-info">
      <g-image class="author-info-image" :src="$page.author.image"/>
      <h1>{{ $page.author.title }}</h1>
    </div>
    <ul>
      <li v-for="{ node } in $page.author.belongsTo.edges" :key="node.id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>
    <Pager :info="$page.author.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Author ($id: String!) {
  author (id: $id) {
    title
    image
    belongsTo {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            date (format: "D MMMM, YYYY")
            description
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo () {
    return {
      title: this.$page.author.title
    }
  },
  components: {
    Pager
  }
}
</script>

<style lang='css'>
  .author-info {
    margin-bottom: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .author-info-image {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: .8rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>