import {ADD_PERSON} from '../constant'

//creact addperson action 
export const createAddPerson =(data)=>{
    return ({type: ADD_PERSON,data})
}