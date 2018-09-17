'use strict';


// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function () {
    $('td').attr('data-count', 0);
    var elems1 = $('tbody').children();
    var arr = jQuery.makeArray(elems1);

    for (let i = 0; i < arr.length; i++) {
        var elem2 = $(arr[i]).children();
        arr[i] = jQuery.makeArray(elem2);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = null;
        }
    }

    var rows = $('tbody').children();
    var cols;

    for (let i = 0; i < rows.length; i++) {
        $(rows[i]).addClass('' + i);
        for (let j = 0; j < 8; j++) {
            cols = $(rows[i]).children();
            $(cols[j]).addClass('' + j);
        }
    }

    for (let m = 0; m <= 10; m++) {

        let rowCount = getRandomInt(0, 8);
        let colCount = getRandomInt(0, 8);

        arr[rowCount][colCount] = 'bomb';
        // $(arr[rowCount][colCount]).addClass('bomb');
        $('tr.' + rowCount).children('.' + colCount).addClass('bomb');
    }

    for (let i = 0; i < arr.length; i++) {
        let result = arr[i].indexOf('bomb');
        if (result != -1) {
            if (i == 7) {
                if (result > 0 && result < 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                    if (arr[i - 1][result + 1] == null || arr[i - 1][result + 1] == 'number') {
                        arr[i - 1][result + 1] = 'number';
                    }
                    if (arr[i - 1][result - 1] == null || arr[i - 1][result - 1] == 'number') {
                        arr[i - 1][result - 1] = 'number';
                    }
                }
                if (result == 0) {
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i - 1][result + 1] == null || arr[i - 1][result + 1] == 'number') {
                        arr[i - 1][result + 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                }
                if (result == 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                    if (arr[i - 1][result - 1] == null || arr[i - 1][result - 1] == 'number') {
                        arr[i - 1][result - 1] = 'number';
                    }
                }
            }
            else if (i != 0) {
                if (result > 0 && result < 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i + 1][result - 1] == null || arr[i + 1][result - 1] == 'number') {
                        arr[i + 1][result - 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                    if (arr[i + 1][result + 1] == null || arr[i + 1][result + 1] == 'number') {
                        arr[i + 1][result + 1] = 'number';
                    }
                    if (arr[i - 1][result - 1] == null || arr[i - 1][result - 1] == 'number') {
                        arr[i - 1][result - 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                    if (arr[i - 1][result + 1] == null || arr[i - 1][result + 1] == 'number') {
                        arr[i - 1][result + 1] = 'number';
                    }
                }
                if (result == 0) {
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                    if (arr[i + 1][result + 1] == null || arr[i + 1][result + 1] == 'number') {
                        arr[i + 1][result + 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                    if (arr[i - 1][result + 1] == null || arr[i - 1][result + 1] == 'number') {
                        arr[i - 1][result + 1] = 'number';
                    }
                }
                if (result == 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i + 1][result - 1] == null || arr[i + 1][result - 1] == 'number') {
                        arr[i + 1][result - 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                    if (arr[i - 1][result - 1] == null || arr[i - 1][result - 1] == 'number') {
                        arr[i - 1][result - 1] = 'number';
                    }
                    if (arr[i - 1][result] == null || arr[i - 1][result] == 'number') {
                        arr[i - 1][result] = 'number';
                    }
                }
            } else {
                if (result > 0 && result < 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                    if (arr[i + 1][result + 1] == null || arr[i + 1][result + 1] == 'number') {
                        arr[i + 1][result + 1] = 'number';
                    }
                    if (arr[i + 1][result - 1] == null || arr[i + 1][result - 1] == 'number') {
                        arr[i + 1][result - 1] = 'number';
                    }
                }
                if (result == 0) {
                    if (arr[i][result + 1] == null || arr[i][result + 1] == 'number') {
                        arr[i][result + 1] = 'number';
                    }
                    if (arr[i + 1][result + 1] == null || arr[i + 1][result + 1] == 'number') {
                        arr[i + 1][result + 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                }
                if (result == 7) {
                    if (arr[i][result - 1] == null || arr[i][result - 1] == 'number') {
                        arr[i][result - 1] = 'number';
                    }
                    if (arr[i + 1][result] == null || arr[i + 1][result] == 'number') {
                        arr[i + 1][result] = 'number';
                    }
                    if (arr[i + 1][result - 1] == null || arr[i + 1][result - 1] == 'number') {
                        arr[i + 1][result - 1] = 'number';
                    }
                }
            }

            arr[i][result] = '*';
            i = --i;
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let number = arr[i].indexOf('number')

        if (number != -1) {

            if (i == 0) {
                if (number == 0) {
                    let count = 0;
                    if (arr[i][number + 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i + 1][number + 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else if (number != 7) {
                    let count = 0;
                    if (arr[i][number + 1] == '*') {
                        count++
                    }
                    if (arr[i][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i + 1][number + 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else {
                    let count = 0;
                    if (arr[i][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i + 1][number - 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                }
            } else if (i != 7) {
                if (number == 0) {
                    let count = 0;
                    if (arr[i][number + 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i + 1][number + 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number] == '*') {
                        count++
                    }
                    if (arr[i - 1][number + 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else if (number != 7) {
                    let count = 0;
                    if (arr[i][number + 1] == '*') {
                        count++
                    }
                    if (arr[i][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i + 1][number + 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number] == '*') {
                        count++
                    }
                    if (arr[i - 1][number + 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else {
                    let count = 0;
                    if (arr[i][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i + 1][number] == '*') {
                        count++
                    }
                    if (arr[i - 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                }
            } else {
                if (number == 0) {
                    let count = 0;
                    if (arr[i][number + 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number] == '*') {
                        count++
                    }
                    if (arr[i - 1][number + 1] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else if (number != 7) {
                    let count = 0;
                    if (arr[i][number - 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number - 1] == '*') {
                        count++
                    }
                    if (arr[i - 1][number] == '*') {
                        count++
                    }
                    $('tr.' + i).children('td.' + number).attr('data-count', count);
                } else {

                }
            }
            arr[i][number] = 'num';
            i = --i;
        }
    }
    console.log(arr);
    let td = $('td');
    console.log(td);


    $('td').click(function (e) {
        let target = e.target;
        if ($(target).hasClass('bomb')) {
            for (let i = 0; i < td.length; i++) {
                $(td[i]).html($(td[i]).attr('data-count'));
            }
            $('.bomb').html('*').css('background', 'red');
        } else {
            $(target).addClass('open');
            // if ($(target).attr('data-count') == 0) {
            //     console.log($($(target).parent('tr')[0]).attr('class'));
            //     let first = $($(target).parent('tr')[0]).attr('class');
            //         $('tr.' + first).children(target).next().addClass('open');
            // }
            $(target).html($(target).attr('data-count'));
        };


        console.log(e.target);
    })
    // for (let i = 0; i < arr[i].length; i++) {
    //     let tpl = arr[i].indexOf('number');
    //     if (tpl != -1) {
    //         $('tr.' + i).children('.' + tpl).addClass('number');
    //         arr[i][tpl] = '9999';
    //         i = i - 1;
    //     }
    //
    // }


});
