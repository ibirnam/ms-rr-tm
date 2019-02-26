export const formatTime = (time) => {
    const ms = Math.round(time / 100)
    const secs = Math.floor(time / 1000)
    const mins = Math.floor(secs / 60)
    const hrs = Math.floor(mins / 60)
    return `${hrs % 60}:${mins % 60}:${secs % 60}.${ms % 10}`
}