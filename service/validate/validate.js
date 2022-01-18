const isCharactersString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[0-9a-zA-Z ]+$/.test( str ) );
}

const isEmailString = email => {
    if ( email === undefined || typeof email !== "string" || email.length === 0 ) return false;
    const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpEmail.test( String( email ).toLowerCase() );
}

const isJwtString = ( jwt ) => {
    if ( jwt === '' || jwt.trim() === '' ) return false;
    const jwtRegex = /^eyJ[a-zA-Z0-9-_.]+$/;
    return jwtRegex.test( jwt );
}

const isPasswordString = password => {
    if ( password === undefined || typeof password !== "string" || password.length === 0 ) return false;
    const regExPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regExPassword.test( String( password ) );
}

const isUsernameString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[0-9a-zA-Z]+$/.test( str ) );
}

function isPhoneNumber( str ) {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test( str ) );
}

const isUrlSafeString = ( inputString ) => {
    if ( inputString === '' || inputString.trim() === '' ) return false;
    const jwtRegex = /^[a-zA-Z0-9-_.]+$/;
    return jwtRegex.test( inputString );
}

const isPassword6To24CharacterLong = ( password ) => {
    if ( password === undefined || typeof password !== "string" || password.length === 0 ) return false;
    return 6 <= password.length && password.length <= 24;
};

module.exports = {
    isCharactersString,
    isEmailString,
    isJwtString,
    isPasswordString,
    isUsernameString,
    isPhoneNumber,
    isUrlSafeString,
    isPassword6To24CharacterLong
};