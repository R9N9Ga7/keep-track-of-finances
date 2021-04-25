<template>
  <div>
    <h1 class="color-green text-align-center">Регистрация</h1>
    <AuthInput
      v-model="$v.userData.email.$model"
      label="Почта"
      :error="$v.userData.email.$invalid && checkData"
    />
    <AuthInput
      v-model="$v.userData.password.$model"
      label="Пароль"
      type="password"
      :error="$v.userData.password.$invalid && checkData"
    />
    <AuthInput
      v-model="$v.userData.confirmPassword.$model"
      label="Повторите пароль"
      type="password"
      :error="$v.userData.confirmPassword.$invalid && checkData"
    />
    <div class="tools">
      <button @click="onSubmit" class="btn btn-green">Зарегистрироваться</button>
      <router-link :to="{ name: 'authorization' }" class="link">Войти</router-link>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';

import AuthInput from './components/AuthInput.vue';

export default {
  name: 'AuthRegistration',
  mixins: [validationMixin],
  components: {
    AuthInput,
  },
  data() {
    return {
      userData: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      checkData: false,
    };
  },
  validations: {
    userData: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    onSubmit() {
      this.checkData = true;
      if (!this.$v.userData.$invalid) {
        console.log(this.userData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
