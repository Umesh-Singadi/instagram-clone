import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByName = (userName) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "users"),
          where("userName", "==", userName)
        );
        const querySnapShot = await getDocs(q);

        if (querySnapShot.empty) {
          setUserProfile(null);
          return;
        }
        // const userData = querySnapShot.docs[0].data(); // Directly access the first document
        let userData;
        querySnapShot.forEach((doc) => {
          userData = doc.data();
        });

        setUserProfile(userData);
      } catch (error) {
        return showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [showToast, setUserProfile, userName]);
  return { isLoading, userProfile };
};

export default useGetUserProfileByName;
