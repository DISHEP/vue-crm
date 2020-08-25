<template>
  <div id="app">
    <div id="nav">
      <router-link to="/detailRecord">Детальная запись</router-link> |
      <router-link to="/profile">Профиль</router-link> |

      <router-link to="/login">Вход</router-link> |
      <router-link to="/register">Регистрация</router-link>
    </div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  components: {
    EmptyLayout, MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
