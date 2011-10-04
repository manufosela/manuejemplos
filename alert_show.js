/*  EXT 3 */
Ext.Msg.show({
   title:"SESSION CADUCADA",
   msg: "Su sesion ha caducado.<br/>Para poder volver a acceder a los enlaces debera identificarser de nuevo",
   buttons: Ext.Msg.OK,
   fn: function() { document.location="ejer10-11.php"; },
   animEl: 'elId',
   icon: Ext.MessageBox.OK
});
/*  EXT 4 */
Ext.Msg.show({
   title: 'Acceso no autorizado',
   msg: 'Credencial caducada o Usuario/Password no autorizado.',
   buttons: Ext.Msg.OK,
   fn: function() { document.location='loginpage.php'; }
});

Ext.Msg.prompt('Name', 'Please enter your name:', function(btn,text) {
   if (btn == 'ok'){
   }
}, this /*scope*/, false /*multiline*/, "valor por defecto en el input");

