
var Params_MobileReceiptPayment = new Object();
//debugger;
Params_MobileReceiptPayment.ReceiptID = 0;

var _Params_MobileReceiptPayment = ko.mapping.fromJS(Params_MobileReceiptPayment);
var PolicyID = 0;

/* On Document Ready. */
/* --------------------------------------------------------------- */
$(document).ready
(
function () {
    //alert($.urlParam('PolicyCode'));
    //debugger;
    _Params_MobileReceiptPayment.ReceiptID($.urlParam('ReceiptID'));
    //_Params_MobileReceiptPayment.ReceiptID(25);
    Btn_Pay_Policy_Click();
}
);
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Edit_MobileReceiptPaymentData":
                Edit_MobileReceiptPaymentData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function Btn_Pay_Policy_Click() {
    try {
        /* ------------------------------------- */
        debugger;
        if (_Params_MobileReceiptPayment.ReceiptID().toString() == "") {
            jq_DisplayNotification('No Receipt Number!. Please Contact The Company.', 'fail');
            ll_Exit = 1;
            return;
        }

        _Params = ko.mapping.toJSON(_Params_MobileReceiptPayment);
        //alert(_Params);    
        _Service_Method = "Edit_MobileReceiptPaymentData";
        _Async = true;
        CallService();
        /* ---------------- */
    }
    catch (e) {
        alert("Btn_Pay_Policy_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */

function Edit_MobileReceiptPaymentData_Completed(i_Response) {
    try {
        debugger;
        if (i_Response.My_Result != null) {
            //alert(i_Response.My_Result.CURRENCY_CODE);
            var Currencyval = i_Response.My_Result.CURRENCY_CODE == "LL" ? "422" : "840";
            ///* ----------------- *//* NETCOMMERCE Info */
            $("#txtMerchNum").val(i_Response.My_Result.Merchant_Num);
            $("#signature").val(i_Response.My_Result.Signature); // TEST
            $("#txtAmount").val(i_Response.My_Result.AMOUNT);
            //$("#txtIndex").val(i_Response.My_Result.RECEIPTS_ID);
            $("#txtIndex").val(i_Response.My_Result.RECEIPTS_ID);
            $("#txthttp").val('https://online.victoire.com.lb/MobileReceiptReturnPayment.aspx');
            //$("#txthttp").val('http://localhost:4160/MobileReceiptReturnPayment.aspx');
            ////Fill Payer Data Hidden Fields

            $("#first_name").val(i_Response.My_Result.INSUREDNAME);
            $("#last_name").val(i_Response.My_Result.INSUREDNAME);
            $("#email").val(i_Response.My_Result.PAYER_EMAIL);
            $("#customer_id").val(0);
            $("#phone").val(i_Response.My_Result.PAYER_MOBILE.toString().replace(/\D/g, ''));
            $("#mobile").val(i_Response.My_Result.PAYER_MOBILE.toString().replace(/\D/g, ''));
            $("#address_line1").val(i_Response.My_Result.PAYER_ADDRESS);
            $("#address_line2").val(i_Response.My_Result.PAYER_ADDRESS);
            $("#city").val(i_Response.My_Result.PAYER_CITY);
            $("#state").val("nothing");
            $("#country").val(i_Response.My_Result.PAYER_COUNTRY);
            $("#txtCurrency").val(Currencyval);
            $("#Frm_NetCommerce").submit();
            return false;
        }
        else {
            jq_DisplayNotification('All Payer Info Are Required!', 'fail');
            return;
        }

    }
    catch (e) {
        alert("Edit_MobileReceiptPaymentData_Completed: " + e.message);
    }
}



