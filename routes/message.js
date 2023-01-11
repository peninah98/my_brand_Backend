import * as express from 'express';
import messageValidation from '../validation/message';
import {createmessage, allmessage, onemessage} from "../controller/message"
const router = express.Router();

router.get("/messages",allmessage);
router.get("/messages/:id",onemessage)
router.post("/messages",messageValidation, createmessage);


export default router;
