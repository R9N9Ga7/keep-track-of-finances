export default {
  path: '/',
  component: () => import('./AuthenticationPage.vue'),
  children: [
    {
      path: '',
      name: 'authorization',
      component: () => import('./AuthorizationBlock.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./RegistrationBlock.vue'),
    },
  ],
};
