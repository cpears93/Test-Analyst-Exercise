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
      </form>
    </div>

    <div v-if="authenticated">
      <h3>Welcome {{currentUser.emailAddress}}!</h3>
    </div>
    
  </div>
</template>