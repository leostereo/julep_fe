/*
export function someMutation (state) {
}
*/
export const UPDATE_USER = (state, userStatus) => {
  state.user = userStatus;
};
export const UPDATE_AUTH = (state, auth) => {
  console.log("mutate: auth");
  state.auth = auth;
};
export const UPDATE_ACCOUNT = (state, account) => {
  console.log("MUTATE: ACCOUNT");
  state.account = account;
};

