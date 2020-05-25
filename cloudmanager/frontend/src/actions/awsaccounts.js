import axios from "axios";
import { createMessage } from "./messages";

import {
  GET_AWSACCOUNTS,
  DELETE_AWSACCOUNT,
  ADD_AWSACCOUNT,
  GET_ERRORS,
} from "./types";
import { createStore } from "redux";

// GET AWSACCOUNTS
export const getAwsAccounts = () => (dispatch) => {
  axios
    .get("/api/awsoptimizer/")
    .then((res) => {
      dispatch({
        type: GET_AWSACCOUNTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE AWSACCOUNT
export const deleteAwsAccount = (id) => (dispatch) => {
  axios
    .delete(`/api/awsoptimizer/${id}`)
    .then((res) => {
      dispatch(createMessage({ awsAccountDeleted: "AWS Account Deleted" }));
      dispatch({
        type: DELETE_AWSACCOUNT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD AWSACCOUNT
export const addAwsAccount = (awsaccount) => (dispatch) => {
  axios
    .post("/api/awsoptimizer/", awsaccount)
    .then((res) => {
      dispatch(createMessage({ awsAccountCreated: "AWS Account Created" }));
      dispatch({
        type: ADD_AWSACCOUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        stateus: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
