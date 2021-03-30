const { exec } = require('child_process');

exec('git pull', (err, stdout, stderr) => {
 // handle err, stdout & stderr
});
var x=0, y=1;


runLoop2 = async() => {
    
      
      while (true) {
          await new Promise(resolve => setTimeout(resolve, 15000));

          var ch='git pull origin ver'+y;
          exec(ch, (err, stdout, stderr) => {
            // handle err, stdout & stderr
           });
          
          exec('git pull', (err, stdout, stderr) => {
            // handle err, stdout & stderr
           });
           console.log(ch);
        console.log("loop: "+x);
        x++;
        y++;
          
      }
  }
  
  
  runLoop2();