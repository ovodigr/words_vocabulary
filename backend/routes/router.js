import { Router } from "express";
import PostConroller from '../controllers/PostConroller.js'
import cors from "cors";

const router = new Router();

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, DELETE')
  next()
}

router.use(corsMiddleware)

router.post('/create/', PostConroller.create);

router.post('/posts/', PostConroller.getAll);

router.get('/posts/:id', PostConroller.getOne);

router.put('/posts/', PostConroller.update);

router.delete('/posts/:id', PostConroller.del);


export default router;
