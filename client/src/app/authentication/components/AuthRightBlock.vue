<template>
  <div class="auth-right-block">
    <div class="form-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthRightBlock',
};
</script>

<style lang="scss" scoped>
.auth-right-block {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .form-block {
    width: 50%;
  }
}

@media (max-width: 1200px) {
  .auth-right-block {
    .form-block {
      width: 85%;
    }
  }
}

@media (max-width: 768px) {
  .auth-right-block {
    width: 100%;
    height: 60%;
    .form-block {
      width: 50%;
    }
  }
}

@media (max-width: 600px) {
  .auth-right-block {
    width: 100%;
    height: 60%;
    .form-block {
      width: 85%;
    }
  }
}
</style>
