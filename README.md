# Disclaimer

This is a personal project. Its sole purpose is to allow me to learn React and
use it in a small project so that I can easily use it in an upcoming project
for my university's Web Technologies course.

# Configuration

This homepage accepts two configuration files: `services.json` and
`settings.json`.

### `settings.json`

Starting with `settings.json`, it contains a single object with just two key-value
pairs:

```jsonc
{
  "hostname": null,
  "logo": null
}
```

- `hostname` is a string that sets a label on top of the page header.\
  If left `null` or set to an empty string, a generic hostname will be used.
- `logo` can be an URL to a local file or to an external image.\
  If left `null` or set to an empty string, a generic logo will be used.

### `services.json`

This file contains an array of objects. Each objects defines an app group, and
each app group contains an arbitrary number of apps.

The file structure is as follows:

```jsonc
// Array of app groups
[
  // First app group
  {
    "name": "first group name",
    "apps": [ // Apps inside the group
      {
        "name": "first app name",
        "url": "",
        "logo": null
      },
      {
        "name": "second app name",
        "url": "",
        "logo": ""
      }
    ]
  },
  // Second App Group
  {
    ...
  }
]
```

- Each app group contains a key-value pair for the app group name and an array
  of objects (the apps in the group)
- Each app is defined by three key-value pairs:
  - `name` is the name of the app.\
    If set to `null` or to an empty string, an error message will be displayed.
  - `url` is the URL of the app where the user will be redirected upon clicking
    on the relative button.\
    If set to `null` or to an empty string, an error message will be displayed.
  - `logo` is an URL to an internal or external image to use as an app logo.\
    If set to `null` or to an empty string, a generic logo will be used.
