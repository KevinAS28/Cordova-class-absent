var the_ajax;

function ajax_all(nyari, url, datas, target) {
    var cari = $(nyari).val();
    if (cari == "") {
        alert("Input cannot be empty");
        return false;
    }
    the_ajax = $.ajax({
        url: url,

        data: datas,

        method: "POST",
        dataType: "json",
        success: function (data) {
            $(target).html(data);
        },
        error: function (xhr, msg, txt) {
            //alert("error"+xhr.responseText+msg+txt.toString());
            $(target).html(xhr.responseText);
        }
    });

}
ajax_all("aa", "bb", {
    "which": cari
}, "sss")

function ajax(nyari, url, which, target) {
    var cari = $(nyari).val();
    if (cari == "") {
        alert("Input cannot be empty");
        return false;
    }
    the_ajax = $.ajax({
        url: url,

        data: {
            "cr": cari,
            which: which
        },

        method: "POST",
        dataType: "json",
        success: function (data) {
            $(target).html(data);
        },
        error: function (xhr, msg, txt) {
            //alert("error"+xhr.responseText+msg+txt.toString());
            $(target).html(xhr.responseText);
        }
    });

}

function ajx(url, which, target) {
    the_ajax = $.ajax({
        url: url,

        data: {
            "which": which
        },

        method: "POST",
        dataType: "json",
        success: function (data) {
            $(target).html(data);
        },
        error: function (xhr, msg, txt) {
            //alert("error"+xhr.responseText+msg+txt.toString());
            $(target).html(xhr.responseText);
        }
    });
}

function ajaxx(nyari, url, target) {
    var cari = $(nyari).val();
    if (cari == "") {
        alert("Input cannot be empty");
        return false;
    }
    the_ajax = $.ajax({
        url: url,

        data: {
            "cr": cari
        },

        method: "POST",
        dataType: "json",
        success: function (data) {
            $(target).html(data);
        },
        error: function (xhr, msg, txt) {
            //alert("error"+xhr.responseText+msg+txt.toString());
            $(target).html(xhr.responseText);
        }
    });
}

function ajak(nyari, url, which, target) {
    var selek = $(":radio").prop("checked") == true;
    var cari = $(nyari).val();
    if (cari == "") {
        alert("Input cannot be empty");
        return false;
    }

    the_ajax = $.ajax({
        url: url,

        data: {
            "cr": cari,
            "ktgr": selek,
            "which": which
        },

        method: "POST",
        dataType: "json",
        success: function (data) {
            $(target).html(data);
        },
        error: function (xhr, msg, txt) {
            //alert("error"+xhr.responseText+msg+txt.toString());
            $(target).html(xhr.responseText);
        }
    });
}

function ajaxpolosan(url, target) {
    the_ajax = $.post(url, {}, function (data) {
        $(target).html(data);
    }).fail(function (xhr, msg, txt) {
        $(target).html(xhr.responseText);
    });
}

function closeModal(target) {
    $(target).modal("hide");
};

function ajaxAbort(target) {
    $(target).html("");
    the_ajax.abort();
};


function summonModal() {

};