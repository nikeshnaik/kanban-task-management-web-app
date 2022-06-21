### Functional Requirements


1. Store boards into their own collections
2. Each Document is one task with `status` (todo, doing, done), `title`, `description`, `subtask` list.
3. Each task and subtask will have unique id across collections, since platform board or marketing board can move task to different board will break primary key constraint.
4. Subtask can be made as main task -> delete from subtask list and create a new task.
5. Search task by `task_id` will be easy, but searching subtask with `subtask_id` will be difficult, always pass `task_id` of subtask to search or grab to update.
6.  While creating a subtask, get task_id and then add subtask to it. Each document ie task will have empty subtask list by default.
7. Other attibutes: `title`, `description`, `task_id`, `status`, `subtasks`, `isCompleted`.
8. Column Name and Status are both same.
9. Whenever new plan or board is created, create a new collection. (In future if possible will merge all board into one collection to reduce hoping around.)


## Non-Functional Requirements

1. Index task_id, title for faster searching
2. Since it will be write heavy as users usually move around the cards from column to column which makes it write heavy.
3. Reading from mongo will be considerably less as once board is rendered, single call to backed will get all task.
4. Encryption, Scaling, Authorization, Login are out scope as we are using MongoDB Atals Free Cluster.


### Mongo Data Model

#### Collections
1. Platform Launch
2. Marketing Plan
3. Roadmap


#### Document
```
{
	task_id: 1,
	
	title: "Build UI from marketing flow",
	
	description: "Marketing flow require new UI and Designers have passed on thier job to frontend developer to party around.",
	
	status: "todo/doing/done",
	
	subtasks: [
	
		{
			subtask_id: 2,
			title: "Design System Colours to CSS Vars",
		
		},
		{
			subtask_id: 3,
			title: "Choose library to build UI."
		}
	
	]
	
	

}


```
