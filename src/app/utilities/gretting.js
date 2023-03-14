const initialState = {
  gretting: 'Hi',
  inputValue: ''
};

function gretting(state = initialState, action) {
  switch (action.type) {
    case 'MORNING':
      return { ...state, gretting: 'Good Morning, everyone' };
    case 'EVENING':
      return {  ...state, gretting: 'Good evening' }
    case 'NIGHT':
      return { ...state, gretting: 'Good Night, guys' };
    case 'text':
      return { ...state, inputValue: action.inputValue }
    default:
      return { ...state };
  }
}


export { gretting };