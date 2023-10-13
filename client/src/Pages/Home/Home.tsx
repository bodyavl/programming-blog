import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Post } from "../../Components/UI";
import { IPost } from "../../interfaces";
import { getPostsForTopic } from "../../services";
import { LoadingPosts } from "../../Widget";

const Home = () => {
  const posts = useLoaderData() as IPost[];
  const isLoading = useNavigation().state === "loading";

  return (
    <>
      {isLoading ? (
        <LoadingPosts count={5} />
      ) : (
        <ul>
          {posts?.map((post, i) => (
            <li key={i}>
              <Post post={post} id={`${i}`} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

export const homeLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  const posts = await getPostsForTopic(params.id);
  return posts;
};
