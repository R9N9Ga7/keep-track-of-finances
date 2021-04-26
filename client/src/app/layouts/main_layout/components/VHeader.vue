<template>
  <header class="header">
    <div class="left-controls">
      <MenuIcon
        @click="$emit('toggleMenuDisplay')"
        class="menu"
      />
    </div>
    <div class="right-controls">
      <button class="btn btn-red">Выйти</button>
    </div>
  </header>
</template>

<script>
import MenuIcon from '../../../shared/svgs/menu_icon.svg';

export default {
  name: 'VHeader',
  components: {
    MenuIcon,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #80cbc4;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-controls {
    display: flex;
    align-items: center;
    .menu {
      height: 40px;
      padding: 5px;
      color: var(--white);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color .2s;
      &:hover {
        background-color: #4db6ac;
      }
    }
  }
}
</style>
