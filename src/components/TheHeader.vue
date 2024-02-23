<template>
  <div class="flex flex-row justify-between px-[24px] pt-4 pb-[40px]">
    <div class="flex flex-row justify-between gap-12">
      <div class="flex flex-row items-center">
        <img src="../assets/header/location.svg" alt="location" class="">
        <p class="font-Montserrat font-normal text-[16px] text-[#FEFEFE]">Iran.Tehran</p>
      </div>

      <div class="flex flex-row gap-2 bg-[#1E1E1E] rounded-[10px] px-4 py-2 w-[500px]">
        <img src="../assets/header/searching.svg" alt="" class="">
        <input
          type="text"
          class="text-[#EDEDED] bg-[#1E1E1E] font-normal text-sm w-[500px]"
          placeholder="Search City"
          v-model="city"
          @keydown.enter="fetchData"
          @input="handleInput"
        />
      </div>
    </div>
    <Switch/>
  </div>
</template>

<script setup>
import axios from "axios";
import Switch from "./Switch.vue";
import { onMounted, reactive, ref } from "vue";
import { apiKey } from "../API";
import { useDataStore } from '@/state'

const store = useDataStore()

const city = ref("tehran");
store.city= 'tehran'

onMounted(async()=>{
fetchData();
})
const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${apiKey}`
    );
    if(response.status!=200)return;


    const lat=response.data[0].lat;
    const long=response.data[0].lon;

    const response1 = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
    );

    let c=JSON.parse(localStorage.getItem('cities'))||[];
    c.unshift({city:response.data[0],w:response1.data.list[0].weather[0].main})
    if (c.length > 3)
      c.splice(3, 1)
    localStorage.setItem('cities', JSON.stringify(c))
    store.setData(response1.data)
    console.log("Response:", response1.data);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

</script>

<style scoped>

i{
  color: white;
}
 span{
  display: flex;
  flex-direction: row;
}


</style>
