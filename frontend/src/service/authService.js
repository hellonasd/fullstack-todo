import $api from '../http';
export default class AuthService {
    static async login(email, password){
        return $api.post('/login', {email, password})     
    }
    static async registration(email, password){
        return $api.post('/registration', {email, password})     
    }
    static async logout(){
        return $api.post('/logout');     
    }
    static async createPost(email, message){
        return $api.post('/createtask', {email, message});     
    }
    static async getAllTodo(email){
        return $api.get('/getalltodo', {email});
    }
    static async deleteTodo(id){
        return $api.delete('/delete', {params :{data : id}});
    }
    static async updateMessage(id, message){
        console.log('id', id, message)
        return $api.put('/updateTask', {id, message});
    }
}