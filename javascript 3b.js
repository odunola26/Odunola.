let Array=[];
   function wholenumber (data)
{for (let i=1; i<=data; i++){
    
    if(i%2==0 && i%3==0 && i%5==0){
    Array.push("yu-gi-oh");
   }

    else if (i%3==0 && i%5==0){
      Array.push("gi-oh");
    }

    else if( i%2 ==0 && i%5==0){
      Array.push("yu-oh");
    }
  
      else if (i%2==0 && i%3==0){
       Array.push("yu-gi");
      }

       else if (i%5==0){
        Array.push("oh");
      } 

        else if (i%3==0){
          Array.push ("gi");}
      
       else if (i%2==0){
        Array.push("yu");
      }
    
       else{Array.push(i)
      } 
     }
          console.log(Array)
         return  Array
         
 }
wholenumber(100)
wholenumber(35)
  
