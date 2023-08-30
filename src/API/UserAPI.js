import instance from './customAPI'
function getAllUser(page) {
    return instance.get(`api/users?page=${page}`)
}

function postCreateUser(firstName, lastName, email) {
    return instance.post('api/users', { firstName, lastName, email })
}
function putUpdateUser(id, firstName, lastName, email, avatar) {
    return instance.put('api/users/' + id, { firstName, lastName, email, avatar })
}

function delUser(id) {
    return instance.delete('api/users/' + id)
}


export { getAllUser, postCreateUser, putUpdateUser, delUser }
