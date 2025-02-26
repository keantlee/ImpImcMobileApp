const firstName = {
    required: '*First name is required!',
    pattern: {
        value: '',
        message: '',
    },
}


const lastName = {
    required: '*Last name is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const telephoneNo = {
    maxLength: {
        value: 12,
        message: "*Maximum 8 digits!"
    },
    pattern: {
        value: /^[0-9]+$/,
        message: "*Digits only!"
    }
}

const mobile = {
    required:"*Mobile is required!",
    minLength: {
        value: 11,
        message: "*Minimum 11 digits!",
    },
    maxLength: {
        value: 12,
        message: "*Maximum 12 digits!"
    },
    pattern: {
        value: /^[0-9]+$/,
        message: "*Digits only!"
    }
}
const street = {
    required: '*Street is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const region = {
    required: '*Region is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const province = {
    required: '*Province is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const municipality = {
    required: '*Municipality is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const barangay = {
    required: '*Barangay is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const permanentAddress = {
    required: '*Permanent address is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const temporaryAddress = {
    pattern: {
        value: '',
        message: '',
    },
}

const zipCode = {
    required: '*Zip code is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const contactPerson = {
    required: '*Contact person is required!',
    pattern: {
        value: '',
        message: '',
    },
}

const contactPersonNo = {
    required: '*Contact Person # is required!',
    pattern: {
        value: '',
        message: '',
    },
}