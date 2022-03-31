const transformTime = date => {
    const now = new Date()
    const milisecondsPassed = now.getTime() - date.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7

    const minutePassed = Math.floor(milisecondsPassed / minute)
    const hourPassed = Math.floor(milisecondsPassed / hour)
    const dayPassed = Math.floor(milisecondsPassed / day)
    const weekPassed = Math.floor(milisecondsPassed / week)

    if(minutePassed <= 0)  {
        return 'now'
    }

    if(minutePassed < 60) {
        return `${minutePassed} minute${minutePassed > 1 ? 's' : ''} ago`
    }

    if(hourPassed < 24 ) {
        return `${hourPassed} hour${hourPassed > 1 ? 's' : ''} ago`
    }

    if(dayPassed < 7) {
        return `${dayPassed} day${dayPassed > 1 ? 's' : ''} ago`
    }

    return `${weekPassed} week${weekPassed > 1 ? 's' : ''} ago`

}

export {transformTime}