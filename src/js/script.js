document.addEventListener("DOMContentLoaded", () => {

    //hamburger 

    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.promo__menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__menu_active');
        })
    })

    // Modals
    function showModal (triggerSelector, modalSelector) {
        const trigger = document.querySelector(triggerSelector),
              overlay = document.querySelector('.overlay'),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll('.modal__close'),
              pageup = document.querySelector('.pageup');
        
        trigger.addEventListener('click', () => {
            overlay.style.display = "block";
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            pageup.style.display = "none";
        });
        
        close.forEach(item => {
            item.addEventListener('click', () => {
                overlay.style.display = "none";
                modal.style.display = "none";
                document.body.style.overflow = "";
                pageup.style.display = "block";
            });
        });
    }

    showModal('#tonic_item', '#tonic');
    showModal('#shower_gel_item', '#shower_gel');
    showModal('#oil_item', '#oil');
    showModal('#eye_gel_item', '#eye_gel');

    
    // gallery

    function showLargeImage(thumbSelector, largeImgSelector) {
        const thumb = document.querySelector(thumbSelector);

        thumb.addEventListener('click', (e) => {
            let thumbnail = e.target.closest('a');

            if (!thumbnail) return;
            showThumbnail(thumbnail.href, thumbnail.title);
            e.preventDefault();
        }); 

        function showThumbnail(href, title) {
            largeImg = document.querySelector(largeImgSelector);
            largeImg.src = href;
            largeImg.alt = title;
        }
    }

    showLargeImage('.thumb1', '#largeImg1');
    showLargeImage('.thumb2', '#largeImg2');
    showLargeImage('.thumb3', '#largeImg3');
    showLargeImage('.thumb4', '#largeImg4');


    //validation
    const inputPhone = document.querySelector('#input__phone');

    inputPhone.addEventListener('input', (e) => {
        let matrix = '+7 (___) ___ __ __';
        let i = 0,
            def = matrix.replace(/\D/g, ''),
            value = inputPhone.value.replace(/\D/g, '');
    
        if (def.length >= value.length) {
            if (value === '7' || value === '8') {
                value = '7';
            } else {
                value = `7${value}`;
            }
        }

        inputPhone.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
        });
    });

    //page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
        return false;
    });

});