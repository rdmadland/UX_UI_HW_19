$('.work-item').hover(
    function() {
        $(this).find('div').animate({
            right: '0%'
        }, 'slow' );
    },function() {
        $(this).find('div').animate({
            right: '-100%'
        },'slow');
    }
);

$('.work-item-right').hover(
    function() {
        $(this).find('div').animate({
            right: '0%'
        }, 'slow' );
    },function() {
        $(this).find('div').animate({
            right: '-100%'
        },'slow');
    }
);
