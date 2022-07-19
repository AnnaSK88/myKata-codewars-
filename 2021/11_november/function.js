//1
//Closures and scopes
function createFunctions(n) {
    var callbacks = [];

    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }

  //2
//

function createSecretHolder(secret) {
    return {
    getSecret:function(){
      return secret
      },
    setSecret:function(v){
      secret=v}
    }
  }
