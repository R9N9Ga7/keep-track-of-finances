<template>
  <component
    :is="isLayout"
    id="app"
  >
    <router-view/>
  </component>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
    EmptyLayout,
  },
  computed: {
    isLayout() {
      return `${this.$route.meta.layout || 'main'}-layout`;
    },
  },
};
</script>
