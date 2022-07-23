import changeTheMeasurements from "./changeMeasurements.js";
import changeTheValue from "./changeValue.js";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeTheMeasurements,
    changeTheValue
});

export default rootReducers;