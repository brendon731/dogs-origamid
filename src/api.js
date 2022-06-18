export const BASE_URL = "https://dogsapi.origamid.dev/json/"

export function GET_USER(token){
    return{
        url:BASE_URL + "api/user",
        options:{
            method:"GET", 
            headers:{
                Authorization:"Bearer " + token
            }
        }
    }
}
export function TOKEN_POST(body){
    return {
        url:BASE_URL + "jwt-auth/v1/token",
        options:{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(body)
        }
    }
}
export function CREATE_ACCOUNT(body){
console.log(body)
    return{
        url:BASE_URL + "api/user",
        options:{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(body)
        }
    }
}
export function PHOTO_POST(formData, token){
    let {nome, peso, idade, img} = formData
    console.log(nome, peso, idade, "------")
    return{
        url:BASE_URL + "api/photo",
        options:{
            method:"POST",
            headers:{
                Authorization : "Bearer " + token
            },
            body:formData
        }
    }
}
export function PHOTOS_GET({page, total, user}){
    return{
        url:BASE_URL + `api/photo/?_page=${page}&total=${total}&_user=${user}`,
        options:{
            method:"GET",
            cache:"no-store"
        }
    }
}
export function PHOTO_GET(id){
    return{
        url:BASE_URL + `api/photo/${id}`,
        options:{
            method:"GET",
            headers:{
                "Content-Type":"application/json"

            }
        }
    }
}
export function COMMENT_POST(id, body){
    return{
        url:BASE_URL + `api/comment/${id}`,
        options:{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization : "Bearer " + window.localStorage.getItem("token")
            },
        body:JSON.stringify(body)
        }
    }
}
export function PHOTO_DELETE(id){
    return{
        url:BASE_URL + `api/photo/${id}`,
        options:{
            method:"DELETE",
            headers:{
                Authorization : "Bearer " + window.localStorage.getItem("token")
            }
        }
    }
}

export function PASSWORD_LOST(body){
    return{
        url:BASE_URL + "api/password/lost",
        options:{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        }
    }

}
export function PASSWORD_RESET(body){
    return{
        url:BASE_URL + "api/password/reset",
        options:{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        }
    }

}