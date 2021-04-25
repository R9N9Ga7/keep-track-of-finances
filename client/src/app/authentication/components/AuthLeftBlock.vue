<template>
  <div class="auth-left-block">
    <img :src="require('../../../assets/images/preview-2.jpg')">
    <div class="slogan-block">
      <div class="slogan">
        <span class="color-white">Возьмите под контроль своё финансовое будущее</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLeftBlock',
};
</script>

<style lang="scss" scoped>
.auth-left-block {
  width: 50%;
  overflow: hidden;
  position: relative;
  img {
    height: 150%;
  }
  .slogan-block {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slogan {
      text-shadow: 0px 2px 2px black;
      max-width: 90%;
      font-size: 42px;
      text-align: center;
    }
  }
}

@media (max-width: 768px) {
  .auth-left-block {
    width: 100%;
    height: 150px;
    img {
      // max-height: 100%;
      width: 100%;
      height: auto;
    }
    .slogan-block {
      .slogan {
        font-size: 24px;
      }
    }
  }
}
</style>
