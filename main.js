
//   getting all the objects initial Positions and checking
$(document).ready(function () {
    var container = $('#container');
    var stone = $('#stone');

    var stone_margin_top = parseInt(stone.css('margin-top'));
    var stone_margin_left = parseInt(stone.css('margin-left'));

    // Checking stone properties 

    // console.log(stone_margin_top);  Working
    // console.log(stone_margin_left);  Working

    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    console.log(container_width);

    //getting the lizard img css properties
    var lizard1_imgpos = $('#lizard1 img');
    var lizard2_imgpos = $('#lizard2 img');
    var lizard3_imgpos = $('#lizard3 img');
    var speed = 10;
    var stone_speed = 10;
    
    //getting the lizard initial position
    var lizard1_initial_pos = parseInt(lizard1_imgpos.css('right'));
    var lizard2_initial_pos = parseInt(lizard2_imgpos.css('right'));
    var lizard3_initial_pos = parseInt(lizard3_imgpos.css('right'));
    console.log(lizard1_initial_pos);   //working


    //Working with page co-ordinates
    $(document).on('click', function (event) {
        stone.css('display','block');
        var x = event.pageX;
        var y = event.pageY;
        // console.log(x); Working Sucessfully
        // console.log(y);
        var click_mar_top = stone_margin_top + y;
        var click_mar_left = stone_margin_left + x;
        stone.css('margin-top',click_mar_top);   //Displaying the stone correctly
        stone.css('margin-left',click_mar_left);  
        
        var moveTheStone = setInterval(function (){

            var stone_current_mar_top = parseInt(click_mar_top);
            
           if(click_mar_top > 500){
               stone.css('display','none');
               lizard1_imgpos.css('display','none');
               stone_current_mar_top = click_mar_top;
           }

            stone.css('margin-top', click_mar_top++ );

        },10);
       

    });


    var stoneHunting = setInterval(function () {

        var lizard1_current_pos = parseInt(lizard1_imgpos.css('right'));
        var lizard2_current_pos = parseInt(lizard2_imgpos.css('right'));
        var lizard3_current_pos = parseInt(lizard3_imgpos.css('right'));

        if (lizard1_current_pos > container_width) {
            lizard1_current_pos = lizard1_initial_pos;
        }
        if (lizard2_current_pos > container_width) {
            lizard2_current_pos = lizard2_initial_pos;
        }
        if (lizard3_current_pos > container_width) {
            lizard3_current_pos = lizard3_initial_pos;
        }

        //moving the lizard
        lizard1_imgpos.css('right', lizard1_current_pos + speed);
        lizard2_imgpos.css('right', lizard2_current_pos + speed);
        lizard3_imgpos.css('right', lizard3_current_pos + speed);

    }, 70);

});