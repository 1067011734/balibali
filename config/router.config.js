export default [
  // user
  {
    path: '/',
    component: './index',
    // redirect: '/home',
    routes: [
      // { path: '/', redirect: '/login' },
      { path: '/login', component: './Login' },
      { path: '/user', component: './User' },
      {
        path: '/',
        component: './Base',
        routes: [
          {
            path: '/',
            redirect: '/home',
          },
          {
            path: '/home',
            name: 'home',
            key: 'home',
            component: './Home',
          },
          {
            path: '/map',
            name: 'map',
            key: 'map',
            component: './Map',
          },
          {
            path: '/book',
            name: 'book',
            key: 'book',
            component: './Book',
          },
        ]
      },
    ],
  },
];
