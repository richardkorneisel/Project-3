# Project-3

This web application was designed to display the nearest EV charging station(s) for electric vehicles by using data from the Open Charge Map API and Mapquest Open Geocoding API based on the user's search criteria.

# Instructions

Upon loading the website, the user will be given two search options (1. City & State, or 2. Latitude and Longitude) to locate nearby charging loctions.  After the user enters their search critera, the website will then provide a list of locations at the bottom of the page (starting with the closest).

If the user wishes to see additional data from one of the charging stations listed, all they have to do is click on the Details button on any of the listings, and they will be transfered to another page where additional data (ie. number of chargers & charging level) will be displayed for that particular charging location.

In addition, this application provides a navagation bar in the upper right hand corner where the user can select the 'About Us' link and they will be taken to a page that will provide them with some details and instructions about the website.

If the user wishes to return to the homepage, at any time, they can click on the 'Charging Station Locator App' link in the header at the top left corner.

### Team Members:
- Troy Clarke
- Rich Korneisel
- Seth Chadwick

### Technologies Used
- React
- React Router
- Axios

### API

[Open Charge Map](https://openchargemap.org/site/develop/api)

[Open Geocoding API](https://developer.mapquest.com/documentation/open/geocoding-api/)


### Component Structure
- App
    - Header
        - Nav
    - Home 
        - Search
        - Results
            - ResultsList    
                - Result
    - About Us

### User Stories

[See User Stories Here](/planning/user-stories.md)


### Future Improvements
- Add error checking for state abbreviations. Ex. 'milan, IL' returns the city of Milan, Italy instead of Milan, Illinois. If 'il' is entered, lower case, Milan, Illinois is returned. 
- Hitting refresh on Detail page clears out the search results vs. keeping the data's current state.
- Adding a map and driving instructions to each of the listed results.
