<template>
  <div class="auth-page">
    <div class="container bg-white">
      <AuthLeftBlock/>
      <AuthRightBlock>
        <transition name="horizontal-slide" mode="out-in">
          <router-view/>
        </transition>
      </AuthRightBlock>
    </div>
  </div>
</template>

<script>
import AuthLeftBlock from './components/AuthLeftBlock.vue';
import AuthRightBlock from './components/AuthRightBlock.vue';

export default {
  name: 'AuthPage',
  components: {
    AuthLeftBlock,
    AuthRightBlock,
  },
};
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #2fc9a3, #13a0aa);
  height: 100vh;
  .container {
    height: 84vh;
    width: 84vw;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    box-shadow: 0 0 10px rgba(33, 33, 33, .5);
  }
}

@media (max-width: 768px) {
  .auth-page {
    .container {
      display: block;
    }
  }
}
</style>
