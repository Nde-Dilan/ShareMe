export const userQuery = (userImageId, username)=>{
    const query = `*[_type == "user" && image== '${userImageId}' && userName=='${username}']`;
    return query;
}