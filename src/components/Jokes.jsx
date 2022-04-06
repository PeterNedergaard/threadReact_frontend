import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jokes = props => {

    const [jokeData, setJokeData] = useState("");
    const [loadText, setLoadText] = useState("");

    const[loading, setLoading] = useState(true);

    useEffect(() => {

        const jokeData = async () => {
            const data = await getJokeData();
            setJokeData(data);
        }

        jokeData();

    }, [])


    useEffect(() => {

        if (loading){
            setLoadText("Fetching jokes...");
        } else {
            setLoadText("");
        }

        setLoading(!loading);

    }, [jokeData])


    async function getJokeData() {
        const res = await fetch("http://localhost:8080/jokeFetcher_war_exploded/api/jokes");
        const json = await res.json();

        return json;
    }





    return (
        <div style={container}>
            <h1>Jokes</h1>

            <h5>{loadText}</h5>

            <table style={jokeTable} className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">
                        Joke
                    </th>
                    <th scope="col">
                        Joke URL
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {jokeData.joke1}
                    </td>
                    <td>
                        {jokeData.joke1reference}
                    </td>
                </tr>
                <tr>
                    <td>
                        {jokeData.joke2}
                    </td>
                    <td>
                        {jokeData.joke2reference}
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};


export default Jokes;

const jokeTable = {
    width: "50%",
}

const container = {
    padding: "1rem",
}