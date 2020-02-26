class VigenereCipheringMachine {
    constructor (machineType) {
    if (machineType === undefined) this.machineType = true;
    else  this.machineType = machineType;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error();
        
            key = key.toUpperCase();
            message = message.toUpperCase();
            let result = '';
            let countOfnotLetters = 0;
            for (let i=0; i<message.length; i++) {
                if (this.alphabet.indexOf(message[i])>=0) {
                result += this.alphabet[(this.alphabet.indexOf(message[i])+this.alphabet.indexOf(key[(i-countOfnotLetters)%key.length]))%this.alphabet.length];
                } else {
                    result += message[i];
                    countOfnotLetters++;
                }
            } 
            result = this.machineType === true? result : result.split('').reverse().join('');          
        return result;       
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) throw new Error();
       
    
            key = key.toUpperCase();
            encryptedMessage = encryptedMessage.toUpperCase();
            let result = '';
            let countOfnotLetters = 0;
            for (let i=0; i<encryptedMessage.length; i++) {
                if (this.alphabet.indexOf(encryptedMessage[i])>=0) {
                result += this.alphabet[(this.alphabet.indexOf(encryptedMessage[i])+this.alphabet.length-this.alphabet.indexOf(key[(i-countOfnotLetters)%key.length]))%this.alphabet.length];
                } else {
                    result += encryptedMessage[i];
                    countOfnotLetters++;
                }
            }
            result = this.machineType === true? result : result.split('').reverse().join('');
            return result;  
       
    }
}

module.exports = VigenereCipheringMachine;
