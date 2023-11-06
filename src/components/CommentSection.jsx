import React, { useState } from "react";
import {
  graphcms,
  CREATE_COMMENT,
  PUBLISH_COMMENT,
} from "../utils/Graphql/Mutations";
import { motion } from "framer-motion";

const CommentSection = ({ post, slug, setSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const obj = { name, email, comment, slug };

    // if (save) {
    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    // } else {
    //   localStorage.removeItem("name");
    //   localStorage.removeItem("email");
    // }

    setLoading(true);
    const { createComment } = await graphcms.request(CREATE_COMMENT, obj);

    await graphcms.request(PUBLISH_COMMENT, { id: createComment?.id });
    setLoading(false);
    setSave(true);
  };

  return (
    <>
      <div className="comments-section bg-slate-100 p-8 pb-1 lg:px-52">
        <div className="comment-form mt-4">
          <h3 className="text-lg font-bold">Add Comment</h3>
          <form onSubmit={handleComment} className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-sm lg:max-w-md bg-transparent rounded-md border-b-2 border-primary p-2 max"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-sm lg:max-w-md bg-transparent rounded-md border-b-2 border-primary p-2"
            />
            <textarea
              name="comment"
              id="comment"
              rows="5"
              placeholder="Your Comment"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full max-w-sm lg:max-w-md bg-transparent rounded-md border-b-2 border-primary p-2 flex flex-col"
            ></textarea>
            {/* <div className="check p-2 flex items-center">
            <input
              type="checkbox"
              id="chk"
              onChange={(e) => setSave(e.target.checked)}
            />
            <label htmlFor="chk" className="p-2">
              Save my email and name for next comment
            </label>
          </div> */}
            <button
              disabled={loading}
              type="submit"
              className="button mt-2 w-fit"
            >
              {loading ? "Loading..." : "Post Comment"}
            </button>
          </form>
        </div>
        <div className="comments mt-1 md:mt-4 xl:mt-8">
          <h3 className="text-lg font-bold">
            {post[0]?.comments?.length} Comments
          </h3>

          {isShowMore &&
            post[0].comments.map((item, i) => (
              <div className="comment border rounded-lg m-2" key={i}>
                <h4 className="text-base font-bold leading-none p-0 pl-1 mt-2">
                  {item.name}
                </h4>
                <p className="text-sm text-neutral-500 pt-0 ml-4">
                  {item.email}
                </p>
                <p className="text-neutral-500 text-sm m-1 p-2 border border-primary-100 rounded-md">
                  {item.comment}
                </p>
              </div>
            ))}
          {!isShowMore && (
            <div className="comment border rounded-lg m-2">
              <h4 className="text-base font-bold leading-none p-0 pl-1 mt-2">
                {post[0].comments[0].name}
              </h4>
              <p className="text-sm text-neutral-500 pt-0 ml-4">
                {post[0].comments[0].email}
              </p>
              <p className="text-neutral-500 text-sm m-1 p-2 border border-primary-100 rounded-md">
                {post[0].comments[0].comment}
              </p>
            </div>
          )}
        </div>
      </div>
      {post[0].comments.length > 1 && (
        <div
          className={` w-full transition-all ${
            isShowMore && "100%"
          } p-2 border-t bg-slate-50  px-8 pb-12 lg:px-52`}
        >
          <button
            onClick={toggleReadMoreLess}
            className=" font-bold  bg-primary text-white shadow-md p-2 rounded-xl"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </>
  );
};

export default CommentSection;
