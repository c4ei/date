const ServerUrl = "http://localhost:4000";
/**
 * All User Related url
 * */

// Register User
export const registerUserUrl = ServerUrl + "/users/register";
// Verify User after Registeration
export const verifyUserAfterRegUrl = ServerUrl + "/users/verify";
export const loginUserUrl = ServerUrl + "/users/login";
export const logoutUserUrl = ServerUrl + "/users/logout";
export const ReverifyUrl = ServerUrl + "/verifyAgain";
export const forgotPasswordUrl = ServerUrl + "/users/verification";
export const UpdateUrl = ServerUrl + "/update";

// update a user by their id _PUT Method
export const updateUserById = ServerUrl + "/users/";

export const deleteUserById = ServerUrl + "/users/";

// You can get and delete on these URLs
export const usersUrl = ServerUrl + "/users";
export const refreshTokenUrl = ServerUrl + "/users/refresh";
