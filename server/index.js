/**
 * =========================================================
 * Algoritma
 * =========================================================
 */

const db = require('./dump');

const newUser = {
  name: 'Finita',
  gender: 'F',
};

/**
 * Input : object user
 * Process : metode yang digunakan adalah divide and conquer
 * Output : sebuah file bernama dump_divide yang berisi daftar nama user beserta gender,
 * terurut. Format file output bebas
 */
const divideAndConquer = (input) => {
  var user = db.users;
  user.push(input);
  var len = user.length;
   if(len <2)
      return user;
   var mid = Math.floor(len/2),
       left = user.slice(0,mid),
       right =user.slice(mid);
       //console.log(right);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   console.log(merge(left,right));
   var fs = require('fs');
  fs.writeFile("./data/dump_divide.js", JSON.stringify(merge(left,right)), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  }); 
  console.log(input);
};

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

/**
 * Input : object user
 * Process : metode yang digunakan adalah bubble sort
 * Output : sebuah file bernama dump_bubble yang berisi daftar nama user beserta gender,
 * terurut. Format file output bebas
 */
const bubbleSort = (input) => {
  var user = db.users;
  user.push(input);
  
  user.sort(function(a,b){
    //console.log(a.name);
    return a.name.localeCompare(b.name);
  })

  var fs = require('fs');
  fs.writeFile("./data/dump_bubble.js", JSON.stringify(user), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  }); 

  console.log(input);
}

// Eksekusi divide and conquer method
divideAndConquer(newUser);

// Eksekusi bubbleSort method
bubbleSort(newUser);


/**
 * =========================================================
 * BackEnd
 * =========================================================
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});