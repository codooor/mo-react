import express from "express";
import {
  createTodo,
  getTodos,
  deleteTodosById,
  deleteTodosByPlace,
} from "../controllers/todoControllers.js";
import { validateTodoInput } from "../middleware/todoMiddleware.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", validateTodoInput, createTodo);
router.put("/:id", deleteTodosById);
router.put("/:place", deleteTodosByPlace);

export default router;
