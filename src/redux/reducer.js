import { ADD_ITEM, REMOVE_ITEM } from './actions';

const initialState = {
    home: ["Mow the lawn", "Buy groceries", "Wash the car"],
  work: [
    "Turn in expense report",
    "Fill out time sheet",
    "Schedule project meeting"
  ],
  school: [
    "Write literature essay",
    "Schedule meeting with professor",
    "Buy textbooks"
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
        console.log(action.listName);
        if (action.listName === "Home") {
            return {
                ...state,
                home: [
                    ...state.home,
                    action.itemName
                ]
            }
        }
        else if (action.listName === "Work") {
            return {
                ...state,
                work: [
                    ...state.work,
                    action.itemName
                ]
            }
        }
        else if (action.listName === "School") {
            return {
                ...state,
                school: [
                    ...state.school,
                    action.itemName
                ]
            }
        }
        break;
    case REMOVE_ITEM: 
    if (action.listName === "Home") {
        let newHome = state.home.filter((item) => { return item !== action.itemName});
        return {
            ...state,
            home: newHome
        }
    }
    else if (action.listName === "Work") {
        return {
            ...state,
            work: state.work.filter((item) => { return item !== action.itemName})
        }
    }
    if (action.listName === "School") {
        return {
            ...state,
            school: state.school.filter((item) => { return item !== action.itemName})
        }
    }
    break;
    default:
      return state;
  }
}

export default rootReducer;