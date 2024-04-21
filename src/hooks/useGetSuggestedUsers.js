import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useGetSuggestedUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);

  useEffect(() => {
    const getSuggestedUser = async () => {
      setIsLoading(true);
      try {
        const userRef = collection(firestore, "users");
        const q = query(
          userRef,
          where("uid", "not-in", [authUser.uid, ...authUser.following]),
          orderBy("uid"),
          limit(4)
        );

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setSuggestedUsers(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) getSuggestedUser();
  }, [authUser, showToast]);
  return { isLoading, suggestedUsers };
}

export default useGetSuggestedUsers;
