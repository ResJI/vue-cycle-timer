## VueCycleTimer
### 说明
  该组件为Vue3中的定时器。同时提供use版本，可在组件挂在时自启动 [在线Demo](https://resji.github.io/vue-cycle-timer/demo/)

### 安装

``` js
npm install vue-cycle-timer
```

### 使用

1.说明

``` js
export default class Timer {
    constructor(callback: () => void, interval: number, immediate?: boolean);
    start: (immediate?: boolean | null) => void;
    stop: () => void;
    restart: (immediate?: boolean | null) => void;
}
export declare function useCycleTimer(callback: () => void, interval: number, immediate?: boolean): Timer;

// interval: 定时器时间间隔
// immediate: true(启动时立即调用回调函数)，默认为true
```

2.手动控制

``` vue
<script lang="ts" setup>
import VueCycleTimer from 'vue-cycle-timer'
const manualTimer = new CycleTimer(()=>{
  // todo: 定时器回调函数
}, 1000)
manualTimer.start() // 启动定时器
manualTimer.restart() // 重启定时器
manualTimer.stop() // 停止定时器
</script>
```

3.自动控制(onMounted自启动，onUnmounted停止)

``` js
<script lang="ts" setup>
import { useCycleTimer } from 'vue-cycle-timer'
useCycleTimer(() => {
  // todo: 定时器回调函数
}, 1000)
</script>
```

