<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:21:29
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-23 21:02:05
 -->
<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
