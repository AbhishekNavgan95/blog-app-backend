# Blog App Backend

This Express project serves as the backend for a blog application, providing APIs for managing posts, likes, and comments.

## Project Structure

The project follows the standard structure of an Express application. Below are the key components:

- `routes/` - Contains route handlers for different API endpoints.
- `controllers/` - Implements the logic for handling requests.
- `models/` - Defines the data models for posts, likes, and comments.
- `index.js` - Entry point of the application.

## Available APIs

### 1. Dummy Page
- **GET** `/api/dummy`
  - Description: Returns a dummy page.
  
### 2. Create Post
- **POST** `/api/posts/create`
  - Description: Creates a new post.
  - Request Body:
    ```json
    {
        "title": "this is a post 4",
        "body": "this is comment 4"
    }
    ```

### 3. Remove Post
- **POST** `/api/posts/remove`
  - Description: Removes a post along with its comments and likes.
  - Request Body:
    ```json
    {
        "post": "65ab7e1fb56a895f89616220"
    }
    ```

### 4. Fetch All Posts
- **GET** `/api/posts`
  - Description: Fetches all posts.

### 5. Like a Post
- **POST** `/api/likes/like`
  - Description: Adds a like on a post.
  - Request Body:
    ```json
    {
        "post": "65ab7e1fb56a895f89616220",
        "user": "abhishek 2"
    }
    ```

### 6. Unlike a Post
- **POST** `/api/likes/unlike`
  - Description: Removes a like from a post.
  - Request Body:
    ```json
    {
        "post": "65ab7e1fb56a895f89616220",
        "like": "65ab7e3ab56a895f8961622a"
    }
    ```

### 7. Create Comment
- **POST** `/api/comment/create`
  - Description: Creates a new comment.
  - Request Body:
    ```json
    {
        "post": "65ab7e1fb56a895f89616220",
        "user": "Abhishek 2",
        "body": "Comment to be deleted"
    }
    ```

### 8. Remove Comment
- **POST** `/api/comment/remove`
  - Description: Removes a comment from a post.
  - Request Body:
    ```json
    {
        "post": "65ab7e1fb56a895f89616220",
        "comment": "65ab84c898e6f27a458541ab"
    }
    ```

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `npm run dev`

Make sure to set up the required environment variables before running the application.
