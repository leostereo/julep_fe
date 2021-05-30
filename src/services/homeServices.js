import { api } from "boot/axios";
import Store from "../store";

function getUserStatus() {
  api
    .get("/dashboard/user/100")
    .then(response => {
      console.log(JSON.stringify(response.data));
      Store.commit("julepx/UPDATE_USER", response.data);
      //this.showAlert();
    })
    .catch(() => {
        console.log("errror");
    });
}

export default getUserStatus;
