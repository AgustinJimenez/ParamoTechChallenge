import { PostType } from "app/types";
import React, { createContext, useState, useEffect } from "react";
const { v1: uuidv1 } = require("uuid");

type ContextPropsType = {
  posts: PostType[];
  addPost: (newPost: any) => void;
  deletePost: (id: any) => void;
  searchPosts: (query: string) => PostType[];
  getPostById: (id: string) => PostType | undefined;
  updatePostById: (updatedPost: PostType) => void;
};

// Create the context
export const PostContext = createContext<ContextPropsType>({
  posts: [],
  addPost: (post: any) => {},
  deletePost: (id: string) => {},
  searchPosts: (query: string) => [],
  getPostById: (id: string) => undefined,
  updatePostById: (updatedPost: PostType) => {},
});

// Create the provider component
export const PostContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Define the state for the list of posts
  const [posts, setPosts] = useState<PostType[]>(() => {
    const savedPosts = JSON.parse(localStorage?.getItem?.("posts") || "[]");
    return savedPosts || [];
  });

  // Create a function to add a new post to the list
  const addPost = (newPost: any) => {
    newPost.id = uuidv1();
    setPosts([...posts, newPost]);
  };

  // Create a function to delete a post from the list
  const deletePost = (id: any) => {
    setPosts(posts.filter((post: any) => post.id !== id));
  };

  // Get a a post from the list given an id
  const getPostById = (id: string) => {
    return posts.find((post) => post.id === id);
  };

  // Updates a post from the list given an id
  const updatePostById = (updatedPost: PostType) => {
    setPosts(
      posts.map((post) => {
        if (post.id === updatedPost.id) {
          return { ...post, ...updatedPost };
        }
        return post;
      })
    );
  };

  // Create a function to search for posts based on a query string
  const searchPosts = (query: string) => {
    const result = posts
      .filter((post: any) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
    return result;
  };
  // Save the list of posts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Create an object with the state and functions to pass to consumers
  const postContextValue = {
    posts,
    addPost,
    deletePost,
    searchPosts,
    getPostById,
    updatePostById,
  };

  // Return the provider with the context value and children components
  return (
    <PostContext.Provider value={postContextValue}>
      {children}
    </PostContext.Provider>
  );
};
