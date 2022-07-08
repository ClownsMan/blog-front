import router from '@/router'

export default [
    {
      name: 'reactApp',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      activeRule: '/reactApp',
    },
    {
      name: 'vueToApp',
      entry: '//localhost:8088',
      container: '#subapp-viewport',
      activeRule: '/vueToApp',
      props: {
        router: router
      }
    },
]
