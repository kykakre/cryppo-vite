export const required = (value) => {
    if (value) return undefined;
    return "required";
};
export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `max lenght is ${maxLenght} symbols`;
    return undefined;
};
export const email = (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return "Invalid email address";
    return undefined;
};
export const password = (value) => {
    if (value && value.length < 7) return "Small password";
    return undefined;
};
export const exchangeAmount = (evt) => {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9\s\+\-]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};
