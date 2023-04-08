## High Level Design

- User Interface:
    - The app will have a simple user interface where users can enter their long URLs.
There will be a "Shorten" button which, when clicked, will generate a short URL using the Bitly API.
    - The app will display the shortened URL and allow the user to copy it to their clipboard.
Users will also be able to view a list of their shortened URLs.
- API Integration:
    - The app will use the Bitly API to generate short URLs.
When the user clicks on the "Shorten" button, the app will make a request to the Bitly API with the long URL.
    - The API will respond with a shortened URL which the app will display to the user.
- URL Redirect:
    - When a user clicks on a shortened URL, the app will redirect them to the original URL.
This will be done by setting the window.location.href property to the original URL.
- State Management:
    - The app will use React's state management to keep track of the list of shortened URLs.When a new URL is added, the app will update the state and display the new URL in the list.
The state will be persisted using local storage so that the user's list of URLs is not lost when they close the app.
- Error Handling:
    - The app will handle errors that may occur when making requests to the Bitly API, such as network errors or invalid URLs.
If an error occurs, the app will display an error message to the user.