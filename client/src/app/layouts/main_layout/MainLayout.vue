<template>
  <div class="main-layout">
    <VHeader @toggleMenuDisplay="toggleMenuDisplay"/>
    <main class="main">
      <VNav :class="{ 'active-nav': menuIsOpen }"/>
      <router-view
        class="main-content"
        :class="{ 'active-nav-bias-content': menuIsOpen }"
      />
    </main>
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import VNav from './components/VNav.vue';

export default {
  name: 'MainLayout',
  components: {
    VHeader,
    VNav,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenuDisplay() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  transition: transform .3s;
}

.active-nav-bias-content {
  transform: translateX(200px);
}
</style>
