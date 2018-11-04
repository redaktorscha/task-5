const nameRegexp: RegExp = /^.+$/;
export {nameRegexp};

const emailRegexp: RegExp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
export {emailRegexp};

const passRegexp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
export {passRegexp};

