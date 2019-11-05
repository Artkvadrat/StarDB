// https://swapi.co/

const getResources = async ( url ) => {
    const res = await fetch( url );

    if ( !res.ok ) {
        throw new Error( ` Nothing is find on ${url} 404 error` );
    }

    const body = await res.json();
    return body;
};

getResources('https://swapi.co/api/people/1/' )
    .then( ( body ) => {
       console.log( body );
    })
    .catch( ( err ) => {
        console.error( 'Could not fetch' + err );
    });
