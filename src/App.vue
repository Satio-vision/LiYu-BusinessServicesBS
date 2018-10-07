<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
 html, body {
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
