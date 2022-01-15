import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

// {
// entites: {
//   products: {
//     byId: {

//     }
//     allIds: []
//   }

//   viewedUser: {

//   },


//   comments: {
//     byId: {
//         1: {
//             id: 1,
//             body: 'parent text',

//         },
//         4: {
//             id: 4,
//             body: 'parent text',
//         }
//     }
//     allIds: [1,4]
//     byParentId: {
//         1: {
//             byId: {
//                 2: { id:2, body: "child comment"},
//                 3: { id:2, body: "child comment"}
//             },
//             allIds: [2,3]
//         },
//         4: {}
//     }
//   }
// }

//   ui {
//     viewedUser: 19
//     viewedProduct: 61
//   }

//   session: {

//   }
//   errors: {
//     session: []
//     product: []
//   }
// }

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;