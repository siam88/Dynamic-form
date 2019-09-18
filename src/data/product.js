const productForm = {
    title: {
        label: "primary info",
        type: String,

        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "Field must be filled." }
        },
        errorMsg: "",
        valid: true,
        separetor: false
    },
    name: {
        type: String,
        label: "Name",

        config: {
            type: "text",
            placeHolder: "Name",
            value: ""
        },
        validation: {
            type: { value: String, msg: "name should be in alphabet." },
            maxlength: { value: 20, msg: "Maximum length 20." },
            minlength: { value: 3, msg: "Minimum length 3." },
            required: { value: true, msg: "Name is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },

    image: {
        type: File,
        label: "Thumbnail Image ",
        config: {
            type: "file",
            value: null
        },
        validation: {
            type: {
                value: "file",
                valid: ["jpeg", "jpg", "png"],
                msg: "Max length 100"
            },
            required: { value: true, msg: "Thumbnail image is mandatory." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    }
};

export default productForm;
