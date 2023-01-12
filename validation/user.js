import joi from 'joi'

const userValidation = (req, res, next) =>{
    const userSchema = joi.object().keys({
        firstName:joi.string().required().min(2).max(200),
        lastName:joi.string().required().min(5).max(200),
        email:joi.string().required(),
        password:joi.string()
        .required()
        .min(8)
        .max(20),
        repeatPassword:joi.string()
        .required()
        .min(8)
        .max(20),
                  
   
       
    })
    console.log(req.body)
    const value = userSchema.validate(req.body);
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default userValidation