const baseURL = "http://api.tvmaze.com";

const fetchShowDetails = (showId) => {
  return fetch(`${baseURL}/shows/${showId}`).then((r) => r.json());
};

const fetchShowByQuery = (q) => {
  return fetch(`${baseURL}/search/shows?q=${q}`)
    .then((r) => r.json())
    .then((d) => {
      // console.log(d);
      return d.map((obj) => {
        // console.log(obj.show);
        return obj.show;
      });
    });
};

export default { fetchShowDetails, fetchShowByQuery };
