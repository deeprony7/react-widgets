import React, { useState, useEffect } from 'react'
import axios from 'axios'
import createDOMPurify from "dompurify";


const DOMPurify = createDOMPurify(window);

interface SearchResult {
    ns: number,
    title: string,
    pageid: number,
    size: number,
    wordcount: number,
    snippet: string,
    timestamp: string
}


const Search = () => {
    const [term, setTerm] = useState<string>('reactjs')
    const [results, setResults] = useState<SearchResult[]>([])

    useEffect(() => {

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            })
            setResults(data.query.search)
        }

        if (term && !results.length) {
            search()
        }
        else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 500)

            return () => clearTimeout(timeoutId)
        }
    }, [term])


    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(result.snippet) }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                        autoFocus />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
