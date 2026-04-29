# AI Agent Automation Platform (Production-ready MVP)

## ✨ What this project does
A real usable AI Agent system that:
- Accepts tasks via API
- Runs multi-agent workflow (Planner → Executor → Reporter)
- Generates output
- Sends notification (Feishu placeholder)
- Tracks execution logs

## 🚀 Quick Start

### 1. 启动后端API
```bash
cd apps/api
npm install
npm run dev
```
后端将运行在 http://localhost:4000

### 2. 启动前端界面
```bash
cd apps/web
npm install
npm run dev
```
前端将运行在 http://localhost:3000

### 3. 使用界面
打开浏览器访问 http://localhost:3000，在界面中输入任务并提交。

### 4. 或直接调用API
```bash
POST http://localhost:4000/run
{
  "task": "Generate marketing report"
}
```

## 🧠 Architecture
- Multi-Agent Orchestrator
- Workflow Engine
- LLM Gateway (extensible)
- Notification system
- Modular integrations
- Vue 3 Frontend Dashboard

## 📦 Project Structure
```
apps/
  api/          # Express API服务器
  web/          # Vue 3前端应用
services/       # AI Agent服务
packages/       # 集成模块
```

## 📦 Future Extensions
- Connect OpenAI / Claude
- Add Redis Queue
- Add authentication
- Add task history
