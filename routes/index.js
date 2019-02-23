var express = require('express');
var router = express.Router();
//Solution library
var SudokuSolution = require('./../lib/SudokuSolution.js');

/* GET Sudoku solver function page. */
router.get('/', (req, res, next)  =>  {

  var start_request = Date.now();
  //Task data given in array format
  var sudoku = new Array(0,0,0,0,0,0,0,6,0,0,0,7,3,0,0,9,0,0,0,0,8,9,0,0,0,0,0,0,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,5,0,6,0,4,0,1,0,2,0,0,0,9,0,2,0,0,0,0,4,0,0,0,0,6,9,0,0,0,0,7,0);
  res_data = SudokuSolution.solve(sudoku);
  var time_difference = Date.now() - start_request;
  var difference_time = `<br> ${time_difference} -ms Execution timing`;
  //console.log(difference_time);
  res.set('Content-Type', 'text/html');
  res.send(res_data+difference_time);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
