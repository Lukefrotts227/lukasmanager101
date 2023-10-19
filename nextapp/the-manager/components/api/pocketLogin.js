const loginUser = async ({ pb, user, password }) => {
    try {
        const authData = await pb.collection(pb_user_collection).authWithPassword(user, password);
        return authData;
    } catch (error) {
        throw error;
    }
};
