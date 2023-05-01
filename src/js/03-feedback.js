import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");


const FORM_STATE = "feedback-form-state";
let formData = {};
formFillOut()

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit',  onFormSubmit)

function onInputChange(evt){

    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));

}
function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(formData)
    evt.target.reset();
    formData = {};
    localStorage.removeItem(FORM_STATE);
}

function formFillOut() {
    try {
        const data = localStorage.getItem(FORM_STATE);
        if (!data) return

        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, value]) => {
            formEl[key].value = value;
        })
    } catch(e){

    }
}

