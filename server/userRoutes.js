const router = require("express").Router();
const User = require("./userModel");
const authUser = require("./authUser");

router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    await user.generateToken();
    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    await user.generateToken();
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.post("/auto-login", authUser, async (req, res) => {
  res.send(req.user);
});

router.post('/logout', authUser, async (req, res) =>{
  const user = req.user;
  user.token = '';
  await user.save();
  res.status(200).send()
})

router.post('/add-favourites', authUser, async(req, res) =>{
  const {workoutId} = req.body
  const user = req.user;
  user.favourites.push(workoutId);
  await user.save();
  res.status(200).send(user)
})

router.post('/remove-favourites', authUser, async(req, res) =>{
  const {workoutId} = req.body
  const user = req.user;
  user.favourites = user.favourites.filter(id => id !== workoutId)
  await user.save();
  res.status(200).send(user)
})

module.exports = router;
