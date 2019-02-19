<template>
  <Layout>
    <h1>{{ $page.category.title }}</h1>
    <ul>
      <li v-for="{ node } in $page.category.belongsTo.edges" :key="node.id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>
    <Pager :info="$page.category.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Author ($id: String!) {
  category (id: $id) {
    title
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
  components: {
    Pager
  }
}
</script>
