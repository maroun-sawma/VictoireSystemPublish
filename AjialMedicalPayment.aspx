<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AjialMedicalPayment.aspx.cs" Inherits="WebUI.AjialMedicalPayment" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Online Payment | Victoire Insurance Company</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="copyright" content="Copyright (c) 2012 igloorooms.com. All Rights Reserved." />
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <link rel="shortcut icon" href="/faviconVictoire.ico" />

    <link type="text/css" href="css/theme/jquery-ui-1.10.1.custom.min.css" rel="stylesheet" />
    <link href="css/jquery.qtip.min.css" rel="stylesheet" type="text/css" />
    <link href="css/login.css" rel="stylesheet" type="text/css" />
    <link href="css/multimenu.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery-2.1.4.min.js" + ></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.1.custom.min.js"></script>
    <script src="js/jquery.hoverIntent.minified.js" type="text/javascript"></script>
    <script src="js/jquery.dcmegamenu.1.3.3.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/jquery.qtip.min.js"></script>
    <script type="text/javascript" src="js/jquery.blockUI.js"></script>
    <script type="text/javascript" src="js/jquery.dateFormat-1.0.js"></script>
    <script type="text/javascript" src="js/knockout.js"></script>
    <script type="text/javascript" src="js/knockout.mapping.js"></script>
    <script type="text/javascript" src="js/jquery.linq.min.js"></script>
    <script type="text/javascript" src="js/jquery.number.js"></script>
    <!--Scripts For JQuery UI Multiselect -->
    <link rel="stylesheet" type="text/css" href="jQueryMultiSelect/jquery.multiselect.css" />
    <script type="text/javascript" src="jQueryMultiSelect/jquery.multiselect.js"></script>
    <!--End Scripts For JQuery UI Multiselect -->
    <script type="text/javascript" src="js/My_Library.js"></script>
    <script type="text/javascript" src="js/jquery.mb.browser.min.js"></script>
    <script type="text/javascript" src="js/moment.js"></script>
    <script src="AjialMedicalPayment.js?27042019" type="text/javascript"></script>

</head>
<body>
        <!-- NetCommerce EBILL Payment Fields----------------->
        <form action="https://www.netcommercepay.com/eBillSys/" method="post" id="Frm_AjialMedicalNetCommerce" name="Frm_AjialMedicalNetCommerce">
            <input type="hidden" id="txtFirstName" name="txtFirstName" value="" />
            <input type="hidden" id="txtLastName" name="txtLastName" value="" />
            <input type="hidden" id="txtEmail" name="txtEmail" value="" />
            <input type="hidden" id="txtPhone" name="txtPhone" value="" />
            <input type="hidden" id="txtMobile" name="txtMobile" value="" />
            <input type="hidden" id="txtCountry" name="txtCountry" value="" />
            <input type="hidden" id="txtCity" name="txtCity" value="" />
            <input type="hidden" id="txtAddress" name="txtAddress" value="" />
            <input type="hidden" id="txtMerchNum" name="txtMerchNum" value="" />
            <input type="hidden" id="txtMerchReq" name="txtMerchReq" value="add_sch" />
            <input type="hidden" id="txthttp" name="txthttp" value="" />
            <input type="hidden" id="txtScheduleID" name="txtScheduleID" value="" />
            <input type="hidden" id="Flag_ScheduleStatus" name="Flag_ScheduleStatus" value="" />
            <input type="hidden" id="txtRecurrentAmount" name="txtRecurrentAmount" value="" />
            <input type="hidden" id="txtRecurrentFreq" name="txtRecurrentFreq" value="" />
            <input type="hidden" id="txtCurrency" name="txtCurrency" value="840" />
            <input type="hidden" id="Flag_IsPaymentEnds" name="Flag_IsPaymentEnds" value="" />
            <input type="hidden" id="txtNumInstallments" name="txtNumInstallments" value="" />
            <input type="hidden" id="txtEndPaymentDate" name="txtEndPaymentDate" value="" />
            <input type="hidden" id="txtStartPaymentDate" name="txtStartPaymentDate" value="" />
            <input type="hidden" id="Flag_IsInstantPayment" name="Flag_IsInstantPayment" value="" />
            <input type="hidden" id="txtInstantAmount" name="txtInstantAmount" value="" />
            <input type="hidden" id="txtInstantDescr" name="txtInstantDescr" value="" />
            <input type="hidden" id="Flag_BypassCardCheck" name="Flag_BypassCardCheck" value="" />
            <input type="hidden" id="signature" name="signature" value="" />       
        </form>
        <!-- /NetCommerce -->
</body>
</html>
