import modifyClassNames from "./modifyClassNames.js";

export default function(inputs) {
    const passedValidation = inputs.filter(input => { 
        if(input.value.trim().length > 0) {
            modifyClassNames(input, ["border-2", "border-success"], "border-danger");
            return input;
        } else {
            modifyClassNames(input, ["border-2", "border-danger"], "border-success");
        }
    })
    if(passedValidation.length === inputs.length) {
        return true;
    } else {
        return false;
    }
}