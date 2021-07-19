<template>
  <form class="new-post-form" @submit.prevent>
    <input-text
        v-focus
        v-model="post.title"
        class="new-post-input"
        placeholder="Заголовок"/>
    <input-text
        v-model="post.body"
        type="text"
        placeholder="Текст поста"/>
    <button-primary class="new-post-button" @click="createPost">Добавить</button-primary>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        text: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        text: '',
      };
    },
  },
}
</script>

<style scoped>
.new-post-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
}
.new-post-form .input-text {
  margin-bottom: 10px;
}
</style>