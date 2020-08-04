const initialState = {
  loading: false,
  eventsList: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_EVENT':
      return action.payload;
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
