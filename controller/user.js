import user from "../models/user"
// const user = require('../models/user')

export async function oneuser  (req, res){
  try {
    const users = await user.findOne({ _id: req.params.id });
    if(!users){
       res.status(404);
    res.send({ error: "user doesn't exist!" });
    }
    res.status(200).send(users);
  } catch(error) {
    res.status(404);
    res.send({ error: error.message });
  }
}



  export async function createuser (req, res) {
    try{
          const newUser = new user({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password :req.body.password,
                repeatPassword:req.body.repeatPassword,
                // role:req.body.role,
              
            });
            await newUser.save();
            res.status(201).json({
              "successMessage":"User created successfully!",
              "data":newUser
            });
    }
    catch(error){
      res.status(500).json({"errorMessage":error.message})
    }
    
}

export async function deleteuser  (req, res)  {
    try {
     const va= await user.deleteOne({ _id: req.params.id });
     if(!user){
      res.status(404);
      res.send({ error: "user doesn't exist!" });
     }
      res.status(204).send('user deleted successfully');
      res.json(va)
    } catch(error) {
      res.status(404);
      res.send({ error: error.message });
    }
     
    
  }

  export async function updateuser (req, res) {
    try {
      const user = await user.findOne({ _id: req.params.id });
      
      if (req.body.names) {
        user.names = req.body.names;
      }
  
      if (req.body.email) {
        user.email = req.body.email;
      }
  
      await user.save();
      res.status(200).send(user);
    } catch {
      res.status(404);
      res.send({ error: "user doesn't exist!" });
    }
  }
 
  export async function whileuser(req, res) {
    const users = await user.find();
    res.send(users);
  }