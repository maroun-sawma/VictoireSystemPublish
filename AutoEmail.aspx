<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AutoEmail.aspx.cs" Inherits="WebUI.AutoEmail" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="text-align:center; color:red">
        <h1>Sending Auto Emails.<br /> Please Do Not Close. It Will Close Automatically After Sending All mails. <br />Thanks</h1>
    </div>
        <br /><br />
    <div style="text-align:center; color:green">
        <h2><asp:Label ID="lbl_return" runat="server"></asp:Label></h2>
    </div>
    </form>
</body>
</html>
