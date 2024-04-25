import { useEffect, useState } from "react";

import useShowToast from "../hooks/useShowToast";
import usePostStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useGetUserPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const showToast = useShowToast();
  const userProfile = useUserProfileStore((state) => state.userProfile);

  useEffect(() => {
    const getUserPosts = async () => {
      if (!userProfile) return;
      setIsLoading(true);
      setPosts([]);

      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnapshot = await getDocs(q);
        const posts = [];
        posts.sort((a, b) => b.createdAt - a.createdAt);
        querySnapshot.forEach((doc) =>
          posts.push({ ...doc.data(), id: doc.id })
        );
        setPosts(posts);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    getUserPosts();
  }, [userProfile, showToast, setPosts]);
  return { posts, isLoading };
}

export default useGetUserPosts;
