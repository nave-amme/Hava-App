<template>
 <AppHeader> </AppHeader>
<div class="flex flex-row justify-between px-[24px] pb-4">
  <CurrentWeather > </CurrentWeather>
  <ForecastWeather></ForecastWeather>
  <ChartDay></ChartDay>
</div>
<div class="pt-[10px] flex flex-row justify-between px-[24px] pb-4">
  <OverView></OverView>
  <Picture></Picture>
  <RecentCity></RecentCity>
</div>

</template>

<script >
import AppHeader from "./components/TheHeader.vue"
import CurrentWeather from "./components/TopBlue.vue"
import ForecastWeather from "./components/TopView.vue"
import ChartDay from "./components/TopChart.vue"

import OverView from "./components/ButLeft.vue"
import Picture from "./components/ButPic.vue"
import RecentCity from "./components/ButRight.vue"
import axios from 'axios'


export default{
name:'App',
components:{
  AppHeader,
  CurrentWeather, ForecastWeather, ChartDay,
  OverView, Picture, RecentCity,
  ForecastWeather
},
}

</script>

<style scoped>
*{
background:#111015;
margin: 0;
padding: 0;
}</style>