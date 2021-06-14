<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <div class="fixed-top q-mt-lg">
          <div class="text-center">
            <q-img
              src="../assets/images/logo design_color_bluetext_nobackground.png"
              style="height: 80px; max-width: 260px"
              />
          </div>
          <div class="text-h5 text-julep1 text-center q-my-md">
            Create Account
          </div>
        </div>
        <q-input
                  class="q-mb-xs"
          outlined
          label-color="julep1"
          color="julep1"
          bg-color="input"
          v-model="user"
          label="user"
        />
        <q-input
                          class="q-my-xs"

          type="password"
          outlined
          label-color="julep1"
          color="julep"
          bg-color="input"
          v-model="pass"
          label="password"
        />
        
        <div class="text-julep1 q-my-xs"> 
          <q-checkbox size="xs" keep-color v-model="remember" label="Remember this email?" color="julep1"/>
        </div>
        <div class="text-h10 text-julep1 text-center q-my-xs">
          Forgot you password ?
        </div>
        <div class="fixed-bottom q-mb-md">
          <div class="text-h11 text-julep1 text-center q-pa-md">
            Don´t you have an account ? <a href="#/register">Sign up</a> to create an account
          </div>
          <div class="text-center">
            <q-btn to="/dashboard" no-caps label="Login" class="j-login-reg log"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',  
  data() {
    return {
      user: "",
      pass: "",
      remember:false
    };
  }

};
</script>
<style lang="scss">


.log {
  font-size: 1em;
	padding:2% 20%;
}
</style>
