import { create } from 'apisauce'

// define the api
const api = create({
    baseURL: '',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

const apiResponse = (statusCode, message, data) => {
    return { "statusCode": statusCode, "message": message, "data": data }
}

export { apiResponse };