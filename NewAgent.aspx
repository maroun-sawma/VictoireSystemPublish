<%@ Page Language="C#" AutoEventWireup="true"CodeBehind="NewAgent.aspx.cs" Inherits="WebUI.NewAgent" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>New Agent | Victoire Insurance Company</title>
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
<%--    <script type="text/javascript" src="js/jquery-2.1.4.min.map" + ></script>--%>
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
    <script src="NewAgent.js" type="text/javascript"></script>
</head>
<body>
    <div id="Div_NewAgent">
            <form id="Form_NewAgent" action="">
                <table style="width: 100%; margin: 0">
                    <tr>
                        <td class="HeaderPolicy" style="text-align:left">General Info</td>
                    </tr>
                    <tr>
                        <td>
                            <table class="TopSitemap" border="0" style="width: 100%">
                                <tr>
                                    <td style="width: 100%; text-align:left">
                                        <table style="width: 100%" border="0">
                                            <tr>
                                                <td style="width: 12%">
                                                    <label id="Lbl_NG_AgentName" for="Txt_NG_AgentName" style="width: 100%">Full Name</label>
                                                </td>
                                                <td style="width: 35%">
                                                     <input type="text" id="Txt_NG_AgentName" required maxlength="200" name="Txt_NG_AgentName" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                                <td style="width: 12%">
                                                    <label id="Lbl_NG_Email"  for="Txt_NG_Email" style="width: 100%">Email</label>
                                                </td>
                                                <td style="width: 35%">
                                                    <input type="email" placeholder="email@webmail.com" maxlength="200" id="Txt_NG_Email" required name="Txt_NG_Email" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="width: 12%">
                                                    <label id="Lbl_NG_Telephone" for="Txt_NG_Telephone" style="width: 100%">Telephone</label>
                                                </td>
                                                <td style="width: 35%">
                                                     <input type="text" required id="Txt_NG_Telephone" maxlength="16" name="Txt_NG_Telephone" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                                <td style="width: 12%">
                                                    <label id="Lbl_NG_Language" for="DDL_NG_Language" style="width: 100%">Language</label>
                                                </td>
                                                <td style="width: 35%">
                                                    <select id="DDL_NG_Language" name="DDL_NG_Language"class="ui-widget-content ui-corner-all w554">
                                                        <option value="EN">English</option>
                                                        <option value="FR">French</option>
                                                        <option value="AR">Arabic</option>
                                                    </select> 
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" style="width: 100%; text-align:left">
                                                    <label id="Lbl_Message" for="Txt_NG_Message" style="width: 100%">Enter your message below</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" style="width: 100%">
                                                    <textarea required name="Txt_NG_Message" maxlength="1000" id="Txt_NG_Message" style="width:90%" rows="5" class="text ui-widget-content ui-corner-all w7"></textarea>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:left; width:100%">
                            <button class="irbutL" id="Btn_Register" >&nbsp;Register&nbsp;</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
</body>
</html>
