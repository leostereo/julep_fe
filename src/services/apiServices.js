import { api } from "boot/axios";
import { Store } from "../store";
//import store from "../store";



function getApidata(apiEnd,mutation) {
    let idToken;
    try {
      idToken = Store.state.julepx.auth.signInUserSession.idToken.jwtToken;
      console.log(idToken);
    } catch (e) {
      console.log("something is wronw");
      console.log(e.message);
    }
  api
    .get(apiEnd, {
      headers: {
        Authorization: `Bearer ${idToken}`,
        Accept: "application/json"
      }
    })
    .then(response => {
      console.log(JSON.stringify(response.data));
      Store.commit(mutation, response.data);
      //store.commit("UPDATE_USER", response.data);
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}

export  {  getApidata };
