import { onMounted, onUnmounted } from 'vue'

export default class Timer {
  _timer!: null | ReturnType<typeof setInterval>
  _callback: () => void
  _interval: number
  _immediate: boolean
  constructor(callback: () => void, interval: number, immediate = true) {
    this._callback = callback
    this._interval = interval
    this._immediate = immediate
  }

  start = (immediate: boolean | null = null) => {
    if (this._timer) {
      return
    }
    const _immediate = immediate !== null ? immediate : this._immediate
    _immediate && this._callback()
    this._timer = setInterval(this._callback, this._interval)
  }

  stop = () => {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null
    }
  }

  restart = (immediate: boolean | null = null) => {
    this.stop()
    this.start(immediate)
  }
}

export function useCycleTimer(callback: () => void, interval: number, immediate = true) {
  const timer = new Timer(callback, interval, immediate)
  onMounted(() => {
    timer.start()
  })
  onUnmounted(() => {
    timer.stop()
  })
  return timer
}
