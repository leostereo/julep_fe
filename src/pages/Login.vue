<template>
  <q-page class="flex flex-center bg-julep1">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="margin:auto;width: 90%">
        <div class="fixed-top q-mt-lg">
          <div class="text-center">
            <q-img
              src="../assets/images/logo design_color_bluetext_nobackground.png"
              style="height: 80px; max-width: 200px"
            />
          </div>
          <div class="text-h5 text-julep1 text-center ">
            Create Account
          </div>
        </div>
    <amplify-authenticator class="" v-if="!loggedIn" >
      <amplify-sign-in
      username-alias="email"
        header-text=""
        submit-button-text="Login!"
        slot="sign-in"
      ></amplify-sign-in>
      <amplify-sign-up
        header-text="Create Account"
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      />
    </amplify-authenticator>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import "@aws-amplify/ui-vue";
import { auth_logout } from "src/services/cloud";
import updateAuthStatus from "../services/loginServices";

export default {
  name: 'Login',
  data() {
    return {
      loggedIn: false,
      user: undefined,
      formFields: [{ type: "email" }, { type: "password" }]
    };
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      if (authState == "signedin") {
        this.loggedIn = true;
        this.user = authData;
      } else {
        this.loggedIn = false;
        this.user = "";
      }
    });
  },
    watch: {
    loggedIn(value) {
        if(value==true){
        console.log("before commit");
        this.$store.commit("julepx/UPDATE_AUTH", this.user);
        this.$router.push('/dashboard');
        }

    }
  }
 
};
</script>
<style lang="scss">
:root {
  --amplify-primary-color: #375F7D;
  --amplify-primary-tint:#4EC56A;
  --amplify-primary-shade:#375F7D;
  --amplify-secondary-color: #375F7D;
  --border-color:red;
  --background-color: pink;
  --amplify-background-color: #F1F9FF;
}
amplify-authenticator {
  --box-shadow: 0;
}
</style>
