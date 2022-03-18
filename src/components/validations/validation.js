const validation = (values) => {
    let errors = {};

    if(!values.username) {
        errors.username='A username is required'
    } else if (values.username.length < 3) {
        errors.username='Name must be at least 3 characters long'
    }
    if(!values.password) {
        errors.password='A password is required'
    } else if (values.password.length < 3) {
        errors.password='Password must be at least 3 characters long'
    }

    return errors;
}

export default validation;