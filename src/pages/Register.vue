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
        <div class="row q-mt-lg">
  <div class="col">        <q-input
          outlined
          label-color="gray"
          color="julep1"
          bg-color="input"
          v-model="firstname"
          label="First Name"
        /></div>
        
  <div class="col q-ml-sm">       <q-input
          class=""
          outlined
          label-color="gray"
          color="julep1"
          bg-color="input"
          v-model="lastname"
          label="Last Name"
        /></div>

</div>

        <q-input
          class="q-my-xs"
          outlined
          label-color="gray"
          color="julep1"
          bg-color="input"
          v-model="email"
          label="Email"
        />
        <q-input
          type="password"
          class="q-my-xs"

          outlined
          label-color="gray"
          color="julep1"
          bg-color="input"
          v-model="pass1"
          label="password"

        />
        <q-input
          type="password"
          class="q-my-xs"
          outlined
          label-color="gray"
          color="julep1"
          bg-color="input"
          v-model="pass2"
          label="confirm password"
        />
        <div class="fixed-bottom q-mb-lg q-mr-lg">
          <div class="text-right">
            <q-btn
              to="/login"
              no-caps
              label="SIGN UP"
              class="j-login-reg reg"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      pass1: "",
      pass2: "",
    };
  },
};
</script>
<style lang="scss">
.reg {
  font-size: 1em;
  padding: 1% 5%;
}
</style>
