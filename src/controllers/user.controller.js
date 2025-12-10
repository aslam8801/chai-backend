
import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req, res)=>{
    console.log("🎯 Controller is running");
    res.status(202).json({
        message: "chai aur code"
    })
})

export { registerUser }