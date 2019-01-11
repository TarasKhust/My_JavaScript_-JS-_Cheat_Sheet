$(document).ready(() => {
    let a = $('.fa1');
    let b = $('.fa:first-child');
    let c = $('.fa:eq(3)');
    a.hover(
        () => {
            a.toggleClass('active1');
            a.fadeToggle('slow');
            a.animate(
                {
                    opacity: 'toggle',
                    height: 'toggle'
                }, 3000
            );
        }
    );

    b.on('click', () => {
        b.fadeToggle('slow')
    });
});