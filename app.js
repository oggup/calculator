let heldValue = null;
let heldOperation = null;
let nextValue = null;

function showValue (location , value){
    if (value === null){
        $(location).text("");
    }
    else {
        $(location).text(Number(value));
    }
}
function updateDisplay(){
    showValue(".next-value",nextValue);
    showValue(".held-value", heldValue);

}
function emptyDisplay(){
    heldValue = null;
    heldOperation =null;
    nextValue = null;
    $(".next.operation").text("");
    updateDisplay();
}
function clearEntryValues(){
    nextValue=null;
    updateDisplay();
}

function setHeldOperation( operation ){
    if(heldOperation !==null){
        heldValue = heldOperation(heldValue, nextValue);

    }else{
        if (nextValue !==null && !heldOperation){
            heldValue = nextValue;
        }
    }nextValue=null;
    heldOperation = operation;
}

function add(x,y){
    return Number(x)+ Number(y) 
}

function sub(x,y){
    return Number(x)-Number(y);
}

function div(x,y){
    return Number(x)/Number(y);
}

function multi(x,y){
    return Number(x) * Number(y);
}
$(".clear-all").on("click", emptyDisplay);
$(".clear-entry").on("click", clearEntryValues)
$(".digits button").on("click", function(){
    if(nextValue === null){
        nextValue = 0;
    }else {
   
    nextValue =  nextValue + $(this).text();
    console.log(nextValue)
    $(".next-value").text(nextValue);
    }
    showValue(".next-value", nextValue)
    updateDisplay();
}); 

$(".operations .add").on("click", function(){
    setHeldOperation(add);
    $(".next-operation").text("+");
    updateDisplay();
    console.log("add");
});

$(".operations .subtract").on("click", function(){
    setHeldOperation(sub);
    $(".next-operation").text("-");
    updateDisplay();
    console.log("sub");
});

$(".operations .divide").on("click", function(){
    setHeldOperation(div);
    $(".next-operation").text("/");
    updateDisplay();
    console.log("divide");
});

$(".operations .multiply").on("click", function(){
    setHeldOperation(multi);
    $(".next-operation").text("*");
    updateDisplay();
    console.log("MULTIPLY");
});

$(".equals").on("click", function(){
    setHeldOperation(null);
    $(".next-operation").text("");
    updateDisplay();
    console.log("equals")
});


