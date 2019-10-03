# me

Create a resume by writing a `.yml` file.

## Installation

1.  [Fork](https://github.com/jk195417/me/fork) this [repository]

2.  Clone it

    ```bash
    git clone https://github.com/$username/me.git
    cd me
    ```

3.  Using [Yarn] to install dependencies

    ```bash
    yarn install
    ```

## Usage

1.  Replace my information with yours in `data/en.yml` and `data/zh-TW.yml`

    > Each `$name.yml` file will create a **$name** version of resume. In my case, it will be **zh-TW** and **en**.

2.  Preview your resume in <http://localhost:1234>

```bash
yarn start
```

4.  Click **Print Mode** button (at the bottom right), right click the browser and print it, then save it as a `.pdf` file.

## Deploy

Deploy to your [Github Pages]

```bash
yarn deploy
```

<http://$username.github.io/me>

## Build With

-   [Vue] - JavaScript framework
-   [Bootstrap] - Front-End component library
-   [Font Awesome] - Icons
-   [Day.js] - Date library
-   [Parcel] - Pack and bundle modules
-   [gh-pages] - publishing files to gh-pages branch

## Authors

-   楊竑昕 - [jk195417@gmail.com]

See also the list of [contributors] who participated in this project.

## License

This project is available as open source under the terms of the [MIT License].

You can read [LICENSE.md] for more details.

## Contributing

Bug reports and pull requests are welcome on GitHub at [repository].

For major changes, please open an **issue** first to discuss what you would like to change.

## Code of Conduct

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant] code of conduct.

[repository]: https://github.com/jk195417/me

[yarn]: https://yarnpkg.com

[github pages]: https://pages.github.com

[vue]: https://vuejs.org

[bootstrap]: https://getbootstrap.com

[font awesome]: https://fontawesome.com

[day.js]: https://github.com/iamkun/dayjs

[parcel]: https://parceljs.org

[gh-pages]: https://github.com/tschaub/gh-pages

[contributors]: https://github.com/jk195417/me/graphs/contributors

[jk195417@gmail.com]: mailto:jk195417@gmail.com?subject=github.com/jk195417/me.git

[mit license]: https://opensource.org/licenses/MIT

[license.md]: https://github.com/jk195417/me/blob/master/LICENSE.md

[contributor covenant]: http://contributor-covenant.org
