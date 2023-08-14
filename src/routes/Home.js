import loremIpsum from 'react-lorem-ipsum';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <h2 style={{ margin: '60px 140px' }}>Welcome to our page!</h2>
      <div className="text-wrapper">
        {loremIpsum({ avgSentencesPerParagraph: 10, random: true, p: 2 }).map((text) => (
          <div className="text" key={text}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
