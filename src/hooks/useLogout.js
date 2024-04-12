import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

function useLogout() {
  const [signOut, isLoggingOut] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      console.log("user logged out");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { handleLogout, isLoggingOut };
}

export default useLogout;
