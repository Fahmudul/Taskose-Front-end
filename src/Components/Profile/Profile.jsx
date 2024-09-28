import React, { useEffect } from "react";
import useInfo from "../../Hooks/useInfo";

const Profile = () => {
  const userInfo = useInfo();
  console.log(userInfo);

  return <div>hallo</div>;
};

export default Profile;
