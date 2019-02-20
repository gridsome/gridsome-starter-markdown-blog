<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.post.title }}</h1>
      <p class="article-meta">
        Written by
        <g-link class="article-meta-author" :to="$page.post.author.path">
          {{ $page.post.author.title }}
        </g-link>
        on
        {{ $page.post.date }}
      </p>
      <g-image class="article-cover-image" :src="$page.post.image"/>
      <div class="content" v-html="$page.post.content" />
      <g-link class="article-tags" v-for="category in $page.post.categories" :key="category.id" :to="category.path">
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
  .article {
    margin-top: 15px;
  }

  .article-meta {
    font-size: .8rem;
    padding: .5rem 0 .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .article-meta-author {
    margin: 0 .3rem;
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
  }

  .article a:hover {
    color: #429e73;
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

  .article .content {
    margin-bottom: 1rem;
  }

  .article-tags {
    padding: .2rem .5rem;
    background-color: #c2ecd8;
    border-radius: 20px;
    margin-right: .5rem;
  }
</style>
