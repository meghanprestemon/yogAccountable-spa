export function getQuote() {
  return (dispatch, getState, { Api }) => {
    return fetch('https://api.forismatic.com/api/1.0/method=getQuote&lang=en&format=jsonp&jsonp=?')
      .then(data => console.log(data))
      // .then(messages => dispatch({
      //   type: MESSAGES_RECEIVED,
      //   messages
      // }))
  }
}
