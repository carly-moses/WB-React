import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSdd74CpQijTZnzCiCtkmwndZV7nYcihs",
  authDomain: "catch-of-the-day-cmoses-27e1d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cmoses-27e1d.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};
export default base;