Ext.define("SL.view.Main",{
    extend:"Ext.grid.Panel",
    title:"TodoItemGrid",
    viewModel:{
        xclass:"SL.view.MainViewModel"
    },
    bind:"{todoItems}",
    columns:[{
        text:"ID",
        dataIndex:"itemId",
        width:50
    },{
        text:"Name",
        dataIndex: "name",
        width:300
    },{
        text:"Date",
        // type:"Date",
        dataIndex: "createdAt",
        width:300
    },{
        xtype: 'actioncolumn',
        text:"deleteItem",
        width:200,
        items: [{
            iconCls: 'fa fa-trash-o',
            tooltip: 'delete',
            handler: 'deleteItem'
        }]
    },{
        xtype:"actioncolumn",
        text:"edit",
        width:200,
        items:[{
            iconCls: 'x-fa fa-cog',
            tooltip: 'EditItem',
            handler:"editItem"
        }]
    }]
})