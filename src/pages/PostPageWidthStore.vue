<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <div class="monitor-panel">
      <opt-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
      <input-text
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск..."
          v-focus
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
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "../components/Pagination";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostForm, PostList, Pagination
  },
  data() {
    return {
      popupVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.post,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
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