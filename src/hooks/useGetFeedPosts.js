import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";

function useGetFeedPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const { setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsLoading(true);
      if (authUser.following.length === 0) {
        setIsLoading(false);
        setPosts([]);
        return;
      }
      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "in", authUser.following)
        );
        const querySnapShot = await getDocs(q);
        const feedPosts = [];
        querySnapShot.forEach((doc) => {
          return feedPosts.push({ id: doc.id, ...doc.data() });
        });
        feedPosts.sort((a, b) => b.createdBy - a.createdBy);
        setPosts(feedPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getFeedPosts();
  }, [showToast, setPosts, authUser, setUserProfile]);
  return { posts, isLoading };
}

export default useGetFeedPosts;
