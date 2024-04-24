import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
function useSearchUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUSerProfile = async (userName) => {
    setIsLoading(true);
    setUser(null);
    try {
      const q = query(
        collection(firestore, "users"),
        where("userName", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return showToast("Error", "User not found", "error");
      }

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      // setUser(querySnapshot.docs[0].data());
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, user, getUSerProfile, setUser };
}

export default useSearchUser;
