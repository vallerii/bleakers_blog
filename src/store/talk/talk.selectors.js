const getCurrentStep = () => (state) => state.talk.currentStep;
const getInTouch = () => (state) => state.talk.inTouch;
const getUserEmail = () => (state) => state.talk.userEmail;
const getUserIdeaData = () => (state) => state.talk.userIdeaData;
const getUserContacts = () => (state) => state.talk.userContacts;

export {
  getCurrentStep,
  getInTouch,
  getUserEmail,
  getUserIdeaData,
  getUserContacts,
};
