<template>
  <div class="bg-julep1 text-julep1">
    <q-dialog v-model="delDialog">
      <q-card class="bg-julep1 text-julep1 q-px-md">
        <q-card-section align="center" class="q-pt-none">
          <p class="secondary_text q-mt-md">Give up with "{{ title }}"" ?</p>
        </q-card-section>
        <q-card-actions align="center" class="q-mb-md">
          <q-btn
            flat
            label="confirm"
            class="j-login-reg"
            @click="deleteGoal"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="row q-mb-xs">
      <div class="col-10">{{ title }}</div>
      <div class="col-auto"></div>
      <div class="col-1"><q-icon name="edit" style="font-size: 1.5em" /></div>
      <div class="col-1">
        <q-icon
          name="delete"
          @click="delDialog = true"
          style="font-size: 1.5em;"
        />
      </div>
    </div>
    <q-linear-progress rounded size="25px" :value="progressVal" color="julep1">
      <div class="absolute-full flex flex-center">
        <q-badge color="julep1" text-color="julep1" :label="progressLabel" />
      </div>
    </q-linear-progress>
  </div>
</template>

<script>
export default {
  name: "Goal",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    progress: {
      type: Number,
      required: true,
      default: 0
    },
    type: {
      type: String,
      required: false
    }
  },
  data: () => ({
    delDialog: false
  }),
  methods: {
    deleteGoal: function() {
      console.log("deleting");
    }
  },
  computed: {
    progressVal() {
      return parseFloat((this.progress / 100).toFixed(2));
    },
    progressLabel() {
      return (this.progress * 1).toFixed(2) + "%";
    }
  }
};
</script>

<style lang="scss" scoped>
.frame {
  border-radius: 15px;
  padding: 3%;
  margin-bottom: 1%;
}
.enabled {
  background: white;
}
.disabled {
  background: grey;
}

.title {
  font-size: 1em;
  color: #4ec56a;
  margin: 0%;
}
.title_dis {
  font-size: em;
  color: #375f7d;
  margin: 0%;
}
.description {
  font-size: 0.8em;
  margin: 0%;
}
</style>
