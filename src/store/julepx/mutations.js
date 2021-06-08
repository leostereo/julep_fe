/*
export function someMutation (state) {
}
*/
export const UPDATE_USER = (state, userStatus) => {
  state.user = userStatus;
};
export const UPDATE_AUTH = (state, auth) => {
  console.log("desde el mutation");
  state.auth = auth;
};

 export function SET_DARK(state, { dark }) {
   localStorage["ub-dark-mode"] = dark;
   state.dark = dark;
 }