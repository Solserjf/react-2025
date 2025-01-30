import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../slices/CommentSlice.tsx";
import {IComment} from "../models/IComment.ts";

export const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <>
            {
                comments.map((comment: IComment) => (<div key={comment.id}>{comment.name}</div>))
            }
        </>
    );
};