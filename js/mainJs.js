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
    var callFormVacancy = $('.call-popup_js'),
        formHeader = $('#form-header-home');
    popupWindow(callFormVacancy, formHeader);
    /*end*/

    /*valid email*/
    function validForm(form, nameForm, submitButton) {
        form.submit(function (e) {
            var nameValid = $(nameForm + ' ' + '.input-callback[name^=your-name]'),
                telValid =  $(nameForm + ' ' + '.input-callback[name^=tel]');
            if (nameValid.val().length < 6 ||
                telValid.val().length < 6) {
                e.preventDefault();

                submitButton.css('backgroundColor', '#ccc');
                if (nameValid.val().length < 6) {
                    nameValid.addClass('no-valid-email_js');
                }
                if (telValid.val().length < 6) {
                    telValid.addClass('no-valid-email_js');
                }

                nameValid.blur(function () {
                    if (nameValid.val().length > 5) {
                        if (telValid.val().length > 5) {
                            submitButton.css('backgroundColor', '#1D75AC');
                        }
                        nameValid.removeClass('no-valid-email_js');
                    }
                    else {
                        submitButton.css('backgroundColor', '#ccc');
                        nameValid.addClass('no-valid-email_js');
                    }
                });
                telValid.blur(function () {
                    if (telValid.val().length > 5) {
                        if (nameValid.val().length > 5) {
                            submitButton.css('backgroundColor', '#1D75AC');
                        }
                        telValid.removeClass('no-valid-email_js');
                    }
                    else {
                        submitButton.css('backgroundColor', '#ccc');
                        telValid.addClass('no-valid-email_js');
                    }
                });
            }

        });
    }
    var formName = '#form-header-home',
        submitButtonHeader = $('#submit-form-popup_js');
        validForm(formHeader, formName, submitButtonHeader);

    var formNameInner = '#form-inner-page',
        submitButtonInnerPage = $('#submit-form-popup-inner_js'),
        formInner = $('#form-inner-page');
        validForm(formInner, formNameInner, submitButtonInnerPage);
    /*end*/

    /* Placeholder for IE */
    if($.browser.msie) { // Условие для вызова только в IE
        $("form").find("input[type='text'], textarea").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#ccc');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#303030');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#ccc');
            }
        });

        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }
    /*end*/

    /*number page*/
    function countNumber(countItems, findItems) {
        countItems.each(function (i) {
            if (i < 9) {
                $(this).find(findItems).text('0' + (i + 1));
            }
            else {
                $(this).find(findItems).text(1 + i);
            }
        });
    }

    var articleService = $('.list-article-service li'),
        countArticle = '.count-article';
        countNumber(articleService, countArticle);

    var listBigBox = $('.list-big-block_js li'),
        countWarranty = '.count-items-warranty';
        countNumber(listBigBox, countWarranty);

    var listVacancy = $('.list-vacancy li'),
        countVacancy = '.count-vacancy';
        countNumber(listVacancy, countVacancy);
    /*end*/
});