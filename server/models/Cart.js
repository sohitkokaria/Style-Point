const mongoose = require("mongoose");

CartSchema = new mongoose.Schema(
    {
        userId:{ type: String, required: true },
        products: [
            {
                productId: { type: String }, 
                qunatity: { type: Number, default: 1 }
            }
        ],
    }, { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);