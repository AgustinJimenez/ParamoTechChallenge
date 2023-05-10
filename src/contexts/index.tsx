import { PostContext, PostContextProvider } from "./PostContext";

const ContextsProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostContextProvider>{children}</PostContextProvider>;
};

export default ContextsProvider;
