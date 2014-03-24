<%@ Page Language="vb" AutoEventWireup="false" %>

<%@ Import Namespace="System.IO" %>
<%
    Dim raw = Request.RawUrl.Replace(Request.Path + "?", "")
    Try
        Dim req = System.Net.HttpWebRequest.Create(raw)
        Dim resp = req.GetResponse()
        Dim str = resp.GetResponseStream()
        Dim rdr = New BinaryReader(str)
        Do
            Dim bytes = rdr.ReadBytes(1024)
            Response.BinaryWrite(bytes)
            If bytes.Length < 1024 Then Exit Do
        Loop
       
    Catch ex As Exception
        Response.Write(ex.ToString)
    End Try
%>
