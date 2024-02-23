<template>
    <div class="flex flex-col gap-4 w-[526] h-[414px] ">
        <h2 class="font-Montserrat font-medium text-xl text-[#fff] ">Recent Cities</h2>
        <div class="flex flex-col gap-4">
            <div class="flex flex-row justify-between rounded-2xl w-[297px] px-6 py-3 bg-[#1B1B1D]"
            v-for="item in cities"
            >
                <div class="flex flex-col w-[297px]" >
                    <p class="font-Montserrat font-normal text-[#777] text-sm">{{item.city.country}}</p>
                    <p class="font-Montserrat font-normal text-xl text-[#fff]">{{ item.city.name }}</p>
                    <p class="font-Montserrat font-normal text-sm text-[#EFEFEF]">{{item.w}}</p>
                </div>
                <img src="../assets/Rainy-Sunny (2) 1 (1).svg" alt="logo">
            </div>

        </div>
    </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

const cities=ref([]);

onMounted(()=>{
  cities.value= JSON.parse(localStorage.getItem('cities'))|| []
})
</script>
<style scoped>

</style>
