type UserData = {
    id?: number,
      name?: string
}[]
    
// remember to pass in user.users
function fetchCurrentUser(users: UserData) {
    const User_id = parseInt(localStorage.getItem("user_id")) //turns the string into an integer
    
    const CurrentUser = users.find((row: { id: number }) => row.id === User_id)
    console.log("currentUser", CurrentUser)
    return CurrentUser;
}

export default fetchCurrentUser
