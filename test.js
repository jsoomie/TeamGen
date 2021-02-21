
log = x => console.log(x);

x = 24;
y = "Hello";

if(isNaN(x)) {
    log(`${x} is not a number!`);
} else {
    log(`${x} is a number`);
}

email = "email@email.com";
emailWithoutAt = "email";
emailwithoutdot = "email@gmail";

if(email.includes("@") && email.includes(".")) {
    log(`${email} is an email address!`);
} else {
    log(`${email} is not a valid email address!`);
}

if(emailWithoutAt.includes("@") && emailWithoutAt.includes(".")) {
    log(`${emailWithoutAt} is an email address!`);
} else {
    log(`${emailWithoutAt} is not a valid email address!`);
}

if(emailwithoutdot.includes("@") && emailwithoutdot.includes(".")) {
    log(`${emailwithoutdot} is an email address!`);
} else {
    log(`${emailwithoutdot} is not a valid email address!`);
}

number = 1-800-555-5555;

if(number.includes("n")) {
    log(`${number} includes a number`);
} else {
    log(`${number} does NOT include a number`);
}