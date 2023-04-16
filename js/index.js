
console.log("Your index.js file is loaded correctly!");

$(".card-left").hover(function() {
    $(".card-left"). animate({
       width: ["toggle, 'swing"],
       height: ["toggle", "swing"], 
    }, 3000, "linear", function() {
    
    });
});

$(".card-right").scroll(function() {
    $("card-right").show("slide", 1000)

       
});
