var LiveDataUrl = "http://download.finance.yahoo.com/d/quotes.csv?s=EURPLN=X&f=sl1d1t1c1ohgv&e=.csv"
    
function OnDataLoaded (data)
{
  var params = data.split (',');
  $(".value").text (params [1].substring (0, 4));
}
        
function UpdateWidget ()
{
  $.get (LiveDataUrl, OnDataLoaded);
}

if (window.widget) {
  widget.onshow = UpdateWidget;
}

$(document).ready(UpdateWidget);
