Ext.define("SL.view.Main",{
    extend:"Ext.grid.Panel",
    title:"TodoItemGrid",
    controller:{
        xclass:"SL.view.MainController"
    },
    viewModel:{
        xclass:"SL.view.MainViewModel"
    },
    bind:"{todoItems}",

    tbar:[{
        xtype:"form",
        layout:"hbox",
        margin:30,
        padding:30,
        border:false,
        defaults:{
            labelAlign: "right"
        },
        items:[{
            xtype:"textfield",
            fieldLabel:"Name",

            width:300,
        },{
            xtype: "datefield",
            fieldLabel: "Date",
            width: 300,
        },{
            xtype: "checkbox",
            fieldLabel: "isDode"
        },{
            xtype: "button",
            width:120,
            margin:"0 0 0 30",
            text:"addCompany",
        }]
    }],
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
            iconCls: 'fa fa-cog',
            tooltip: 'EditItem',
            handler:"editItem"
        }]
    }]
})