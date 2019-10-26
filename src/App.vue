<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld 
      msg="Hola Mundo "
    />
    <counter>

    </counter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Counter
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
