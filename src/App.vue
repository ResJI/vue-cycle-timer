<script lang="ts" setup>
import { ref } from 'vue'
import { useCycleTimer } from './lib/main'
import CycleTimer from './lib/main'

const autoTimerData = ref<string[]>([])
const autoTimerHandler = () => {
  autoTimerData.value.unshift(`自动定时器:${new Date()}`)
}
useCycleTimer(autoTimerHandler, 1000)

const manualTimerData = ref<string[]>([])
const manualTimerHandler = () => {
  manualTimerData.value.unshift(`手动定时器:${new Date()}`)
}
const manualTimer = new CycleTimer(manualTimerHandler, 1000)
const startHandler = () => {
  manualTimer.start()
}
const stopHandler = () => {
  manualTimer.stop()
}
const restartHandler = () => {
  manualTimerData.value = []
  manualTimer.restart()
}
</script>

<template>
  <div style="width: 100%; height: 100%; position: absolute; left: 0; top: 0">
    <div style="width: 600px; height: 100%; margin: 0 auto; display: flex; flex-direction: column">
      <div style="height: 0; flex: 1; overflow: auto">
        <div>
          <div v-for="d in autoTimerData" :key="d">{{ d }}</div>
        </div>
        <div></div>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
        <button @click="startHandler">点击开始</button>
        <button @click="stopHandler" style="margin-left: 5px">点击停止</button>
        <button @click="restartHandler" style="margin-left: 5px">点击重启</button>
      </div>
      <div style="height: 0; flex: 1; overflow: auto">
        <div>
          <div v-for="d in manualTimerData" :key="d">{{ d }}</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
