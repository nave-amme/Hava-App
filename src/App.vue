 <script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import header from './components/TheHeader.vue'
import TheHeader from './components/TheHeader.vue';

</script>

<template>
  <!-- <header class="bg:red">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    This is a blackboard
  </header> -->
  <!-- <div class="wrapper">
       <HelloWorld msg="You did it!" />
    </div>
    <welcome-item/> -->
  <main>
    <p class="text-red-500, font-bold, bg-blue">salam osta</p>
    <TheHeader/>
  </main>
</template>




<style scoped>
#app{
  background-color: aquamarine;
}
header {
  line-height: 1.5;

}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    top: 100em;
  }
}
</style>
