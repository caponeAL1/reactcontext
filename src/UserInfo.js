import { useContext } from "react";
import { sharedData } from "./App";
import React from "react";
function UserInfo()
{
    const user=useContext(sharedData);
    return(<div>
       <b>Welcome Mr/Ms {user}</b>

    </div>);
}
export default UserInfo;