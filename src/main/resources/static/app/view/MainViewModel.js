Ext.define("SL.view.MainViewModel",{
    extend:"Ext.app.ViewModel",
    requires:["SL.model.TodoModel"],


    stores:{
        todoItems:{
            model: "SL.model.TodoModel",
            autoLoad:true,
        }
    }
})