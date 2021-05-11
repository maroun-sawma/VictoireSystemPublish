<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebUI.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
            <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101988900-4"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'UA-101988900-4');
        </script>

    <title>Log In | Victoire Insurance Company</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="copyright" content="Copyright (c) 2012 igloorooms.com. All Rights Reserved." />
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <link rel="shortcut icon" href="/faviconVictoire.ico" />

    <link type="text/css" href="css/theme/jquery-ui-1.10.1.custom.min.css" rel="stylesheet" />
    <link href="css/jquery.qtip.min.css" rel="stylesheet" type="text/css" />
    <link href="css/login.css" rel="stylesheet" type="text/css" />
    <link href="css/multimenu.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery-2.1.4.min.js?<%=VersionNo%>" + ></script>
<%--    <script type="text/javascript" src="js/jquery-2.1.4.min.map?<%=VersionNo%>" + ></script>--%>
    <script type="text/javascript" src="js/jquery-ui-1.10.1.custom.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.hoverIntent.minified.js?<%=VersionNo%>" type="text/javascript"></script>
    <script type="text/javascript" src="js/jquery.dcmegamenu.1.3.3.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.qtip.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.blockUI.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.dateFormat-1.0.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/knockout.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/knockout.mapping.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.linq.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.number.js?<%=VersionNo%>"></script>
    <!--Scripts For JQuery UI Multiselect -->
    <link rel="stylesheet" type="text/css" href="jQueryMultiSelect/jquery.multiselect.css" />
    <script type="text/javascript" src="jQueryMultiSelect/jquery.multiselect.js?<%=VersionNo%>"></script>
    <!--End Scripts For JQuery UI Multiselect -->
    <script type="text/javascript" src="js/My_Library.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="js/jquery.mb.browser.min.js?<%=VersionNo%>"></script>
    <script type="text/javascript" src="Default.js?<%=VersionNo%>"></script>
</head>
<body>
    <form id="frm_login" runat="server" style="height: 100%">
        <div style="height: 100%">
            <table style="width: 100%; height: 100%; border-collapse: collapse; border-spacing: 0; background-color: #ffffff" border="0">
                <tr style="height: 11%">
                    <td style="height: 91px; vertical-align: top; background-image: url(../images/bgheader.gif); background-repeat: repeat-x repeat-y; background-position: top; border-collapse: collapse; border-spacing: 0; padding: 0">
                        <table border="0" style="width: 100%; height: 100%; border-collapse: collapse; border-spacing: 0">
                            <tr>
                                <td style="padding-left: 0px; width: 383px; text-align: left; vertical-align: middle"><a href="/UI/Default">
                                    <img alt="" src="../images/logo_victoire.png" style="height: 75px; width: 338px;" border="0" /></a></td>
                                <td style="padding-left: 40px; padding-bottom: 17px; padding-right: 10px;">
                                    <table style="width: 100%">
                                        <tr>
                                            <td style="vertical-align: top; text-align: right" class="titleheaderSmall">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="vertical-align: top; text-align: right" class="titleheaderSmall">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: right; vertical-align: bottom" class="titleheader">We Welcome You Online</td>
                                        </tr>
                                    </table>
                                </td>
                                <td style="width: 126px; text-align: left">
                                    <img alt="" style="position: absolute; top: 0px; z-index: 60" src="../images/letterheadtop.png" width="126" height="120" border="0" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr style="height: 29%">
                    <td id="test"></td>
                </tr>
                <tr style="height: 30%;">
                    <td style="background-color: #1a4199" class="border_shadow">
                        <table style="border-collapse: collapse; border-spacing: 0; width: 100%; height: 100%" border="0">
                            <tr>
                                <td style="width: 3%">&nbsp;</td>
                                <td style="text-align: left; width: 30%">
                                    <div id="irboxlogin" class="ircenter">
                                        <br />
                                        <div style="font-weight: bold; color: white">Existing Agent&nbsp;login</div>
                                        <br />
                                        <div id="irerror" class="irroundbox"></div>
                                        <table style="width: 100%" border="0">
                                            <tr>
                                                <td><span style="font-weight: normal; color: white">Username&nbsp;&nbsp;</span></td>
                                                <td>
                                                    <input class="irinputL" type="text" id="txt_username" name="txt_username" runat="server" style="background-image: url(images/admin/ico_user.png);" /></td>
                                            </tr>
                                            <tr>
                                                <td><span style="font-weight: normal; color: white">Password&nbsp;&nbsp</span></td>
                                                <td>
                                                    <input class="irinputL" type="password" id="txt_password" name="txt_password" runat="server" style="background-image: url(images/admin/ico_password.png);" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <input type="checkbox" id="chk_RememberUname" name="chk_RememberUname" checked="checked" /><span class="VICchk">Remember username</span></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <input type="button" class="irbutL" id="btn_Login" name="btn_Login" value="Log In" />
                                                    <asp:Button ID="btn_RedirectFromLogin" Text="ddd" runat="server" OnClick="btn_RedirectFromLogin_Click" Style="display: none;" />
                                                    <a href="#" class="ResetPassword" style="color: white">Forgot password?</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td style="width: 1%; background-image: url(images/line.gif); background-repeat: no-repeat; background-position: center;"></td>
                                <td class="textwhitesmall" style="text-align: left; width: 20%">
                                    <img alt="" src="images/arrow2.gif" height="15" />
                                    New Agent ?
                                    <span style="color: #00b4cb; cursor:pointer" class="RegisterAgent">&nbsp;
                                        <b>
                                            <asp:LinkButton ID="linkRegisterAgent" runat="server" Text="Click Here To Register" CssClass="titleheaderSmall" OnClick="linkRegisterAgent_Click"></asp:LinkButton>
                                        </b>
                                    </span>
                                </td>
                                <td style="width: 36%; vertical-align: middle; text-align: right; padding-top: 90px" class="titleslogan"><b>حـقـك بيلزمنا</b></td>
                                <td style="width: 10%;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr style="height: 3%">
                    <td style="height: 5px"></td>
                </tr>
                <tr style="height: 29%">
                    <td style="margin: 0 auto; vertical-align: bottom; height: 70px; text-align: center;" class="footer">
                        <p>
                            Sami El Solh Av. /E. Ghorayeb Bldg, P.O.Box : 166116 Achrafieh, Beirut 11002100 Lebanon.<br>
                            Tel : +961-1-389067 Fax : +961-1-389379, E-mail : <a href="mailto://assurances@victoire.com.lb" target="_blank" title="Click here to Send mail">assurances@victoire.com.lb</a><br>
                            Designed and developed by <a href="http://www.softenergie.com.lb" target="_blank" title="Softenergie - Software Creator">Softenergie</a>
                        </p>
                    </td>
                </tr>
                <tr style="height: 1%">
                    <td style="height: 5px"></td>
                </tr>
            </table>
        </div>

    </form>
