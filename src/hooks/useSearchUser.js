import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useSearchUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (userName) => {
    setIsLoading(true);
    setUser(null);
    try {
      const q = query(
        collection(firestore, "users"),
        where("userName", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        showToast("Error", "User not found", "error");
        return;
      }

      const userData = querySnapshot.docs[0].data();
      setUser(userData);
    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile, setUser };
}

export default useSearchUser;

// import { useState } from "react";
// import useShowToast from "./useShowToast";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { firestore } from "../firebase/firebase";

// function useSearchUser() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const showToast = useShowToast();

//   const getUserProfile = async (userName) => {
//     setIsLoading(true);
//     try {
//       const q = query(collection(firestore, "users"),where("userName", "==", userName)
//       );
//       const querySnapshot = await getDocs(q);
//       if (querySnapshot.empty) {
//         return showToast("Error", "User not found", "error");
//       }
//       //   const userData = querySnapshot.docs[0].data();
//       //   setUser(userData);
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     } catch (error) {
//       showToast("Error", error.message, "error");
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return { user, isLoading, getUserProfile, setUser };
// }

// export default useSearchUser;
