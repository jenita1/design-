import {combineReducers} from 'redux';
import questionreducer from './questionreducer';



const allReducers=combineReducers({
    question:questionreducer,


});
export default allReducers;