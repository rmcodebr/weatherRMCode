First React Native weather app following Asish George Tech tutorial https://www.youtube.com/watch?v=H5xIWY7pL-k but with some changes:
instead of using openweather that needs api key and subscribe to a pay account to user Asish tutorial I used 7timer that does not nedd api key and is all free :-)
I adapted pictures and date with helpers, images are retrieved form the app and not on line. In icons folder I user icons for the weathercivillight folder, and I vave mada helpers for fetching the following:

1 -) ImageHelper.js
fitd image dynamicly

getLocation.js
get user lat lon

getReverseGeocoding.js
from lat lon get user addres etc...

getWeatherCivilLightData.js
get data weather civil light 7 days from 7timer api

getWeatherData.js
get data weather civil for each 3 hours from 7timer api but not used in thos app

I am developing another one that will be much more complete
it is in weather repository
