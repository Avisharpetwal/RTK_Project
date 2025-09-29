#  Optimized Dashboard

A beginner-friendly React project that demonstrates how to build an optimized dashboard using **Redux Toolkit** and **RTK Query**.  
It fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) and shows **posts, users, and todos** 


## Folder Structure 
src/
├── app/
│ └── store.js
├── features/
│ └── apiSlice.js
├── pages/
│ ├── PostsPage.jsx
│ ├── UsersPage.jsx
│ └── TodosPage.jsx
├── components/
│ └── PostItem.jsx
├── App.jsx
└── main.jsx



##  Features
- **RTK Query** for fetching and caching API data  
- **Posts Page**: shows posts 
- **Users Page**: list of users with name and email  
- **Todos Page**: list of todos with completion status  
- **React.memo** → prevents unnecessary re-renders of post items  
- **useMemo & useCallback** avoid recalculations and recreating   
- **React.lazy + Suspense** → route-based code splitting


/posts → Shows posts (20 at a time)
/users → Simple list of users
/todos → Simple list of todos


## Clone the repo :
   https://github.com/Avisharpetwal/RTK_Project/tree/main/src
   
## How to Run
 npm install
 npm run dev



