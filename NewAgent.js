/* --------------------------------------------------------------- */
//JSON.stringify or ko.mappingtoJS just to see object Data in an alert(). cz the returned object returned by WCF it's 
//a JSON Object
//ko.mappingFromJS if u wanna bind an object returned to a list.

/* --------------------------------------------------------------- */
$(function () {
    //alert('here');
    if (jQuery.browser.name.toString() == 'Microsoft Internet Explorer') {
        if (parseInt(jQuery.browser.version) < 9) {
            window.parent.location.href = "ErrorPage.html";
            return;
        }
    }

    $("#Form_NewAgent").validate({
        /*errorLabelContainer: /*$("#frm_login td.error")$("#irerror"),*/
        rules: {
            Txt_NG_AgentName: { required: true, maxlength: 240 },
            Txt_NG_Email: { required: true, maxlength: 240 },
            Txt_NG_Telephone: { required: true, maxlength: 16 },
            DDL_NG_Language: { required: true },
            Txt_NG_Message: { required: false, maxlength: 1000 }
        },
        messages: {
            Txt_NG_AgentName: "- Please Enter Your Full Name",
            Txt_NG_Email: "- Please Enter Your Email",
            Txt_NG_Telephone: "- Please Enter Your Phone",
            DDL_NG_Language: "- Please Select Your Language"
        }
    });


    $("#Btn_Register").click(function () {
        if ($("#Form_NewAgent").valid()) {
            RegisterNewAgent();
        }
    });

});
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function RegisterNewAgent() {
    try {
        _Params_RegisterAgent = new Object();
        _Params_RegisterAgent.AGENTREGISTRATION_ID = 0;
        _Params_RegisterAgent.AGENTNAME = $("#Txt_NG_AgentName").val();
        _Params_RegisterAgent.EMAIL = $("#Txt_NG_Email").val();
        _Params_RegisterAgent.TELEPHONE = $("#Txt_NG_Telephone").val();
        _Params_RegisterAgent.LANGUAGE = $("#DDL_NG_Language").val();
        _Params_RegisterAgent.DETAILS = $("#Txt_NG_Message").val();
        _Params_RegisterAgent.ENTRY_DATE = $.format.date(new Date(), "yyyy-MM-dd");

        _Params = JSON.stringify(_Params_RegisterAgent);
        _Service_Method = "Edit_AgentRegistration";
        CallService();
    }
    catch (e) {
        alert("RegisterNewAgent: " + e.Message);
    }
}

function Service_Call_Completed(i_Response) {
    //debugger;
    try {
        switch (_Service_Method) {
            case "Edit_AgentRegistration":
                Edit_AgentRegistration_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_AgentRegistration_Completed(i_Input) {
    //debugger;
    try {
        //
        //alert('1');
        $.ajax({
            type: "POST",
            url: "SendingEmail.ashx",
            data: {
                AGENTNAME: $("#Txt_NG_AgentName").val(), EMAIL: $("#Txt_NG_Email").val(), TELEPHONE: $("#Txt_NG_Telephone").val(), LANGUAGE: $("#DDL_NG_Language").val(), DETAILS: $("#Txt_NG_Message").val(), ENTRY_DATE: $.format.date(new Date(), "yyyy-MM-dd"), FromEmail: 'no-reply@victoire.com.lb', ToEmail: 'informatique@victoire.com.lb', EmailPass: 'Noreply#2014'
            },
            // DO NOT SET CONTENT TYPE to json
            // contentType: "application/json; charset=utf-8",
            // DataType needs to stay, otherwise the response object
            // will be treated as a single string
            async: false,
            dataType: "json",
            error: function (xhr) {
                //alert('Error: ' + xhr.statusText);
                //$("#Save").trigger('click');
                jq_AlertMessage("2");
            },
            success: function (data) {
                //$("#Save").trigger('click')
                jq_AlertMessage("1");
            },
            async: true
        });
    }
    catch (e) {
        alert("Edit_AgentRegistration_Completed :" + e.Message);
    }
}