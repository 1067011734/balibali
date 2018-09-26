export default [
  // user
  {
    path: '/',
    component: './index',
    // redirect: '/home',
    routes: [
      // { path: '/', redirect: '/login' },
      { path: '/login', component: './Login' },
      { 
      path: '/user', 
      component: './User',
      hideInMenu:true,
     },
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
            component: './Home',
          },
          {
            path: '/map',
            name: 'map',
            component: './Map',
          },
          {
            path: '/book',
            name: 'book',
            component: './Book',
          },
        ]
      },
    ],
  },
];
