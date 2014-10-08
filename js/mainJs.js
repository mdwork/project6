$(document).ready(function(){
    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#box-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<header class="header-form-callback">Заказать услуги</header><span class="icon-close_js">Закрыть X</span>')
                     .animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop + 200,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.icon-close_js, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                $('.header-form-callback').remove();
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'top': 0,
                    'left': 0,
                    'margin-left': 0
                });
            });

            $("#box-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    /*end*/

    /*call popup*/
    var callFormHomeHeader = $('#call-back-header'),
        form = $('#form-header-home');
    popupWindow(callFormHomeHeader, form);

    var callFormHomeInnerPage = $('.call-inner');
    popupWindow(callFormHomeInnerPage, form);
    /*end*/

    /*valid email*/
    form.submit(function(e){
        var nameValid = $('.input-callback[name^=your-name]'),
            telValid = $('.input-callback[name^=tel]');
        if(nameValid.val() == '' || nameValid.val() == ' ' ||
           telValid.val() == '' || telValid.val() == ' ') {
            e.preventDefault();

            $('#submit-form-popup_js').css('backgroundColor','#ccc');
            if(nameValid.val() == '' || nameValid.val() == ' ') {
                nameValid.addClass('no-valid-email_js');
            }
            if(telValid.val() == '' || telValid.val() == ' ') {
                telValid.addClass('no-valid-email_js');
            }

            nameValid.blur(function(){
                if(nameValid.val() != '' && nameValid != ' ') {
                    if(telValid.val() != '' && telValid != ' ') {
                        $('#submit-form-popup_js').css('backgroundColor', '#1D75AC');
                    }
                    nameValid.removeClass('no-valid-email_js');
                }
                else {
                    $('#submit-form-popup_js').css('backgroundColor','#ccc');
                    nameValid.addClass('no-valid-email_js');
                }
            });
            telValid.blur(function(){
                if(telValid.val() != '' && telValid != ' ') {
                    if(nameValid.val() != '' && nameValid != ' ') {
                        $('#submit-form-popup_js').css('backgroundColor', '#1D75AC');
                    }
                    telValid.removeClass('no-valid-email_js');
                }
                else {
                    $('#submit-form-popup_js').css('backgroundColor','#ccc');
                    telValid.addClass('no-valid-email_js');
                }
            });
        }

    });
    /*end*/
});
