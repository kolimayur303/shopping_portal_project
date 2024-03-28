// Controller methods
const Data = require('../models/dataModel');

//Create tittle and description
exports.createData = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const data = new Data({ title, description });
    await data.save();
    res.status(201).json({ message: 'Data created successfully', data });
  } catch (error) {
    next(error);
  }
};

//Get all list
exports.getAllData = async (req, res, next) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//Get particular list
exports.getDataById = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//update particular list
exports.updateDataById = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const data = await Data.findByIdAndUpdate(req.params.id, {
      title,
      description,
      status,
      updatedAt: Date.now(),
    });
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json({ message: 'Data updated successfully', data });
  } catch (error) {
    next(error);
  }
};

//update particular list
exports.deleteDataById = async (req, res, next) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    next(error);
  }
};
