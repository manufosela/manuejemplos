

Ext.onReady(function() {
   util = {};

   util.ctrlAjax = {
      bMask: false,
      mask: new Ext.LoadMask(Ext.getBody(), {msg:'Accion en progreso. Por favor espere...'}),
      timeToWait: 15000,
      idLoad:false,
      start:function(obj) {  /* obj { useMask:true, } */
         if (typeof(obj)=="undefined") obj = {};
         if (typeof(obj.useMask)=="undefined") obj.useMask = this.bMask;
         this.bMask = obj.useMask;
         if (this.bMask) this.mask.show();
         this.idLoad = setTimeout(function() {
            if (this.bMask) this.mask.hide();
            var msg = "TIEMPO DE ESPERA AGOTADO. ERROR CARGANDO DATOS";
            Ext.Msg.alert("ERROR",msg);
         },this.timeToWait);                     
      },
      stop:function() {
         if (this.bMask) this.mask.hide();
         clearTimeout(this.idLoad);
      },
      showError:function() {
         Ext.Msg.show({
            title:'ERROR',
            msg: 'Error recuperando datos',
            buttons: Ext.Msg.OK,
            icon: Ext.MessageBox.WARNING
         });
      }
   }
   
});
