import {Helmet} from "react-helmet";

function Home() {
  return (
    <div>
        <Helmet>
            <title>My HOME Title</title>
            <meta name="description" content="HOME description" />
        </Helmet>
     <h1>Home</h1>
    </div>
  );
}

export default Home;
