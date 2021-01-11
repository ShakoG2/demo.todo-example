Ext.define("SL.model.TodoModel",{
    extend:"Ext.data.Model",
    fields:["itemId","name",],
    proxy:{
        url:"http://localhost:8080/todo",
        type:"rest",
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})