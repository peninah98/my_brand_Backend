import message from "../models/message"


export async function createmessage(req, res) {
  try {
    const messages = new message({
      message: req.body.message,
      email: req.body.email,
    });
    await messages.save();
    res.send(messages);
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
}



 
export async function allmessage(req, res) {
  try {
    const messages = await message.find();
    return res.statusCode(200).json({data:messages});
  } catch (error) {
    return res.status(500).json({ status:500,error: error.message });
  }
}

export async function onemessage  (req, res){
  try {
    const onemessage = await message.findOne({ _id: req.params.id });
    if (!onemessage) {
      res.status(404);
      res.send({ error: "message doesn't exist!" });
    }
    res.send(onemessage);
  } catch(error) {
    console.log(error)
    res.status(500);
    res.send({ error: error.message });
  }
}

 
 