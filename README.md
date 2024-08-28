# Akil bookmarking and testing

This project implements testing using jest and cypress. It includes bookmark  pages, integrated with the provided API endpoints.

## Features

1. **bookmark page**: Designed with a form for name, email, password, and confirm password. Client-side validation and server response handling.

2. **testing jest**: Designed with a form for email and password. Client-side validation and authentication flow.

3. **testing cypress**: Clean and well-structured, following best practices. Leverages NextJS 14.3 Canary 46 and related technologies.

## Screenshots

1. [Signup Page](screenshots/2.png)
2. [Signin Page](screenshots/1.png)
3. [Successful Signup](screenshots/3.png)
If the user haven't logged in initial there will be no bookmark functionality only displaying jobs.

4. [signedout user](screenshots/8.PNG)

if the user is logged in the bookmark button will showup and the user should be able to save bookmarks.
5. [bookmrks showing ](screenshots/7.PNG)
5. [bookmrks showing ](screenshots/7.PNG)


The following shows jest and cypress tests respectively.
6. [tests](screenshots/5.PNG)
7. [bokmarks page](screenshots/10.PNG)


## Technologies Used

- **NextJS 14.3 Canary 46**
- **React**
- **React Fonts and Icons**

## Installation and Usage

1. Clone the repository and install dependencies.
2. Start the development server and access the application.
3. Use the signup and signin pages to authenticate users.

## Deployment

The application is deployed at https://akil-authentication.vercel.app/

## Conclusion

This project demonstrates user authentication implementation using NextAuth in a NextJS application. It follows best practices and is designed for maintainability and scalability.