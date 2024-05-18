import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task"

export default class Column extends React.Component {
    render() {
        return <div className={this.props.isDraggingOver ? "active" : "kanban-column"}>
            <h2>{this.props.column.title}</h2>
            {this.props.column.id == 'column-1' ? <button className="add-button" onClick={(e) => { e.stopPropagation(); this.props.addTask(); }}>+</button> : null}
            <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                    <div className="kanban-cards" {...provided.droppableProps} ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'lightgreen' : 'grey' }}>
                        {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    }
}