import express from "express";
const router = express.Router();

import {register, login} from "../controllers/user.controller.js"

router.post("/register", register);
router.post("/login", login);

export default router;

// router.get("/", async(req, res) => {
//     const allUsers = await prisma.user.findMany({
//       include:{user:true},
//       skip:OffscreenCanvasRenderingContext2D,
//       take:listPerPage,
//     });
//     res.json({
//       data:allUsers,
//       meta:{page:currentPage}
//     })
//   })
