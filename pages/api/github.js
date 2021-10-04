const axios = require('axios').default;

export default function handler(req, res) {
    const queryString = encodeURI('q=topic:hacktoberfest');

    axios.get(`https://api.github.com/search/repositories?${queryString}`)
        .then((response) => {
            return res.json({ data: response.data })
        });
}