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
        reference:"form",
        padding:30,
        border:false,
        defaults:{
            labelAlign: "right"
        },
        items:[{
            xtype:"textfield",
            fieldLabel:"Name",
            name:"name",
            regex: /^[a-zA-Zა-ჰ]+$/,
            width:300,
        },{
            xtype: "button",
            width:120,
            margin:"0 0 0 30",
            text:"addTask",
            handler:"addTask"
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
        xtype: 'actioncolumn',
        text:"deleteItem",
        width:130,
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