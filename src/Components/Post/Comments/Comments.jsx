import { useState } from "react";
import {IoAddCircle as AddIcon} from "react-icons/io5"
import SingleComment from "./SinlgeComment/SingleComment";

export const Comments = (props) => {
  let commentsArray = props.content;

  return (
    <div className ="pl-6">
      <h1 className ="text-xl -ml-5 text-coolgray-600">Comentarios</h1>
       {commentsArray.map((comment) => {
          return (
            <SingleComment
              id = {comment._id}
              description={comment.description}
              user={comment.user.username}
            />
          );
        })}
      <form action="">
        <input type="text" name="" id="" placeholder="Añade un comentario..." className ="rounded-xl p-2 bg-bluegray-100 -ml-5 w-full"/>
        <button className ="absolute text-4xl"><AddIcon/></button>
      </form>
    </div>
  );
};
