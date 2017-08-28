export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const TOGGLE_HIDDEN_MSG = 'TOGGLE_HIDDEN_MSG';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_ENTRIES = 'GET_ENTRIES';

export function toggleActive (pageName) {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_ACTIVE,
      pageName
    });
  }
}

export function login (username, password) {
  return (dispatch, getState, { Api }) => {
    Api.verifyLogin(username, password)
      .then(response => response.json())
      .then(loginResponse => {
        if ((loginResponse.field === 'username') && (loginResponse.error === 'undefined')) {
          //alert 'please provide username'
        } else if ((loginResponse.field === 'password') && (loginResponse.error === 'undefined')) {
          //alert 'please provide password'
        } else if ((loginResponse.field === 'unspecified') && (loginResponse.error === 'unspecified')) {
          //alert 'error: try again' OR 'error: contact customer service'
        } else if ((loginResponse.field === 'login') && (loginResponse.error === 'not found')) {
          return dispatch({
            type: TOGGLE_HIDDEN_MSG,
            hideMessage: false
          });
        } else if (loginResponse.login === true) {
          return dispatch({
            type: LOGIN_SUCCESS,
            userFirstName: loginResponse.userFirstName,
            userId: loginResponse.userId,
            redirectToEntries: true
          })
        }
      })
  }
}

export function getEntries () {
  return (dispatch, getState, { Api }) => {
    Api.retrieveEntries()
      .then(response => response.json())
      .then(entriesResponse => {
        console.log(entriesResponse);
        // entriesResponse.forEach(entry => )


        // return dispatch({
        //   type: GET_ENTRIES,
        //   entryData: [
        //     date: entryData.date,
        //     location: entryData.location,
        //     yogaType: entryData.yogaType,
        //     startTime: entryData.startTime,
        //     endTime: entryData.endTime,
        //     duration: entryData.duration,
        //     comments: entryData.comments
        //   ]
        // })
      })
  }
}
