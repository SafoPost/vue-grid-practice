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
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка постов...</div>
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "../components/Pagination";
import {usePosts} from "../hooks/usePosts";
import {useSortedPosts} from "../hooks/useSortedPost";
import {useSortedAndSearchedPosts} from "../hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm, PostList, Pagination
  },
  data() {
    return {
      popupVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' }
      ]
    }
  },
  methods: {
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
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
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