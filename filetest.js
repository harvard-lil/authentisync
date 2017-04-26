var promise = doSomeAsynchronousOperation();
promise.then( function(result) {
    // yay! I got the result.
}, function(error) {
    // The promise was rejected with this error.
}

function doSomeAsynchronousOperation()
{
   var promise = new Promise.Promise();
   fs.readFile( "package.json", function( error, data ) {
        if ( error ) {
            promise.reject( error );
        } else {
            promise.resolve( data );
        }
    });

    return promise;
}

