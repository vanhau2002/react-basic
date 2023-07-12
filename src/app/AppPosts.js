import PostsList from "../features/posts/PostsList";
import AddPostForm from "../features/posts/AddPostForm";
import './apppost.css'
function AppPosts() {

    return (
        <main className="AppPosts">
            <AddPostForm />
            <PostsList />
        </main>
    );
}

export default AppPosts;