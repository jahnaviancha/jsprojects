$(document).on('ready', function() {
          function messageEle(name,comment){
           var namehtml = "<span>"+name+"</span>";
           var commenthtml ="<div class='content-type'>"+comment+"</div>";
           var replybtn="<input type='button' class='reply' value='Reply' />";
         // var cancelbtn="<input type='button' class='cancel' value='Cancel' />";
         var lihtml = "<li>"+namehtml+commenthtml+replybtn+"</li>";
         return lihtml;
       }
       $(".message-feed").on('click', 'li .reply', function(e){
        if($(".reply-box").is(":visible")){
          e.preventDefault();

        }else{
          var selectedLiPosition = $(this).parent().position();
          var selectedLiHeight = $(this).parent().height();          
          $(".reply-box").show().css({'top':(selectedLiPosition.top+selectedLiHeight), 'left':selectedLiPosition.left});
          // $(".btn-success").addClass("reply-submit");
          $(this).parent().addClass("active");
        }
          // $(".title").text("Reply your commnets hear");
        });

       $(".btn-success").on('click',function(e){
         e.preventDefault();
         var name = $("#name").val();
         var comment = $("#comment").val();
         if($(this).hasClass("reply-submit")){
          comment = $("#reply-comment").val();
          name = $("#reply-name").val();
          var ulhtml = "<ul> "+messageEle(name,comment)+" </ul>";
          $(".active").append(ulhtml);
          $("li.active").removeClass("active");
          $(".reply-box").hide();
        }else{
         $('.message-feed').append(messageEle(name,comment));
       }
       $("#name").val("");
       $("#comment").val("");
     });

       $(".btn-cancel").on('click',function(e){
         e.preventDefault();
         if($(this).hasClass("reply-cancel")){
           $("#reply-comment").val("");
           $("#reply-name").val("");
           $(".reply-box").hide(); 
         } else {
          $("#name").val("");
          $("#comment").val("");
        }
        $("li.active").removeClass("active");
      });
 });
