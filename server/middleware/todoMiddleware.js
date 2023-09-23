const places = ["store", "home", "car", "work", "activities", "gym"];

export const validateTodoInput = (req, res, next) => {
  const { item, place, description } = req.body;

  if (!item || !place || !description) {
    return res.status(400).json({ message: "Provide All Params" });
  }

  if (!places.includes(place)) {
    return res.status(400).json({ message: "Invalid place provided" });
  }

  next();
};
