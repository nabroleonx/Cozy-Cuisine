import express from "express";
import cohere from "cohere-ai";
import {
  allowIfLoggedin,
  getUser,
  getUsers,
  signup,
  login,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

cohere.init("zndPPvFTr4qjIOUn6iIkPVSPOGnip4q7wSUVLJfd");
const generateRecipe = async (req, res, next) => {
  try {
    const response = await cohere.generate({
      model: "xlarge",
      prompt: `This program will generate a foods given ingredients.\n--\nIngredients: Egg\nMeal: Egg Ramen, Casserole with Avocado, Hash Brown Nests, Fried Eggs\n--\nIngredients: Beef\nMeal: Bacon, Beef Burgers, Beef Stew, Burrito\n--\nIngredients: Fish\nMeal: Fish Pie, Fish and Chips, Fish Burger, Fish Fingers\n--\nIngredients:${req.query.prompt}`,
      max_tokens: 50,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["-"],
      return_likelihoods: "NONE",
    });
    res.json(response.body);
  } catch (error) {
    next(error);
  }
};

router.get("/generate", generateRecipe);

router.post("/signup", signup);

router.post("/login", login);

router.get("/users", allowIfLoggedin, getUsers);

router.put("/user/:userId", allowIfLoggedin, updateUser);

router.delete("/user/:userId", allowIfLoggedin, deleteUser);

router.get("/", getPosts);
router.get("/:id", allowIfLoggedin, getSinglePost);
router.post("/", allowIfLoggedin, createPost);
router.patch("/:id", allowIfLoggedin, updatePost);
router.delete("/:id", allowIfLoggedin, deletePost);

export default router;
