import LoremIpsum from 'react-lorem-ipsum';

function Home() {
  return (
    <div>
      <h2 style={{ marginLeft: '60px', marginBottom: '20px' }}>Welcome to our page!</h2>
      <div style={{ width: '91%', margin: '10px auto' }}>
        <LoremIpsum style={{ marginBottom: '40px', marginTop: '20px' }} />
        <LoremIpsum p={2} />
      </div>
    </div>
  );
}

export default Home;
