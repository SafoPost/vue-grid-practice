<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <div class="monitor-panel">
      <opt-select
          v-model="selectedSort"
          :options="sortOptions"
      />
      <button-primary
          @click="showPopup">
        Создать пост
      </button-primary>
      <input-text
          v-focus
          v-model="searchQuery"
          placeholder="Поиск..."
      />
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
    <div class="monitor-panel">
      <div class="panel-group">
        <div class="grid-values">
          С {{ firstPost }} по {{ lastPost }} из {{ totalPosts }} (найдено {{ totalPosts }})
        </div>
      </div>
      <div class="panel-group">
        <grid-select
            v-model="limit"
            :options="optionsLimit">
          Отображать
        </grid-select>
        <v-pagination
            v-model="page"
            :pages="10"
            :range-size="1"
            active-color="#5F9EA0"
            @update:modelValue="pageChangeHandler"
            :hideFirstButton="true"
            :hideLastButton="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {usePosts} from "../hooks/usePosts";
import {useSortedPosts} from "../hooks/useSortedPost";
import {useSortedAndSearchedPosts} from "../hooks/useSortedAndSearchedPosts";
import {usePaginationPosts} from "../hooks/usePaginationPosts";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import _ from "lodash";

export default {
  components: {
    PostForm,
    PostList,
    VPagination
  },
  data() {
    return {
      popupVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' }
      ],
      optionsLimit: [
        { name: 5, value: '5' },
        { name: 10, value: '10' },
        { name: 15, value: '15' },
        { name: 20, value: '20' }
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
    },
    pageChangeHandler(page) {
      console.log('pageChangeHandler', page)
      this.page = page
    }
  },
  setup(props) {
    const { posts, isPostsLoading, page, limit, totalPages, totalPosts, firstPost, lastPost, fetching } = usePosts()
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)
    // const { page, limit, totalPages, allPosts, currentPosts } = usePaginationPosts(posts)

    return {
      posts, isPostsLoading, page, limit, totalPages, totalPosts, firstPost, lastPost, fetching,
      selectedSort, sortedPosts,
      searchQuery, sortedAndSearchedPosts
    }
  },
  watch: {
    page(p) {
      this.fetching();
    },
    limit() {
      this.fetching();
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
.monitor-panel .grid-values {
  font-size: 14px;
  color: #cccccc;
}
.observer {
  width: 100%;
  height: 4px;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  background-color: #5f9ea0;
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

.Pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
}
.Page {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 0;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
}
.Page:hover {
  color: cadetblue;
  border: 1px solid cadetblue;
}
.Page.Page-active {
  color: #FFFFFF;
}
.Page.Page-active:hover {
  color: #FFFFFF;
}
.Control {
  fill: #cccccc;
}
.Control-active {
  fill: #686868;
}

.current-page {
  color: cadetblue;
  background-color: rgba(162, 205, 206, 0.3);
}
</style>