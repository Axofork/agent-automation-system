
export async function executor(plan:any){
  return {
    content: `Executed task: ${plan.task}`,
    steps: plan.steps
  };
}
