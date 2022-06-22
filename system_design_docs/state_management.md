## Functional Requirements

1. There will be more local state for each forms for eg: create new task or edit task which will send post request for backend to update and then locally update the state.
2. Local State and Server State needs to be in sync. Good way to use reducer or redux.
3. Since we are using graphql, we can make all api calls in service and call them from inside state updates.
4. Theme Update, sidebar collapse must be global level
5. Each status or columns todo, done, doing must be at board level states.
6. Above Board level state must Org level states. 
7. Org Level State management can also be theme update, login, user setups.
8. The columns for user/org must be saved somewhere to call backend to get data.
9. One way is to store state of org or user in backend and call when app is loaded. The data fetched from backend will get boards, boards columns, columns task, task's subtasks, its waterfall from top level to node. 
10. First once user shows up on web app, we fetch boards and show default first board else let him create new board. 
11. So there are 3 states init state, global state and local states of each component.
12. Init State will fire first api to get boards and the first board will load the tasks.
13. Init State only job is to get boards for that user or org. Nothing else. 
14. All by default only first board tasks will be loaded, after init it will be routed to first board. -->  check if logged in at `/` and then fetch data and load first board at -->   `/board/platform_planning` , create board is at `/board` 
15. We load at `/` check if logged in or not, move to `/board/${board name}`  or any preference of user, but we choose first in list. Thats the work of init state
16. Org/User/Global state has theme and log in details and boards.  We can include init into global if possible.
17. Local states will fetch data based on events that trigger. Make as much data fetching in local state as possible.


## Init State

```
	init_state = {
	
		user boards: "3"
		current_board: 1
	
	}


```


## Global/Org/User level State

```
	global_state = {
	
		theme: dark/light,
		sidebar_collapse: false/true,
		user_details: {}
		device: mobile, ipad, desktop,
		

	}



```


## Board State Local State

```



```


