export const encryptValue = async (message, secret) => {
    var encrypted = CryptoJS.AES.encrypt(message, secret);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
    return encrypted
}

export const decryptValue = async (encrypted, secret) => {

    var decrypted = CryptoJS.AES.decrypt(encrypted, secret);
    //4d657373616765
    return decrypted
}

export const randomString = (length) => {
    
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   return result;
}

export const randomNumber = (length) => {
    
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   return result;
}