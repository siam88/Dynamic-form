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
    id: {
        type: String,
        label: "id",
        config: {
            type: "text",
            value: "",
            placeholder: "Id",
            id: "standard-number",
            margin: "normal"
        },
        validation: {
            type: { value: String, msg: "Id Must be string" },
            maxLength: { value: 10, msg: "Max length is 10" },
            minLength: { value: 3, msg: "Min length is 3" },
            required: { value: true, msg: "id is required " }
        },
        errorMsg: "",
        valid: false,
        touched: false
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
    price: {
        type: Number,
        label: "Price",
        config: {
            type: "number",
            value: "",
            placeholder: "price",
            id: "custom-css-outlined-input"
        },
        validation: {
            type: { value: Number, msg: "price Must be Number" },
            max: { value: 1000, msg: "Max  is 1000" },
            min: { value: 1, msg: "Min is 1" },
            required: { value: true, msg: "discount is required " }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    discount: {
        type: Number,
        label: "Discount",
        config: {
            type: "number",
            value: "",
            placeholder: "discount",
            id: "custom-css-outlined-input"
        },
        validation: {
            type: { value: Number, msg: "discount Must be string" },
            max: { value: 1000, msg: "Max  is 1000" },
            min: { value: 1, msg: "Min is 1" },
            required: { value: false, msg: "discount is required " }
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
            type: { value: Number, msg: "discount Must be string" },
            max: { value: 1000, msg: "Max  is 1000" },
            min: { value: 1, msg: "Min is 1" },
            required: { value: true, msg: "discount is required " }
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