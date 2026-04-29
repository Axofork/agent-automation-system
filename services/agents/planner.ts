
export async function planner(task:string){
  return {
    steps:["analyze","generate","summarize"],
    task
  };
}
