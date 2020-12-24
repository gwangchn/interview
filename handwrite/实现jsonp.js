function jsonp(obj) {
    const { url, data } = obj;
    if (!url) return
    return new Promise((resolve, reject) => {
        const cbFn = `jsonp_${Date.now()}`
        data.callback = cbFn
        const head = document.querySelector('head')
        const script = document.createElement('script')
        const src = `${url}?${data2Url(data)}`
        console.log('scr', src)
        script.src = src
        head.appendChild(script)

        window[cbFn] = function (res) {
            res ? resolve(res) : reject('error')
            head.removeChild(script)
            window[cbFn] = null
        }
    })
}

function data2Url(data) {
    return Object.keys(data).reduce((acc, cur) => {
        acc.push(`${cur}=${data[cur]}`)
        return acc
    }, []).join('&')
}
// jsonp({url:'www.xxx.com',data:{a:1,b:2}})
