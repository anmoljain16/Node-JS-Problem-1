
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;

console.log(queryObject.date+"/"+queryObject.month+'/'+queryObject.year);
  let date = queryObject.date+"/"+queryObject.month+'/'+queryObject.year;
  console.log(date);
  
  
     // convert user input value into date object
	 let  birthDate = new Date(date);
	 
	 // get difference from current date;
	 let difference=Date.now() - birthDate; 
	 	 console.log("diff "+difference);
	 let  ageDate = new Date(difference); 
   console.log("age "+ageDate);
	 let calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
   console.log(calculatedAge);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`Welcome ${queryObject.name} your age is ${calculatedAge}`);
}).listen(4321);





