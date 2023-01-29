import React, { useState, useContext, useReducer, useEffect } from 'react'

const url = 'https://countryapi.io/api/all?apikey=PF7VP4sLLMXXF4q1lztamsz6t8ppC42Kw7fVRoe5'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [countryData, setCountryData] = useState([]); 
    const [query, setQuery] = useState('');
    const [paginate, setPaginate] = useState(20);

    const data = Object.values(countryData)

    const searchParameters = Object.keys(Object.assign({}, ...data));

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json()
        console.log(data)
        setCountryData(data);

    }

    useEffect (() => {
        fetchData();
    }, [])

    const loadMore = (e) => {
        setPaginate((prev) => prev + 10);
    };
    const loadLess = (e) => {
        setPaginate((prev) => prev - 10);
    };


    return (
        <AppContext.Provider
          value={{
            countryData,
            data,
            query,
            setQuery,
            searchParameters,
            paginate,
            loadMore,
            loadLess,
          }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }