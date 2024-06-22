import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { redirect } from "react-router-dom";

const Dashboard = () => {
  const {user} = useKindeAuth();
  if(!user) {
   return  redirect("/auth-callback");
  }
  return (
    <div>
      {user ? (
        <div>Hi {user.given_name}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  
  )
}

export default Dashboard;