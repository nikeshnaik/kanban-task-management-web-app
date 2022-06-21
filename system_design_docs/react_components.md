#### Routes

1. `/` -> show all boards, columns, todos
2. `/${board}` -> show selected board
3. `/${board}/task/${task_id}` --> /task/2 --> gets task number 2 based on mongo id
4. `/${board}/` --> add new board using addBoard mutation
5. `${board}/${task}` --> add new task to board using addTask mutation


### Components


1. SideBar 
	1. NavItems
		1. Existing Boards
		2. Create New Board
	2. Theme Update
	3. Hide ScrollBar  / hidden + show
2. Add New Task/Column
3. Header with Kanban and current board name
4. Task Dialog/Modal 
	1. SubTask checklist
	2. Current Status DropDown
5. New Task Form / Edit Form task
6. Add New Board/ Edit Board
7. Buttons --> Add new task, add new column, delete, cancel, save changes, add new subtask
8. Column
9. Task Card
10. Layout



## Libraries to be used
1. React dnd beautiful for columns drag and drop feature
2. Headless CSS library --> Ant Design
3. RedWoodJS for Full Stack Development
4. React Router, Apollo Client
5. ReactForms


## Screens To Support

Mobile
Ipad
Large Screens


