import axios from "axios";

import { GET_AWSACCOUNTS, DELETE_AWSACCOUNT, ADD_AWSACCOUNT } from "./types";

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
      dispatch({
        type: ADD_AWSACCOUNT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
