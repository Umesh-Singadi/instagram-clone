import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useGetUserProfileById(userId) {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const userRef = await getDoc(doc(firestore, "users", userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data());
        }
      } catch (error) {
        showToast("error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [userId, showToast, setUserProfile]);

  return { isLoading, userProfile, setUserProfile };
}

export default useGetUserProfileById;
