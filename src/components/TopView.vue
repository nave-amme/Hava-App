<template>
    <div class="flex flex-col gap-[16px]">
      <h2 class=" font-Montserrat font-medium text-[20px] leading-[24px] text-[#fff]">Next 5 Days</h2>
      <div class="">
        <ul class="flex flex-row gap-[16px] w-[484px]" v-if="store.apiData?.list">
          <li v-for="item in dates"
              class="rounded-[30px] flex flex-col justify-between items-center bg-[#1B1B1D] h-[226px] w-[84px]">
            <div class="font-Montserrat font-semibold text-[16px] leading-[19px] text-[rgb(229,229,229)] border-b	border-[#39393A]  px-[26px] py-[12px]" v-text="getDate(item)"></div>
            <div class="px-[26px] py-[12px]"><img :src="'https://openweathermap.org/img/wn/'+getImage(item)+'@4x.png'" alt="icon"> </div>
            <div class=" box-border pb-[30px] text-[#FDFDFD] font-Montserrat font-semibold text-[16px] leading-[39px] px-[5px] py-[12px]">
              {{ getTemp(item) }} &deg;</div>
          </li>

        </ul>
      </div>
    </div>
</template>
<script setup>
import { useDataStore } from '@/state'
import {onMounted} from "vue";

let dates=[];
const store = useDataStore();
onMounted(()=>{
  const date = new Date();
  for(let i=0;i<=4;i++) {
    date.setDate(date.getDate() + 1);
    const year=(date.toLocaleDateString('en',{year:'numeric'}))
    const month=(date.toLocaleDateString('en',{month:'2-digit'}))
    const day=(date.toLocaleDateString('en',{day:'2-digit'}))
    dates.push(year+'-'+month+'-'+day)
  }
})
const getDate=(date)=>{

  const d = new Date(date);
  return d.toLocaleDateString('en', { weekday: 'short' })

}
const getImage=(date)=>{
 const obj= store.apiData?.list.find(f=>f.dt_txt.substring(0,10)==date)
return obj.weather[0].icon
}
const getTemp=(date)=>{
 const obj= store.apiData?.list.find(f=>f.dt_txt.substring(0,10)==date)
return obj.main.temp
}
</script>
<style scoped>

</style>
