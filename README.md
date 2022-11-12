# Microfrontend Codepen

## Cache busting
    Load manifest of webpack and then load url from this. Two round trips.
    Use BFF to load Manifest and return the url.

## Token scopes should include all the microfrontends resources.
    BFF can act as an API Gateway and forward the requests to the relevant microservices
    Using BFF we can use delegated sub approach and use a token for the bff

## Saving the token in session storage and following a convention so that it is shared across microfrontends

## Saving the configuration in global window object so that it is shared by all the micro frontends 
    