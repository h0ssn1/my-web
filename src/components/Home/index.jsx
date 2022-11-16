import { Link } from 'react-router-dom';
import "./style.css";

const Home=() => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I'm Hossein Madadi</p>
                    <p>I'm excited to be studying my master degree in software engineering at Tabriz University! The AI lab here is doing some amazing research and I'm learning a lot.</p>
                    <p> Can't wait to see what the future of AI holds!</p>
                </h1>
                <Link to="/about">
                    <button>More info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/nologo.png`}
                    alt=""
                />
            </div>
        </div>


    );
}

export default Home;