import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrainSearch() {
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrainData();
  }, []);

  const fetchTrainData = async () => {
    const options = {
      method: 'POST',
      url: 'https://trains.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '200a166df5msh73810dd5a045478p199f40jsnf48d30038c98',
        'X-RapidAPI-Host': 'trains.p.rapidapi.com'
      },
      data: { search: 'Rajdhani' }
    };

    try {
      const response = await axios.request(options);
      setTrainData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Train Search Results</h1>
      <ul>
        {trainData.map((train, index) => (
          <li key={index}>
            <strong>Train Name:</strong> {train.name}
            <br />
            <strong>Train Number:</strong> {train.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainSearch;
