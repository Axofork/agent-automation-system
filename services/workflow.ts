
import { planner } from './agents/planner';
import { executor } from './agents/executor';
import { reporter } from './agents/reporter';

export async function runWorkflow(task:string){
  const plan = await planner(task);
  const result = await executor(plan);
  const report = await reporter(result);

  return report;
}
