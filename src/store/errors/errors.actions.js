import { clearError, loadError } from "./errors.slice";

const loadingError = (error) => (dispatch) => {
  dispatch(loadError(error?.message));
};

const clearErrors = () => (dispatch) => dispatch(clearError());

export { loadingError, clearErrors };
