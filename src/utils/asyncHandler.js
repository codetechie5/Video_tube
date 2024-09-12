const asyncHandler= (reqestHandler)=>{
 return (req,res,next)=>{
        Promise.resolve(reqestHandler(req,res,next)).catch((err) => next(err))
    }
}
export {asyncHandler}


// const asyncHandler=(fn) => ()=>{
//     try {
//        await fn(req,res,next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }

