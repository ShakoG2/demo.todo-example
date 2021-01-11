Ext.define("SL.view.MainController",{
    extend:"Ext.app.ViewController",


    deleteItem:function (grid,rowIndex,colIndex){
        const me=this;
       Ext.Msg.confirm("ყურადღება!","დარწმუნებული ხართ, რომ გნებავთ დავალების წაშლა ?",function (answer){
           if(answer==="yes"){
               const store=me.getViewModel().getStore("todoItems");
               store.removeAt(rowIndex)
           }
       }, this)
    },
    addTask: function (){
        const me=this;
        const form=me.lookup("form");
        if(!form.isValid()) return;
        const value=form.getForm().getValues();
        const store=me.getViewModel().getStore("todoItems");
        const task=Ext.create("SL.model.TodoModel",value);
        store.add(task);
    }
})