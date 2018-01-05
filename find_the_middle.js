
   
  
  function roughMiddle(i,j){
//var i = 1000;
//var j = 1;
do {
	((i = i-(Math.floor(Math.random() * 10)))) && (j=j +(Math.floor(Math.random() * 10)));
   
} while ( j<i);
console.log(i && j); 
  }

roughMiddle (10000,8)