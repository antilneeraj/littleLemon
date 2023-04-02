// Taken and edited from https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js because when I added the script file into the index.html, it doesn't work, when I imported it using 'import' in my Form.js file, it threw an error. Then I tried several libraries, but it also doesn't work. Therefore, I had to do this. If you have a suggestion to tackle this problem, please let me know.

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const API = {
  fetchAPI(date){
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  },
  submitAPI(formData){
    return true;
  }
}

export default API;