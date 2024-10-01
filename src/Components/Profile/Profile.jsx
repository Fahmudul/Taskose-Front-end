import React, { useContext, useEffect } from "react";
import useInfo from "../../Hooks/useInfo";
import { UserAuthContext } from "../../UserContext/UserContext";

const Profile = () => {
  // const userInfo = useInfo();
  const { userInfo } = useContext(UserAuthContext);
  
  console.log(userInfo);

  return <div>hallo</div>;
};

export default Profile;
