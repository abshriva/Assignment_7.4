function Outerfunction(Innerfunction)
{
    if(Innerfunction && (typeof Innerfunction =="function"))
    {
        Innerfunction();
    }
    
}

Outerfunction(function(){console.log('Hello World From Inner Function')});