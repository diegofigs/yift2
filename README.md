# Yift2

Small email/sms sender client for Yiftee's Programming Challenge.

## Future Work / Observations

These are observations made to clarify that some of these features were
not implemented because they are not in the scope of the project, but
can be easily added if desired.

* `home` component can be refactored by extracting the form to
a separate component and binding it's validness state; removing alert
and help blocks into their respective directives.
* Autocomplete feature can be fixed to add all fields of contact
on select.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Although the project's devDependencies require Gulp and Webpack, you may need to install them globally with:
```
npm i -g gulp webpack
```

### Installing

Clone the repo and on it's working directory, run:
```
npm install
```

After everything is installed, the project may be started with:
```
gulp serve
```

## Deployment

```
gulp serve:dist
```

## Built With

* [AngularJS](https://angularjs.org/) - Web Framework
* [Bootstrap SASS](http://getbootstrap.com/css/#sass) - SASS port of Bootstrap
* [Gulp](http://gulpjs.com/) - Task Runner and Automation
* [Webpack](https://webpack.github.io/) - Module Bundler
* [Browsersync](https://www.browsersync.io/) - Live Reload Server with steroids
