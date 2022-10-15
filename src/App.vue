<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("categoryList");
  }
}
</script>

<style scoped>
</style>
