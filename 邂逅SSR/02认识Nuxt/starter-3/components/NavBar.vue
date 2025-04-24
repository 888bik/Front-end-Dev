<template>
  <div class="navbar">
    <nav>
      <div>导航栏</div>
      <!-- 会自动查找public目录下的资源 -->
      <img src="/user.png" alt="" class="avatar" />
    </nav>
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
</style>
