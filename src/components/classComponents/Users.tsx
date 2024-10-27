import React from "react";

export default class Users extends React.Component{
    getUserLists(){
        return "User Lists";
    }
    render(): React.ReactNode {
        return(
            <div>
                <h1>User Class Components</h1>
            </div>
        )
    }
}