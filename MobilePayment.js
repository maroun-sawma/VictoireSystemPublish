﻿
var Params_MobilePayment = new Object();
//debugger;
Params_MobilePayment.PolicyCode = "NT";
Params_MobilePayment.PolicyNo = 0;
Params_MobilePayment.USER_ID = 0;
var _Params_MobilePayment = ko.mapping.fromJS(Params_MobilePayment);
var PolicyID = 0;

/* On Document Ready. */
/* --------------------------------------------------------------- */
$(document).ready
(
function () {
    //alert($.urlParam('PolicyCode'));
    //debugger;
    _Params_MobilePayment.PolicyCode($.urlParam('PolicyCode'));
    _Params_MobilePayment.PolicyNo(parseInt($.urlParam('PolicyNo').toString()));
    _Params_MobilePayment.USER_ID(parseInt($.urlParam('USER_ID').toString()));
    Btn_Pay_Policy_Click();
}
);
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Edit_MobilePaymentData":
                Edit_MobilePaymentData_Completed(i_Response);
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
        //debugger;
        if (_Params_MobilePayment.PolicyNo() == "" || _Params_MobilePayment.USER_ID()=="") {
            jq_DisplayNotification('No Policy Number!. Please Contact The Company.', 'fail');
            ll_Exit = 1;
            return;
        }

        _Params = ko.mapping.toJSON(_Params_MobilePayment);
        //alert(_Params);    
        _Service_Method = "Edit_MobilePaymentData";
        _Async = true;
        CallService();
        /* ---------------- */
    }
    catch (e) {
        alert("Btn_Pay_Policy_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */

function Edit_MobilePaymentData_Completed(i_Response) {
    try {
        //debugger;
        if (i_Response.My_Result != null) {

            ///* ----------------- *//* NETCOMMERCE Info */
            $("#txtMerchNum").val(i_Response.My_Result.Travel_Payment.Merchant_Num);
            $("#signature").val(i_Response.My_Result.Travel_Payment.Signature); // TEST
            $("#txtAmount").val(i_Response.My_Result.Travel_Payment.PAYMENT_AMOUNT.toFixed(2));
            $("#txtIndex").val(i_Response.My_Result.POLICY_CODE + "_" + i_Response.My_Result.POLICIES_ID.toString() + "_" + i_Response.My_Result.My_Members.length);
            $("#txthttp").val('https://online.victoire.com.lb/MobileReturnPayment.aspx');
            //$("#txthttp").val('http://localhost:4160/MobileReturnPayment.aspx');
            ////Fill Payer Data Hidden Fields

            $("#first_name").val(i_Response.My_Result.Travel_INSURED.INSURED_NAME);
            $("#last_name").val(i_Response.My_Result.Travel_INSURED.INSURED_NAME);
            $("#email").val(i_Response.My_Result.Travel_INSURED.EMAIL);
            $("#customer_id").val(0);
            //$("#phone").val(i_Response.My_Result.Travel_INSURED.TELEPHONE.toString().replace(/\D/g, ''));
            $("#mobile").val(i_Response.My_Result.Travel_INSURED.TELEPHONE.toString().replace(/\D/g, ''));
            $("#address_line1").val(i_Response.My_Result.Travel_INSURED.INSURED_ADDRESS);
            //$("#address_line2").val(i_Response.My_Result.Travel_INSURED.INSURED_ADDRESS);
            $("#city").val(i_Response.My_Result.Travel_INSURED.COUNTRIES_NAME);
            //$("#state").val("nothing");
            $("#country").val(i_Response.My_Result.Travel_INSURED.COUNTRIES_NAME);

            $("#Frm_NetCommerce").submit();
            return false;
        }
        else {
            jq_DisplayNotification('All Payer Info Are Required!', 'fail');
            return;
        }

    }
    catch (e) {
        alert("Edit_MobilePaymentData_Completed: " + e.message);
    }
}



