import Phrase from '../components/Phrase';




const Home = () => {   
    return (
        <>
            <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content of the home page.</p>
            </div>
            <Phrase 
            phrase="The only limit to our realization of tomorrow is our doubts of today." 
            author="- Franklin D. Roosevelt" 
            />
        </>
    );
    }
export default Home;