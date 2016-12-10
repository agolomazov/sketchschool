/*eslint-disable*/
$(document).ready(function(){
    var modalNameInput = document.querySelector('#call-phone-js .name-js');
    var modalNameInput2 = document.querySelector('#get-lesson-js .name-js');
    var superPlaceholderOptions = {
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 1000,
        // should start on input focus. Set false to autostart
        startOnFocus: true,
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: true,
        // String to show as cursor
        cursor: '|'
    };

    if(modalNameInput){
        superplaceholder({
            el: modalNameInput,
            sentences: ['Введите Ваше имя', 'Например: Дональд Трамп'],
            options: superPlaceholderOptions
        });
    }

    if(modalNameInput2) {
        superplaceholder({
            el: modalNameInput2,
            sentences: ['Введите Ваше имя', 'Например: Дональд Трамп'],
            options: superPlaceholderOptions
        });
    }

    $('.phone-js').inputmask("+7(999)999-99-99");
    $('.email-js').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    $(document).on('click', '.call-js', function (e) {
        e.preventDefault();
        $('#call-phone-js').bPopup({
            closeClass: 'modal-close',
            modalColor: 'black'
        });
    });
});
/*eslint-enable*/
