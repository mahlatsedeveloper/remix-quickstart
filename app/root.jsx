import { Link } from "remix";

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <Link to="/posts">Posts</Link>
  );
}
