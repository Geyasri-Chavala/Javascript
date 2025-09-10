  // callback hell


  console.log('Start');
  
    function first(callback) {
        console.log('First');
        callback();
    }


function second(callback) {
    console.log('Second');
    callback();
}


function third(callback) {
    console.log('Third');
    callback();
}



first(function() {
    second(function() {
        third(function() {  
            console.log('Done');
        });
    });
});