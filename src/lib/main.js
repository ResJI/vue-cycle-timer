import { onMounted, onUnmounted } from 'vue';
export default class Timer {
    constructor(callback, interval, immediate = true) {
        Object.defineProperty(this, "_timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_interval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_immediate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (immediate = null) => {
                if (this._timer) {
                    return;
                }
                const _immediate = immediate !== null ? immediate : this._immediate;
                _immediate && this._callback();
                this._timer = setInterval(this._callback, this._interval);
            }
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this._timer) {
                    clearInterval(this._timer);
                    this._timer = null;
                }
            }
        });
        Object.defineProperty(this, "restart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (immediate = null) => {
                this.stop();
                this.start(immediate);
            }
        });
        this._callback = callback;
        this._interval = interval;
        this._immediate = immediate;
    }
}
export function useCycleTimer(callback, interval, immediate = true) {
    const timer = new Timer(callback, interval, immediate);
    onMounted(() => {
        timer.start();
    });
    onUnmounted(() => {
        timer.stop();
    });
    return timer;
}
