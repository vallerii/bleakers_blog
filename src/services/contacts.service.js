import axios from "axios";

const apiEndpoint = "https://pinta.zendesk.com/api/v2/requests.json";

const contactsService = {
  setUserContacts: async ({ name, email, message }) => {
    const { data } = await axios.post(apiEndpoint, {
      headers: {
        "Content-Type": "aplication/json",
      },
      request: {
        requester: { name, email },
        subject: "Bleakers Support",
        comment: { body: message },
      },
    });

    return data;
  },
};
export default contactsService;
