function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i==1){
      array.push("I am 1 strange loop.")
    }
    else{
      array.push("I am ${i} strange loops.")
    }
  }
  return(array)
}

function whileLoop(n){
  var x = n
  while (x > 0){
    console.log(x)
    x = x - 1
  }
  if(x == 0){
    return "done"
  }
  return
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
      array.shift()
  }while(maybeTrue() && array.length > 0)
  return array
}
