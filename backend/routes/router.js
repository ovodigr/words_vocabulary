import { Router } from "express";
import PostConroller from '../controllers/PostConroller.js'
import cors from "cors";
import passport from "passport";

const router = new Router();

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, DELETE')
  next()
}

router.use(corsMiddleware)

router.post('/posts', PostConroller.create);

router.get('/posts', PostConroller.getAll);

router.get('/posts/:id', PostConroller.getOne);

router.put('/posts/', PostConroller.update);

router.delete('/posts/:id', PostConroller.del);


export default router;
