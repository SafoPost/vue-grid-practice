<template>
  <div class="post-item">
    <div class="text-block">
      <span class="post-id">{{ post.id }}</span>
      <strong class="post-title" @click="$router.push(`/posts/${post.id}`)">{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </div>
    <div class="button-block">
      <button-primary>Редактировать</button-primary>
      <button-secondary
          @click="$emit('remove', post)">
        Удалить
      </button-secondary>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0 10px 20px;
  border-top: 2px solid #f36075;
}
.post-item .post-title {
  font-size: 18px;
  color: cadetblue;
  cursor: pointer;
}
.post-item .post-id {
  font-size: 12px;
  color: #f36075;
}
.button-block {
  display: flex;
  flex-direction: column;
}
.button-block button + button {
  margin-top: 10px;
}
.text-block strong {
  display: block;
  padding-bottom: 10px;
  max-width: 70%;
}
</style>