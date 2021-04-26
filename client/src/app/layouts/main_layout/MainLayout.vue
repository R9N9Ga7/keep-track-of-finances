<template>
  <div>
    <VHeader @toggleMenuDisplay="toggleMenuDisplay"/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';

export default {
  name: 'MainLayout',
  components: {
    VHeader,
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
