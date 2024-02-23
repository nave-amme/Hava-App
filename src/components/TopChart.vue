<template>
    <div class="flex flex-col gap-[16px]">
        <h2>
            <span class=" font-Montserrat font-medium text-xl text-[#FFF]">Monday</span><span class=" font-Montserrat font-medium text-xl text-[#626161]">Hourly Forecast</span>
        </h2>
        <div class="w-[409px] h-[226px]"></div>
  </div>
</template>
<script setup>
import { useDataStore } from '@/state'

const store = useDataStore()
</script>

