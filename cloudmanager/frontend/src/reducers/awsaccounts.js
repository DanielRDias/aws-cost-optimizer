import {
  GET_AWSACCOUNTS,
  DELETE_AWSACCOUNT,
  ADD_AWSACCOUNT,
} from "../actions/types.js";

const initialState = {
  awsaccounts: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_AWSACCOUNTS:
      return {
        ...state,
        awsaccounts: actions.payload,
      };
    case DELETE_AWSACCOUNT:
      return {
        ...state,
        awsaccounts: state.awsaccounts.filter(
          (awsaccounts) => awsaccounts.id !== actions.payload
        ),
      };
    case ADD_AWSACCOUNT:
      return {
        ...state,
        awsaccounts: [...state.awsaccounts, actions.payload],
      };
    default:
      return state;
  }
}
