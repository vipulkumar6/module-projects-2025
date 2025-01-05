import userEvent from "@testing-library/user-event";
import { createContext, useState } from "react";


const UserContext = createContext();

const UserProvider = (props) => {


    const [status, setStatus] = useState('Absent');
    return <UserContext.Provider value={{ name: 'John Doe', age: 25, status, setStatus }}>{props.children}</UserContext.Provider>
}

export { UserContext, UserProvider };