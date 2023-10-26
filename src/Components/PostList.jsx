const PostList = ({posts, onPostDeleted}) => {

    const onTrashClicked = (post) => {
        onPostDeleted(post);
    }

    return ( 
        <div className="allPosts">
            {posts.map((post, index) => {
                return (
                    <div className="divPost" key={index}>
                      <p> {post.title} </p>
                       <div>
                    <button 
                    className="trashBtn"
                    onClick={(e) => onTrashClicked(post)}>
                        Delete
                        </button>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default PostList;
