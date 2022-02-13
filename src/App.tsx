import React, { useEffect, useState } from 'react';

const getData = () => {
    return new Promise((resolve) => {
        setTimeout(resolve.bind('string data'), 5000);
    });
};

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getData()
            .then(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Flexio</h1>
            {loading ? 'show spinner' : 'do not show'}
        </>
    );
};

export default App;
