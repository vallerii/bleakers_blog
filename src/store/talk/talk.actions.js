import { createAction } from "@reduxjs/toolkit";
import { contactsService } from "services";
import { loadingError } from "store/errors/errors.actions";

const failed = createAction("contacts/failed");

const sendContacts = (action) => async (dispatch) => {
  try {
    const content = await contactsService.setUserContacts(action);
  } catch (error) {
    dispatch(failed());
    dispatch(loadingError(error));
  }
};
export { sendContacts };
