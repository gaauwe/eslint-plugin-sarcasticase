# eslint-plugin-sarcasticase

![sarcastic](https://cdn.vox-cdn.com/thumbor/zB0qRIm9McyX9OHiou4YT0kLPQE=/0x0:650x381/1200x800/filters:focal(273x139:377x243)/cdn.vox-cdn.com/uploads/chorus_image/image/62893956/mocking_spongebob.0.jpg)

Looking for job security without doing all the hard work? Look no further! Transform your codebase into sarcasticase, so that no one else understands your code.

### How to use

Install the package:
```
npm i git://github.com/gaauwe/eslint-plugin-sarcasticase.git --save-dev
```

Include the plugin in your .eslintrc config:
```
{
    "plugins": ["sarcasticase"],
    "rules": {
        "sarcasticase/naming-convention": "error"
    }
}
```

Supports fixing all existing variables by running `eslint --fix`

### Demo

![demo](./demo/sarcasticase-demo.gif)
