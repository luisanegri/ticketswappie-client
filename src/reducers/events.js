const initialState = {
  loading: false,
  success: false,
  eventsList: [],
  error: null,
  errorOnCreate: null,
  // msg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_EVENT_STARTED':
      return {
        ...state,
        success: false,
      };
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        errorOnCreate: null,
        success: true,
        eventsList: action.payload,
      };
    case 'CREATE_EVENT_FAILURE':
      console.log('error reducer', state);
      return {
        ...state,
        success: false,
        errorOnCreate: action.payload.errorOnCreate,
      };
    case 'READ_EVENTS_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'READ_EVENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        eventsList: action.payload,
      };
    case 'READ_EVENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
