/* eslint-disable no-unused-vars */

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
var user = firebase.auth().currentUser;
var db = firebase.firestore()

firebase.initializeApp({
    apiKey: "AIzaSyCxRTkWjoToUoNsM8Rm6zPwiJBG_JCB4fo",
    authDomain: "verycoolthanksforsharing.firebaseapp.com",
    databaseURL: "https://verycoolthanksforsharing.firebaseio.com",
    projectId: "verycoolthanksforsharing",
    storageBucket: "verycoolthanksforsharing.appspot.com",
    messagingSenderId: "78626384450",
    appId: "1:78626384450:web:5c1a5470485502ab"
});

function onloadPoints() {
};

function memePoints() {

}

function articlePoints() {

}