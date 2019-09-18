const varientForm = {
    varientTitle: {
        label: "Varients",
        type: String,
        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        separetor: true
    },
    size: {
        type: "select",
        label: "Size",
        config: {
            type: "select",
            value: "",

            options: [
                { value: "", label: "choose " },
                { value: "midium", label: "midium" },
                { value: "large", label: "large" }
            ]
        },
        validation: {
            type: "select",
            required: { value: true, msg: "Size is mandatory" }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    color: {
        type: "select",
        label: "color",
        config: {
            type: "select",
            value: "",

            options: [
                { value: "", label: "choose " },
                { value: "red", label: "red" },
                { value: "blue", label: "blue" }
            ]
        },
        validation: {
            type: "select",
            required: { value: true, msg: "Color is mandatory" }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    purchasePrice: {
        type: Number,
        label: "Purchase Price",
        config: {
            type: "number",
            placeHolder: "Purchase Price",
            value: ""
        },
        validation: {
            type: { value: Number, msg: "Must be number" },
            max: { value: 1000, msg: "Price should be less then 1001." },
            min: { value: 0, msg: "Price should be greater than 0." },
            required: { value: true, msg: "Purchase price is mandatory." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    salePrice: {
        type: Number,
        label: "Sale Price",
        config: {
            type: "number",
            placeHolder: "Sale Price",
            value: ""
        },
        validation: {
            type: { value: Number, msg: "Must be number." },
            max: { value: 1000, msg: "Price should be less then 1001." },
            min: { value: 0, msg: "Price should be greater than 0." },
            required: { value: true, msg: "Sale price is mandatory." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },

    discountAmount: {
        type: Number,
        label: "Discount amount",
        config: {
            type: "number",
            placeHolder: "Discount",
            value: ""
        },
        validation: {
            type: { value: Number, msg: "Discount amount shuld be a number." },
            max: { value: 1000, msg: "Discount amount should be less then 1001." },
            min: { value: 0, msg: "Negative number is not allowed." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },
    discountPercentage: {
        type: Number,
        label: "Discount (%)",
        config: {
            type: "number",
            placeHolder: "Discount",
            value: ""
        },
        validation: {
            type: { value: Number, msg: "Discount percentage shuld be a number." },
            max: {
                value: 1000,
                msg: "Discount percentage should be less then 1001."
            },
            min: { value: 0, msg: "Negative number is not allowed." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },
    packagePrice: {
        type: "packagePricingBox",
        label: "Package Price",
        config: {
            type: "packagePricingBox",
            value: []
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },

    varientImage: {
        type: File,
        label: "Image",
        config: {
            type: "file",
            value: null
        },
        validation: {
            type: {
                value: "file",
                valid: ["jpeg", "jpg", "png"],
                msg: "Must be File"
            },
            required: { value: true, msg: "Image is mandatory" }
        },
        errorMsg: "",
        valid: false,
        touched: false
    }
};

export default varientForm;
