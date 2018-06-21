## Application10 Ionic Hybrid Application
The application shows real-time foreign exchange rates for multiple currencies
How to run the code
You will need Ionic set up on your system, preferably V3.20.0 or higher, and an IDE like Brackets, or Text editors like Atom, sublime Text.

Clone the repository on your local machine.

navigate to the source directory i.e Application10 and run command 'ionic serve' or 'ionic serve -c'(if you want to see the output on ionic Devapp)

A new browser window should open up displaying the application, running on your machine's local host.

Modify the code to add new currencies.

### Note:
In the file forex-data.ts in Application10/src/providers/forex-data/forex-data.ts, add your API key in the line
'dataUrl = "https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDEUR&api_key=Your_API_KEY"'
get your API key for both free and paid version from:
https://1forge.com/forex-data-api/pricing


### Ionic Version
The application code was developed in Ionic version V3.20.0

### Ionic DevApp version
The application was successfully tested on Android and iOS device using Ionic DevApp version 8b57745

### Google Chrome Version
This application was successfully run on google chrome v 67.0.3369.87

### API Documentation
https://1forge.com/forex-data-api/api-documentation
