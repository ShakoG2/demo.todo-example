Ext.define("SL.model.TodoModel",{
    extend:"Ext.data.Model",
    fields:["id","name",],
    proxy:{
        url:"/todo",
        type:"rest",
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})