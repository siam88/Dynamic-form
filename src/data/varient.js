const varientData = {
    title: {
        label: "Varient Info",
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

    size: {
        type: "select",
        label: "Size",
        config: {
            type: "select",
            value: "",
            options: [
                { value: " ", label: "choose" },
                { value: "Large", label: "Large" },
                { value: "Medium", label: "Medium" },
                { value: "small", label: "small" },

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
    color: {
        type: "select",
        label: "Color",
        config: {
            type: "select",
            value: "",
            options: [
                { value: " ", label: "choose" },
                { value: "red", label: "red" },
                { value: "green", label: "green" },
                { value: "blue", label: "blue" },

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
export default varientData;