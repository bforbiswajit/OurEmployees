// Code for Javascript, Ajax, Jquery Here

$(document).ready(function(){
    

                                        /*Jquery for Admin Panel tabs*/
    $('#tab-links a').click(function(e){
         e.preventDefault();
        if($(this).attr('class') == 'current')
        {
            $(this).parent().children().removeClass('current');
            $('#tabs '+ $(this).attr('href')).parent().children().hide();
        }else{
            $(this).addClass('current').parent().siblings().children().removeClass('current');
            $('#tabs '+ $(this).attr('href')).slideDown().siblings().slideUp();
        }
    });
                                    /*Jquery for Admin Panel tabs Ends*/
    
                                    /*Jquery for My Profile Pop Up Start*/
    $('#bottonMyProfile').click(function(){
       $('#popUpContainer').fadeIn(300);
       $('#divMyProfile').fadeIn(500);
    });
    
    $('#closeContainer').click(function(){
        $('#popUpContainer').fadeOut(500);
        $('#divMyProfile').fadeOut(500);
    });
                                    /*Jquery for My Profile Pop Up Ends*/
    
    
    
});
