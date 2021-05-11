<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MobilePayment.aspx.cs" Inherits="WebUI.MobilePayment" %>

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
    <script src="MobilePayment.js" type="text/javascript"></script>
</head>
<body>
    <form action="https://www.netcommercepay.com/iPAY/default.asp" method="post" id="Frm_NetCommerce" name="Frm_NetCommerce">
        <input type="hidden" id="payment_mode" name="payment_mode" value="real" />
        <input type="hidden" id="txtAmount" name="txtAmount" value="" />
        <input type="hidden" id="txtCurrency" name="txtCurrency" value="840" />
        <input type="hidden" id="txtIndex" name="txtIndex" value="" />
        <input type="hidden" id="txtMerchNum" name="txtMerchNum" value="" />
        <input type="hidden" id="txthttp" name="txthttp" value="" />
        <input type="hidden" id="signature" name="signature" value="" />
        <input type="hidden" id="Lng" name="Lng" value="EN" />

        <%-- Payer Data --%>
        <input type="hidden" id="first_name" name="first_name" value="EN" />
        <input type="hidden" id="last_name" name="last_name" value="EN" />
        <input type="hidden" id="email" name="email" value="EN" />
        <input type="hidden" id="customer_id" name="customer_id" value="EN" />
<%--        <input type="hidden" id="phone" name="phone" value="EN" />--%>
        <input type="hidden" id="mobile" name="mobile" value="EN" />
        <input type="hidden" id="address_line1" name="address_line1" value="EN" />
<%--        <input type="hidden" id="address_line2" name="address_line2" value="EN" />--%>
        <input type="hidden" id="city" name="city" value="EN" />
<%--        <input type="hidden" id="state" name="state" value="EN" />--%>
        <input type="hidden" id="country" name="country" value="EN" />
    </form>
</body>
</html>
