
import express from 'express';
import cors from 'cors';
import { runWorkflow } from '../../services/workflow';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/run', async (req, res) => {
  const result = await runWorkflow(req.body.task);
  res.json(result);
});

app.listen(4000, () => console.log('API running on 4000'));
