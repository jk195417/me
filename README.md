# me

Create a resume by writing a `.yml` file.

![index](./doc/images/index.png)

## Installation

1.  [Fork](https://github.com/jk195417/me/fork) this repository

2.  Clone it

    ```bash
    git clone https://github.com/$username/me.git
    cd me
    ```

3.  Using [Yarn](https://yarnpkg.com) to install dependencies

    ```bash
    yarn install
    ```

## Usage
1.  Create and Checkout New Branch `data`.  Edit you information on the branch.
2.  Replace my information with yours in `data/en.yml` and `data/zh-TW.yml`

3.  Each `$name.yml` file will create a **$name** version of resume. In my case, it will be **zh-TW** and **en**.

    Feel free to add a `.yml` file in this folder to create a new version of resume.

    ![i18n](./doc/images/i18n.png)

4.  Preview your resume in <http://localhost:1234>

    ```bash
    yarn start
    ```

### Download PDF

1.  Click **Print Mode** button (at the bottom right)

    ![print mode](./doc/images/print_mode.png)

2.  Right click the browser and print it

    ![right click](./doc/images/right_click.png)

3.  Save it as a `.pdf` file.

    ![print](./doc/images/print.png)

## Deployment

Deploy to your [Github Pages](https://pages.github.com)

```bash
yarn deploy
```

<http://$username.github.io/me>

## Auto Deploy to GitHub Page(gh-page)

If you edit your information on data branch, when you push this branch, will auto deploy Page to gh-page.

But there is a problem([see this issue](https://github.com/crazy-max/ghaction-github-pages/issues/1#issuecomment-531889292)), GitHub team [currently working on it](https://github.community/t5/GitHub-Actions/Github-action-not-triggering-gh-pages-upon-push/td-p/26869).


## Build With

-   [Vue](https://vuejs.org) - JavaScript framework
-   [Bootstrap](https://getbootstrap.com) - Front-End component library
-   [Font Awesome](https://fontawesome.com) - Icons
-   [Day.js](https://github.com/iamkun/dayjs) - Date library
-   [Parcel](https://parceljs.org) - Pack and bundle modules
-   [gh-pages](https://github.com/tschaub/gh-pages) - publishing files to gh-pages branch

## Contributing

Bug reports and pull requests are welcome on GitHub at [repository](https://github.com/jk195417/me).

For major changes, please open an **issue** first to discuss what you would like to change.

## Code of Conduct

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

You can read [CHANGELOG.md](./CHANGELOG.md) for more details.

## Authors

-   楊竑昕 <mailto:jk195417@gmail.com>

See also the list of [contributors](https://github.com/jk195417/me/graphs/contributors) who participated in this project.

## License

This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

You can read [LICENSE.md](./LICENSE.md) for more details.
