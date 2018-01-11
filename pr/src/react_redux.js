
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
        type:"加抢"
    }
}
export function removeGun(){
    return {
        type:"减抢"
    }
}