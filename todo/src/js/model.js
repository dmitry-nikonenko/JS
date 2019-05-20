import{getTodos, updateById} from './utils/api';



export default class Model {
    constructor(){
        this._notes = [];
        this._editMode = false;
        this._editTodo = null;
        this.toggleEditMode = this.toggleEditMode.bind(this);
        
    }
    get notes() {
        return this._notes;
      }
    
      set notes(notes) {
        return this._notes = notes;
      }
      static getPriorityName(priorityId) {
        return Notepad.PRIORITIES[priorityId].name;
      }
      toggleEditMode(id){
          this._editMode = !this._editMode;
          if(this._editTodo === null ){
              this._editTodo = id;
          } else {
              this._editTodo = null;
          }
      }

      getAllData(){
       return getTodos();
      }
      updateNote(data) {
        return updateById(this._editTodo.id,{...this._editTodo, ...data});
      }
}