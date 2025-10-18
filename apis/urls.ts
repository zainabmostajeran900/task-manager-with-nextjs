export const urls = {
    auth : {
        login : (id : number)=> `api/collections/users/records/${id}`,
        list : "api/collections/users/records",
        signUp : "api/collections/users/records",
        token : "api/collections/users/auth-with-password"
        
    },
    task : {
        list : "api/collections/tasks/records",
        addTask : "api/collections/tasks/records",
        editTask : (id : string)=> `api/collections/tasks/records/${id}`,
        deleteTask : (id : string)=>`api/collections/tasks/records/${id}`
    },
    emailToken : {
        get : "api/collections/emailToken/records",
        set : "api/collections/emailToken/records",
        remove : (id : string)=>`api/collections/emailToken/records/${id}`
    }
}