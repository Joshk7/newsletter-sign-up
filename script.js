const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");


const signup = document.getElementById("signup");
const success = document.getElementById("success");
const confirm = document.getElementById("confirm");
const dismiss = document.getElementById("dismiss");

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
};

const setEmailClass = (isValid) => {
    if (isValid) {
        email.classList.remove("invalid");
    } else {
        email.classList.add("invalid");
    }
};

const updateError = (isValidInput) => {
    if (isValidInput) {
        error.textContent = "";
    } else {
        error.textContent = "Valid email required";
    }
};

const handleInput = () => {
    email.classList.remove("invalid");
};

const handleSubmit = (event) => {
    event.preventDefault();
    const validity = isValidEmail();
    setEmailClass(validity);
    updateError(validity);

    if (validity) {
        signup.classList.toggle("visibility");
        success.classList.toggle("visibility");
        confirm.textContent = email.value;
    }
};

const handleDismiss = () => {
    signup.classList.toggle("visibility");
    success.classList.toggle("visibility");
};

email.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
dismiss.addEventListener("click", handleDismiss);
