const productData = {
    title: {
        label: "Primary Info",
        type: String,
        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "title must be given" }
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
            value: "",
            placeholder: "Name",
            id: "custom-css-outlined-input"
        },
        validation: {
            type: { value: String, msg: "Id Must be string" },
            maxLength: { value: 10, msg: "Max length is 10" },
            minLength: { value: 3, msg: "Min length is 3" },
            required: { value: true, msg: "Name is required " }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },

    catagory: {
        type: "select",
        label: "Catagory",
        config: {
            type: "select",
            value: "",
            options: [
                { value: " ", label: "choose" },
                { value: "Mans", label: "Mans" },
                { value: "Womans", label: "Womans" },
            ]
        },
        validation: {
            type: { value: "select", msg: "Select any item" },
            required: { value: true, msg: "selection required" }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    image: {
        type: File,
        label: "Upload Image",
        config: {
            type: "file",
            value: null
        },
        validation: {
            type: { value: "file", valid: ["jpeg", "jgp", "png"], msg: "must upload an image" },
            required: { value: true, msg: "file format is not valid" }
        },
        errorMsg: "",
        valid: false,
        touched: false

    }


}
export default productData;