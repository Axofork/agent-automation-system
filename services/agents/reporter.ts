
import { sendFeishu } from '../../packages/integrations/feishu';

export async function reporter(data:any){
  const report = {
    plan: `任务已规划完成，包含 ${data.steps.length} 个步骤: ${data.steps.join(', ')}`,
    execution: data.content,
    report: `任务执行成功！已完成所有 ${data.steps.length} 个步骤的处理。`,
    notification: "通知已发送到飞书 (模拟)"
  };

  sendFeishu(JSON.stringify(report));
  return report;
}
