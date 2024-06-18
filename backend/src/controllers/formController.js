// server/controllers/formController.js
import { FormData } from '../models/FormData.js';

const createFormData = async (req, res) => {
  try {
    const { formType, name, countryCode, phoneNumber } = req.body;
    const formData = await FormData.create({ formType, name, countryCode, phoneNumber });
    res.status(201).json(formData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFormData = async (req, res) => {
  try {
    const data = await FormData.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createFormData, getFormData };
