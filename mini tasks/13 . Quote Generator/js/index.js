var quoteContainer=[];


function quote()
{
    var qu={
        quotee:'“Be yourself; everyone else is already taken.”',
        auther:'Oscar Wilde'
    };

    var qu2={
        quotee:'“So many books, so little time.”',
        auther:'Frank Zappa'
    };

    var qu3={
        quotee:'“A room without books is like a body without a soul.”',
        auther:'Marcus Tullius Cicero'
    };

    var qu4={
        quotee:'“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”',
        auther:'Dr. Seuss'
    };

    var qu5={
        quotee:'“You only live once, but if you do it right, once is enough.”',
        auther:'Mae West'
    };

    quoteContainer.push(qu);
    quoteContainer.push(qu2);
    quoteContainer.push(qu3);
    quoteContainer.push(qu4);
    quoteContainer.push(qu5);

    var test = Math.floor( Math.random()*quoteContainer.length);
    console.log(test);

    document.getElementById('quote').innerHTML=quoteContainer[test].quotee;
    document.getElementById('auther').innerHTML=quoteContainer[test].auther;

};