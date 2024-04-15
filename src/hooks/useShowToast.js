import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

function useShowToast() {
  const toast = useToast();

  const showToast = useCallback(
    (title, description, status) => {
      return toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
}

export default useShowToast;
