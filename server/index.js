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
  console.log(input);
};

/**
 * Input : object user
 * Process : metode yang digunakan adalah bubble sort
 * Output : sebuah file bernama dump_bubble yang berisi daftar nama user beserta gender,
 * terurut. Format file output bebas
 */
const bubbleSort = (input) => {
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