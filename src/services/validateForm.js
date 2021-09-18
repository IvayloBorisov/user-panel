import { useState } from "react";

const useValidateForm = formValues => {

    const [errors, setErrors] = useState({
        isError: false,
        errorMessages: {}
    });

    if(!(formValues.fullName)) {
        setErrors({
            isError: !errors.isError,
            errorMessages: {required: 'This field is required'}
        });
    }

    return [errors, setErrors];
}

export default useValidateForm;