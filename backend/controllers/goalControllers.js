const Goal = require('../models/Goal');

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

const createGoals=async (req,res)=>{
    try{
        const newGoal=new Goal(req.body)
        await newGoal.save()
        res.status(201).json({goal:newGoal,msg:"goal created"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"server error!"})
    }
}

module.exports = { getGoals,createGoals};
