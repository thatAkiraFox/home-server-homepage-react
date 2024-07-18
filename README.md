## 📝 Table of Contents

* [⚠️ Disclaimer](#-disclaimer)
* [✨ Credits](#-credits)
* [🛠️ Configuration](#-configuration)
  * [`settings.json`](#settingsjson)
  * [`services.json`](#servicesjson)
  * [Using custom icons](#using-custom-icons)
* [💾 Installation / Deployment](#-installation--deployment)

## ⚠️ Disclaimer

This is a personal project. Its sole purpose is to let me learn React while also
allowing me to have some fun by creating something useful (at least for me).

Contributions appreciated! This is my very first React (and web in general)
project so, to the pros out there, I'm deeply sorry for the aberrations you
**will** find in my code 💀

## ✨ Credits

Thanks to:

- bastienwirtz for creating [Homer](https://github.com/bastienwirtz/homer), from
  which this project takes inspiration.
- SphericalKat for creating [Katbin](https://github.com/SphericalKat/katbin),
  allowing me to shorten some URLs and thus saving some precious bytes of disk
  space.
- [Google Fonts](https://fonts.google.com/) for the generic logos

## 🛠️ Configuration

This home page accepts two configuration files: `services.json` and
`settings.json`, located inside the `config` folder.

### `settings.json`

This file contains a single object with a bunch of key-value pairs:

```json5
{
  "hostname": "your server's hostname (or whatever you want)",
  "logo": "path or URL to a custom header logo",
  "favicon": "path or URL to a custom favicon"
}
```

where:

- `hostname` is a string that appears on top of the page title in the header.\
  If set to `null` or to an empty string then it will be hidden.
- `logo` is a string that contains the URL or the path to an image file to use
  as a logo in the header.\
  If set to `null` or to an empty string then a generic logo will be used.
- `favicon` is a string that contains the URL or the path to an image file
  to use as a favicon.\
  If set to `null` or to an empty string then a generic favicon will be used.

### `services.json`

This file contains a set of objects:

1. Each object identifies a group, which contains a name and a set of apps
2. Each app is an object with a set of properties

The file structure is as follows:

```json5
// Array of app groups
[
  // First app group
  {
    "name": "first group name",
    "apps": [
      // Apps inside the group
      {
        "name": "first app name",
        "description": "first app description",
        "url": "button URL",
        "logo": "path or URL to a custom logo for the app"
      },
      {
        "name": "second app name",
        "description": "...",
        "url": "...",
        "logo": "..."
      }
      //,{...}
    ]
  },
  // Second app group
  {
    // ...
  }
]
```

- Each group has a `name` property and contains an array of objects (apps)
- Each app is defined by:
    - `name`: name of the app, cannot be null or empty
    - `description`: description of the app which will appear in the app button
      underneath the app name
    - `url`: URL where the user will be redirected upon clicking on the button.\
      Cannot be null or empty
    - `logo`: path or URL to the logo to use for the given app button

### Using custom icons

If you want to use local image files (good for loading speeds and to minimize
network requests to external hosts) you can just place them in the exposed
`/config` folder or create a new folder inside of it.

From that moment, the file path will be `/config/path/to/image`.

## 💾 Installation / Deployment

You should be able to build and run the container with both Podman and Docker.

```text
git clone https://github.com/thatAkiraFox/home-server-homepage-react
cd home-server-homepage-react
podman build -t home-server-homepage-react .
podman run -p <desired host port>:8080 -v <desired host directory>:/www/config/ home-server-homepage-react:latest
```
