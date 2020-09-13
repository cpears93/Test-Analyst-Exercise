<template lang="html">
  <div class="login-page">
    <div class="new-user-form" v-if="!authenticated">
      <h1>Enter Your Phone Number</h1>
      <form class="boxes" id="enter-phonenumber" v-on:submit.prevent="onSubmit()">
        <label for="Enter-Phonenumber">Enter Your Phone Number </label>
        <input required type="number" id="Enter-Phonenumber" v-model="PhoneNumber">
        <div v-if="authenticated">
      <button type="submit"> Send Code </button>
    </div>  

    <div v-if="authenticated">
      <h3>Verify 07956333764</h3>
      <form class="boxes" id="enter-OTP" v-on:submit.prevent="onSubmit()">
        <label for="OTP-Code">Paste Code </label>
        <label for="OTP-Code">Resend Code </label>
        <input required type="number" id="Enter-OTPr" v-model="Enter Code">
        <div v-if="authenticated">
      <button type="submit"> Submit </button>
      </form>
     </div> 
    </div>
   </div>
</template>