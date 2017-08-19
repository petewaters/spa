export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/register', payload).then((response) => {
        console.log(response)
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}