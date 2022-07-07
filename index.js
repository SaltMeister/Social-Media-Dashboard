var isDark = false;
function changeBackground()
{
    // Constants to use for conditionals in function.
    const boxes = document.querySelectorAll('.box');
    const sum = document.querySelectorAll('.summary');
    const light = document.getElementById("lightText");
    const dark = document.getElementById("darkText");

    // If screen is not dark change screen and associated stuff to dark verison.
    if(isDark)
    {
        isDark = false;   

        document.body.style.backgroundColor = "#E0FFFF";
        document.body.style.color = 'black';
        document.getElementById("headerDiv").style.backgroundColor = "azure";
       
        // Hide / Show light dark text.
        light.style.display = 'block';
        dark.style.display= 'none';
        boxes.forEach(box => 
            {
                box.style.backgroundColor = 'lightgoldenrodyellow';
            });
        sum.forEach(sum => 
        {
            sum.style.border = "3px solid rosybrown"
        });
    }
    else
    {
        isDark = true;

        document.body.style.backgroundColor = "#666699";
        document.body.style.color = 'gainsboro';
        document.getElementById("headerDiv").style.backgroundColor = "#52527a";

        // Hide / Show light dark text.
        light.style.display = 'none';
        dark.style.display= 'block';

        boxes.forEach(box => 
            {
                box.style.backgroundColor = '#4484bb';
            });
        sum.forEach(sum => 
            {
                sum.style.border = "3px solid #7B3F00"
            });
    }
        
}