<%--    <div id="Div_NewAgent" style="display: none">
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
        </div>--%>
<%--    <div id="Div_ResetPassword" style="display: none">
            <form id="Form_ResetPassword" action="">
                <table style="width: 100%; margin: 0">
                    <tr>
                        <td class="HeaderPolicy" style="text-align:left">Broker Info</td>
                    </tr>
                    <tr>
                        <td>
                            <table class="TopSitemap" border="0" style="width: 100%">
                                <tr>
                                    <td style="width: 100%; text-align:left">
                                        <table style="width: 100%" border="0">
                                            <tr>
                                                <td style="width: 12%">
                                                    <label id="Lbl_DR_AgentName" for="Txt_DR_AgentName" style="width: 100%">Full Name</label>
                                                </td>
                                                <td style="width: 35%">
                                                     <input type="text" id="Txt_DR_AgentName" required name="Txt_DR_AgentName" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                                <td style="width: 12%">
                                                    <label id="Lbl_DR_Email"  for="Txt_DR_Email" style="width: 100%">Email</label>
                                                </td>
                                                <td style="width: 35%">
                                                    <input type="email" placeholder="email@webmail.com" id="Txt_DR_Email" required name="Txt_DR_Email" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="width: 12%">
                                                    <label id="Lbl_DR_Telephone" for="Txt_DR_Telephone" style="width: 100%">Telephone</label>
                                                </td>
                                                <td style="width: 35%">
                                                     <input type="text" required id="Txt_DR_Telephone" name="Txt_DR_Telephone" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                                <td style="width: 12%">
                                                    <label id="Lbl_DR_Language" for="DDL_DR_Language" style="width: 100%">Language</label>
                                                </td>
                                                <td style="width: 35%">
                                                    <select id="DDL_DR_Language" name="DDL_DR_Language"class="ui-widget-content ui-corner-all w554">
                                                        <option value="EN">English</option>
                                                        <option value="FR">French</option>
                                                        <option value="AR">Arabic</option>
                                                    </select> 
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="width: 12%">
                                                    <label id="Lbl_DR_BrokerCode" for="Txt_DR_BrokerCode" style="width: 100%">Broker Code</label>
                                                </td>
                                                <td style="width: 35%">
                                                     <input type="number" id="Txt_DR_BrokerCode" required name="Txt_DR_BrokerCode" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                                <td style="width: 12%">
                                                     <label id="Lbl_DR_Username" for="Txt_DR_Username" style="width: 100%">UserName</label>
                                                </td>
                                                <td style="width: 35%">
                                                    <input type="text" id="Txt_DR_Username" required name="Txt_DR_Username" class="text ui-widget-content ui-corner-all dimmed w554"/>
                                                </td>
                                                <td style="width:3%">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:left; width:100%">
                            <button class="irbutL" id="Btn_Reset" >&nbsp;Reset Password&nbsp;</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>--%>

</body>
</html>
