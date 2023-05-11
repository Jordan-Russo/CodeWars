// url: https://www.codewars.com/kata/62ad72443809a4006998218a
// Youtube Likes Vs Dislikes
// Make a function that's able to handle a set of  inputs just like the youtube like/dislike system would:
// Given an array of inputs
// Starts off with 'nothing'
// if you like or dislike that becomes the state of the video
// if you press a different button after your first press, it changes to that button
// but if you press the same one again, it goes back to nothing
// Return the state of the video after all the actions

// Examples 
  // likeOrDislike([Dislike]) => Dislike
  // likeOrDislike([Like,Like]) => Nothing
  // likeOrDislike([Dislike,Like]) => Like
  // likeOrDislike([Like,Dislike,Dislike]) => Nothing

// likeOrDislike function:
  // starts at state of 'nothing'
  // loops through the values of the actions
    // if the current value as we loop isn't our state, state becomes action
    // if state and action are the same, state becomes 'nothing'
  // return the final state of the video

function likeOrDislike(buttons) {
  return buttons.reduce((state, action) => {
    if(action === state){return 'Nothing'}
    return action
  }, 'Nothing')
}