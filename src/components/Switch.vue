<template>
    <div>
      <input type="checkbox" id="toggle" v-model="isToggled" class="toggle-checkbox">
      <label for="toggle" class="toggle-label">
        <div class="toggle-inner"></div>
        <div class="toggle-slider" v-if="!isToggled"><span class="p-[20%]"> &deg;f</span></div>
        <div class="toggle-slider" v-else><span class="p-[20%]"> &deg;c</span></div>
      </label>
    </div>
  </template>
  
  <style scoped>
  .toggle-checkbox {
    display: none;
  }
  
  .toggle-label {
    position: relative;
  }
  
  .toggle-inner {
    width: 80px;
    height: 40px;
    border: 1px solid #626161;
    border-radius: 24px;
    /* background-color: #fff; */
    transition: background-color 0.3s;
  }
  
  .toggle-slider {
    position: absolute;
    top: 20%;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #D8E9F9;
    transition: left 0.3s;
  }
  
  input[type="checkbox"]:checked + .toggle-label .toggle-inner {
    background-color: #19191B; /* Color when toggle is on */
  }
  
  input[type="checkbox"]:checked + .toggle-label .toggle-slider {
    left: 50px;
  }
  </style>
  
  <script setup>
  import {ref, watch} from "vue";
  import {useDataStore} from '@/state'
  
  const store = useDataStore()
  
  let isToggled = ref(false)
  watch(isToggled, (v) => {
    store.changeUnit(v==true?'c':'f')
  })
  
  </script>
  