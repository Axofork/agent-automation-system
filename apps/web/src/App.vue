<template>
  <div class="container">
    <header class="header">
      <h1>🤖 AI Agent 自动化平台</h1>
      <p>多智能体协作系统 - 让AI帮你完成复杂任务</p>
    </header>

    <div class="content">
      <div class="task-form">
        <div class="form-group">
          <label for="task">输入你的任务</label>
          <textarea
            id="task"
            v-model="taskInput"
            placeholder="例如：生成一份市场营销报告、分析用户数据、编写技术文档..."
            :disabled="loading"
          ></textarea>
        </div>
        <button class="btn" @click="submitTask" :disabled="loading || !taskInput.trim()">
          {{ loading ? '处理中...' : '提交任务' }}
        </button>
      </div>

      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>AI Agent 正在处理你的任务...</p>
      </div>

      <div v-if="error" class="result">
        <div class="result-section error">
          <h3>❌ 错误</h3>
          <p>{{ error }}</p>
        </div>
      </div>

      <div v-if="result && !loading" class="result">
        <span class="success-badge">✓ 任务完成</span>
        <h2>执行结果</h2>

        <div class="result-section">
          <h3>📋 规划阶段 (Planner)</h3>
          <p>{{ result.plan }}</p>
        </div>

        <div class="result-section">
          <h3>⚙️ 执行阶段 (Executor)</h3>
          <p>{{ result.execution }}</p>
        </div>

        <div class="result-section">
          <h3>📊 报告阶段 (Reporter)</h3>
          <p>{{ result.report }}</p>
        </div>

        <div class="result-section">
          <h3>🔔 通知状态</h3>
          <p>{{ result.notification }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const taskInput = ref('')
const loading = ref(false)
const result = ref(null)
const error = ref(null)

const submitTask = async () => {
  if (!taskInput.value.trim()) return

  loading.value = true
  error.value = null
  result.value = null

  try {
    const response = await axios.post('/api/run', {
      task: taskInput.value
    })
    result.value = response.data
  } catch (err) {
    error.value = err.response?.data?.message || err.message || '请求失败，请确保后端API正在运行'
  } finally {
    loading.value = false
  }
}
</script>
