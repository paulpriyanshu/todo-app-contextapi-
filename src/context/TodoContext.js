import { createContext,useContext } from "react";

export const TodoContext=createContext({

    todos:[
        {   
            id:1,
            title:"coding",
            completed: false  
        }
    ],
    addtodo:(title)=>{},
    updatetodo:(id,title)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}

})
 
export const useTodo=()=>{
    return useContext(TodoContext)
}

export  const TodoContextProvider = TodoContext.Provider