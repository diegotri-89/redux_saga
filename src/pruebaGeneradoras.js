'use strict'

function* generadora(){
    yield setTimeout(function(){
        console.log('primero lo primero')
    }, 3000)

    yield setTimeout(function(){
        console.log('segundo lo segundo')
    }, 1000)

    yield setTimeout(function(){
        console.log('tercero lo tercero')
    }, 500)

    yield console.log('hasta que llega al final')
}


function NOgeneradora(){
    setTimeout(function(){
        console.log('primero lo primero')
    }, 3000)

    setTimeout(function(){
        console.log('segundo lo segundo')
    }, 3000)

    setTimeout(function(){
        console.log('tercero lo tercero')
    }, 3000)

    console.log('hasta que llega al final')
}

const gen = generadora()
gen.next()
gen.next()
gen.next()
gen.next()

 
//NOgeneradora()
