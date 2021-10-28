import {ADD_PERSON} from '../constant'

//creact addperson action 
export const addPerson =(data)=>{
    return ({type: ADD_PERSON,data})
}