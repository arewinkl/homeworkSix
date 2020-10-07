# Homework Number 6- five day weather forecast

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

the goal of this homework was to create a website that allowed the user to select the city that they want to check the weather in. when the user does this they should be able to take a look at not only the current weather for that city, but they need to see the upcoming 5 day forecast for that city.


## What went well

This being the first week that we worked with **JQuery** and **Ajax** I feel that it went better than expected, and in some ways seemed to make the way to write good functions more apparent. the best part about the whole project was getting used to pulling information out from an existing API. I had never used an **API** let alone heard on one, but now I am very curious to see what kinds of API's there are out there.
The second thing that I am most proud of has been the improvement that I have seen in my ability to clean up my code when i find that its breaking when I go and check it in the __dev-tools__. Before I would look at my dev-tools and not really sure what I was looking at or how to use it to fix whatever problem I was experiencing with my code.
Thirdly the final thing that I am most pleased with after doing most of the homework is the ways in which I was able to implement the **css** and **javascript** without having much issues, and even spent some time seeing if there were some new attributes that I could use to spice up my homework. **CSS** is going to be very important for my coding future and the fact that I feel that I am finally getting a hang of it is very exciting, coming in with literally **NO** coding experience Its very exciting to only be a little over three weeks into the class and realize how much I have already learned. 


## Problems that I experienced

Just like every challenging assignment that we receive in this class, there were Undoubtedly some challenging aspects to this assignment. First off getting the API to work was a challenge, once I got my API key or the weather website, It took some time for me to figure out how to get a function to run correctly. the **API** required that we not only pull the information from the database, but we needed to pull out very specific information. This did provide me some added practice at __drilling down__ in the *div console* to find where the information was so that I could then add it to a function in my JS. The problem that I kept having is I could get the information to appear in the *dev console* but when I tried pulling it to my page I kept receiving error messages.
The other problem that I had with this assignment is very similar to the one that I just mentioned. I went back and practiced with some of the activities that we went over in class and they were working, but when I was attempting to plug in the __array__ it kept telling me that it did not exist. Im sure that in the future ill realize that it was an extremely obvious fix, but for this assignment I just couldn't figure it out. below Im going to include some screenshots of what I thought went well and what I thought didn't go so well on this homework.

## ScreenShots

Screenshot 1 | Screenshot 2  | Screenshot 3 | Screenshot 4
------------ | ------------- | ------------ | -------------
local storage | HTML hardCode | CSS for styling | addition to API |
(Assets/images/Screen-Shot-5.jpg) | (Assets/images/Screen-Shot-2.jpg) | (Assets/images/Screen-Shot-3.jpg) | (Assets/images/Screen-Shot-4.jpg)
function for trying to create local storage | HTML hardCode success| css for styling | function for creating API return.