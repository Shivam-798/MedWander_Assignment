// server/routes/formRoutes.js
import express from 'express';
import { createFormData, getFormData } from '../controllers/formController.js';
import syncData from '../sync.js';

const router = express.Router();

router.post('/form', createFormData);
router.get('/form', getFormData);
router.get('/sync', async (req, res) => {
  try {
    await syncData();
    res.status(200).send('Data synchronized successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
