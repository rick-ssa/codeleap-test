const transformTime = date => {
    const now = new Date()
    const milisecondsPassed = now.getTime() - date.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7

    switch(milisecondsPassed) {
        case milisecondsPassed / minute < 0:
            return 'now'
        case milisecondsPassed / minute < 60:
            const minutePassed = Math.floor(milisecondsPassed / minute)
            return `${minutePassed} minute${minutePassed > 1 ? s : ''} ago`
        case milisecondsPassed / hour < 24:
            const hourPassed = Math.floor(milisecondsPassed / hour)
            return `${hourPassed} hour${hourPassed > 1 ? s : ''} ago`
        case milisecondsPassed / day < 7:
            const dayPassed = Math.floor(milisecondsPassed / day)
            return `${dayPassed} day${dayPassed > 1 ? s : ''} ago`
        default:
            const weekPassed = Math.floor(milisecondsPassed / week)
            return `${weekPassed} week${weekPassed > 1 ? s : ''} ago`
    }
}

export {transformTime}