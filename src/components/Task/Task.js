import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided) => (
                    <div className="kanban-card" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        <h3>{this.props.task.title}</h3>
                        <p>{this.props.task.description}</p>
                    </div>
                )}
            </Draggable>
        )
    }
}