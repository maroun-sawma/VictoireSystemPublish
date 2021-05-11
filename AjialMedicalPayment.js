
var Params_MobileAjialMedicalPayment = new Object();
debugger;
Params_MobileAjialMedicalPayment.PolicyCode = "NJ";
Params_MobileAjialMedicalPayment.PolicyNo = 0;
Params_MobileAjialMedicalPayment.USER_ID = 0;
var _Params_MobileAjialMedicalPayment = ko.mapping.fromJS(Params_MobileAjialMedicalPayment);
var PolicyID = 0;

/* On Document Ready. */
/* --------------------------------------------------------------- */
$(document).ready
(
function () {
    //alert($.urlParam('PolicyCode'));
     debugger;
    _Params_MobileAjialMedicalPayment.PolicyCode($.urlParam('PolicyCode'));
    _Params_MobileAjialMedicalPayment.PolicyNo(parseInt($.urlParam('PolicyNo').toString()));
    _Params_MobileAjialMedicalPayment.USER_ID(parseInt($.urlParam('USER_ID').toString()));
    Btn_Pay_AjialMedicalPolicy_Click();
}
);
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Edit_MobileAjialMedicalPaymentData":
                Edit_MobileAjialMedicalPaymentData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}



/* --------------------------------------------------------------- */
function Btn_Pay_AjialMedicalPolicy_Click() {
    try {
        /* ------------------------------------- */
        //debugger;
        if (_Params_MobileAjialMedicalPayment.PolicyNo() == "" || _Params_MobileAjialMedicalPayment.USER_ID() == "") {
            jq_DisplayNotification('No Policy Number!. Please Contact The Company.', 'fail');
            ll_Exit = 1;
            return;
        }

        _Params = ko.mapping.toJSON(_Params_MobileAjialMedicalPayment);
        //alert(_Params);    
        _Service_Method = "Edit_MobileAjialMedicalPaymentData";
        _Async = true;
        CallService();
        /* ---------------- */
    }
    catch (e) {
        alert("Btn_Pay_AjialMedicalPolicy_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */

function Edit_MobileAjialMedicalPaymentData_Completed(i_Response) {
    try {
        debugger;
        if (i_Response.My_Result != null) {
            //alert(i_Response.My_Result);
            ///* ----------------- *//* NETCOMMERCE Info */
            //------------------------------------------------EBILL NETCOMMERCE INFO --------------
            $("#txtMerchNum").val(i_Response.My_Result.AjialMedical_Payment.Merchant_Num);
            $("#txthttp").val('https://online.victoire.com.lb/AjialMedicalPaymentReturn.aspx');
            //$("#txthttp").val('http://localhost:4160/AjialMedicalPaymentReturn.aspx');

            //$("#txtScheduleID").val(i_Response.My_LCMPPolicy.LCMP_Payment.POLICY_ID + "_" + i_Response.My_LCMPPolicy.ENTRY_USER_ID);
            $("#txtScheduleID").val("NJ_" + i_Response.My_Result.POLICY_NO.toString()); //+ "_" + i_Response.My_Result.ENTRY_USER_ID.toString());
            $("#Flag_ScheduleStatus").val('1');
            $("#txtRecurrentAmount").val(i_Response.My_Result.TOTALPREMIUM.toString());
            //CANCELLATIONREASON whe we saved PaymentType Field
            $("#txtRecurrentFreq").val(i_Response.My_Result.CANCELLATIONREASON.toLowerCase().split('_')[0]);


            var date = new Date(i_Response.My_Result.ENTRY_DATE);
            var newdate; //= new Date(date);
            var EndPaymentDate;
            //newdate.setDate(newdate.getDate() + 1);
            switch (i_Response.My_Result.CANCELLATIONREASON.toLowerCase().split('_')[0]) {
                case "monthly":
                    newdate = moment(i_Response.My_Result.ENTRY_DATE).add(1, 'months');
                    $("#Flag_IsPaymentEnds").val('1');
                    $("#txtNumInstallments").val(i_Response.My_Result.CANCELLATIONREASON.toLowerCase().split('_')[1]);
                    EndPaymentDate = moment(i_Response.My_Result.ENTRY_DATE).add(parseInt(i_Response.My_Result.CANCELLATIONREASON.split('_')[1]), 'months');
                    $("#txtEndPaymentDate").val(convertDate2(EndPaymentDate.toString()));
                    break;
                case "quarterly":
                    newdate = moment(i_Response.My_Result.ENTRY_DATE).add(4,'months');
                    break;
                case "bi-yearly":
                    newdate = moment(i_Response.My_Result.ENTRY_DATE).add(6,'months');
                    break;
                case "yearly":
                    newdate = moment(i_Response.My_Result.ENTRY_DATE).add(1, 'years');
                    $("#Flag_IsPaymentEnds").val('0');
                    $("#txtNumInstallments").val('');
                    $("#txtEndPaymentDate").val('');
                    break;
                default:
                    newdate = moment(i_Response.My_Result.ENTRY_DATE).add(1,'years');
            }

            $("#txtStartPaymentDate").val(convertDate2(newdate.toString()));
            $("#Flag_IsInstantPayment").val('1');
            $("#txtInstantAmount").val(i_Response.My_Result.TOTALPREMIUM.toString());
            $("#txtInstantDescr").val(i_Response.My_Result.CANCELLATIONREASON.toLowerCase().split('_')[0]);
            $("#Flag_BypassCardCheck").val('0');
            $("#next_payment_amount").val('');
            $("#next_payment_date").val('');
            $("#txtNumAut").val('');
            $("#signature").val(i_Response.My_Result.AjialMedical_Payment.Signature);
            $("#txtFirstName").val(i_Response.My_Result.AjialMedical_INSURED.INSURED_NAME.split(' ')[0]);
            $("#txtLastName").val(i_Response.My_Result.AjialMedical_INSURED.INSURED_NAME.split(' ')[1] == undefined ? i_Response.My_Result.AjialMedical_INSURED.INSURED_NAME.split(' ')[0] : i_Response.My_Result.AjialMedical_INSURED.INSURED_NAME.split(' ')[1]);
            $("#txtEmail").val(i_Response.My_Result.AjialMedical_INSURED.EMAIL);
            $("#txtPhone").val($.trim(i_Response.My_Result.AjialMedical_INSURED.TELEPHONE.toString().replace(/\D/g, '')));
            $("#txtMobile").val($.trim(i_Response.My_Result.AjialMedical_INSURED.TELEPHONE.toString().replace(/\D/g, '')));
            //var match = ko.utils.arrayFirst(_List_Nationality(), function (item) {
            //    if (item.WORKERSNATIONALITY_ID().toString() == i_Response.My_Result.AjialMedical_INSURED.WORKERSNATIONALITY_ID.toString()) {
            //        return true;
            //    }
            //});
            //if (match) {
            //    $("#txtCountry").val(match.NATIONALITY_NAME());
            //}
            $("#txtCountry").val("Lebanon");
            $("#txtCity").val("Beirut");
            $("#txtAddress").val("Beirut Lebanon");
            //alert('final');

            $("#Frm_AjialMedicalNetCommerce").submit();
            return false;
        }
        else {
            jq_DisplayNotification('All Payer Info Are Required!', 'fail');
            return;
        }

    }
    catch (e) {
        alert("Edit_MobileAjialMedicalPaymentData_Completed: " + e.message);
    }
}



