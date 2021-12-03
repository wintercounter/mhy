# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [12.0.0](https://github.com/wintercounter/mhy/compare/v11.5.4...v12.0.0) (2021-12-03)


### ⚠ BREAKING CHANGES

* **webpack:** The whole mhy ecosystem has been moved to SWC. The `babel` process is still available for legacy purposes, but from now on `webpack`, `node`, `jest` and `storybook` will use `swc` instead. By default, this should cause any problems, but this change is being released as breaking to avoid unforeseen problems.

### Features

* **jest:** replace `babel-jest` with `@swc/jest` for significantly improved performance ([656bee6](https://github.com/wintercounter/mhy/commit/656bee6cbd3e3cc309a32c622aa8adf4429c6697))
* **node:** replace `babel-register` with `swc-register` for significantly improved startup performance ([196b3e9](https://github.com/wintercounter/mhy/commit/196b3e92b17f078b06d67971b809183e1f52b47f))
* **swc:** add `swc` config support ([4d051ce](https://github.com/wintercounter/mhy/commit/4d051ced51e3e4f38e8b3b247396b9c899d86237))
* **swc:** add `swc` process to compile files ([a460546](https://github.com/wintercounter/mhy/commit/a460546387a2d69408e3409103a36a64b1e19179))
* **webpack:** replace `babel-loader` with `swc-loader` for significantly improved startup performance ([5f42089](https://github.com/wintercounter/mhy/commit/5f42089b98347855cc29d6377c17f1b59234346b))

### [11.5.4](https://github.com/wintercounter/mhy/compare/v11.5.1...v11.5.4) (2021-12-03)

### [11.5.1](https://github.com/wintercounter/mhy/compare/v11.5.0...v11.5.1) (2021-10-09)


### Bug Fixes

* **storybook:** now really remove knobs :) ([3a3e82f](https://github.com/wintercounter/mhy/commit/3a3e82f4daff51c8e2c543eedee9f448cc54c8c0))
* **webpack:** remove more deprecated config options ([d52a03d](https://github.com/wintercounter/mhy/commit/d52a03dc7a940f0de179ab0047ab3c38dac325ab))

## [11.5.0](https://github.com/wintercounter/mhy/compare/v11.4.1...v11.5.0) (2021-10-09)


### Features

* **docker:** add `ffmpeg` and `ffprobe` support to base image ([21b16ac](https://github.com/wintercounter/mhy/commit/21b16acc90050672806ad63d2f99a4eca57dc2ac))
* **storybook:** remove `@storybook/addon-knobs` in favor of `@storybook/addon-controls`; if you use `knobs`, you need to remove them. ([6908253](https://github.com/wintercounter/mhy/commit/6908253e2253771168bb374eba6dfa0e7ad64b93))


### Bug Fixes

* **webpack:** remove `devServer.watchOptions` as it's no longer needed, it automatically inherits global `watchOptions` now ([624d5b2](https://github.com/wintercounter/mhy/commit/624d5b28d3306fa84983d32995b94f9b0f254b80))

### [11.4.1](https://github.com/wintercounter/mhy/compare/v11.4.0...v11.4.1) (2021-09-26)

## [11.4.0](https://github.com/wintercounter/mhy/compare/v11.2.1...v11.4.0) (2021-09-26)


### Features

* provide support for custom jest configuration files ([3d9fa32](https://github.com/wintercounter/mhy/commit/3d9fa32fc1905dc41a06b414d27489756c0f5bd5))

### [11.2.1](https://github.com/wintercounter/mhy/compare/v11.2.0...v11.2.1) (2021-08-12)

## [11.2.0](https://github.com/wintercounter/mhy/compare/v11.1.0...v11.2.0) (2021-08-12)


### Features

* **docker:** update node version ([8b05e31](https://github.com/wintercounter/mhy/commit/8b05e311dd7ee6cc5e97216c88de474a0738f65f))


### Bug Fixes

* **resolve:** jest revealed a node.js module resolution bug when using exports without specifying extension. This was adjusted everywhere now. ([901b667](https://github.com/wintercounter/mhy/commit/901b667a11010016eec7b259d6eb0d31f33dd5fa))
* **storybook+webpack:** adopt to the `require.context` changes in Webpack ([de88c42](https://github.com/wintercounter/mhy/commit/de88c42b52709daa3d16468abaa0a31f781775d2))

### [11.1.4](https://github.com/wintercounter/mhy/compare/v11.1.0...v11.1.4) (2021-08-11)


### Bug Fixes

* **storybook+webpack:** adopt to the `require.context` changes in Webpack ([de88c42](https://github.com/wintercounter/mhy/commit/de88c42b52709daa3d16468abaa0a31f781775d2))

### [11.1.3](https://github.com/wintercounter/mhy/compare/v11.1.0...v11.1.3) (2021-06-14)


### Bug Fixes

* **storybook+webpack:** adopt to the `require.context` changes in Webpack ([de88c42](https://github.com/wintercounter/mhy/commit/de88c42b52709daa3d16468abaa0a31f781775d2))

## [11.1.0](https://github.com/wintercounter/mhy/compare/v10.2.3...v11.1.0) (2021-03-22)


### Features

* move to NPM v7 support ([fd84148](https://github.com/wintercounter/mhy/commit/fd8414814b8781848eed9f4c7e9465300b95ee61))

### Bug Fixes

* **eslint:** update to new `eslint-config-prettier` usage ([d05a412](https://github.com/wintercounter/mhy/commit/d05a4122eceaa17ff132f7b9b2998ff9e6ce184a))
* remove obsolete dep `@apollo/react-ssr` ([da0eb8b](https://github.com/wintercounter/mhy/commit/da0eb8bcdc9a4d33fc098d21b4a0f4736207e71e))
* **babel:** remove `browsers: false` from preset config as it's no longer valid ([c87f0f3](https://github.com/wintercounter/mhy/commit/c87f0f3088e4045bf870d6174c1a1260043a34ba))

## [10.3.0](https://github.com/wintercounter/mhy/compare/v10.2.3...v10.3.0) (2021-01-07)


### Features

* **subexports:** add support for `force` flag ([557b686](https://github.com/wintercounter/mhy/commit/557b686937847832bc8d78a2dcb34f6535c923c8))


### Bug Fixes

* **dep:** require interop ([e0bd0a8](https://github.com/wintercounter/mhy/commit/e0bd0a8343e8ad15e4d5615205b5cc8c1faff968))
* **enzyme:** react 17 support ([9e5ed12](https://github.com/wintercounter/mhy/commit/9e5ed12457ddb22d77284964e90ffde517d0e279))
* **eslint:** disable new arrow function rules ([3879f0b](https://github.com/wintercounter/mhy/commit/3879f0bf74066247b8b33535653bb7bc664446fd))
* **subexports:** correct exit code when it couldn't find a file ([44dbdbd](https://github.com/wintercounter/mhy/commit/44dbdbddbc63c508f67aa466361e7936f8ea68f4))

### [10.2.3](https://github.com/wintercounter/mhy/compare/v10.2.2...v10.2.3) (2021-01-03)

### [10.2.2](https://github.com/wintercounter/mhy/compare/v10.2.1...v10.2.2) (2020-12-09)

### [10.2.1](https://github.com/wintercounter/mhy/compare/v10.2.0...v10.2.1) (2020-12-01)

## [10.2.0](https://github.com/wintercounter/mhy/compare/v10.1.0...v10.2.0) (2020-11-17)


### Features

* **babel+ts:** babel process will now resolve aliases in d.ts files inside dist folder ([86f44ae](https://github.com/wintercounter/mhy/commit/86f44ae5234aa24b2e31762bd50912aa35e124bb))

## [10.1.0](https://github.com/wintercounter/mhy/compare/v10.0.0...v10.1.0) (2020-11-02)


### Features

* **Docker:** Node v15 base ([b0e8884](https://github.com/wintercounter/mhy/commit/b0e88848c50f2ebd91c922440fd91e63afaaa1b1))


### Bug Fixes

* Storybook doesn't need MiniCSSExtractLoader ([48ef46e](https://github.com/wintercounter/mhy/commit/48ef46e5b9e6b696417695dbd8c53b95eaa736b7))
* **eslint:** add missing `@typescript-eslint/ban-ts-comment` rule ([7315504](https://github.com/wintercounter/mhy/commit/7315504ced55f5ee766f55227c7836c60c9ef7a4))
* **eslint:** update global-patch ([cef23a8](https://github.com/wintercounter/mhy/commit/cef23a8b7cb8ef7711d8f51b03115770af0ffbf7))

## [10.0.0](https://github.com/wintercounter/mhy/compare/v9.1.9...v10.0.0) (2020-10-28)


### ⚠ BREAKING CHANGES

* Webpack 5 support required a lot of changes but it also enabled many improvements
- `mhy wds` is removed, please use `mhy wp serve` from now on for devServer;
- CSS extraction and minification will be done automatically from now on, it's turned on for development as well to avoid dev/production differences and help identify issues
- `webpack-manifest-plugin` and `pwa-manifest-plugin` are temporarily disabled due to no WP5 support yet
- React fast-refresh is supported out of the box, and it's amazing
- Single runtime entries are currently not supported due to a mini-css-extract-plugin bug
- using `auto: true` for CSS module detection allowed us to remove the use of 2 separate loader rules for CSS
- automatic runtime (jsx helper) support for Babel React

### Features

* Webpack 5 support ([ae1dafe](https://github.com/wintercounter/mhy/commit/ae1dafe9d353e05cdbb08ae50fa039f081a928ed))
* **subexports:** command to generate exports folders and files for sub packages ([be15e35](https://github.com/wintercounter/mhy/commit/be15e35eb064c1c605aa0d78e05bbae4605db323))


### Bug Fixes

* **templates:** update them to work with the latest changes ([0734c8b](https://github.com/wintercounter/mhy/commit/0734c8bdb624c7af590a4b70eddd209c523760ee))

## [9.2.0](https://github.com/wintercounter/mhy/compare/v9.1.9...v9.2.0) (2020-10-22)


### Features

* **subexports:** command to generate exports folders and files for sub packages ([be15e35](https://github.com/wintercounter/mhy/commit/be15e35eb064c1c605aa0d78e05bbae4605db323))

### [9.1.9](https://github.com/wintercounter/mhy/compare/v9.1.8...v9.1.9) (2020-10-13)

### [9.1.8](https://github.com/wintercounter/mhy/compare/v9.1.5...v9.1.8) (2020-10-12)

### [9.1.7](https://github.com/wintercounter/mhy/compare/v9.1.5...v9.1.7) (2020-10-07)

### [9.1.6](https://github.com/wintercounter/mhy/compare/v9.1.5...v9.1.6) (2020-10-07)

### [9.1.5](https://github.com/wintercounter/mhy/compare/v9.1.4...v9.1.5) (2020-10-06)

### [9.1.4](https://github.com/wintercounter/mhy/compare/v9.1.0...v9.1.4) (2020-09-25)


### Bug Fixes

* **ci:** wait for correct version before creating docker image ([7077926](https://github.com/wintercounter/mhy/commit/70779261365490e5140b8f94513ece08b644f31e))
* **storybook:** expose `mhy` config just like as normal Webpack does ([b636e27](https://github.com/wintercounter/mhy/commit/b636e27604d0c00a7a18490372b2304fd76e8c48))
* **typescript:** add global type for exposed `mhy` config to avoid TS errors ([82c66d5](https://github.com/wintercounter/mhy/commit/82c66d557b40b75c1cfd078bb3f16e2db1703c39))

## [9.1.0](https://github.com/wintercounter/mhy/compare/v9.0.0...v9.1.0) (2020-09-17)


### Features

* **Tooltip:** temporary react popper fix DAS-62 ([eb61cf5](https://github.com/wintercounter/mhy/commit/eb61cf57c20af3273650de8ff7cc8e73882bdf49))


### Bug Fixes

* proper type for SVG imports ([90311da](https://github.com/wintercounter/mhy/commit/90311dac32dbcb8ebbd33e5811d1efa02345953a))
* remove old alias imports ([e890d03](https://github.com/wintercounter/mhy/commit/e890d03f036295f814a61764cd35afd09941555c))
* svg types fix ([bdf2631](https://github.com/wintercounter/mhy/commit/bdf26317f24659393ae010865b2f609810cb79d2))

## [9.0.0](https://github.com/wintercounter/mhy/compare/v8.0.3...v9.0.0) (2020-09-16)


### ⚠ BREAKING CHANGES

* **Docker:** this change results in smaller image file and removes and extra layer added by recursive CHMOD command
* **ui+ecosystem:** these features are being removed because they're mostly unused and adds a lot of extra complexity; this is a first step to a major refactor cycle that's upcoming

### Features

* **Docker:** switch from base `stretch` to `alpine` ([5b23952](https://github.com/wintercounter/mhy/commit/5b23952ae23c527e8335d36ad723973e6ecb3d33))
* **eslint:** make sure typescript config will be generated first in any case when necessary ([8fd73ad](https://github.com/wintercounter/mhy/commit/8fd73adc352c3721a0e2f9c192ef11558de759be))
* **post-css:** make post-css loader configs compatible with latest postcss ([8c1e489](https://github.com/wintercounter/mhy/commit/8c1e48942322e43a30ca7ed9ee86da791b0d08a0))
* **ui+ecosystem:** remove `ui` and `ecosystem` feature ([def3290](https://github.com/wintercounter/mhy/commit/def3290750f5b81f055494aa16c80343d654cecf))


### Bug Fixes

* **eslint:** set correct jest version in eslint config ([7b0451f](https://github.com/wintercounter/mhy/commit/7b0451f457410846615186a61b8567ccacaa0fa3))

### [8.0.6](https://github.com/wintercounter/mhy/compare/v8.0.3...v8.0.6) (2020-09-10)


### Bug Fixes

* **eslint:** set correct jest version in eslint config ([7b0451f](https://github.com/wintercounter/mhy/commit/7b0451f457410846615186a61b8567ccacaa0fa3))

### [8.0.5](https://github.com/wintercounter/mhy/compare/v8.0.3...v8.0.5) (2020-09-10)

### [8.0.4](https://github.com/wintercounter/mhy/compare/v8.0.3...v8.0.4) (2020-09-04)

### [8.0.3](https://github.com/wintercounter/mhy/compare/v8.0.2...v8.0.3) (2020-08-29)

### [8.0.2](https://github.com/wintercounter/mhy/compare/v8.0.1...v8.0.2) (2020-08-20)

### [8.0.1](https://github.com/wintercounter/mhy/compare/v8.0.0...v8.0.1) (2020-08-20)

## [8.0.0](https://github.com/wintercounter/mhy/compare/v7.3.2...v8.0.0) (2020-08-18)


### ⚠ BREAKING CHANGES

* **webpack:** This eliminates the usage of the `.svgx` extension. You can import SVG as React component using `import { ReactComponent } from './foo.svg'` syntax from now on.

### Features

* **SVGXtoSVGR:** add icon=true to make default width and height = 1em DAS-66 ([2e11a4f](https://github.com/wintercounter/mhy/commit/2e11a4ffba96ee00881b0109e66461d173362132))
* **SVGXtoSVGR:** add sprite support DAS-66 ([63d03b8](https://github.com/wintercounter/mhy/commit/63d03b8ee44077a5d7e3ec9b05af4f53cbc96038))
* **SVGXtoSVGR:** fixing merging conflicts DAS-66 ([0048095](https://github.com/wintercounter/mhy/commit/00480954a5a0e64b24601cd4325a7820e300133c))
* **SVGXtoSVGR:** recover options DAS-66 ([3e58b7e](https://github.com/wintercounter/mhy/commit/3e58b7e1780b8ad2d3fb184db43e897562bc6098))
* **webpack:** switch from `svg-react-loader` to `@svgr/webpack` ([eae5005](https://github.com/wintercounter/mhy/commit/eae5005f6af24fde05945d0e14b3cf06ca4eb26f))

### [7.3.2](https://github.com/wintercounter/mhy/compare/v7.3.1...v7.3.2) (2020-08-18)

### [7.3.1](https://github.com/wintercounter/mhy/compare/v7.3.0...v7.3.1) (2020-08-18)


### Bug Fixes

* **eslint:** remove obsolete ``@typescript-eslint/interface-name-prefix` rule ([81dd503](https://github.com/wintercounter/mhy/commit/81dd5032932d7e9208e88f2062b63aa96bf9a968))

## [7.3.0](https://github.com/wintercounter/mhy/compare/v7.2.1...v7.3.0) (2020-08-17)


### Features

* add support for `require.context` in any environment ([3995495](https://github.com/wintercounter/mhy/commit/3995495e43c163f6f5c931ab11599a76c7219dee))
* add support for require.context in node ([794b9ce](https://github.com/wintercounter/mhy/commit/794b9ce15c6002d97a833f804fc88ef44873d0a4))
* cleanup ([c054c40](https://github.com/wintercounter/mhy/commit/c054c40f01b08a643468c35eeff17a3c97b58c61))
* tweak requireContext resolver to fix path ([8ee31a4](https://github.com/wintercounter/mhy/commit/8ee31a4bbef966ec815b0994c6608b22da45d731))

### [7.2.1](https://github.com/wintercounter/mhy/compare/v7.2.0...v7.2.1) (2020-08-17)


### Bug Fixes

* **config:** expose mhy config manually to avoid circular dependencies ([3554ef5](https://github.com/wintercounter/mhy/commit/3554ef501569e70eec5711f6a532216b7e653d4f))

## [7.2.0](https://github.com/wintercounter/mhy/compare/v7.1.0...v7.2.0) (2020-08-16)


### Features

* **storybook:** add ability to have custom main file ([e174af4](https://github.com/wintercounter/mhy/commit/e174af4c312c75c85af71a895a644e725a7c359e))
* **storybook:** expose all storybook configuration APIs ([f30f8ec](https://github.com/wintercounter/mhy/commit/f30f8ec37b1b481de0f4d2a59e6933474a766c5b))

## [7.1.0](https://github.com/wintercounter/mhy/compare/v7.0.0...v7.1.0) (2020-08-15)


### Features

* **node:** expose mhy config as global ([1840d7c](https://github.com/wintercounter/mhy/commit/1840d7c73d4957107c56db7b7081af063171ea09))
* **storybook:** general improvements ([2fe578a](https://github.com/wintercounter/mhy/commit/2fe578a505fe033ae1efc619872555a7a82e2028))


### Bug Fixes

* **aASCIIArt:** now it will be shown only to the help page ([72d1ab2](https://github.com/wintercounter/mhy/commit/72d1ab2561de437753654067bc450fd95d5ef795))
* **ASCIIArt:** fix ascii-art, now it will be shown only to the help page ([0422f5b](https://github.com/wintercounter/mhy/commit/0422f5b45f25f230118bb31bdf53752c7df7abd5))

## [7.0.0](https://github.com/wintercounter/mhy/compare/v6.8.4...v7.0.0) (2020-08-07)


### ⚠ BREAKING CHANGES

* **storybook:** from now on please use `storybook.preview.js` and/or `storybook.preview.js` files customize storybook.

### Features

* **storybook:** update to v6.0 ([970d64f](https://github.com/wintercounter/mhy/commit/970d64f50d94001fc1798437675324af50288613))


### Bug Fixes

* **ascii-art:** temporarily remove ([36bf426](https://github.com/wintercounter/mhy/commit/36bf426eddf6e463aa82e0ae8edfc59113d5c787))

### [6.8.6](https://github.com/wintercounter/mhy/compare/v6.8.4...v6.8.6) (2020-08-04)

### [6.8.4](https://github.com/wintercounter/mhy/compare/v6.8.3...v6.8.4) (2020-08-03)


### Bug Fixes

* **storybook:** add env key to storybook documentation ([56f9cb6](https://github.com/wintercounter/mhy/commit/56f9cb6ff9e63a08ab0ad61048e0168525f515f0))

### [6.8.3](https://github.com/wintercounter/mhy/compare/v6.8.1...v6.8.3) (2020-07-24)

### [6.8.2](https://github.com/wintercounter/mhy/compare/v6.8.1...v6.8.2) (2020-07-24)

### [6.8.1](https://github.com/wintercounter/mhy/compare/v6.8.0...v6.8.1) (2020-07-09)

## [6.8.0](https://github.com/wintercounter/mhy/compare/v6.7.3...v6.8.0) (2020-07-09)

### Features

-   sharable githooks powered by Husky ([e86d716](https://github.com/wintercounter/mhy/commit/e86d71610d44849f8e6beeefacd8011ef7790d98))
-   update documentation and mention Husky in tools naming ([c64c6d6](https://github.com/wintercounter/mhy/commit/c64c6d633de115ed1efb03c72942badc569dd4aa))

### Bug Fixes

-   **typo:** `[@core](https://github.com/core)` to `@/core` ([f196e7b](https://github.com/wintercounter/mhy/commit/f196e7b97ee9a759f5729ef2d825f5a192911250))
-   the coe path fixing to make a storybook work from default template ([a8aed00](https://github.com/wintercounter/mhy/commit/a8aed0037aee3ec49dc1c86eca518793f84d2394))

### [6.7.3](https://github.com/wintercounter/mhy/compare/v6.7.2...v6.7.3) (2020-07-07)

### [6.7.2](https://github.com/wintercounter/mhy/compare/v6.7.0...v6.7.2) (2020-07-01)

## [6.7.0](https://github.com/wintercounter/mhy/compare/v6.6.0...v6.7.0) (2020-06-22)

### Features

-   **webpack:** improve chunking ([8592f82](https://github.com/wintercounter/mhy/commit/8592f82591a6037fd8af3a0c8788c42e3bd90dd6))

## [6.6.0](https://github.com/wintercounter/mhy/compare/v6.5.0...v6.6.0) (2020-06-18)

### Features

-   **webpack:** improve chunking ([f5d1043](https://github.com/wintercounter/mhy/commit/f5d1043e0c169346e6db269079df0bf3223b9abc))

## [6.5.0](https://github.com/wintercounter/mhy/compare/v6.4.5...v6.5.0) (2020-06-18)

### Features

-   improve module resolution ([fc7f7fc](https://github.com/wintercounter/mhy/commit/fc7f7fc749040843e791cd3b4af7348f938ae966))
-   **webpack-css:** always allow importing CSS from anywhere ([7184b49](https://github.com/wintercounter/mhy/commit/7184b49c17f7e762c1fe230240cc0d72ddb554e6))

### Bug Fixes

-   **webpack-css:** support string only loaders ([60f26ef](https://github.com/wintercounter/mhy/commit/60f26ef12cefb12801a225bc05dbd71e7054f234))

### [6.4.5](https://github.com/wintercounter/mhy/compare/v6.4.4...v6.4.5) (2020-06-12)

### [6.4.4](https://github.com/wintercounter/mhy/compare/v6.4.3...v6.4.4) (2020-06-11)

### [6.4.3](https://github.com/wintercounter/mhy/compare/v6.4.2...v6.4.3) (2020-06-10)

### [6.4.2](https://github.com/wintercounter/mhy/compare/v6.4.1...v6.4.2) (2020-06-08)

### [6.4.1](https://github.com/wintercounter/mhy/compare/v6.4.0...v6.4.1) (2020-06-08)

### Bug Fixes

-   **babel:** wait for CLI getter to resolve ([fee5486](https://github.com/wintercounter/mhy/commit/fee5486126c93aece9d8ad16d5d4d8010de615a3))

## [6.4.0](https://github.com/wintercounter/mhy/compare/v6.3.0...v6.4.0) (2020-06-07)

### Features

-   **Concurrently:** add new process ([ae78828](https://github.com/wintercounter/mhy/commit/ae78828aea483cc26350045efc403a92f214954b))

### Bug Fixes

-   **storybook:** async config loading ([ec4f7ea](https://github.com/wintercounter/mhy/commit/ec4f7ea47c4e37bd631a19ceeec7474e715910b0))

## [6.3.0](https://github.com/wintercounter/mhy/compare/v6.2.0...v6.3.0) (2020-06-06)

### Features

-   **Docker:** update to Node 14 ([bfeec57](https://github.com/wintercounter/mhy/commit/bfeec5701a408dbdabba91dec0146f0c6389240d))
-   add support for async config loading ([40797d2](https://github.com/wintercounter/mhy/commit/40797d26a0930ae0653c86e0b805ad685dedc105))

## [6.2.0](https://github.com/wintercounter/mhy/compare/v6.1.3...v6.2.0) (2020-06-02)

### Features

-   **apollo:** add v3 dependencies ([a5f961a](https://github.com/wintercounter/mhy/commit/a5f961aa257e26c1b4915fb9b497a46cab784a80))
-   update Apollo v3 related dependencies ([7c3edff](https://github.com/wintercounter/mhy/commit/7c3edff461542582d625067d651fa0e2872a0191))

### Bug Fixes

-   disable `react/jsx-pascal-case` until issues fixed around it ([1fc11f8](https://github.com/wintercounter/mhy/commit/1fc11f8fb591fe72e13749997f826a24dc853774))

### [6.1.3](https://github.com/wintercounter/mhy/compare/v6.1.2...v6.1.3) (2020-05-16)

### Bug Fixes

-   disable `react/jsx-pascal-case` until issues fixed around it ([1fc11f8](https://github.com/wintercounter/mhy/commit/1fc11f8fb591fe72e13749997f826a24dc853774))

### [6.1.2](https://github.com/wintercounter/mhy/compare/v6.1.1...v6.1.2) (2020-05-15)

### [6.1.1](https://github.com/wintercounter/mhy/compare/v6.1.0...v6.1.1) (2020-05-15)

### Bug Fixes

-   **eslint:** use correct extension for 'react/jsx-filename-extension' ([3897ede](https://github.com/wintercounter/mhy/commit/3897ede12a44d6111a9e988c24c4c021a5a8b5c2))

## [6.1.0](https://github.com/wintercounter/mhy/compare/v6.0.3...v6.1.0) (2020-05-11)

### Features

-   **alias:** add `mhy_modules` to be able to reference mhy's node_modules folder ([1e719e9](https://github.com/wintercounter/mhy/commit/1e719e97cd8458a612ee2edf810c0aeb48b16d82))

### [6.0.3](https://github.com/wintercounter/mhy/compare/v6.0.2...v6.0.3) (2020-05-04)

### [6.0.2](https://github.com/wintercounter/mhy/compare/v6.0.1...v6.0.2) (2020-04-17)

### [6.0.1](https://github.com/wintercounter/mhy/compare/v6.0.0...v6.0.1) (2020-04-09)

## [6.0.0](https://github.com/wintercounter/mhy/compare/v4.2.0...v6.0.0) (2020-04-08)

### ⚠ BREAKING CHANGES

-   **dependencies:** This update contains the following packages with new major version:


*   prettier
*   graphql
*   react-popper
*   react-use

### Features

-   **prettier:** add `arrowParens: 'avoid'` to mimic 1.x functionality. Please update your `.prettierrc` before running prettier! ([929d7e7](https://github.com/wintercounter/mhy/commit/929d7e72bcac9d155ead7ab3cb78ad5c12257542))
-   **storybook:** add support for storybook setup files to make sure they are loaded first ([aa69568](https://github.com/wintercounter/mhy/commit/aa695687a1c6a26567f2edb065d7484a14568e5d))

*   **dependencies:** update 08/04/2020 ([d41fb6a](https://github.com/wintercounter/mhy/commit/d41fb6af8ee53344d4528f1dcbef4f3b416fbd95))

## [5.0.0](https://github.com/wintercounter/mhy/compare/v4.2.0...v5.0.0) (2020-04-08)

### ⚠ BREAKING CHANGES

-   **dependencies:** This update contains the following packages with new major version:

*   prettier
*   graphql
*   react-popper
*   react-use

### Features

-   **prettier:** add `arrowParens: 'avoid'` to mimic 1.x functionality. Please update your `.prettierrc` before running prettier! ([929d7e7](https://github.com/wintercounter/mhy/commit/929d7e72bcac9d155ead7ab3cb78ad5c12257542))
-   **storybook:** add support for storybook setup files to make sure they are loaded first ([aa69568](https://github.com/wintercounter/mhy/commit/aa695687a1c6a26567f2edb065d7484a14568e5d))

*   **dependencies:** update 08/04/2020 ([d41fb6a](https://github.com/wintercounter/mhy/commit/d41fb6af8ee53344d4528f1dcbef4f3b416fbd95))

## [4.2.0](https://github.com/wintercounter/mhy/compare/v4.1.11...v4.2.0) (2020-03-27)

### Features

-   **storybook:** add support for storybook setup files to make sure they are loaded first ([aa69568](https://github.com/wintercounter/mhy/commit/aa695687a1c6a26567f2edb065d7484a14568e5d))

### [4.1.11](https://github.com/wintercounter/mhy/compare/v4.1.10...v4.1.11) (2020-03-25)

### [4.1.10](https://github.com/wintercounter/mhy/compare/v4.1.8...v4.1.10) (2020-03-22)

### [4.1.8](https://github.com/wintercounter/mhy/compare/v4.1.5...v4.1.8) (2020-03-18)

### [4.1.5](https://github.com/wintercounter/mhy/compare/v4.1.4...v4.1.5) (2020-03-17)

-   **dependencies:** update 18/03/20

### [4.1.4](https://github.com/wintercounter/mhy/compare/v4.1.3...v4.1.4) (2020-03-02)

### [4.1.3](https://github.com/wintercounter/mhy/compare/v4.1.2...v4.1.3) (2020-02-29)

### [4.1.2](https://github.com/wintercounter/mhy/compare/v4.1.1...v4.1.2) (2020-02-29)

### Bug Fixes

-   wrong path ([f720de9](https://github.com/wintercounter/mhy/commit/f720de98facce202416acb9ea9a58e2e2bb2d690))

### [4.1.1](https://github.com/wintercounter/mhy/compare/v5.0.0...v4.1.1) (2020-02-29)

## [4.1.0](https://github.com/wintercounter/mhy/compare/v4.0.0...v4.1.0) (2020-02-25)

### Features

-   **babel:** add support for top-level await ([21c85b2](https://github.com/wintercounter/mhy/commit/21c85b2d6ffdb2a98e80dcae05704be9e73ec467))

## [4.0.0](https://github.com/wintercounter/mhy/compare/v3.0.0...v4.0.0) (2020-02-24)

### ⚠ BREAKING CHANGES

-   **css-loader:** This change will mimic the same logic what CRA follows. Files ending with `module.(s)css` will be treated as CSS Module, everything else is global. This change will help to maintain better compatibility with 3rd party resources.

### Features

-   **config:** add support for `-p, --path` to be able to print out a certain path only ([f4ab985](https://github.com/wintercounter/mhy/commit/f4ab985db82910b93778304e0a91240eb490f690))
-   **css-loader:** switch logic - `.module` instead of `.global` ([09f7af2](https://github.com/wintercounter/mhy/commit/09f7af2a15d9bf26091b1d78b85d398ef9d6e0ac))

### Bug Fixes

-   **mhy-env:** secondary environment not being passed to sub processes ([57c8cca](https://github.com/wintercounter/mhy/commit/57c8cca8774ecd420bbb24e8034b8dd5f4964e3f))

*   **dependencies:** update 19/02/20 ([9bd8abe](https://github.com/wintercounter/mhy/commit/9bd8abe9c99d00b119a610409514a09f4d537ef3))

## [3.0.0](https://github.com/wintercounter/mhy/compare/v2.18.11...v3.0.0) (2020-02-19)

### ⚠ BREAKING CHANGES

-   **dependencies:** many dependencies have been updated to a new major version so we're releasing this change as a breaking change also.

Updated packages with major version:

-   jest
-   jest-cli
-   babel-jest
-   cross-env
-   downshift
-   http-proxy-middleware
-   react-use-gesture
-   url-search-params-polyfill

### Features

-   **eslint:** remove eslint checking from dev builds ([434bc77](https://github.com/wintercounter/mhy/commit/434bc774e759f8567464fea939fedb824a10192a))
-   **sw:** remove workbox support ([a4963a1](https://github.com/wintercounter/mhy/commit/a4963a1594e27b03bbbbaafddb3b302dfe9eb70c))
-   added `[@cryptic-css](https://github.com/cryptic-css)` and `flickity` ([0a6a3ce](https://github.com/wintercounter/mhy/commit/0a6a3ceb200c86dd69a47d18bab7ed6c24b96636))
-   updated packages ([b9aeac7](https://github.com/wintercounter/mhy/commit/b9aeac770d354c15a955eaf9ae7c44f0227f9b00))

### Bug Fixes

-   **mhy-env:** secondary environment not being passed to sub processes ([57c8cca](https://github.com/wintercounter/mhy/commit/57c8cca8774ecd420bbb24e8034b8dd5f4964e3f))

*   **dependencies:** update 19/02/20 ([9bd8abe](https://github.com/wintercounter/mhy/commit/9bd8abe9c99d00b119a610409514a09f4d537ef3))

## [2.20.0](https://github.com/wintercounter/mhy/compare/v2.19.0...v2.20.0) (2020-02-11)

### Features

-   added `[@cryptic-css](https://github.com/cryptic-css)` and `flickity` ([0a6a3ce](https://github.com/wintercounter/mhy/commit/0a6a3ceb200c86dd69a47d18bab7ed6c24b96636))

## [2.19.0](https://github.com/wintercounter/mhy/compare/v2.18.11...v2.19.0) (2020-01-20)

### Features

-   updated packages ([b9aeac7](https://github.com/wintercounter/mhy/commit/b9aeac770d354c15a955eaf9ae7c44f0227f9b00))

### [2.18.11](https://github.com/wintercounter/mhy/compare/v2.18.10...v2.18.11) (2020-01-10)

### [2.18.10](https://github.com/wintercounter/mhy/compare/v2.18.9...v2.18.10) (2019-12-17)

### [2.18.9](https://github.com/wintercounter/mhy/compare/v2.18.4...v2.18.9) (2019-12-10)

### [2.18.4](https://github.com/wintercounter/mhy/compare/v2.18.3...v2.18.4) (2019-12-02)

### [2.18.3](https://github.com/wintercounter/mhy/compare/v2.18.2...v2.18.3) (2019-11-18)

### [2.18.2](https://github.com/wintercounter/mhy/compare/v2.18.1...v2.18.2) (2019-11-12)

### [2.18.1](https://github.com/wintercounter/mhy/compare/v2.18.0...v2.18.1) (2019-11-12)

## [2.18.0](https://github.com/wintercounter/mhy/compare/v2.17.0...v2.18.0) (2019-11-07)

### Bug Fixes

-   **tsconfig:** define `exclude` to make sure checking is running correctly ([6e4901b](https://github.com/wintercounter/mhy/commit/6e4901b))
-   typo ([8bdf642](https://github.com/wintercounter/mhy/commit/8bdf642))

### Features

-   **webpack:** better `splitChunk` options for production ([9a13acf](https://github.com/wintercounter/mhy/commit/9a13acf))
-   add support for `optional-chaining` and `nullish-coalescing-operator` ([08b96ee](https://github.com/wintercounter/mhy/commit/08b96ee))

## [2.17.0](https://github.com/wintercounter/mhy/compare/v2.16.1...v2.17.0) (2019-10-23)

### Features

-   **eslint:** remove TS version warning ([bab3b31](https://github.com/wintercounter/mhy/commit/bab3b31))
-   **eslint:** v6 support ([af273e1](https://github.com/wintercounter/mhy/commit/af273e1))

### [2.16.1](https://github.com/wintercounter/mhy/compare/v2.15.4...v2.16.1) (2019-10-16)

### Bug Fixes

-   **webpack-bundle-analyzer:** prevent corrupted `stats.json` creation ([dfda7fd](https://github.com/wintercounter/mhy/commit/dfda7fd))

### [2.15.4](https://github.com/wintercounter/mhy/compare/v2.15.3...v2.15.4) (2019-09-16)

### Bug Fixes

-   **babel-plugin-macros:** use temporary custom fork until issues get fixed ([a5d820b](https://github.com/wintercounter/mhy/commit/a5d820b))

### [2.15.3](https://github.com/wintercounter/mhy/compare/v2.15.2...v2.15.3) (2019-09-16)

### Bug Fixes

-   wrong css loader option key on prod builds ([ad589d0](https://github.com/wintercounter/mhy/commit/ad589d0))

### [2.15.2](https://github.com/wintercounter/mhy/compare/v2.15.1...v2.15.2) (2019-09-12)

### Bug Fixes

-   **s-c:** update jest tool ([14737de](https://github.com/wintercounter/mhy/commit/14737de))

### [2.15.1](https://github.com/wintercounter/mhy/compare/v2.15.0...v2.15.1) (2019-09-11)

### Bug Fixes

-   **sass-loader:** move `sourceMap` option to the correct place ([a40388d](https://github.com/wintercounter/mhy/commit/a40388d))

## [2.15.0](https://github.com/wintercounter/mhy/compare/v2.14.0...v2.15.0) (2019-09-11)

### Bug Fixes

-   **--mhy-if:** empty command should not run ([31f8300](https://github.com/wintercounter/mhy/commit/31f8300))
-   **babel-plugin-macro:** only apply patch if it wasn't patched before ([783f7af](https://github.com/wintercounter/mhy/commit/783f7af))

### Features

-   `--mhy-if` flag ([e12a4cd](https://github.com/wintercounter/mhy/commit/e12a4cd))
-   add support for secondary environments ([25bf828](https://github.com/wintercounter/mhy/commit/25bf828))

## [2.14.0](https://github.com/wintercounter/mhy/compare/v2.13.0...v2.14.0) (2019-08-23)

### Features

-   introduce new dependencies (emotion, final-form, reach-router) ([0e20e11](https://github.com/wintercounter/mhy/commit/0e20e11))

## [2.13.0](https://github.com/wintercounter/mhy/compare/v2.12.0...v2.13.0) (2019-08-22)

### Bug Fixes

-   **dep:** handle the case when `dependencies` does not exists in `package.json` ([d26fafb](https://github.com/wintercounter/mhy/commit/d26fafb))

### Features

-   **dep:** add `deps` alias ([5572492](https://github.com/wintercounter/mhy/commit/5572492))

## [2.12.0](https://github.com/wintercounter/mhy/compare/v2.11.1...v2.12.0) (2019-08-21)

### Features

-   **dep:** introduce new dependency management tool ([b7b54fd](https://github.com/wintercounter/mhy/commit/b7b54fd))

### [2.11.1](https://github.com/wintercounter/mhy/compare/v2.11.0...v2.11.1) (2019-08-20)

### Bug Fixes

-   **eslint:** specify exact react version in settings ([9945ddf](https://github.com/wintercounter/mhy/commit/9945ddf))

## [2.11.0](https://github.com/wintercounter/mhy/compare/v2.10.0...v2.11.0) (2019-08-20)

### Features

-   **eslint:** revert back to v5 for now, but keep updated plugins where possible ([6ef8961](https://github.com/wintercounter/mhy/commit/6ef8961))

## [2.10.0](https://github.com/wintercounter/mhy/compare/v2.9.0...v2.10.0) (2019-08-19)

### Bug Fixes

-   **eslint:** glob pattern ignoring files in root folder ([aa95da8](https://github.com/wintercounter/mhy/commit/aa95da8))
-   **gitignore:** wrong `tsbuildinfo` pattern ([724c14e](https://github.com/wintercounter/mhy/commit/724c14e))

### Features

-   **eslint:** add support for latest ESLint v6 ([e84af1f](https://github.com/wintercounter/mhy/commit/e84af1f))
-   add `@w11r/use-breakpoint` ([39bc536](https://github.com/wintercounter/mhy/commit/39bc536))

## [2.9.0](https://github.com/wintercounter/mhy/compare/v2.8.0...v2.9.0) (2019-08-07)

### Bug Fixes

-   **node:** remove the removal of regenerator, we don't have it anymore ([a0bd86e](https://github.com/wintercounter/mhy/commit/a0bd86e))

### Features

-   **babel:** add temporary solution to be able to load macros outside `process.cwd()`; see: https://github.com/kentcdodds/babel-plugin-macros/issues/87 ([873cef3](https://github.com/wintercounter/mhy/commit/873cef3))
-   **node:** remove `--mhy-script` args to not to be passed to argument validation of sub-processes ([f05c0e3](https://github.com/wintercounter/mhy/commit/f05c0e3))

## [2.8.0](https://github.com/wintercounter/mhy/compare/v2.7.1...v2.8.0) (2019-08-07)

### Features

-   **tsc:** add support for auto path (alias) replacement for generated files ([534b093](https://github.com/wintercounter/mhy/commit/534b093))

### [2.7.1](https://github.com/wintercounter/mhy/compare/v2.7.0...v2.7.1) (2019-08-07)

## [2.7.0](https://github.com/wintercounter/mhy/compare/v2.6.2...v2.7.0) (2019-08-06)

### Features

-   add `apollo-link-state` ([e1377a1](https://github.com/wintercounter/mhy/commit/e1377a1))

### [2.6.2](https://github.com/wintercounter/mhy/compare/v2.6.1...v2.6.2) (2019-08-06)

### Bug Fixes

-   **babel:** copy filter ([53d3e11](https://github.com/wintercounter/mhy/commit/53d3e11))

### [2.6.1](https://github.com/wintercounter/mhy/compare/v2.6.0...v2.6.1) (2019-07-31)

### Bug Fixes

-   **webpack:** wrong terser plugin config ([ab23d8b](https://github.com/wintercounter/mhy/commit/ab23d8b))

## [2.6.0](https://github.com/wintercounter/mhy/compare/v2.5.0...v2.6.0) (2019-07-31)

### Features

-   **webpack:** use Terser plugin for minification ([2d0e5a4](https://github.com/wintercounter/mhy/commit/2d0e5a4))

## [2.5.0](https://github.com/wintercounter/mhy/compare/v2.4.0...v2.5.0) (2019-07-30)

### Features

-   **deps:** add `@apollo/react-hooks` ([086077c](https://github.com/wintercounter/mhy/commit/086077c))
-   **standard-version:** add new process ([9d4f010](https://github.com/wintercounter/mhy/commit/9d4f010))

## [2.4.0](https://github.com/wintercounter/mhy/compare/v2.3.0...v2.4.0) (2019-07-23)

### Features

-   **webpack:** add .mjs support from loaders ([d32ec91](https://github.com/wintercounter/mhy/commit/d32ec91))

## [2.3.0](https://github.com/wintercounter/mhy/compare/v2.2.5...v2.3.0) (2019-07-22)

### Features

-   **babel:** make babel process available as root ([78225ca](https://github.com/wintercounter/mhy/commit/78225ca))

### [2.2.5](https://github.com/wintercounter/mhy/compare/v2.2.4...v2.2.5) (2019-07-22)

### Bug Fixes

-   **template/express/default-ts:** correct structure ([49bfed8](https://github.com/wintercounter/mhy/commit/49bfed8))
-   **template/react/default-ts:** correct structure ([38d850f](https://github.com/wintercounter/mhy/commit/38d850f))

### [2.2.4](https://github.com/wintercounter/mhy/compare/v2.2.3...v2.2.4) (2019-07-15)

### Bug Fixes

-   add missing core-js dep ([e96ddaf](https://github.com/wintercounter/mhy/commit/e96ddaf))

### [2.2.3](https://github.com/wintercounter/mhy/compare/v2.2.2...v2.2.3) (2019-07-12)

### Bug Fixes

-   **storybook:** reference error ([5bbbd1c](https://github.com/wintercounter/mhy/commit/5bbbd1c))

### [2.2.2](https://github.com/wintercounter/mhy/compare/v2.2.1...v2.2.2) (2019-07-12)

### Bug Fixes

-   **storybook:** transpile css from the outside as well ([85cc1a9](https://github.com/wintercounter/mhy/commit/85cc1a9))

### [2.2.1](https://github.com/wintercounter/mhy/compare/v2.2.0...v2.2.1) (2019-07-12)

### Bug Fixes

-   **storybook:** only remove eslint rules if found ([8bbfcff](https://github.com/wintercounter/mhy/commit/8bbfcff))

## [2.2.0](https://github.com/wintercounter/mhy/compare/v2.1.3...v2.2.0) (2019-07-11)

### Features

-   **storybook:** general improvements ([2b842df](https://github.com/wintercounter/mhy/commit/2b842df))

### [2.1.3](https://github.com/wintercounter/mhy/compare/v2.1.2...v2.1.3) (2019-07-10)

### Bug Fixes

-   unfreeze react-hot-loader version ([456f2f2](https://github.com/wintercounter/mhy/commit/456f2f2))

### [2.1.2](https://github.com/wintercounter/mhy/compare/v2.1.1...v2.1.2) (2019-07-10)

### Bug Fixes

-   freeze react-hot-loader version temporarily ([4a37e08](https://github.com/wintercounter/mhy/commit/4a37e08))

### [2.1.1](https://github.com/wintercounter/mhy/compare/v2.1.0...v2.1.1) (2019-07-10)

## [2.1.0](https://github.com/wintercounter/mhy/compare/v2.0.0...v2.1.0) (2019-07-09)

### Features

-   **hmr:** make hmr available also in prod mode ([5b1d37a](https://github.com/wintercounter/mhy/commit/5b1d37a))

## [2.0.0](https://github.com/wintercounter/mhy/compare/v1.24.0...v2.0.0) (2019-07-09)

### Bug Fixes

-   **eslint:** revert back to 5.0 temporarily ([e4dba1e](https://github.com/wintercounter/mhy/commit/e4dba1e))
-   handle multiple `src` folder in path correctly ([a039c66](https://github.com/wintercounter/mhy/commit/a039c66))

### Features

-   **eslint:** update to latest ([35bccb7](https://github.com/wintercounter/mhy/commit/35bccb7))
-   **wds:** add progress display ([fd3fac2](https://github.com/wintercounter/mhy/commit/fd3fac2))
-   drop IE11 support ([1eda464](https://github.com/wintercounter/mhy/commit/1eda464))

### BREAKING CHANGES

-   -   Removed `vendor.js` generation form Webpack. This also removes URLSearchParams, Fetch and FormData polyfills.

*   Removed `babel-polyfill` completely as it's deprecated. Please include the necessary polyfills on your own from `core-js`.
*   Removed `@babel/plugin-transform-regenerator`, native async/await is supported. Add back manually in case you need it.

## [1.24.0](https://github.com/wintercounter/mhy/compare/v1.23.3...v1.24.0) (2019-06-20)

### Features

-   **graphql:** add new toys 20/06/19 ([d161603](https://github.com/wintercounter/mhy/commit/d161603))

### [1.23.3](https://github.com/wintercounter/mhy/compare/v1.23.2...v1.23.3) (2019-06-20)

### [1.23.2](https://github.com/wintercounter/mhy/compare/v1.23.1...v1.23.2) (2019-06-20)

### [1.23.1](https://github.com/wintercounter/mhy/compare/v1.23.0...v1.23.1) (2019-06-19)

### Bug Fixes

-   **css-loader:** not exporting both style of CSS variable names ([d09042a](https://github.com/wintercounter/mhy/commit/d09042a))

## [1.23.0](https://github.com/wintercounter/mhy/compare/v1.22.12...v1.23.0) (2019-06-19)

### Features

-   **dependency:** add `cookie` package ([506fe73](https://github.com/wintercounter/mhy/commit/506fe73))

### [1.22.12](https://github.com/wintercounter/mhy/compare/v1.22.10...v1.22.12) (2019-06-19)

### Bug Fixes

-   **docker:** failing install ([f2b8866](https://github.com/wintercounter/mhy/commit/f2b8866))
-   **docker:** failing install ([36dc06c](https://github.com/wintercounter/mhy/commit/36dc06c))

### [1.22.10](https://github.com/wintercounter/mhy/compare/v1.22.9...v1.22.10) (2019-06-18)

### [1.22.9](https://github.com/wintercounter/mhy/compare/v1.22.8...v1.22.9) (2019-06-18)

### [1.22.8](https://github.com/wintercounter/mhy/compare/v1.22.7...v1.22.8) (2019-05-31)

### [1.22.7](https://github.com/wintercounter/mhy/compare/v1.22.6...v1.22.7) (2019-05-31)

### [1.22.6](https://github.com/wintercounter/mhy/compare/v1.22.3...v1.22.6) (2019-05-15)

### Bug Fixes

-   **babel:** overwriting dist files ([242b7e3](https://github.com/wintercounter/mhy/commit/242b7e3))
-   **babel:** overwriting dist files ([835bbbe](https://github.com/wintercounter/mhy/commit/835bbbe))
-   **babel:** overwriting dist files ([55c3c15](https://github.com/wintercounter/mhy/commit/55c3c15))
-   **webapack eslint:** remove caching as it's having more issues than benefits ([de3dda0](https://github.com/wintercounter/mhy/commit/de3dda0))

### [1.22.3](https://github.com/wintercounter/mhy/compare/v1.22.2...v1.22.3) (2019-05-08)

### [1.22.2](https://github.com/wintercounter/mhy/compare/v1.22.1...v1.22.2) (2019-05-08)

### Bug Fixes

-   **babel:** overwriting dist files ([c9cf0fe](https://github.com/wintercounter/mhy/commit/c9cf0fe))

### [1.22.1](https://github.com/wintercounter/mhy/compare/v1.22.0...v1.22.1) (2019-05-08)

## [1.22.0](https://github.com/wintercounter/mhy/compare/v1.21.5...v1.22.0) (2019-05-06)

### Bug Fixes

-   **ci:** node version to be able to compile old `leveldown` dependency ([0111a8f](https://github.com/wintercounter/mhy/commit/0111a8f))
-   **template:** wrong import ([1b638f9](https://github.com/wintercounter/mhy/commit/1b638f9))

### Features

-   **webpack-bundle-analyzer:** add new process ([a3af5f6](https://github.com/wintercounter/mhy/commit/a3af5f6))

<a name="1.21.5"></a>

## [1.21.5](https://github.com/wintercounter/mhy/compare/v1.21.4...v1.21.5) (2019-05-02)

<a name="1.21.4"></a>

## [1.21.4](https://github.com/wintercounter/mhy/compare/v1.21.3...v1.21.4) (2019-04-18)

### Bug Fixes

-   **docker:** include `git` inside container ([bfb15cf](https://github.com/wintercounter/mhy/commit/bfb15cf))

<a name="1.21.3"></a>

## [1.21.3](https://github.com/wintercounter/mhy/compare/v1.21.2...v1.21.3) (2019-04-17)

### Bug Fixes

-   **docker:** `ps` does not exists on slim container ([b62eecc](https://github.com/wintercounter/mhy/commit/b62eecc))

<a name="1.21.2"></a>

## [1.21.2](https://github.com/wintercounter/mhy/compare/v1.21.1...v1.21.2) (2019-04-16)

<a name="1.21.1"></a>

## [1.21.1](https://github.com/wintercounter/mhy/compare/v1.21.0...v1.21.1) (2019-04-12)

### Bug Fixes

-   **docker:** add missing python ([b11a4b3](https://github.com/wintercounter/mhy/commit/b11a4b3))

<a name="1.21.0"></a>

# [1.21.0](https://github.com/wintercounter/mhy/compare/v1.20.0...v1.21.0) (2019-04-12)

### Bug Fixes

-   **webpack/eslint:** wrong value placement ([0bff53e](https://github.com/wintercounter/mhy/commit/0bff53e))

### Features

-   **docker:** use latest node version with slim image ([9fd0e26](https://github.com/wintercounter/mhy/commit/9fd0e26))

<a name="1.20.0"></a>

# [1.20.0](https://github.com/wintercounter/mhy/compare/v1.19.0...v1.20.0) (2019-04-12)

### Features

-   **typescript:** extend declarations for more non-js module types ([fbe4459](https://github.com/wintercounter/mhy/commit/fbe4459))

<a name="1.19.0"></a>

# [1.19.0](https://github.com/wintercounter/mhy/compare/v1.18.3...v1.19.0) (2019-04-12)

### Features

-   **ignore:** add `.tsbuildinfo` ([a8b6166](https://github.com/wintercounter/mhy/commit/a8b6166))
-   **ignore:** ignore should not run only for / ([742f0f1](https://github.com/wintercounter/mhy/commit/742f0f1))
-   **typescript:** enable incremental caching to speed up cold runs ([f81d844](https://github.com/wintercounter/mhy/commit/f81d844))
-   **webpack:** use `raw-loader` for files with `*.raw.*` name ([a2b074c](https://github.com/wintercounter/mhy/commit/a2b074c))
-   **webpack/eslint:** enable caching for faster first build ([9ec96a5](https://github.com/wintercounter/mhy/commit/9ec96a5))

<a name="1.18.3"></a>

## [1.18.3](https://github.com/wintercounter/mhy/compare/v1.18.2...v1.18.3) (2019-04-10)

<a name="1.18.2"></a>

## [1.18.2](https://github.com/wintercounter/mhy/compare/v1.18.1...v1.18.2) (2019-04-07)

<a name="1.18.1"></a>

## [1.18.1](https://github.com/wintercounter/mhy/compare/v1.18.0...v1.18.1) (2019-04-05)

### Bug Fixes

-   **nodemon:** exec `mhy node` directly instead ([8f474a6](https://github.com/wintercounter/mhy/commit/8f474a6))

<a name="1.18.0"></a>

# [1.18.0](https://github.com/wintercounter/mhy/compare/v1.17.0...v1.18.0) (2019-04-05)

### Features

-   **nodemon:** add support - new process ([ab07b06](https://github.com/wintercounter/mhy/commit/ab07b06))
-   **webpack:** extend `watchOptions.ignore` with additional patterns as an array ([560df50](https://github.com/wintercounter/mhy/commit/560df50))
-   **webpack-dev-server:** make `devServer.watchOptions` to inherit `webpack.watchOptions` ([1c4e801](https://github.com/wintercounter/mhy/commit/1c4e801))

<a name="1.17.0"></a>

# [1.17.0](https://github.com/wintercounter/mhy/compare/v1.16.0...v1.17.0) (2019-04-02)

### Features

-   **babel+node:** apply same alias resolving mechanism ([eb9adce](https://github.com/wintercounter/mhy/commit/eb9adce))

<a name="1.16.0"></a>

# [1.16.0](https://github.com/wintercounter/mhy/compare/v1.15.0...v1.16.0) (2019-04-02)

### Features

-   **ts+webpack:** apply same alias resolving mechanism ([70e6dfd](https://github.com/wintercounter/mhy/commit/70e6dfd))
-   **webpack:** make alias resolve more reliable ([300e2de](https://github.com/wintercounter/mhy/commit/300e2de))

<a name="1.15.0"></a>

# [1.15.0](https://github.com/wintercounter/mhy/compare/v1.14.1...v1.15.0) (2019-04-02)

### Features

-   **typescript:** make alias resolve more reliable ([944662d](https://github.com/wintercounter/mhy/commit/944662d))

<a name="1.14.1"></a>

## [1.14.1](https://github.com/wintercounter/mhy/compare/v1.14.0...v1.14.1) (2019-03-26)

### Bug Fixes

-   **webpack-eslint:** only set options for prod if rule exists ([71f883e](https://github.com/wintercounter/mhy/commit/71f883e))

<a name="1.14.0"></a>

# [1.14.0](https://github.com/wintercounter/mhy/compare/v1.13.0...v1.14.0) (2019-03-25)

### Features

-   add support for `express-http-proxy` ([2823ecd](https://github.com/wintercounter/mhy/commit/2823ecd))

<a name="1.13.0"></a>

# [1.13.0](https://github.com/wintercounter/mhy/compare/v1.12.0...v1.13.0) (2019-03-25)

### Bug Fixes

-   **storybook:** eslint removal ([766f37e](https://github.com/wintercounter/mhy/commit/766f37e))
-   **wds:** remove hot loader warning message ([2ef67c6](https://github.com/wintercounter/mhy/commit/2ef67c6))

### Features

-   add `socket.io` ([8974485](https://github.com/wintercounter/mhy/commit/8974485))
-   add `use-react-router` ([80a7b5e](https://github.com/wintercounter/mhy/commit/80a7b5e))
-   module resolution for absolutely linked config files ([f87fc9c](https://github.com/wintercounter/mhy/commit/f87fc9c))
-   **storybook:** place panel on the right by default ([73a2d2b](https://github.com/wintercounter/mhy/commit/73a2d2b))

### Performance Improvements

-   **storybook:** improve performance by removing eslint check ([1c4a87a](https://github.com/wintercounter/mhy/commit/1c4a87a))

<a name="1.12.0"></a>

# [1.12.0](https://github.com/wintercounter/mhy/compare/v1.11.1...v1.12.0) (2019-03-15)

### Bug Fixes

-   **node:** remove regenerator plugin ([57b96f2](https://github.com/wintercounter/mhy/commit/57b96f2))
-   **webpack:** `publicPath` for manifest files ([6b5952c](https://github.com/wintercounter/mhy/commit/6b5952c))

### Features

-   introduce new supported dependencies ([a746b48](https://github.com/wintercounter/mhy/commit/a746b48))
-   **debug:** add support for `SpeedMeasurePlugin` for `Webpack` behind the `--mhy-debug` flag ([aa36c4e](https://github.com/wintercounter/mhy/commit/aa36c4e))
-   **packages:** add `node-fetch` ([2eb6359](https://github.com/wintercounter/mhy/commit/2eb6359))
-   **packages:** add `node-gzip` ([15c176d](https://github.com/wintercounter/mhy/commit/15c176d))
-   **storybook:** support static building of standalone storybooks `sb-build` ([aa0e8ef](https://github.com/wintercounter/mhy/commit/aa0e8ef))
-   **wds:** disable dot rule ([0dc8517](https://github.com/wintercounter/mhy/commit/0dc8517))

<a name="1.11.1"></a>

## [1.11.1](https://github.com/wintercounter/mhy/compare/v1.11.0...v1.11.1) (2019-03-07)

<a name="1.11.0"></a>

# [1.11.0](https://github.com/wintercounter/mhy/compare/v1.10.1...v1.11.0) (2019-03-06)

### Features

-   **dependencies:** add PouchDB to the supported tools ([493132a](https://github.com/wintercounter/mhy/commit/493132a))
-   **node:** add support for custom entry points ([93b8601](https://github.com/wintercounter/mhy/commit/93b8601))
-   **process:** add `node` process with out-of-the-box TS/ES7/Alias support ([403e542](https://github.com/wintercounter/mhy/commit/403e542))
-   **template:** add `default-ts` version of `express` ([e3ca919](https://github.com/wintercounter/mhy/commit/e3ca919))
-   **template:** add `default-ts` version of `react/default` ([e201f37](https://github.com/wintercounter/mhy/commit/e201f37))

### Performance Improvements

-   **typescript:** improve performance with skipping unnecessary lib checks ([ec967c9](https://github.com/wintercounter/mhy/commit/ec967c9))

<a name="1.10.1"></a>

## [1.10.1](https://github.com/wintercounter/mhy/compare/v1.10.0...v1.10.1) (2019-02-26)

### Bug Fixes

-   **eslint:** add missing `react-hooks` plugin definition ([aead64c](https://github.com/wintercounter/mhy/commit/aead64c))

<a name="1.10.0"></a>

# [1.10.0](https://github.com/wintercounter/mhy/compare/v1.9.111...v1.10.0) (2019-02-25)

### Features

-   **eslint:** add `"react-hooks/rules-of-hooks": "error"` ([7eb6b2d](https://github.com/wintercounter/mhy/commit/7eb6b2d))

<a name="1.9.11"></a>

## [1.9.11](https://github.com/wintercounter/mhy/compare/v1.9.10...v1.9.11) (2019-02-22)

### Bug Fixes

-   **config:** handle unsupported clearLine ([cd17dd7](https://github.com/wintercounter/mhy/commit/cd17dd7))

<a name="1.9.10"></a>

## [1.9.10](https://github.com/wintercounter/mhy/compare/v1.9.9...v1.9.10) (2019-02-22)

### Bug Fixes

-   **eslint:** always re-create config file ([7ab6603](https://github.com/wintercounter/mhy/commit/7ab6603))

<a name="1.9.9"></a>

## [1.9.9](https://github.com/wintercounter/mhy/compare/v1.9.8...v1.9.9) (2019-02-22)

<a name="1.9.8"></a>

## [1.9.8](https://github.com/wintercounter/mhy/compare/v1.9.7...v1.9.8) (2019-02-22)

### Bug Fixes

-   force build with last stable version ([1ef87dc](https://github.com/wintercounter/mhy/commit/1ef87dc))
-   force build with new stable version ([a4a8b92](https://github.com/wintercounter/mhy/commit/a4a8b92))

<a name="1.9.7"></a>

## [1.9.7](https://github.com/wintercounter/mhy/compare/v1.9.6...v1.9.7) (2019-02-22)

### Bug Fixes

-   wrong import format ([6cc7ec6](https://github.com/wintercounter/mhy/commit/6cc7ec6))

<a name="1.9.6"></a>

## [1.9.6](https://github.com/wintercounter/mhy/compare/v1.9.5...v1.9.6) (2019-02-22)

### Bug Fixes

-   constant placements [#4](https://github.com/wintercounter/mhy/issues/4) ([0267eb9](https://github.com/wintercounter/mhy/commit/0267eb9))
-   force build with last stable version ([8c1a9c5](https://github.com/wintercounter/mhy/commit/8c1a9c5))
-   force build with new stable version ([87af028](https://github.com/wintercounter/mhy/commit/87af028))

<a name="1.9.5"></a>

## [1.9.5](https://github.com/wintercounter/mhy/compare/v1.9.4...v1.9.5) (2019-02-22)

### Bug Fixes

-   constant placements [#4](https://github.com/wintercounter/mhy/issues/4) ([331f56c](https://github.com/wintercounter/mhy/commit/331f56c))

<a name="1.9.4"></a>

## [1.9.4](https://github.com/wintercounter/mhy/compare/v1.9.3...v1.9.4) (2019-02-22)

### Bug Fixes

-   constant placements [#3](https://github.com/wintercounter/mhy/issues/3) ([df9b394](https://github.com/wintercounter/mhy/commit/df9b394))

<a name="1.9.3"></a>

## [1.9.3](https://github.com/wintercounter/mhy/compare/v1.9.2...v1.9.3) (2019-02-22)

### Bug Fixes

-   constant placements [#2](https://github.com/wintercounter/mhy/issues/2) ([4e4383f](https://github.com/wintercounter/mhy/commit/4e4383f))

<a name="1.9.2"></a>

## [1.9.2](https://github.com/wintercounter/mhy/compare/v1.9.1...v1.9.2) (2019-02-22)

### Bug Fixes

-   constant placements ([07ab579](https://github.com/wintercounter/mhy/commit/07ab579))

<a name="1.9.1"></a>

## [1.9.1](https://github.com/wintercounter/mhy/compare/v1.9.0...v1.9.1) (2019-02-22)

<a name="1.9.0"></a>

# [1.9.0](https://github.com/wintercounter/mhy/compare/v1.8.1...v1.9.0) (2019-02-22)

### Bug Fixes

-   **docs:** try to fix gitbook parsing issue ([90b0eb3](https://github.com/wintercounter/mhy/commit/90b0eb3))
-   **docs:** try to fix gitbook parsing issue - revert ([9c01df2](https://github.com/wintercounter/mhy/commit/9c01df2))
-   **docs:** try to fix gitbook parsing issue [#2](https://github.com/wintercounter/mhy/issues/2) ([09323dc](https://github.com/wintercounter/mhy/commit/09323dc))
-   **docs:** try to fix gitbook parsing issue [#3](https://github.com/wintercounter/mhy/issues/3) ([2073b27](https://github.com/wintercounter/mhy/commit/2073b27))
-   **docs:** try to fix gitbook parsing issue [#4](https://github.com/wintercounter/mhy/issues/4) ([48defd4](https://github.com/wintercounter/mhy/commit/48defd4))
-   **docs:** try to fix gitbook parsing issue [#5](https://github.com/wintercounter/mhy/issues/5) ([1e4f398](https://github.com/wintercounter/mhy/commit/1e4f398))
-   **docs:** try to fix gitbook parsing issue [#5](https://github.com/wintercounter/mhy/issues/5) ([7dbdf28](https://github.com/wintercounter/mhy/commit/7dbdf28))
-   **docs:** try to fix gitbook parsing issue [#6](https://github.com/wintercounter/mhy/issues/6) ([2abb2ca](https://github.com/wintercounter/mhy/commit/2abb2ca))

### Features

-   **eslint:** BREAKING CHANGE: remove TSLint completely and add support for ESLint for TS ([a1960a5](https://github.com/wintercounter/mhy/commit/a1960a5))
-   add support for custom command/ecosystem files ([d0becf0](https://github.com/wintercounter/mhy/commit/d0becf0))

<a name="1.8.1"></a>

## [1.8.1](https://github.com/wintercounter/mhy/compare/v1.8.0...v1.8.1) (2019-02-19)

<a name="1.8.0"></a>

# [1.8.0](https://github.com/wintercounter/mhy/compare/v1.7.1...v1.8.0) (2019-02-19)

### Bug Fixes

-   **boot:** CLI description ([64d0496](https://github.com/wintercounter/mhy/commit/64d0496))
-   **docs:** emoji issues ([8dc7f41](https://github.com/wintercounter/mhy/commit/8dc7f41))

### Features

-   **boot:** add minimal react template ([fd99447](https://github.com/wintercounter/mhy/commit/fd99447))
-   **boot:** add support for package.json merging ([fbab132](https://github.com/wintercounter/mhy/commit/fbab132))
-   **boot:** prepare directory structure for boot changes ([58d8f85](https://github.com/wintercounter/mhy/commit/58d8f85))

<a name="1.7.1"></a>

## [1.7.1](https://github.com/wintercounter/mhy/compare/v1.7.0...v1.7.1) (2019-02-13)

### Bug Fixes

-   **mhy:** update commands for braking changes of yargs ([d721d92](https://github.com/wintercounter/mhy/commit/d721d92))

<a name="1.7.0"></a>

# [1.7.0](https://github.com/wintercounter/mhy/compare/v1.6.1...v1.7.0) (2019-02-13)

### Features

-   **jest:** add and configure `jest-date-mock` ([e5c46e5](https://github.com/wintercounter/mhy/commit/e5c46e5))

<a name="1.6.1"></a>

## [1.6.1](https://github.com/wintercounter/mhy/compare/v1.6.0...v1.6.1) (2019-02-13)

### Bug Fixes

-   **mhy:** refakt `--mhy-version` flag ([60e7377](https://github.com/wintercounter/mhy/commit/60e7377))

<a name="1.6.0"></a>

# [1.6.0](https://github.com/wintercounter/mhy/compare/v1.5.0...v1.6.0) (2019-02-13)

### Features

-   **mhy:** add support for `--mhy-version` flag ([864d073](https://github.com/wintercounter/mhy/commit/864d073))

<a name="1.5.0"></a>

# [1.5.0](https://github.com/wintercounter/mhy/compare/v1.4.2...v1.5.0) (2019-02-13)

### Bug Fixes

-   **jest:** v24 compatibility ([c45b9ea](https://github.com/wintercounter/mhy/commit/c45b9ea))

### Features

-   **versions:** update ([40bbef2](https://github.com/wintercounter/mhy/commit/40bbef2))

<a name="1.4.2"></a>

## [1.4.2](https://github.com/wintercounter/mhy/compare/v1.4.1...v1.4.2) (2019-02-13)

<a name="1.4.1"></a>

## [1.4.1](https://github.com/wintercounter/mhy/compare/v1.4.0...v1.4.1) (2019-02-12)

### Bug Fixes

-   **jest:** make `rootDir` to be `cwd` ([de76929](https://github.com/wintercounter/mhy/commit/de76929))
-   revert rename ([e24380b](https://github.com/wintercounter/mhy/commit/e24380b))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/wintercounter/mhy/compare/v1.3.7...v1.4.0) (2019-02-07)

### Features

-   **mhy:** add verbose logging of the command about to be run ([0b37fc8](https://github.com/wintercounter/mhy/commit/0b37fc8))

<a name="1.3.7"></a>

## [1.3.7](https://github.com/wintercounter/mhy/compare/v1.3.6...v1.3.7) (2019-02-05)

### Bug Fixes

-   **tsc:** @ alias resolve ([a25b0e7](https://github.com/wintercounter/mhy/commit/a25b0e7))

<a name="1.3.6"></a>

## [1.3.6](https://github.com/wintercounter/mhy/compare/v1.3.5...v1.3.6) (2019-01-31)

### Bug Fixes

-   **storybook:** missing config file generation in case of using UI ([1232fd4](https://github.com/wintercounter/mhy/commit/1232fd4))

<a name="1.3.5"></a>

## [1.3.5](https://github.com/wintercounter/mhy/compare/v1.3.4...v1.3.5) (2019-01-31)

<a name="1.3.4"></a>

## [1.3.4](https://github.com/wintercounter/mhy/compare/v1.3.3...v1.3.4) (2019-01-31)

### Bug Fixes

-   **cmd:** non-flag params passing to process ([ab0f9d1](https://github.com/wintercounter/mhy/commit/ab0f9d1))

<a name="1.3.3"></a>

## [1.3.3](https://github.com/wintercounter/mhy/compare/v1.3.2...v1.3.3) (2019-01-30)

### Bug Fixes

-   **webpack:** missing support for args passing ([6e7be54](https://github.com/wintercounter/mhy/commit/6e7be54))

<a name="1.3.2"></a>

## [1.3.2](https://github.com/wintercounter/mhy/compare/v1.3.1...v1.3.2) (2019-01-30)

### Bug Fixes

-   **tsc:** missing support for args passing ([dd3999d](https://github.com/wintercounter/mhy/commit/dd3999d))

<a name="1.3.1"></a>

## [1.3.1](https://github.com/wintercounter/mhy/compare/v1.3.0...v1.3.1) (2019-01-25)

### Bug Fixes

-   **jest:** check for space after keywords ([b11ac95](https://github.com/wintercounter/mhy/commit/b11ac95))
-   **jest:** transform modules with export also ([3cb8adc](https://github.com/wintercounter/mhy/commit/3cb8adc))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/wintercounter/mhy/compare/v1.2.2...v1.3.0) (2019-01-24)

### Bug Fixes

-   **babel:** add Storybook also as exception ([499076a](https://github.com/wintercounter/mhy/commit/499076a))
-   **babel:** only resolve module if it's not being run by Webpack ([6192439](https://github.com/wintercounter/mhy/commit/6192439))

### Features

-   **mhy:** add full support for custom 'src', 'dist' and 'build' folders ([132c82e](https://github.com/wintercounter/mhy/commit/132c82e))
-   **mhyConfig:** add `distFolder` and `buildFolder` keys ([b2bbf16](https://github.com/wintercounter/mhy/commit/b2bbf16))

<a name="1.2.2"></a>

## [1.2.2](https://github.com/wintercounter/mhy/compare/v1.2.1...v1.2.2) (2019-01-23)

<a name="1.2.1"></a>

## [1.2.1](https://github.com/wintercounter/mhy/compare/v1.2.0...v1.2.1) (2019-01-22)

### Bug Fixes

-   **docs:** fix what GitBook is messing up ([843ed56](https://github.com/wintercounter/mhy/commit/843ed56))
-   **docs:** wrong `boot` description ([ef78019](https://github.com/wintercounter/mhy/commit/ef78019))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/wintercounter/mhy/compare/v1.0.7...v1.2.0) (2019-01-22)

### Bug Fixes

-   **boot:** accidentally replaced import package name ([1492bd1](https://github.com/wintercounter/mhy/commit/1492bd1))
-   **ui:** check if ref exists before adding line ([33ea152](https://github.com/wintercounter/mhy/commit/33ea152))

### Features

-   **ci:** don't try to publish if version did not change ([730ad8b](https://github.com/wintercounter/mhy/commit/730ad8b))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/wintercounter/mhy/compare/v1.0.7...v1.1.0) (2019-01-22)

### Bug Fixes

-   **boot:** accidentally replaced import package name ([1492bd1](https://github.com/wintercounter/mhy/commit/1492bd1))
-   **ui:** check if ref exists before adding line ([33ea152](https://github.com/wintercounter/mhy/commit/33ea152))

### Features

-   **ci:** don't try to publish if version did not change ([730ad8b](https://github.com/wintercounter/mhy/commit/730ad8b))

<a name="1.0.7"></a>

## [1.0.7](https://github.com/wintercounter/mhy/compare/v1.1.1...v1.0.7) (2019-01-21)

<a name="1.0.6"></a>

## 1.0.6 (2019-01-21)

### Bug Fixes

-   error exit code handling ([5e49296](https://github.com/wintercounter/mhy/commit/5e49296))
-   error exit code handling ([22b9f6b](https://github.com/wintercounter/mhy/commit/22b9f6b))
-   error exit code handling ([5014bf0](https://github.com/wintercounter/mhy/commit/5014bf0))
-   error exit code handling ([8532267](https://github.com/wintercounter/mhy/commit/8532267))
-   error exit code handling ([ce2ff8c](https://github.com/wintercounter/mhy/commit/ce2ff8c))
-   error exit code handling ([4757c0b](https://github.com/wintercounter/mhy/commit/4757c0b))
-   error exit code handling ([861200c](https://github.com/wintercounter/mhy/commit/861200c))
-   readme ([aa8e780](https://github.com/wintercounter/mhy/commit/aa8e780))
-   **babel:** check for `dist` dir existance instead of environment ([c9272ca](https://github.com/wintercounter/mhy/commit/c9272ca))
-   **babel:** exclude d.ts files from compilation ([b4e5e5d](https://github.com/wintercounter/mhy/commit/b4e5e5d))

### Features

-   **babel:** add macro support ([78a77a3](https://github.com/wintercounter/mhy/commit/78a77a3))
-   1.0.0 docs ([bc2ef47](https://github.com/wintercounter/mhy/commit/bc2ef47))
-   **ci:** don't try to publish if version did not change ([5e7a7c4](https://github.com/wintercounter/mhy/commit/5e7a7c4))
-   **ci:** don't try to publish if version did not change ([a97c9bf](https://github.com/wintercounter/mhy/commit/a97c9bf))
-   **ci:** don't try to publish if version did not change ([341556c](https://github.com/wintercounter/mhy/commit/341556c))
-   **ci:** don't try to publish if version did not change ([f72eb0c](https://github.com/wintercounter/mhy/commit/f72eb0c))
-   **ci:** don't try to publish if version did not change ([075d419](https://github.com/wintercounter/mhy/commit/075d419))
-   **ci:** initial commit ([4c6bdd8](https://github.com/wintercounter/mhy/commit/4c6bdd8))
-   **ci:** initial commit ([93fa578](https://github.com/wintercounter/mhy/commit/93fa578))
-   **ci:** initial commit ([8864454](https://github.com/wintercounter/mhy/commit/8864454))
-   **ci:** initial commit ([7e2868b](https://github.com/wintercounter/mhy/commit/7e2868b))
-   **ci:** initial commit ([48dc360](https://github.com/wintercounter/mhy/commit/48dc360))
-   **ci:** initial commit ([6f157ef](https://github.com/wintercounter/mhy/commit/6f157ef))
-   **ci:** initial commit ([5d1f138](https://github.com/wintercounter/mhy/commit/5d1f138))
-   **ci:** initial commit ([1ceac8f](https://github.com/wintercounter/mhy/commit/1ceac8f))
-   **ci:** initial commit ([91249f1](https://github.com/wintercounter/mhy/commit/91249f1))
-   **ci:** initial commit ([e2c756d](https://github.com/wintercounter/mhy/commit/e2c756d))
-   **ci:** initial commit ([e7abcf3](https://github.com/wintercounter/mhy/commit/e7abcf3))
-   **ci:** initial commit ([c78398c](https://github.com/wintercounter/mhy/commit/c78398c))
-   **ci:** initial commit ([80d4acc](https://github.com/wintercounter/mhy/commit/80d4acc))
-   **flags:** handle flags based on character length ([748634c](https://github.com/wintercounter/mhy/commit/748634c))
-   **flags:** handle flags based on character length ([0229476](https://github.com/wintercounter/mhy/commit/0229476))
-   **jest:** add 'jest-enzyme' ([e810fec](https://github.com/wintercounter/mhy/commit/e810fec))
-   1.0.0 docs ([d880976](https://github.com/wintercounter/mhy/commit/d880976))
-   **jest:** jest-styled-components ([8f3ff7c](https://github.com/wintercounter/mhy/commit/8f3ff7c))
-   **perf:** optimize process loading time ([a5b8e67](https://github.com/wintercounter/mhy/commit/a5b8e67))
-   **perf:** optimize process loading time ([b605f35](https://github.com/wintercounter/mhy/commit/b605f35))
-   **pwa:** add sw loading to sample template ([445e02e](https://github.com/wintercounter/mhy/commit/445e02e))
-   **react:** make react-intl a part of mhy ([225cb1e](https://github.com/wintercounter/mhy/commit/225cb1e))
-   **ui:** add `enabled` support and explicit cli ([962de09](https://github.com/wintercounter/mhy/commit/962de09))
-   **webpack:** add workbox support ([819f4f0](https://github.com/wintercounter/mhy/commit/819f4f0))
-   1.0.0 ([98f3cf4](https://github.com/wintercounter/mhy/commit/98f3cf4))
-   1.0.0 ([ffe8d06](https://github.com/wintercounter/mhy/commit/ffe8d06))
-   1.0.0 ([be14f1d](https://github.com/wintercounter/mhy/commit/be14f1d))
-   1.0.0 ([d0d25fe](https://github.com/wintercounter/mhy/commit/d0d25fe))
-   1.0.0 ([839585f](https://github.com/wintercounter/mhy/commit/839585f))
-   1.0.0 ([4f2d405](https://github.com/wintercounter/mhy/commit/4f2d405))
-   1.0.0 ([e34e3a1](https://github.com/wintercounter/mhy/commit/e34e3a1))
-   1.0.0 docs ([2383ef3](https://github.com/wintercounter/mhy/commit/2383ef3))
-   1.0.0 docs ([611c1d2](https://github.com/wintercounter/mhy/commit/611c1d2))
-   1.0.0 docs ([12801a1](https://github.com/wintercounter/mhy/commit/12801a1))
-   1.0.0 docs ([89f6a95](https://github.com/wintercounter/mhy/commit/89f6a95))
-   1.0.0 docs ([4aa465b](https://github.com/wintercounter/mhy/commit/4aa465b))
-   1.0.0 docs ([6b48c1f](https://github.com/wintercounter/mhy/commit/6b48c1f))
-   1.0.0 docs ([f541f7b](https://github.com/wintercounter/mhy/commit/f541f7b))
-   1.0.0 docs ([1958b5c](https://github.com/wintercounter/mhy/commit/1958b5c))
-   1.0.0 docs ([d95af10](https://github.com/wintercounter/mhy/commit/d95af10))
-   1.0.0 docs ([fe7c0a6](https://github.com/wintercounter/mhy/commit/fe7c0a6))
-   1.0.0 docs ([464fa18](https://github.com/wintercounter/mhy/commit/464fa18))
-   1.0.0 docs ([d399bc7](https://github.com/wintercounter/mhy/commit/d399bc7))
-   1.0.0 docs ([fc85838](https://github.com/wintercounter/mhy/commit/fc85838))
-   1.0.0 docs ([4464c03](https://github.com/wintercounter/mhy/commit/4464c03))
-   1.0.0 docs ([4b229c8](https://github.com/wintercounter/mhy/commit/4b229c8))
-   1.0.0 docs ([731a2c1](https://github.com/wintercounter/mhy/commit/731a2c1))
-   1.0.0 docs ([1aca73c](https://github.com/wintercounter/mhy/commit/1aca73c))
-   1.0.0 docs ([fbdd23a](https://github.com/wintercounter/mhy/commit/fbdd23a))
-   1.0.0 docs ([1fd7c5a](https://github.com/wintercounter/mhy/commit/1fd7c5a))
-   1.0.0 docs ([4210bfb](https://github.com/wintercounter/mhy/commit/4210bfb))
-   1.0.0 docs ([7a93cdb](https://github.com/wintercounter/mhy/commit/7a93cdb))
-   1.0.0 docs ([0dfc2a4](https://github.com/wintercounter/mhy/commit/0dfc2a4))
-   1.0.0 docs ([ed9e572](https://github.com/wintercounter/mhy/commit/ed9e572))
-   1.0.0 docs ([acf909b](https://github.com/wintercounter/mhy/commit/acf909b))
-   1.0.0 docs ([a8777be](https://github.com/wintercounter/mhy/commit/a8777be))
-   1.0.0 docs ([9cd5049](https://github.com/wintercounter/mhy/commit/9cd5049))
-   1.0.0 docs ([3cc20d1](https://github.com/wintercounter/mhy/commit/3cc20d1))
-   1.0.0 docs ([a0636e7](https://github.com/wintercounter/mhy/commit/a0636e7))
-   1.0.0 docs ([db9e4a2](https://github.com/wintercounter/mhy/commit/db9e4a2))
-   1.0.0 docs ([7272796](https://github.com/wintercounter/mhy/commit/7272796))
-   1.0.0 docs ([b4bbc65](https://github.com/wintercounter/mhy/commit/b4bbc65))
-   1.0.0 docs ([5fa4b4f](https://github.com/wintercounter/mhy/commit/5fa4b4f))
-   1.0.0 docs ([a511e5c](https://github.com/wintercounter/mhy/commit/a511e5c))
-   1.0.0 docs ([dcb91c3](https://github.com/wintercounter/mhy/commit/dcb91c3))
-   1.0.0 docs ([c918913](https://github.com/wintercounter/mhy/commit/c918913))
-   1.0.0 docs ([274bee1](https://github.com/wintercounter/mhy/commit/274bee1))
-   1.0.0 docs ([48661b5](https://github.com/wintercounter/mhy/commit/48661b5))
-   1.0.0 docs ([1bd6e9a](https://github.com/wintercounter/mhy/commit/1bd6e9a))
-   1.0.0 docs ([4ae04bb](https://github.com/wintercounter/mhy/commit/4ae04bb))
-   1.0.0 docs ([af7a2b6](https://github.com/wintercounter/mhy/commit/af7a2b6))
-   1.0.0 docs ([d0c991f](https://github.com/wintercounter/mhy/commit/d0c991f))
-   1.0.0 docs ([474f3e9](https://github.com/wintercounter/mhy/commit/474f3e9))
-   1.0.0 docs ([fcb5a3e](https://github.com/wintercounter/mhy/commit/fcb5a3e))
-   1.0.0 docs ([243ae2e](https://github.com/wintercounter/mhy/commit/243ae2e))
-   1.0.0 docs ([60cc1ae](https://github.com/wintercounter/mhy/commit/60cc1ae))
-   1.0.0 docs ([d3556b7](https://github.com/wintercounter/mhy/commit/d3556b7))
-   1.0.0 docs ([d239e8b](https://github.com/wintercounter/mhy/commit/d239e8b))
-   1.0.0 docs ([dea7c92](https://github.com/wintercounter/mhy/commit/dea7c92))
-   1.0.0 docs ([6197f29](https://github.com/wintercounter/mhy/commit/6197f29))
-   1.0.0 docs ([236249e](https://github.com/wintercounter/mhy/commit/236249e))
-   1.0.0 docs ([0b499e8](https://github.com/wintercounter/mhy/commit/0b499e8))
-   1.0.0 docs ([f9824e9](https://github.com/wintercounter/mhy/commit/f9824e9))
-   1.0.0 docs ([669f607](https://github.com/wintercounter/mhy/commit/669f607))
-   1.0.0 docs ([cd17b0a](https://github.com/wintercounter/mhy/commit/cd17b0a))
-   1.0.0 docs ([469ea58](https://github.com/wintercounter/mhy/commit/469ea58))
-   1.0.0 docs ([12da387](https://github.com/wintercounter/mhy/commit/12da387))
-   1.0.0 docs ([24fdf75](https://github.com/wintercounter/mhy/commit/24fdf75))
-   1.0.0 docs ([f01486c](https://github.com/wintercounter/mhy/commit/f01486c))
-   1.0.0 docs ([cfcb9c0](https://github.com/wintercounter/mhy/commit/cfcb9c0))
-   1.0.0 docs ([e422d38](https://github.com/wintercounter/mhy/commit/e422d38))
-   1.0.0 docs ([202aaf0](https://github.com/wintercounter/mhy/commit/202aaf0))
-   1.0.0 docs ([bb7ac5e](https://github.com/wintercounter/mhy/commit/bb7ac5e))
-   1.0.0 docs ([4a7458b](https://github.com/wintercounter/mhy/commit/4a7458b))
-   1.0.0 docs ([394e356](https://github.com/wintercounter/mhy/commit/394e356))
-   1.0.0 docs ([f169196](https://github.com/wintercounter/mhy/commit/f169196))
-   1.0.0 docs ([c1d1548](https://github.com/wintercounter/mhy/commit/c1d1548))
-   1.0.0 docs ([3f8528e](https://github.com/wintercounter/mhy/commit/3f8528e))
-   1.0.0 docs ([e164c2b](https://github.com/wintercounter/mhy/commit/e164c2b))
-   1.0.0 docs ([fdf55e8](https://github.com/wintercounter/mhy/commit/fdf55e8))
-   1.0.0-alpha ([43ec1da](https://github.com/wintercounter/mhy/commit/43ec1da))
