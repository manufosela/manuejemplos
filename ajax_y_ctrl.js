sendByAjax = function(url,params) { //params={'name':'value',...}
   ctrlAjax.start();
   Ext.Ajax.request({
      url: url,
      success:function(a,b) {
         ctrlAjax.stop();
         eval("data="+a.responseText);
         if (data.code != "0") {
            Ext.Msg.show({
               title:'ERROR',
               msg: data.msg,
               buttons: Ext.Msg.OK,
               fn: function() { },
               animEl: 'elId',
               icon: Ext.MessageBox.WARNING
            });
         } else {
            Ext.Msg.alert("Guardada correctamente");                     
         }        
      },
      params: params
   });
}

ctrlAjax = {
   bMask:false,
   idLoad:null,
   timeToWait: 20000, // 20 seg
   mask: new Ext.LoadMask(Ext.getBody(), {msg:'Accion en progreso. Por favor espere...'}),
   start:function(obj) {
      if (typeof(obj)=="undefined") obj = {};
      if (typeof(obj.useMask)=="undefined") obj.useMask = this.bMask;
      this.bMask = obj.useMask;
      if (this.bmask) this.mask.show();
      this.idLoad = setTimeout(function() {
         if (this.bMask) this.mask.hide();
         var msg = "TIEMPO DE ESPERA AGOTADO. ERROR CARGANDO DATOS";
         Ext.Msg.alert("ERROR",msg);
      },ctrlAjax.timeToWait);
   },
   stop: function() {
      clearTimeout(this.idLoad);
      if (this.bMask) this.mask.hide();
   }
};
