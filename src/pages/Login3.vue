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
        </div>
        <amplify-authenticator class="" v-if="!loggedIn">
          <amplify-sign-in
            username-alias="email"
            header-text=""
            submit-button-text="Login!"
            slot="sign-in"
          ></amplify-sign-in>
          <amplify-sign-up
            header-text=""
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
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-vue";
import { auth_logout } from "src/services/cloud";
import updateAuthStatus from "../services/loginServices";

export default {
  name: "Login",
  data() {
    return {
      loggedIn: false,
      user: undefined,
      formFields: [
        { type: "name", label: "", placeholder: "First name", required: true },
        {
          type: "family_name",
          label: "",
          placeholder: "Last name",
          required: true
        },
        {
          type: "email",
          label: "",
          placeholder: "Email",
          required: true
        },
        {
          type: "password",
          label: "",
          placeholder: "Password",
          required: true
        },
      ]
    };
  },
  created() {
    const currentConfig = Auth.configure();
    console.log(JSON.stringify(currentConfig));
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
      if (value == true) {
        console.log(JSON.stringify(this.user));
        this.$store.commit("julepx/UPDATE_AUTH", this.user);
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>
<style lang="scss">
:root {
  --amplify-primary-color: #375f7d;
  --amplify-primary-tint: #4ec56a;
  --amplify-primary-shade: #375f7d;
  --amplify-secondary-color: #375f7d;
  --border-color: red;
  --background-color: pink;
  --amplify-background-color: #f1f9ff;
}
amplify-authenticator {
  --box-shadow: 0;
}
</style>
