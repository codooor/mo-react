import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const { item, place, description } = req.body;

  if (!item || !place || !description) {
    return res.status(400).json({ message: "Provide all parameters" });
  }

  try {
    const newTodo = await Todo.create({
      item,
      place,
      description,
    });

    res.json(newTodo);
    console.log(newTodo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    if (!todos) {
      res.status(404).json({ message: "No todos found" });
    } else {
      res.status(200).json(todos);
    }

    console.log(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Error Processing Req" });
  }
};

export const deleteTodosById = async (req, res) => {
  const todoId = req.params.id;

  try {
    const deleteTodo = await Todo.findByIdAndDelete(todoId);

    if (!deleteTodo) {
      res.status(404).json({ message: `No todo with id: ${todoId}` });
    }
    res.status(200).json(deleteTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTodosByPlace = async (req, res) => {
  try {
    const { place } = req.params.body;
    place.toLowercase().split("-");

    if (!place.includes(place)) {
      return res.status(400).json({ message: "Invalid place val" });
    }

    await Todo.deleteMany({ place });
    res
      .status(200)
      .json({ message: `Todos with place ${place} deleted successfully` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
