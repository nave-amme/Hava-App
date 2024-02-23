<!-- <template>
  <div>
    <h1>API Data</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    fetch('e244db162745edeb338c75c37eb81a93')
      .then(response => response.json())
      .then(data => {
        this.items = data;
      })
      .catch(error => console.error('Error:', error));
  }
};
console.log('api test')
</script> -->

<!-- <template>
  <div class="bg-white">
    <h1 class="bg-white">API Data</h1>
    <input type="text" v-model="data.input">
    <button @click="submit" >update</button>
    <div style="background-color: lightgray;">
      {{ data.city }}
    </div>
    <ul>
      <li class="bg-white" v-for="item in data.forecasts" :key="item.id">{{ item }}</li>
    </ul>
    <div  id="weatherForecast"></div>

  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';


const data = reactive({
  forecasts: [],
  city: {},
  input: 'london'
})

const submit = () => {
  const apiKey = 'e244db162745edeb338c75c37eb81a93'; // Replace 'YOUR_API_KEY' with your actual API key
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${data.input}&appid=${apiKey}&units=metric`;

  axios.get(url)
    .then(res => {
      console.log(res.data); // Handle the response data
      data.forecasts = res.data.list
      data.city = res.data.city
    })
    .catch(error => {
      console.error('Error:', error); // Handle errors
      });
}
</script>
 -->
