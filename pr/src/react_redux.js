
const add_gun = "加抢";
const remove_gun = "减抢";


export function counter(state,action){
    switch(action.type){
        case add_gun : return state+1;
        case remove_gun : return state-1;
        default : return 10;
    }
}

export function addGun(){
    return {
        type:add_gun
    }
}
export function removeGun(){
    return {
        type:remove_gun
    }
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}