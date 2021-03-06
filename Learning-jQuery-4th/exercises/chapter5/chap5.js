$(document).ready(function(){
    //(1)修改添加back to top链接代码，以便这些链接只从第四段后面才开始出现
    var $p = $('div.chapter p');
    for(var n = 3; n < $p.length; n++){
        $toTop = $p.eq(n);
        $('<a href="#top" class="toTop">back to top</a>').insertAfter($toTop);
    }
    $('<a id="top"></a>').prependTo('body');

    //(2)在单击back to top链接时，为每个链接后面添加一个新段落，其中包含You were here字样
    $('a.toTop').click(function(){
        $('p.add').html('');
        $('<p class="add" style="color: orange">you were here</p>').insertAfter($(this));
    });

    //(3)单击时作者文本加粗(通过添加一个标签，而不是操作类或CSS属性)
    $('div#f-author').click(function(){
        $(this).wrap('<b></b>');
    });
    
    //(4)单击时作者文本加粗(通过添加一个标签，而不是操作类或CSS属性)
    i = 0;
    $author = $('div#f-author').text();
    $('div#f-author').click(function(){
        if(i % 2 == 0){
            $('div#f-author').wrapInner('<b></b>');

        }else {
            $('div#f-author b').remove();
            $('div#f-author').html($author);
        }
        i++;
    });

    //(5)为正文的每个段落添加一个inhabitants类，但不能调用.addClass()方法，确保不影响现有的类
    var $pCount = $('p');
    for(var n = 0; n < $pCount.length; n++){
        var $currentP = $('p').eq(n);
        var pClass = $currentP.prop('class');
        pClass += ' inhabitants';
        $currentP.prop('class', pClass);
    }
});
