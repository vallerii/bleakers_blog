import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearErrors } from "store/errors/errors.actions";
import { getErrors } from "store/errors/errors.selector";

const ErrorsProvider = ({ children }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const errors = useSelector(getErrors());

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => {
        toast({
          position: "top-right",
          title: "Something went wrong!",
          description: error,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
      dispatch(clearErrors());
    }
  }, [errors]);

  return children;
};

export default ErrorsProvider;
