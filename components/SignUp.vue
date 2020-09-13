<template lang="html">
  <div class="login-page">
    <div class="new-user-form" v-if="!authenticated">
      <h3>Confirm Email Address</h3>
      <form class="boxes" id="confirm-new-user" v-on:submit.prevent="onSubmit()">
        <label for="emailAddress-field">Confirm Email Address: </label>
        <input required type="email" id="emailAddress-confirm" v-model="ConfirmEmailAddress">
        <br>
        <label for="password-field">Password: </label>
        <input required type="password" v-model="newPassword">
        <br>
        <button type="submit"> Looks Good </button>
      </form>
    </div>

    <div v-if="authenticated">
      <h3>Welcome {{currentUser.emailAddress}}!</h3>
    </div>

  </div>
</template>