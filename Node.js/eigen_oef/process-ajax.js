
    
$(function(){
    $('#btnget').click(function(){
        $.ajax('http://127.0.0.1:1337',{
            method: 'GET',
            dataType: 'html',
        }).done(function(data){
            console.log(data);
            $('h2').text(data);
        }).fail(function(obj, error, msg){
            console.dir(msg);
            console.log('fail');
        })
    });
});