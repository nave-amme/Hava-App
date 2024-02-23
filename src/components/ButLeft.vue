<template>
    <div class="flex flex-col gap-4 ">
      <h2 class="w-[198px] h-6 font-medium text-[20px] leading-6 text-white "> Monday
         <span class="w-[198px] h-6 font-medium text-[20px] leading-6 text-[#626161]">’s Overview</span>
      </h2>
      <div class="grid grid-cols-2 gap-[16px] 	">
        <div class="flex flex-col justify-between rounded-2xl p-3 w-[180px] h-[180px] border border-black bg-[#1B1B1D]">
          <div class="font-normal font-Montserrat text-[16px] text-[#fff] leading-5">High Temp</div>
            <div class="  flex justify-center">
              <img class=' h-[48px] w-[48px] ' src="../assets/main/temp.svg" alt="high temp">
            </div>
            <div class="font-Montserrat flex justify-center font-semibold text-xl  text-[#fff]">14&deg;c</div>       
        </div>
        <div class="flex flex-col justify-between rounded-2xl p-3 w-[180px] h-[180px] border border-black bg-[#1B1B1D]">
          <div class="font-normal font-Montserrat text-[16px] text-[#fff] leading-5">low Temp</div>
            <div class="flex justify-center ">
              <img class=' h-[48px] w-[48px] ' src="../assets/main/freez.png" alt="low temp">
            </div>
            <div class="font-Montserrat flex justify-center font-semibold text-xl  text-[#fff]">3&deg;c</div>       
        </div>
        <div class="flex flex-col justify-between rounded-2xl p-3 w-[180px] h-[180px] border border-black bg-[#1B1B1D]">
          <div class="font-normal font-Montserrat text-[16px] text-[#fff] leading-5"> wind</div>
            <div class="flex justify-center ">
              <img class=' h-[48px] w-[48px] ' src="../assets/main/wind.png" alt="wind">
            </div>
            <div class="font-Montserrat flex justify-center font-semibold text-xl  text-[#fff]">3.6 <sub>m/s</sub> </div>       
        </div>
        <div class="flex flex-col justify-between rounded-2xl p-3 w-[180px] h-[180px] border border-black bg-[#1B1B1D]">
          <div class="font-normal font-Montserrat text-[16px] text-[#fff] leading-5">humidity</div>
            <div class="flex justify-center ">
              <img class=' h-[48px] w-[48px] ' src="../assets/main/sunrain.svg" alt="humidity">
            </div>
            <div class="font-Montserrat flex justify-center font-semibold text-xl  text-[#fff]">16 &percnt;</div>       
        </div>
      </div>
    </div>
  </template>  
  <script>
  export default{
    name:'overview',
    }
  </script>
