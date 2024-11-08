export const API_URL = 'https://dogsapi.origamid.dev/json'
// export const API_URL = 'http://dogsapi.test/json' 

export function TOKEN_POST(body) {
    return {
        url: API_URL + '/jwt-auth/v1/token', 
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), 
        }
    }
}