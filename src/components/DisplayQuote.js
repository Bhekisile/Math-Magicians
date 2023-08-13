import { useEffect, useState } from 'react';

function DisplayQuote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=faith',
          {
            headers: {
              'X-Api-Key': '5IxClj7l7PEht3AA8nJbiQ==CjzPZ7VSPNDaBiwc',
            },
          });
        if (res.ok) {
          const result = await res.json();
          setData(result);
        } else {
          setError('Failed to fetch quote');
        }
      } catch (error) {
        setError('Failed to fetch quote');
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      { error ? 'Failed to fetch quote' : null }
      {isLoading
        ? (<p className="loader">Loading...</p>)
        : (
          <p className="quote">
            {data.map((item) => (
              `${item.quote} - ${item.author}`
            ))}
          </p>
        )}
    </div>
  );
}

export default DisplayQuote;
