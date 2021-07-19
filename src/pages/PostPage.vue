<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <div class="monitor-panel">
      <opt-select
          v-model="selectedSort"
          :options="sortOptions"
      />
      <input-text
          v-focus
          v-model="searchQuery"
          placeholder="Поиск..."
      />
      <button-primary
          @click="showPopup">
        Создать пост
      </button-primary>
    </div>
    <popup-window v-model:show="popupVisible">
      <post-form
          @create="createPost"
      />
    </popup-window>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка постов...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--<div>
      <button @click="addLike">like</button >
      <button @click="addDislike">dislike</button >
    </div>
    <div>
      <div>Нравится: {{ likes }}</div>
      <div>Ненравится: {{ dislikes }}</div>
    </div>-->
    <!--<div class="monitor-panel">
      <pagination
          :page="page"
          :total-pages="totalPages"
          @update="changePage"
      />
    </div>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import Pagination from "../components/Pagination";

export default {
  components: {
    PostForm, PostList, Pagination
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [],
      title: '',
      body: '',
      popupVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' },
        { value: 'id', name: 'По идентификатору' },
      ]
    }
  },
  methods: {
    addLike() {
      this.likes++
    },
    addDislike() {
      this.dislikes++
    },
    createPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка!');
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page++;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка!');
      }
    },

  },
  mounted() {
    this.fetchPosts();

  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // }
  }

}
</script>

<style>

.monitor-panel {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 20px 0;
}
.monitor-panel .input-text {
  flex: 1 1 100%;
  margin: 0 20px;
}
.observer {
  width: 100%;
  height: 4px;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  background-color: cadetblue;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.2);
}
.observer::after {
  content: '';
  display: block;
  margin-top: 4px;
  border-top: 5px solid cadetblue;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: none;
}
</style>