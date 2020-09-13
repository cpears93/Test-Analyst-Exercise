<template lang="html">
  <div class="login-page">
    <div class="new-user-form" v-if="!authenticated">
      <h1>Create a PIN</h1>
      <form class="boxes" id="create-a-pin" v-on:submit.prevent="onSubmit()">
        <label for="Enter-PIN-Field">Enter a 5 digit PIN: </label>
        <input required type="number" id="Enter-5-PIN" v-model="EnterPIN">
        <br>
        <label for="Confirm-PIN-Field">Confirm PIN: </label>
        <input required type="number" id="Confirm-PIN" v-model="ConfirmPIN">
        <br>
        <button type="submit"> Submit </button>
    </div>

    <div v-if="authenticated">
      <h3>Confirm Your PIN</h3>
      <form class="boxes" id="create-a-pin" v-on:submit.prevent="onSubmit()">
        <label for="Enter-PIN-Field">Enter a 5 digit PIN: </label>
        <input required type="number" id="Enter-5-PIN" v-model="EnterPIN">
        <br>
        <label for="Confirm-PIN-Field">Confirm PIN: </label>
        <input required type="number" id="Confirm-PIN" v-model="ConfirmPIN">
        <button type="submit"> Submit </button>
        <br>
    </div>

    <div v-if="authenticated">
      <h1>Thanks for Signing Up</h1>
      <h3> Your experience with Nude starts here! </h3>
      <button type="submit"> Continue </button>
    </div>
    
  </div>
</template>