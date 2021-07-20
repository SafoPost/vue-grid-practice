<template>
  <div class="navbar">
    <div class="link-to-main" @click.prevent="$router.push('/')">New Vue</div>
    <ul class="navbar-links">
      <li class="navbar-item" @click.prevent="$router.push('/posts')">Посты</li>
      <li class="navbar-item" @click.prevent="$router.push('/store')">Посты со store</li>
      <li class="navbar-item" @click.prevent="$router.push('/composition')">Посты с composition-api</li>
      <li class="navbar-item" @click.prevent="$router.push('/table')">Таблица с пользователями</li>
      <li class="navbar-item" @click.prevent="$router.push('/grid')">Таблица с шаблоном данных</li>
      <li class="navbar-item" @click.prevent="$router.push('/about')">О приложении</li>
    </ul>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.link-to-main {
  cursor: pointer;
}
.navbar {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: rgba(162, 205, 206, 0.3);
  /*border-top: 4px solid cadetblue;*/
  /*border-bottom: 4px solid cadetblue;*/
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
}
.navbar-links {
  display: flex;
  list-style: none;
}
.navbar-item {
  padding: 5px 10px;
  color: white;
  background-color: cadetblue;
  cursor: pointer;
}
.navbar-item + .navbar-item {
  margin-left: 10px;
}
</style>