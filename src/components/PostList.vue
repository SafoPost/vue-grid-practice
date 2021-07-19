<template>

  <div v-if="posts.length > 0">
    <h3 class="title">Список постов</h3>
    <div class="post-group">
      <transition-group name="post-list">
        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
      </transition-group>
    </div>
  </div>

  <h3 v-else>Список постов пуст</h3>

</template>

<script>
import PostItem from "./PostItem";
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

.title {
  color: #5f9ea0;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 500ms ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translate(100px, 10px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>