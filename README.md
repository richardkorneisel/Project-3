# Project-3

Creating an app that shows where the nearest EV charging stations are using data from the Open Charge Map API. 

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
- Hitting refresh on Detail page clears out the search results. 
