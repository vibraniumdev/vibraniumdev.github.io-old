// Animação
(function () {
  'use strict';

  new WOW().init();

})();

// API GitHub

// (function () {
//   const user = "guiemi";
//   const url = "https://api.github.com/users/guiemi/repos";
//   const client_id = "9d71a8c4106f4ea74ef9";
//   const client_secret = "f9ff9a14fad8c26a809624c6bd2007690311b4af";

//   async function getUser(user) {
//     const profile = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
//     const profile_json = profile.json();

//     return profile_json

//     console.log(user)
//   }

//   getUser(user).then(res => console.log(res))

// })();