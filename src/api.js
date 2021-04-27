export function api(url,options = {}) {
    let defaultOptions = {
      method:'GET',
      headers: {
        'Content-Type': 'application/json' 
      }
    }
    let mergeOptions = {...defaultOptions,...options}
    if(mergeOptions.body)
        mergeOptions.body = JSON.stringify(mergeOptions.body)
    return fetch(url,mergeOptions).then((result)=> result.json()).then((parsedResult)=>{
        return parsedResult
    }).catch((error)=>{
        throw(error)
    })
}