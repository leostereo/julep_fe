import { api } from "boot/axios";
//import { Store } from "../store";
import store from "../store";


function getUserStatus() {
  api
    .get("/dashboard/user/100")
    .then(response => {
      console.log(JSON.stringify(response.data));
      //store.commit("julepx/UPDATE_USER", response.data);
      store.commit("UPDATE_USER", response.data);
      //this.showAlert();
      return true;
    })
    .catch((err) => {
        console.log(err);
        return false;
    });
}

export default getUserStatus;
