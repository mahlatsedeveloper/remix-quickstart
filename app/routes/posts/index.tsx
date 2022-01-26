import { Link, useLoaderData } from "remix";


// data loader
export const loader = () => {
    return [
      {
        slug: "my-first-post",
        title: "My First Post"
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You"
      }
    ];
};

export default function Posts() {
    const posts = useLoaderData()
    return (
        <>
            <h1>My Posts</h1>
            <ul>
                {posts.map(({ slug, title }) => (
                  <li key={slug}>
                      <Link to={slug}>{title}</Link>
                  </li>
                ))}
            </ul>
        </>
    );
}