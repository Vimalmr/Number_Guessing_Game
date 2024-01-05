let count=0;
    
    function randomgenerate()
    {
            var number=(Math.floor(Math.random()*(101)));
            if(number==0){
                number=1;
            }
            //return number;
            console.log (number);
            return number;
    }

    //randomgenerate();
    num=randomgenerate();
      

    function MyFunction(){

        if(count>10){
            alert("Chances are done");
            document.getElementById("num").disabled=true;
            document.getElementById("new").style.display="block";
        }
        else{
            count=count+1;
            var val=document.getElementById("num").value;
            document.getElementById("guessings").innerHTML+=val+" ";
            if(val>num){
                document.getElementById("alert").innerHTML="Wrong";
                document.getElementById("alert").style.backgroundColor="red";
                document.getElementById("result").innerHTML="Guessed value is greater than the answer";
            }
            else if(val<num){
                document.getElementById("alert").innerHTML="Wrong";
                document.getElementById("alert").style.backgroundColor="red";
                document.getElementById("result").innerHTML="Guessed value is lesser than the answer";

            }
            else{
                document.getElementById("alert").innerHTML="Correct";
                document.getElementById("alert").style.backgroundColor="green";
                document.getElementById("result").innerHTML="Correct value is"+" "+num;
                document.getElementById("num").disabled=true;
                document.getElementById("new").style.display="block";
            }
        }
    }