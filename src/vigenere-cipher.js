class VigenereCipheringMachine {
    constructor (machineType) {
    this.machineType = machineType;
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
        return this.machineType === undefined || true? result: result.split('').reverse().join();       
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) throw new Error();
        //if (this.machineType == 'reverse') {
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
            return this.machineType === undefined || true? result: result.split('').reverse().join();  
       // }
    }
}

module.exports = VigenereCipheringMachine;
