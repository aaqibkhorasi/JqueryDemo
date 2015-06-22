function clear() {
    this.value = "";
    $(this).css({
        "color": "black"
    });
    $(this).unbind('focus');
}

function filter_all() {

	if (this.value != ""){
    //treat each search word separately 
    var data = this.value.split(" ");
    
	//get all rows, create jquery object
    var jo = $("#fbody").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    
	//Hide all rows
    jo.hide();

	//Find rows to show
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    }).show();
	}
}

function filter_Columns() {
    //Get filter from each column
    var dataName = $("#filter_Name")[0].value;
	var dataCountry = $("#filter_Country")[0].value;
	var dataIP = $("#filter_IP")[0].value;
	
    //get all rows create jquery object
    var jo = $("#fbody").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

	var count = 0;
	
	//show the rows that match.
    jo.filter(function (i, v) {
        var $t = $(this);
        var $name = $t.find("td:nth-child(-n+3):nth-child(n+2)");
		var $country = $t.find("td:nth-child(5)");
		var $IP = $t.find("td:nth-child(6)");
		
		if ($name.is(":contains('" + dataName + "')") && $country.is(":contains('"+ dataCountry +"')") && $IP.is(":contains('"+ dataIP + "')"))  {
				count++;
				return true;
            }

        return false;
    }).show();
	
	$("#label_count").html("row count:" + count.toString());
}

$("#filter_ALL").keyup(filter_all).focus(clear).css({"color": "#C0C0C0"});

$("#filter_Name").keyup(filter_Columns);
$("#filter_Country").keyup(filter_Columns);
$("#filter_IP").keyup(filter_Columns);