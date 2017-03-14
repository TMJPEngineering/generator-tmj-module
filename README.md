# TMJ Mean Stack Module Generator
[![npm version](https://img.shields.io/npm/v/generator-tmj-module.svg)](https://www.npmjs.org/package/generator-tmj-module)

Mean Stack Module Generator using Yeoman

## Table of Contents

- [Getting Started](https://github.com/TMJPEngineering/generator-tmj-module#getting-started)
  - [Locally](https://github.com/TMJPEngineering/generator-tmj-module#locally)
  - [Globally](https://github.com/TMJPEngineering/generator-tmj-module#globally)
- [List of Commands](https://github.com/TMJPEngineering/generator-tmj-module#list-of-commands)
  - [Module](https://github.com/TMJPEngineering/generator-tmj-module#creating-a-module)
  - [Angular Config](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-config)
  - [Angular Controller](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-controller)
  - [Angular Directive](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-directive)
  - [Angular Factory](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-factory)
  - [Angular Module](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-module)
  - [Angular Provider](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-provider)
  - [Angular Service](https://github.com/TMJPEngineering/generator-tmj-module#create-an-angular-service)
  - [Auth](https://github.com/TMJPEngineering/generator-tmj-module#create-an-auth-module)
  - [Controller](https://github.com/TMJPEngineering/generator-tmj-module#create-a-controller)
  - [Middleware](https://github.com/TMJPEngineering/generator-tmj-module#create-a-middleware)
  - [Model](https://github.com/TMJPEngineering/generator-tmj-module#create-a-model)
  - [Routes](https://github.com/TMJPEngineering/generator-tmj-module#create-a-routes)
  - [Schema](https://github.com/TMJPEngineering/generator-tmj-module#create-a-schema)
  - [Test](https://github.com/TMJPEngineering/generator-tmj-module#create-a-test)
  - [View](https://github.com/TMJPEngineering/generator-tmj-module#create-a-view)
- [Folder Structure](https://github.com/TMJPEngineering/generator-tmj-module#folder-structure)
- [Credits](https://github.com/TMJPEngineering/generator-tmj-module#credits)
- [LICENSE](https://github.com/TMJPEngineering/generator-tmj-module#license)

## Getting Started

You will need to install `yeoman` using `npm`. Be sure to have [NodeJS](https://nodejs.org/en/download/) installed before doing it so.

```
npm install yo -g
```

### Locally

You need to download or clone this to a new project locally name it `generator-tmj-module`. Then run it in git shell.

```
git clone https://github.com/TMJPEngineering/generator-tmj-module.git > generator-tmj-module
```

Go to the root directory of this project, then type:

```
npm link
```

That will install this generator dependencies and symlink a global module to your local file. After `npm` is done your good to go to your project.

### Globally

Or if you don't want to download or clone this, you can install it using `npm`:

```
npm install -g generator-tmj-module
```

## List of Commands

![Commands](https://cloud.githubusercontent.com/assets/21231662/23845060/f273a526-0800-11e7-9ab1-1f23f9f5d14b.png)

**Note:**
- `[name]` - Required
- `[module]` - Required
- `[--option]` - Optional

### Creating a Module

To create a new module, you can simply run:

```
yo tmj-module:make [name]
```

To create multiples modules, you can simply run by example:

```
yo tmj-module:make Blog Chat Post
```

### Creating an Angular Config

Create new angular config for the specified module.

```
yo tmj-module:make-angular-config [name] [module]
```

### Creating an Angular Controller

Create new angular controller for the specified module.

```
yo tmj-module:make-angular-controller [name] [module]
```

### Creating an Angular Directive

Create new angular directive for the specified module.

```
yo tmj-module:make-angular-directive [name] [module]
```

### Creating an Angular Factory

Create new angular factory for the specified module.

```
yo tmj-module:make-angular-factory [name] [module] [--option=value]
```

**Options:**
- `plain`

### Creating an Angular Module

Create new angular module for the specified module.

```
yo tmj-module:make-angular-module [name] [module]
```

### Creating an Angular Provider

Create new angular provider for the specified module.

```
yo tmj-module:make-angular-provider [name] [module]
```

### Creating an Angular Service

Create new angular service for the specified module.

```
yo tmj-module:make-angular-service [name] [module]
```

### Creating an Auth Module

Scaffold basic login and registration views.

```
yo tmj-module:make-auth --force
```

### Creating a Controller

Create new controller for the specified module.

```
yo tmj-module:make-controller [name] [module] [--option=value]
```

**Options:**
- `rest`
- `plain`

### Creating a Entity

Create new entity for the specified module.

```
yo tmj-module:make-entity [name] [module]
```

### Creating a Middleware

Create new middleware for the specified module.

```
yo tmj-module:make-middleware [name] [module]
```

### Creating a Routes

Create new routes for the specified module.

```
yo tmj-module:make-routes [name] [module] [--option=value]
```

**Options**
- `plain`

### Creating a Schema

Create new schema for the specified module.

```
yo tmj-module:make-schema [name] [module]
```

### Creating a Test

Create new test for the specified module.

```
yo tmj-module:make-test [name] [module]
```

### Creating a View

Create new html file for the specified module in views folder

```
yo tmj-module:make-view [name] [module]
```

## Folder Structure

Example:

*User Module*

```
yo tmj-module:make Chat
```

```
...
├── modules/
│   └── Chat/
│       ├── Client/
│       │   ├── Config
|       │   │   └── chat.config.js
│       │   ├── Controllers
|       │   │   └── chat.controller.js
│       │   ├── Factories
|       │   │   ├── chat-manager.factory.js
|       │   │   └── chat-resource.factory.js
│       │   ├── Providers
|       │   │   └── chat.provider.js
│       │   └── Services
|       │   │   └── chat.service.js
│       │   └── Tests
|       │   │   └── chat.test.js
│       │   └── user.module.js
│       └── Server/
│           ├── Controllers
|           │   └── chat.controller.js
│           ├── Entities
|           │   └── chat.entity.js
│           ├── Middlewares
|           │   └── chat.middleware.js
│           ├── Routes
|           │   └── chat.routes.js
│           ├── Schemas
|           │   └── chat.schema.js
│           └── Tests
|               └── chat.test.js
└── resources/
    └── views/
        └── chat/
            └── index.html
...
```

## Credits

- [John Papa Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
- [Generator TMJ](https://github.com/TMJPEngineering/generator-tmj)
- [Yeoman](http://yeoman.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/TMJPEngineering/generator-tmj-mean/blob/master/LICENSE) for details

Copyright (c) 2017 [TMJ](http://www.tmj.jp/en/) Philippines