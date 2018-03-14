$(document).ready(function(){

    var currCarousel = 1;
    var maxNum = 3;

    var $LeftArr = $(".top-info__leftArr");
    var $RightArr = $(".top-info__rightArr");

    for(var i=2; i<=maxNum; i++)
    {
        $(".top-info__carousel--" + i).hide();
    }


    $LeftArr.on("click", function(){

            if(currCarousel > 1)
            {
    
                $(".top-info__carousel--" + currCarousel).addClass("top-info__carousel--hidden");
                $(".top-info__carousel--" + currCarousel).removeClass("top-info__carousel--visible");
    
                setTimeout(function() {
    
                    $(".top-info__carousel--" + currCarousel).hide();
    
                }, 400);
    
                setTimeout(function(){
    
                    currCarousel -= 1;
                    $(".top-info__carousel--" + currCarousel).show();
                    $(".top-info__carousel--" + currCarousel).addClass("top-info__carousel--visible");
                    $(".top-info__carousel--" + currCarousel).removeClass("top-info__carousel--hidden");
                    var numString = "0" + currCarousel;
                    $(".top-info__number").html(numString);
                    
                }, 500);
    
            } 
        
       

    });

    $RightArr.on("click", function(){

            if(currCarousel < maxNum)
            {
                $(".top-info__carousel--" + currCarousel).addClass("top-info__carousel--hidden");
                $(".top-info__carousel--" + currCarousel).removeClass("top-info__carousel--visible");
    
                setTimeout(function() {
    
                    $(".top-info__carousel--" + currCarousel).hide();
    
                }, 400);
    
                setTimeout(function(){
    
    
                    currCarousel += 1;
                    $(".top-info__carousel--" + currCarousel).show();   
                    $(".top-info__carousel--" + currCarousel).addClass("top-info__carousel--visible");
                    $(".top-info__carousel--" + currCarousel).removeClass("top-info__carousel--hidden");
                    var numString = "0" + currCarousel;
                    $(".top-info__number").html(numString);
                    
                }, 500);
            }
   

    });



});