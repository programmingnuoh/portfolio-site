function workDeliClick(){
    $('.work-deli-content').click(function(){
      $('.work-deli-detail').show();
    }
)};

function workIdeClick(){
    $('.work-ide-content').click(function(){
      $('.work-ide-detail').show();
    }
)};

function worksDetailExit(){
    $('.work-exit').click(function(){
      $('.work-deli-detail').hide();
      $('.work-ide-detail').hide();
    });
};

$(window).on('load',function(){
    workDeliClick();
    workIdeClick();
    worksDetailExit();
});

// const deliImages = ["deli-1.png", "deli-2.png", 'deli-3.png', 'assets/images/deli-4.png', 'assets/images/deli-5.png', 'assets/images/deli-6.png', 'assets/images/deli-7.png'];
// let current = 0;

// function changeDeliImage(num) {
//   if(current + num >= 0 && current + num < deliImages.length) {
//     current += num ;
//     $('.main-image').attr('src', "<%= image_path ('" + deliImages[current] + "', class:'main-image') %>");
//   }
// };

// $(document).ready(function(){
//   $('.image-prev').click(function(){
//     changeDeliImage(-1);
//   });
        
//   $('.image-next').click(function(){
//     changeDeliImage(1);
//   });
// });