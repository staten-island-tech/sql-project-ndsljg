<script setup>
import {ref} from "vue"
import {SUPA} from "../Javascript/supa.js"
    let email = ""
    let password = ""
    let error = ref(false)
    let user = ref(false)
    async function signUp(){
        let x = (await SUPA.userSignUp(email,password))
        console.log(x)
        if (!x.error){
            email = ""
           password = ""
            error.value = "Please check your email for confirmation."
            user.value =   x.data.user
        }else{
            error.value = x.error.message
        }
    }
    async function logIn(){
        let x = (await SUPA.userLogIn(email,password))
        console.log(x)
        if (!x.error){
            email = ""
           password = ""
            user.value =   x.data.user

        }else{
            error.value = x.error.message
        }        
    }
</script>

<template>
    <div>
        <input  v-model="email" placeholder="Email"><br> <br>
        <input  v-model="password" placeholder="Password" type="Password"> <br> <br>
        <p v-if="error">{{ error }}</p>
        <button @click="logIn">Log In</button> <button @click="signUp">Sign Up</button>
        <br><br><br><button v-if="user" @click="$emit('userConfirm',user)">Confirm?</button>
    </div>
</template>

<style scoped>
    div {
        border-radius: 20px;
        background-color:#EECC88;
        width:40vw;
        aspect-ratio:1;
    }
    p {
        color: darkred;
    }
   
</style>