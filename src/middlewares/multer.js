import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  //destination ek property hai
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        
        cb(null, file.originalname)
    }
  })

export const upload = multer({
    storage,
})
//Multer ko har file ke liye decide karna hota hai Isliye wo ek function expect karta hai, taaki har request ke time decide kar sake.
//function (req, file, cb), Ye multer ka fixed format hai.
//req: Express ka request object. Isse tum access kar sakte ho:req.body,req.user,headers, etc.
//file:Isme file ki details hoti hain
//cb — Ye sabse important hai: cb = callback function. Multer ko batana padta hai: Error hai ya nahi, Destination kya hai, Format hota hai:
//cb(error, result)
// destination function isliye hai taaki:
// Har request pe dynamic decision le sake
// req aur file dekh sake
// cb() se multer ko bata sake kya karna hai