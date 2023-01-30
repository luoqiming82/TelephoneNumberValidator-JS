function telephoneCheck(str) {
    let strToCheck = '';
    const num = '0123456789';
    
    if(str.startsWith('1 ') || str.startsWith('1(')){    // with country code  

       for(let i=0; i<str.length; i++){
        if(i<2){
            strToCheck += str[i]; // preserve first 2 ('1 ' or '1(')
        }else{
            if(num.includes(str[i])){  // transform  num
                strToCheck += '5';
            }else{
                strToCheck += str[i]; // donot transform not nun
            }
        }
       }

       switch(strToCheck){
        case '1 555 555 5555':
            return true;
            break;
        case '1 555-555-5555':
            return true;
            break;
        case '1 (555) 555-5555':
            return true;
            break;
        case '1(555)555-5555':
            return true;
            break;
        default:
            return false;    
       }

    }else{       //  without country code

        for(let i=0; i<str.length; i++){
            if(num.includes(str[i])){  // transform  num
                strToCheck += '5';
            }else{
                strToCheck += str[i]; // donot transform not nun
            }
        }
        
        switch(strToCheck){
            case '555-555-5555':
                return true;
                break;
            case '(555)555-5555':
                return true;
                break;
            case '(555) 555-5555':
                return true;
                break;
            case '555 555 5555':
                return true;
                break;
            case '5555555555':
                return true;
                break;
            default:
                return false;
        }
    }                                      
  }
  
  