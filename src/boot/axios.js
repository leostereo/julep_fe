import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios


const api = axios.create({
  //baseURL: "https://api.github.com"
  baseURL: "http://ec2-18-217-138-70.us-east-2.compute.amazonaws.com:8090"
});

Vue.prototype.$api = api;
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

export { axios, api };