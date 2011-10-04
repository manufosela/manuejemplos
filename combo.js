// EXAMPLE 1

{
   xtype:'combo',
   id:'mycombo1',
   store: new Ext.data.ArrayStore({
      fields: [
         'field'
      ],
      data: [
         {field: 'field1' },
         {field: 'field2' }
      ]
   }),
   valueField: 'field',
   displayField: 'field',
   typeAhead: true,
   triggerAction: 'all',
   lazyRender:true,
   mode: 'local'
}


// EXAMPLE 2

{
   xtype:'combo',
   id:'mycombo2',
   emptyText:'Seleccione una opcion',
   store: new Ext.data.JsonStore({ 
      autoDestroy: true,
      url: 'get.php',
      root: 'data',
      fields: ['fileconf'],
   }),
   valueField: 'fileconf',
   displayField: 'fileconf',
   typeAhead: true,
   triggerAction: 'all',
   lazyRender:true,
   mode: 'local',
   listeners:{
      'select':function(e) {
         var sel = e.lastSelectionText;
         Ext.Msg.alert("Selected","Selected value: "+sel);         
      }
   }
}
/* get.php returns something like this:
{
    data: [
        {fileconf: 'file1' },
        {fileconf: 'file2' }
    ]
}
*/

