function clear() {
    this.value = "";
    $(this).css({
        "color": "black"
    });
    $(this).unbind('focus');
}

$("#filter_ALL").keyup(function () {
    //split the current value of searchInput
    var data = this.value.split(" ");
    //create a jquery object of the rows
    var jo = $("#fbody").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    })
    //show the rows that match.
    .show();
}).focus(clear).css({"color": "#C0C0C0"});

$("#filter_Name").focus(clear).css({"color": "#C0C0C0"});

$("#filter_Country").focus(clear).css({"color": "#C0C0C0"});

$("#filter_IP").focus(clear).css({"color": "#C0C0C0"});
