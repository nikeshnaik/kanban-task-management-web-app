## Functional Requirements

1. Easier to do client side filtering with required data rather than fetching all data and rendering.
2. Splitting data by status, board and each one will have seperate graphql query.
3. MongoDB backend data will updated with mutations.
4. Since no other service is using data, subscriptions are not required.


## Non-Functinal Requirements

1. TBD


## GraphQL Model


#### Schema 

```
	type Task {

		title: String
		task_id: Int!
		description: String
		status: String!
		subtasks: [Subtask]
	
	}

	type Subtask {

		title: String
		subtask_id: Int!
		isCompleted: Boolean!
	}


```


#### Query


```

	type Query {

		tasks: [Task]
		
	}



```



#### Mutations

```
	type Mutation{
	
		addTask(title: String, description: String, status: String) : Task
		deleteTask(task_id: Int): Task
		updateTask(task_id, title: String, description: String, status: String): Task

		addSubTask(title: String, isCompleted:Boolean):Subtask
		deleteSubTask(subtask_id: Int):Subtask
		updateSubTask(subtask_id:Int, title:String, isCompleted:Boolean):Subtask
	
	}
	

```



## Client Side GraphQL Queries


###### GetTodos
```

	query {

		task{

			title
			task_id
			status(filter:"todo")
			subtask(filter : { isCompleted: true}){
				count			
			}
			subtask{
				count
			}

		}
	
	}

```


#### UpdateTodos

```

	 
	


```