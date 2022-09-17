function buzzFizz(){
    output= [];
    count=1;
    while(count<=100){
        if(count%3===0 && count%5===0){
            output.push("buzzfizz");
        }
        else if(count%3===0){
            output.push("buzz");
        }
        else if(count%5===0){
            output.push("fizz");
        }
        else{
            output.push(count);
        }
        count++;
    }
    console.log(output);
    
}
