import {commentsActions, postActions, useAppDispatch, useAppSelector, userActions} from "../redux/store.ts";
import {useEffect} from "react";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {commentStoreSlice: {comments}, postStoreSlice: {posts}, userStoreSlice: {users}} = useAppSelector(state => state);
    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentsActions.loadComments());
        }


    }, [])
    return (
        <>
            {
                users.map(user => (<div key={user.id}>{user.name}</div>))
            }
        </>
    );
};