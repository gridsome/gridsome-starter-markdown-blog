<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.post.title }}</h1>
      <span v-if="$page.post.author">
        Written by
        <g-link :to="$page.post.author.path">
          {{ $page.post.author.title }}
        </g-link>
      </span>
      <span>{{ $page.post.date }}</span>
      <g-image :src="$page.post.image"/>
      <div class="content" v-html="$page.post.content" />
      <g-link v-for="category in $page.post.categories" :key="category.id" :to="category.path">
        {{ category.title }}
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<page-query>
query Post ($id: String!) {
  post (id: $id) {
    title
    date (format: "D MMMM, YYYY")
    content
    image
    author {
      title
      path
    }
    categories {
      id
      title
      path
    }
  }
}
</page-query>

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
