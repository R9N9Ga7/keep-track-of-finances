<template>
  <div
    class="auth-input"
    :class="{ 'auth-input-active': focus || value, 'auth-input-error': error }"
  >
    <label>
      <input
        class="auth-input__input"
        :type="type"
        @focus="focus = true"
        @blur="focus = false"
        v-model="inputValue"
      >
      <span class="auth-input__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AuthInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'password'].indexOf(value) !== -1,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  data() {
    return {
      focus: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth-input {
  position: relative;
  margin: 25px 0;
  .auth-input__input {
    width: 100%;
    padding: 5px;
    font-size: 1.2rem;
    outline: none;
    border: none;
    border-bottom: 2px solid rgba(200, 200, 200, .4);
    transition: border-color .2s;
    box-sizing: border-box;
  }
  .auth-input__label {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 1.2rem;
    color: rgba(100, 100, 100, .9);
    transition: transform .3s, color .2s;
    cursor: text;
    user-select: none;
  }
}

.auth-input-active {
  .auth-input__input {
    border-color: var(--green);
  }
  .auth-input__label {
    transform: translateY(-1.5rem);
    color: var(--green);
  }
}

.auth-input-error {
  .auth-input__input {
    border-color: var(--red);
  }
  .auth-input__label {
    color: var(--red);
  }
}
</style>
