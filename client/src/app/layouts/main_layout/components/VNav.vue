<template>
  <nav class="nav">
    <ul>
      <li
        v-for="link in links"
        :key="link.title"
      >
        <router-link
          :to="{ name: link.name }"
          exact-active-class="active-link"
        >{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VNav',
  data() {
    return {
      links: [
        {
          title: 'Добавить',
          name: 'add',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 200px;
  height: 100%;
  background-color: #e0f2f1;
  position: absolute;
  transform: translateX(-100%);
  transition: transform .3s;
  ul {
    list-style: none;
    li {
      a {
        padding: 5px 10px;
        text-decoration: none;
        color: var(--black);
        display: block;
        width: 90%;
        margin: 5px auto;
        text-align: center;
        border-radius: 5px;
        transition: background-color .2s;
        &:hover {
          background-color: #b2dfdb;
        }
      }
      .active-link {
        background-color: #b2dfdb;
      }
    }
  }
}

.active-nav {
  transform: translateX(0);
}
</style>
