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
          <div class="text-h4 text-brand text-center q-my-lg">
            Create Account
          </div>
        </div>
        <q-input
          class=""
          outlined
          label-color="gray"
          color="brand"
          bg-color="input"
          v-model="user"
          label="user"
          :dense="dense"
        />
        <q-input
          type="password"
          class=""
          outlined
          label-color="gray"
          color="brand"
          bg-color="input"
          v-model="pass"
          label="password"
          :dense="dense"
        />
        <div class="text-brand"> 
          <q-checkbox size="xs" keep-color v-model="remember" label="Remember this email?" color="primary"/>
        </div>
        <div class="text-h10 text-brand text-center">
          Forgot you password ?
        </div>
        <div class="fixed-bottom q-mb-md">
          <div class="text-h11 text-brand text-center q-pa-md">
            Don´t you have an account ? <a href="#/register">Sign up</a> to create an account
          </div>
          <div class="text-center">
            <q-btn to="/home" no-caps label="Login" class="j-login-reg log"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pass: "",
      remember:false
    };
  }
  // name: 'PageName',
};
</script>
<style lang="scss">


.log {
  font-size: 1em;
	padding:2% 20%;
}
</style>
