import axios from 'axios';
import { useEffect, useState } from 'react';

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }, []);
  };
  getData();

  return { data, loading };
};
