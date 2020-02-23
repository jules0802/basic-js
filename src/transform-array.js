/*module.exports = */function transform(arr) {
    // remove line with error and write your code here
    if (!Array.isArray(arr)) throw new Error();
    while(arr.includes('--double-prev') || arr.includes('--double-next') || arr.includes('--discard-next') || arr.includes('--discard-prev') ) {
        if (arr.includes('--double-next')) {
            let i = arr.indexOf('--double-next');
            if (i != arr.length-1) {
                let tmp = arr[i+1];
                arr.splice(i, 1, tmp); 
            } else arr.splice(i, 1);       
        }

    if (arr.includes('--double-prev')) {
        let i = arr.indexOf('--double-prev');        
        if (i != 0) {
            let tmp = arr[i-1];
            arr.splice(i, 1, tmp);
        } else arr.splice(i, 1);     
    }  
    
    if (arr.includes('--discard-prev')) {
        let i = arr.indexOf('--discard-prev');
        if (i != 0) arr.splice(i-1, 2);  
        else arr.splice(i, 1);        
    }
    
    if (arr.includes('--discard-next')) {
        let i = arr.indexOf('--discard-next');
        if (i != arr.length-1) arr.splice(i, 2);
        else arr.splice(i, 1);          
    }
    
}
    
return arr;
};


console.log(transform(
    [3,'--discard-next',1,'--double-prev']));
    console.log(transform( ['--discard-next', 1, '--double-prev']));

    /*for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (String(item).startsWith("--")) {         
            switch (item) {
                case '--discard-next': {
                    if (i == arr.length-1) arr.splice(i, 1);
                    else  arr.splice(i, 2);
                    break;       
                }
                case '--discard-prev': {
                    if (i == 0) arr.splice(i, 1);
                    else arr.splice(i-1, 2);
                    break;
                }
                case '--double-next': {
                    if (i== arr.length-1) arr.splice(i, 1);
                    else {   
                        let tmp = arr[i+1];
                        arr.splice(i, 1, tmp);            
                    } 
                    break;
                }
                case '--double-prev': {
                    if (i == 0) arr.splice(i, 1);
                    else {
                        let tmp = arr[i-1];
                        arr.splice(i, 1, tmp);
                    } 
                    break;
                } 
            }
        }
    }*/


