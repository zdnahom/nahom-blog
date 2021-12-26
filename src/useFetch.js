import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const abortCont = new AbortController(); //for clean up
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("nahom couldnt fetch the data ");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted !");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, error, isPending };

};

export default useFetch;
