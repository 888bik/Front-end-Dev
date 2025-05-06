<template>
  <div>
    detail Parent Page
    <!-- {{ message }} -->
    <!-- <div v-for="post in posts" :key="post.name">
      <div class="title">标题:{{ post.name }};</div>
      <div class="content">{{ post.content }}</div>
      <div class="date">{{ post.date }}</div>
    </div> -->

    <div>
      <Head>
        <Title>bik666</Title>
      </Head>
      <NuxtLink to="/detail/children1">children1 Page</NuxtLink>
      <NuxtLink to="/detail/children2">children2 Page</NuxtLink>
    </div>
    <!-- 嵌套路由 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
// const { message } = await $fetch("/api/hello");
// const posts = await $fetch("/api/posts");
</script>
