function Api(){
    this.host = (window.app_config.api_host || "").trim()

    this.getSupportedScales = () => {
        return this.get('/api/supported-scale-keys').then(r => r.data)
    }

    this.getScale = (note, key) => {
        return this.get("/api/scale", {note: note, key: key})
    }

    this.request = (method, url, params = null, headers = null) => {
        if(params == null){
            params = {}
        }
        params = new URLSearchParams(params)

        if(headers == null){
            headers = {}
        }

        return window.fetch(`${this.host}${url}?${params}`, {
            method: method,
            headers: {
                'content-type': "application/json",
                ...headers
            }
        })
    }

    this.get = (url, params = null, headers = null) => {
        return this.request("GET", url, params, headers).then(r => r.json())
    }
}

export default Api;