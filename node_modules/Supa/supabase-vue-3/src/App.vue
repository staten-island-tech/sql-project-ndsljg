<script setup>
import loginformVue from './components/loginform.vue';
import {ref} from "vue"
import { SUPA } from './Javascript/supa';
let user = ref(false)
let count = ref(0)
function changeUser(newUser){
  user.value = newUser
  count.value = newUser.user_metadata.clicks || 0
  console.log(newUser.user_metadata.clicks)
}
let time = 0
let lastTime = 0
async function updateCount(){
 time = Date.now()
 count.value +=1
 if (time - lastTime >500 && user.value){
  lastTime = time
  console.log(await SUPA.updateClicks(count.value))
 }
}
</script>

<template>
  <div v-if="user">
    <h2>{{user.email.split("@")[0] }}</h2>
    <button @click="updateCount"><img src="./greatSushi.png"></button>
    <h4>Count: {{count}}</h4>
  </div>
  <loginformVue @userConfirm="(newUser)=>{console.log(newUser.user_metadata);changeUser(newUser)}" v-else/>
</template>

<style scoped>
div {
  text-align: center;
}
button {
        transition: all 0.3s;
    }
    button:hover {
        transform: scale(1.05 1.05);
    }
</style>
