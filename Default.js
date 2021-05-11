/* --------------------------------------------------------------- */
//JSON.stringify or ko.mappingtoJS just to see object Data in an alert(). cz the returned object returned by WCF it's 
//a JSON Object
//ko.mappingFromJS if u wanna bind an object returned to a list.

var _Startup_Data_Signature = ""
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
var _Params_IsAuthenticated = new Object();

var _Params_RegisterAgent = new Object();

var _Params_Get_Startup_Data_Signature = new Object();
_Params_Get_Startup_Data_Signature.OWNER_ID = 1;

var _Params_Get_Startup_Data = new Object();
_Params_Get_Startup_Data.OWNER_ID = 1;
_Params_Get_Startup_Data.FISCAL_YEAR_ID = 1;
/* --------------------------------------------------------------- */
var str = "";
/* --------------------------------------------------------------- */
$(function () {
    //alert('here');
    if (jQuery.browser.name.toString() == 'Microsoft Internet Explorer') {
        if (parseInt(jQuery.browser.version) < 9) {
            window.parent.location.href = "ErrorPage.html";
            return;
        }
    }

    //$("input:submit, button").button();
    $("#txt_username").keypress(OnKeyPress).val(localStorage["USERNAME"]);
   // $("#txt_password").keypress(OnKeyPress);

    $('#txt_password').keydown(function (e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
            //alert('in');
            $("#btn_Login").click();
            e.preventDefault();
        }
    });

    function OnKeyPress(e) {
        //alert('ejdhjehdjehded');
        //debugger;
        if (e.which == 13) {
            //alert('in');
            //debugger;
            $("#btn_Login").click();
            e.preventDefault();
        }
    }

    $("#frm_login").validate({
        /*errorLabelContainer: /*$("#frm_login td.error")$("#irerror"),*/
        rules: {
            txt_username: { required: true },
            txt_password: "required"
        },
        messages: {
            txt_username: "- Please enter your username",
            txt_password: "- Please enter your password"
        }
    });

    $("#Form_NewAgent").validate({
        /*errorLabelContainer: /*$("#frm_login td.error")$("#irerror"),*/
        rules: {
            Txt_NG_AgentName: { required: true, maxlength: 240 },
            Txt_NG_Email: { required: true, maxlength: 240 },
            Txt_NG_Telephone: { required: true, maxlength: 16 },
            DDL_NG_Language: { required: true},
            Txt_NG_Message: { required: false, maxlength: 1000 }
        },
        messages: {
            Txt_NG_AgentName: "- Please Enter Your Full Name",
            Txt_NG_Email:"- Please Enter Your Email",
            Txt_NG_Telephone: "- Please Enter Your Phone",
            DDL_NG_Language:"- Please Select Your Language"
        }
    });

    $("#Form_ResetPassword").validate({
        /*errorLabelContainer: /*$("#frm_login td.error")$("#irerror"),*/
        rules: {
            Txt_DR_AgentName: { required: true, maxlength: 240 },
            Txt_DR_Email: { required: true, maxlength: 240 },
            Txt_DR_Telephone: { required: true, maxlength: 16 },
            DDL_DR_Language: { required: true },
            Txt_DR_BrokerCode: { required: true, digits: true, maxlength: 7, min: 0, max: 9999999 },
            Txt_DR_Username: { required: true }
        },
        messages: {
            Txt_DR_AgentName: "- Please Enter Your Full Name",
            Txt_DR_Email: "- Please Enter Your Email",
            Txt_DR_Telephone: "- Please Enter Your Phone",
            DDL_DR_Language: "- Please Select Your Language",
            Txt_DR_BrokerCode: "- Please Select Your BrokerCode",
            Txt_DR_Username: "- Please Enter Your Username"
        }
    });

    

    $("#Btn_Register").click(function () {
        if ($("#Form_NewAgent").valid()) {
            RegisterNewAgent();
        }
    });

    $("#Btn_Reset").click(function () {
        if ($("#Form_ResetPassword").valid()) {
            ResetPassword();
        }
    });

    $("#btn_Login").click(function () {
        if ($("#frm_login").valid()) {
            jq_CheckRememberUsername();
            IsAuthenticated_JSON();
        }
    });

    /* Set LoggedIn flag to 0 */
    sessionStorage["LOGGED_IN"] = 0;

    $(document).on('click', 'span.RegisterAgent', function (e) {
        //alert('edededed');
       
        jq_OpenUIDialog_ByRef($("#Div_NewAgent"), "Register With Us", 800, 300);
        $("#Div_NewAgent").dialog('open');

        //jq_OpenUIDialog('NewAgent.html', 'Register With Us', 800, 300);
        e.preventDefault();
    });

    $(document).on('click', 'a.ResetPassword', function (e) {
        //alert('edededed');
        jq_OpenUIDialog_ByRef($("#Div_ResetPassword"), "Reset Password", 800, 300);
        $("#Div_ResetPassword").dialog('open');
        e.preventDefault();
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
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function jq_CheckRememberUsername() {
    var $chk_RememberUname = $("#chk_RememberUname");

    if ($chk_RememberUname.is(":checked")) {
        localStorage["USERNAME"] = $("#txt_username").val();
    }
    else {
        localStorage["USERNAME"] = "";
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function IsAuthenticated_JSON() {
    debugger;
    try {
        _Params_IsAuthenticated.My_UserInfo = new Object();
        _Params_IsAuthenticated.My_UserInfo.UserName = $("#txt_username").val();
        _Params_IsAuthenticated.My_UserInfo.Password = $("#txt_password").val();

        _Params = JSON.stringify(_Params_IsAuthenticated);

        _Service_Method = "IsAuthenticated_JSON";

        CallService();
    }
    catch (e) {
        alert("IsAuthenticated_JSON: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data_Signature(i_OWNER_ID) {
    try {
        _Params_Get_Startup_Data_Signature.OWNER_ID = i_OWNER_ID;

        _Params = JSON.stringify(_Params_Get_Startup_Data_Signature);

        _Service_Method = "Get_Startup_Data_Signature";

        CallService();
    }
    catch (e) {
        alert("Get_Startup_Data_Signature: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Get_Startup_Data(i_OWNER_ID, i_FISCAL_YEAR_ID) {
    try {
        _Params_Get_Startup_Data.OWNER_ID = i_OWNER_ID;
        _Params_Get_Startup_Data.FISCAL_YEAR_ID = i_FISCAL_YEAR_ID;

        _Params = JSON.stringify(_Params_Get_Startup_Data);

        _Service_Method = "Get_Startup_Data";

        CallService();
    }
    catch (e) {
        alert("Get_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed(i_Response) {
    //debugger;
    try {
        switch (_Service_Method) {
            case "IsAuthenticated_JSON":
                IsAuthenticated_JSON_Completed(i_Response);
                break;
            case "Get_Startup_Data_Signature":
                Get_Startup_Data_Signature_Completed(i_Response);
                break;
            case "Get_Startup_Data":
                Get_Startup_Data_Completed(i_Response);
                break;
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
function ResetPassword() {
    //debugger;
    try {

        $.ajax({
            type: "POST",
            url: "ResetPassword.ashx",
            data: { AGENTNAME: $("#Txt_DR_AgentName").val(), EMAIL: $("#Txt_DR_Email").val(), TELEPHONE: $("#Txt_DR_Telephone").val(), LANGUAGE: $("#DDL_DR_Language").val(), BROKERCODE: $("#Txt_DR_BrokerCode").val(), USERNAME: $("#Txt_DR_Username").val(), ENTRY_DATE: $.format.date(new Date(), "yyyy-MM-dd"), FromEmail: 'no-reply@victoire.com.lb', ToEmail: 'informatique@victoire.com.lb', EmailPass: 'Noreply#2014' },
            // DO NOT SET CONTENT TYPE to json
            // contentType: "application/json; charset=utf-8",
            // DataType needs to stay, otherwise the response object
            // will be treated as a single string
            async: false,
            dataType: "json",
            success: function (data, status) {
                //jq_DisplayNotification('You Request has been Received and a member of our staff will review it and reply accordingly. Thank You', 'success');
                //jq_AlertMessage("1");
            },
            error: function (data, status, e) {
                //alert(e);
                //jq_AlertMessage("2");
            },
            async: true
        });

        window.parent.location.href = "Default.aspx";
    }
    catch (e) {
        alert("ResetPassword :" + e.Message);
    }
}
/* --------------------------------------------------------------- */
function Edit_AgentRegistration_Completed(i_Input)
{
    //debugger;
    try {
       
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
                //jq_AlertMessage("2");
            },
            success: function (data) {
                //$("#Save").trigger('click')
                //jq_AlertMessage("1");
            },
            async:true
        });
        //alert('before')
        window.parent.location.href = "Default.aspx";
    }
    catch (e) {
        alert("Edit_AgentRegistration_Completed :" + e.Message);
    }
}
$("#Save").click(function () {
    //alert('click');
    $('#save-modal').addClass("show");
});
/* --------------------------------------------------------------- */
$(".modal-dialog .close").click(function () {
    $(this).closest(".modal-dialog").removeClass("show");
});
/* --------------------------------------------------------------- */
function IsAuthenticated_JSON_Completed(i_Input) {
    debugger;
    try {

        sessionStorage.setItem("UserInfo", JSON.stringify(i_Input.My_Result));
        sessionStorage.setItem("SubUserInfo", JSON.stringify(i_Input.My_Result.My_SUBUSERS));
        sessionStorage.setItem("SubUserInfo_ByAgent", JSON.stringify(i_Input.My_Result.My_SUBUSERS_BY_SUBAGENT));
        sessionStorage.setItem("MainAgentInfo", JSON.stringify(i_Input.My_Result.My_USER_BY_MAINAGENT));
        sessionStorage.setItem("MyUSERSBYBROKERCODE", JSON.stringify(i_Input.My_Result.My_USERS_BY_BROKERCODE));
        sessionStorage.setItem("AllUIMENU", JSON.stringify(i_Input.My_Result.My_UIMENU));

        //alert('test');
        //alert(JSON.stringify(i_Input.My_Result.My_SUBUSERS));
        if (sessionStorage.getItem('UserInfo') != null) {
            _UserInfo = JSON.parse(sessionStorage.getItem('UserInfo'));
            _Ticket = _UserInfo.Ticket;
        }
        //alert('0');
        Get_Startup_Data_Signature(_UserInfo.OwnerID);
    }
    catch (e) {
        alert("IsAuthenticated_JSON_Completed :" + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data_Signature_Completed(i_Input) {
    try {
        //debugger;
         str = _UserInfo.UserID + '~' + _UserInfo.BROKERCODE + '~' + _UserInfo.MENUACCESSLEVEL + '~' + _UserInfo.LANG;
         //alert(str);
        _Startup_Data_Signature = i_Input.My_Result;
        //alert(_Startup_Data_Signature);
        //if (localStorage.getItem("_Startup_Data_Signature") != _Startup_Data_Signature) {
        //    alert('1');
        //    localStorage.setItem("_Startup_Data_Signature", _Startup_Data_Signature)
        //    Get_Startup_Data(_UserInfo.OwnerID, _UserInfo.UserID);
        //}
        //else {
        //    alert('2');
        //    Get_Startup_Data(_UserInfo.OwnerID, _UserInfo.UserID);
        //    /* Display Notification */
        //    /* ------------------------------------------------------------------*/
        //    jq_DisplayNotification('You have successfully logged in!', 'success');
        //    /* ------------------------------------------------------------------*/

        //    /* Set LoggedIn flag to check for security in sub pages */
        //    sessionStorage["LOGGED_IN"] = 1;

        //    window.location.href = "admin/Admin.aspx";
        //    //alert(str);
        //    __doPostBack('btn_RedirectFromLogin', str);
        //     $("#btn_RedirectFromLogin").click();
        //}

        //    alert('1');
            localStorage.setItem("_Startup_Data_Signature", _Startup_Data_Signature)
            Get_Startup_Data(_UserInfo.OwnerID, _UserInfo.UserID);
        //    /* Display Notification */
        //    /* ------------------------------------------------------------------*/
            jq_DisplayNotification('You have successfully logged in!', 'success');
        //    /* ------------------------------------------------------------------*/


    }
    catch (e) {
        alert("Get_Startup_Data_Signature_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function Get_Startup_Data_Completed(i_Input) {
    try {
        //debugger;
        // Startup Data
        // ---------------
        localStorage.setItem("_Startup_Data", JSON.stringify(i_Input.My_Result));
        // ---------------

        //alert(JSON.stringify(i_Input.My_Result.My_SetupEntries));
        // Setup Entries
        // ---------------       
        localStorage.setItem("SetupEntries", JSON.stringify(i_Input.My_Result.My_SetupEntries));

        // ---------------

        // Currencies
        // ---------------
        localStorage.setItem("Currencies", JSON.stringify(i_Input.My_Result.My_Currencies));
        // ---------------

        // Countries
        // ---------------
        localStorage.setItem("Countries", JSON.stringify(i_Input.My_Result.My_Countries));

        //All Users
        // ---------------
        localStorage.setItem("AllUsers", JSON.stringify(i_Input.My_Result.My_ListUsers));

        // ---------------
        /* Display Notification */
        /* ------------------------------------------------------------------*/
        //jq_DisplayNotification('You have successfully logged in. Redirecting ...', 'success');
        /* ------------------------------------------------------------------*/

        /* Set LoggedIn flag to check for security in sub pages */
        sessionStorage["LOGGED_IN"] = 1;

        // ---------------
        //window.location.href = "admin/Admin.aspx";
        //$("#btn_RedirectFromLogin").trigger('click');
        __doPostBack('btn_RedirectFromLogin', str);
        //$("#btn_RedirectFromLogin").click();
        // ---------------        

    }
    catch (e) {
        alert("Get_Startup_Data_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

// ---------------------------------------------------------------
var _WCF_Base_Url = "http://" + window.location.host + "/AppWCF.svc";
//alert(_WCF_Base_Url);
var _Service_Method = "";
var _Params = "";
var _Ticket = "";
var _Content_Type = "application/json; charset=utf-8";
var _Type = "POST";
var _Data_Type = "json";
var _ProcessData = false;
var _UserInfo = "";
var _Async = true;
var _Err = 0;
var Service_Call_InCompleted = "";

if (sessionStorage.getItem('UserInfo') != null) {
    _UserInfo = JSON.parse(sessionStorage.getItem('UserInfo'));
}
// ---------------------------------------------------------------


// ---------------------------------------------------------------
var Type = _Type;
var Url = "";
var ContentType = _Content_Type;
var DataType = _Data_Type;
var ProcessData = _ProcessData;
// ---------------------------------------------------------------

// ---------------------------------------------------------------
function js_Prepare_WCF_Url_For_Call() {
    
    try {

        //alert('1 ticket');
        var js_Return = "";

        if (_Ticket != null) {
            _Ticket = _UserInfo.Ticket;
        }
        else {
            _Ticket = "";
        }

        js_Return = _WCF_Base_Url + "/" + _Service_Method + "?" + "Ticket=" + _Ticket;
        return js_Return;
    }
    catch (e) {
        alert("js_Prepare_WCF_Url_For_Call");
    }
}
// ---------------------------------------------------------------

/* --------------------------------------------------------------- */
function jq_DisplayNotification(message, status) {
    if (!status) {
        status = 'success';
    }
    if (message == '') {
        switch (status) {
            case "success":
                message = "Successfully saved.";
                break;
            case "fail":
                message = "Error.";
                break;
        }
    }

    var waitholder = $("<div id=\"notification\"/>");
    $(window.parent.document.body).prepend(waitholder);

    var $waitholder = $("#notification", parent.document.body);

    if (status == 'success') {
        $(waitholder).removeClass('err').html(message).addClass('succ');
        $(waitholder).fadeIn(100).delay(2000).slideUp();
    }
    else if (status == 'fail') {
        $(waitholder).removeClass('succ').html(message).addClass('err').append($('<br><span style="cursor:pointer">[Dismiss]</span>').click(function (e) { $(waitholder).slideUp(); }));
        $(waitholder).fadeIn(100);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function CallService(i_Service_Method) {
    try {
        _Err = 0;
        $.unblockUI();

        $.blockUI({
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                'border-radius': '10px',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .6,
                color: '#fff'
            }, overlayCSS: { backgroundColor: 'transparent' }, message: '<img src="images/ajax-loader.gif" />'
        });

        $.ajax({
            type: Type,
            url: js_Prepare_WCF_Url_For_Call(),
            data: _Params,
            contentType: ContentType,
            dataType: DataType,
            processdata: ProcessData,
            async: _Async,
            success: function (i_Srv_Response) {
                if (i_Srv_Response.ExceptionMsg != '') {
                    $.unblockUI();
                    jq_DisplayNotification(i_Srv_Response.ExceptionMsg, 'fail');
                    if (Service_Call_InCompleted)
                        Service_Call_InCompleted();
                }
                else {
                    Service_Call_Completed(i_Srv_Response);
                    $.unblockUI();
                }
            },
            error: function () { }
        });
    }
    catch (e) {
        alert('CallService: ' + e.message);
    }
}
/* --------------------------------------------------------------- */
//jQuery Alert Popup
jqxAlert = {
    // top offset.  
    top: 0,
    // left offset.  
    left: 0,
    // opacity of the overlay element.  
    overlayOpacity: 0.2,
    // background of the overlay element.  
    overlayColor: '#ddd',
    // display alert.  
    alert: function (message, title) {
        if (title == null) title = 'Alert';
        jqxAlert._show(title, message);
    },
    // initializes a new alert and displays it.  
    _show: function (title, msg) {
        jqxAlert._hide();
        jqxAlert._handleOverlay('show');
        $("BODY").append(
                  '<div class="jqx-alert" style="width: auto; height: auto; overflow: hidden; white-space: nowrap;" id="alert_container">' +
                  '<div id="alert_title"></div>' +
                  '<div id="alert_content">' +
                       '<div id="message"></div>' +
                       '<input style="margin-top: 10px;" type="button" value="Ok" id="alert_button"/>' +
                  '</div>' +
                  '</div>');
        $("#alert_title").text(title);
        $("#alert_title").addClass('jqx-alert-header');
        $("#alert_content").addClass('jqx-alert-content');
        $("#message").text(msg);
        $("#alert_button").width(70);
        $("#alert_button").click(function () {
            jqxAlert._hide();
        });
        jqxAlert._setPosition();
    },
    // hide alert.  
    _hide: function () {
        $("#alert_container").remove();
        jqxAlert._handleOverlay('hide');
    },
    // initialize the overlay element.   
    _handleOverlay: function (status) {
        switch (status) {
            case 'show':
                jqxAlert._handleOverlay('hide');
                $("BODY").append('<div id="alert_overlay"></div>');
                $("#alert_overlay").css({
                    position: 'absolute',
                    zIndex: 99998,
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: $(document).height(),
                    background: jqxAlert.overlayColor,
                    opacity: jqxAlert.overlayOpacity
                });
                break;
            case 'hide':
                $("#alert_overlay").remove();
                break;
        }
    },
    // sets the alert's position.  
    _setPosition: function () {
        // center screen with offset.  
        var top = (($(window).height() / 2) - ($("#alert_container").outerHeight() / 2)) + jqxAlert.top;
        var left = (($(window).width() / 2) - ($("#alert_container").outerWidth() / 2)) + jqxAlert.left;
        if (top < 0) {
            top = 0;
        }
        if (left < 0) {
            left = 0;
        }
        // set position.  
        $("#alert_container").css({
            top: top + 'px',
            left: left + 'px'
        });
        // update overlay.  
        $("#alert_overlay").height($(document).height());
    }
}
/* --------------------------------------------------------------- */
function jq_AlertMessage(i_AlertMsg) {
    try {
        $('<div>').dialog({
            title: 'Alert',
            width: 300,
            height: 175,
            dialogClass: 'dialogWithDropShadow',
            modal: true,
            close: function () {
                $(this).dialog('destroy');
            },
            buttons: [
             {
                 text: 'OK',
                 click: function () {
                     $(this).dialog('close');
                 }
             }
            ]
        }).html(i_AlertMsg);
    }
    catch (e) {
        alert("jq_AlertMessage: " + e.Message);
    }
}
/* --------------------------------------------------------------- */