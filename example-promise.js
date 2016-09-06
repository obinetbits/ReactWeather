/*function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Mora', function (err, temp) {
    if(err) {
        console.log('error', err);
    } else {
        console.log('success', temp)
    }
});

function getTempPromise (location) {
    return new Promise(function (resolve, reject){
        resolve(79);
        reject('city not found');
    });
}

getTempPromise('Mora').then(function (temp){
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});*/

function addPromise (a,b) {
    return new Promise(function (resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject('Please use a number');
        }
    });
}

addPromise(20,3).then(function (sum){
    console.log('1stCall-success:', sum);
}, function(err){
    console.log('!stCall-err:', err);
});

addPromise('ty',3).then(function (sum){
    console.log('2ndCall-success:', sum);
}, function(err){
    console.log('2ndCall-err:', err);
});