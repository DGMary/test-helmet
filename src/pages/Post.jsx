import {Helmet} from "react-helmet";

function Post() {
    return (
      <div>
        <Helmet>
            <title>My POST Title</title>
            <meta name="description" content="POST description" />
        </Helmet>
       <h1>Post</h1>
      </div>
    );
  }
  
  export default Post;
  