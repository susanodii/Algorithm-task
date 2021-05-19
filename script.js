// TASK 1

function convertFahrToCelsius (fahr){
    let result;
    const num = Number(fahr); 
    if(!isNaN(num)){
        const celcius = (num - 32) *(5/9);
        result = celcius.toFixed(4);
    }
    else if(Array.isArray(fahr)){
        result = `${JSON.stringify(fahr)} is not a valid number but a/an array`
    }
    else{
        result = `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}`
    }
    console.log(result);
    return result;
}


//TASK 2
function parseNumber (factor){
    if(factor===2){
        return 'yu-';
    }
    else if(factor===3){
        return 'gi-';
    }
    else if(factor===5){
        return 'oh-';
    }
}

function converter(number){
    const factors = [2,3,5];
    let factorised = false;
    let conversion = "";

    factors.forEach((factor)=>{
         if(number%factor === 0){
            factorised = true;
            conversion = conversion.concat(parseNumber(factor));
         }
    })
    return factorised ? conversion.substring(0,conversion.length - 1) :number;
}

function checkYuGiOh (count){
    let result = [];
    const n = Number(count); 

    if(!isNaN(n)){
        for(let i=1;i<=n;i++){
            result.push(converter(i));
        }
    }
    else{
        result = `invalid parameter: ${JSON.stringify(count)}`;
    }
    console.log(result);
    return result;
}