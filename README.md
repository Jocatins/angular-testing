## Angular Testing

tests are written in jasmine and executed in karma
The configurations are done in karma.conf.js

## Commands

Run `ng e2e` for end to end tests

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## For code coverage

Run `ng test --code-coverage=true`

You can put the code coverage flag in

angular.json - "codeCoverage" : true,

package.json -"test-coverage": ng test --code-coverage=true"

Then you run `npm run test:coverage`

## Skip Tests

Run `ng new [app-name] -skipTests`

By adding "skipTests" to true in schematics in Angular.json
`SkipTests: true` -> not encouraged

By adding "x" in front ot the tests in front of describe and it

# Describe ->

A test suite begins with a call to the global Jasmine function. `describe`("string of description", callback Function() =>{})

# Specs ->

They are defined by calling the global Jasmine function function `it`

# Expect ->

Expectations are built with the function expect which takes a value, called `actual`

# Matcher ->

It is chained with a matcher function, which takes the expected value

# Default Spec files

- Test bed , Async --- Import from built in modules

- `BeforeEach Methods` -- These are basic setups for the ground work to be done before running test scripts.
  We use an async beforeEach - The purpose of the async is to let all the possible async code to finish before continuing
  Before running any test in angular you need to configure an angular TestBed
  This allows you to create an angular environment for the component being tested
  Any module, component or service that your tested component needs have to be included in the testbed. Finally after setting the configuration, you call the compile components functions

- TestBed.configureTestingModule({
  // The main utility to define our module, component, etc
  --- `this is the same as configuring a module` - declare components
  })

- Imported components can be more than one, a parent child component

- `Fixture` is wrapper class, we can get properties of component classes and templates

# AAA Pattern

`Arrange` - arrange everything like setup ground work for working with tests for execution -- e.g beforeEach, creating an instance of a component using componentFixture

`Act` - act on your unit test case, calling methods, processing data e.g
executing the it block

`Assert` - Verifying the actual data of test result and expected data

# Angular TestBed

- TestBed is the first and largest of the Angular testing utilities
- It creates an angular testing module that you configure with the `configureTestingModule` method to produce the module environment for the class you want to test
- Configures and initializes environment for unit testing and provides methods for creating component and services in unit tests
- It creates a dependency injection context and allows us to override providers, services and whole modules
- It compiles, instantiates and renders to HTML our components attaching them to the fixture instance.
