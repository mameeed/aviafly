const validationRules = {
    name: (value) => !!value || "Name is required",
    phone: (value) => /^\+?\d{0,3}?\s?\d{1,4}?\s?\d{1,4}?[-.\s]?\d{1,4}?[-.\s]?\d{1,4}$/.test(value) || "Phone must be valid",
    mail: (value) => /^\S+@\S+\.\S+$/.test(value) || "Email must be valid",
    comment: (value) => value?.length > 4 || "Comment is required",
};

export const validateField = (form, fieldName) => {
    const field = form[fieldName];
    const rule = validationRules[fieldName];
    const isValid = rule(field.value);
    field.haserror = typeof isValid === "string" ? true : !isValid;
    return isValid;
};
