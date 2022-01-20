import axios from "axios";
import { CALL_DATA, CALL_DATA_BY_ID } from "./constants";

export const fetch_data = () => (dispatch) => {
    axios.get("data.json").then((res) => {
        dispatch({
            type: CALL_DATA,
            payload: res.data
        })
    })
}