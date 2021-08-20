module.exports = {

    format_date: (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    },
    ifEquals: (arg1, arg2, options) => {
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    },
    ifNotEquals: (arg1, arg2, options) => {
        return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
    },
    ifNullEmptyZero: (arg1, options) => {
        return !arg1 || arg1 == 0 ? options.fn(this) : options.inverse(this);
    },
    ifGreaterThan: (arg1, arg2, options) => {
        return arg1 > arg2 ? options.fn(this) : options.inverse(this);
    },
    selectRating: (arg1) => {
        console.log("arg1: " + arg1);
        if (arg1 == 1) {
            return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'selected></option>")
        } else if (arg1 == 2) {
            return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'selected></option><option value='1'></option>")
        } else if (arg1 == 3) {
            return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3' selected></option><option value='2'></option><option value='1'></option>")
        } else if (arg1 == 4) {
            return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4' selected></option><option value='3'></option><option value='2'></option><option value='1'></option>")
        } else if (arg1 == 5) {
            return new handlebars.SafeString("<option value=''></option><option value='5' selected></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'></option>")
        }
        return new handlebars.SafeString("<option value='' selected></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'></option>")
    }

}