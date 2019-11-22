module.exports = module.exports.default = {
    "entry": {
        "app": [
            "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\react-hot-loader\\patch.js",
            "./src",
            "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\webpack-dev-server-status-bar\\index.js"
        ]
    },
    "mode": "development",
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": {},
                "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\eslint-loader\\dist\\cjs.js",
                "include": {},
                "exclude": {},
                "options": {
                    "configFile": "C:\\Work\\nodejs\\node_modules\\mhy\\dist\\configs\\webpack\\root\\module\\rules\\.eslintrc"
                }
            },
            {
                "test": {},
                "include": "C:\\Work\\Repos\\mhy\\packages\\core\\src",
                "exclude": {},
                "use": [
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-loader\\lib\\index.js",
                        "options": {
                            "plugins": [
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-plugin-macros\\dist\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-syntax-dynamic-import\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-plugin-transform-remove-strict-mode\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-proposal-class-properties\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-transform-object-assign\\lib\\index.js",
                                [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-syntax-decorators\\lib\\index.js",
                                    {
                                        "legacy": true
                                    }
                                ],
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-plugin-syntax-async-functions\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-plugin-transform-function-bind\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-proposal-export-default-from\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-proposal-export-namespace-from\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-proposal-nullish-coalescing-operator\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\plugin-proposal-optional-chaining\\lib\\index.js",
                                "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\react-hot-loader\\babel.js"
                            ],
                            "presets": [
                                [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\preset-env\\lib\\index.js",
                                    {
                                        "targets": {
                                            "chrome": 78,
                                            "edge": 18,
                                            "esmodules": false
                                        },
                                        "modules": false
                                    }
                                ],
                                [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\preset-react\\lib\\index.js",
                                    {}
                                ],
                                [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\@babel\\preset-typescript\\lib\\index.js",
                                    {
                                        "isTSX": true,
                                        "allExtensions": true
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                "test": {},
                "include": {},
                "type": "javascript/auto"
            },
            {
                "test": {},
                "exclude": {},
                "use": [
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\babel-loader\\lib\\index.js"
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\worker-loader\\dist\\cjs.js"
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\style-loader\\dist\\index.js"
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\css-loader\\dist\\cjs.js",
                        "options": {
                            "importLoaders": 2,
                            "sourceMap": true,
                            "modules": {
                                "localIdentName": "[local]__[hash:base64:5]"
                            },
                            "localsConvention": "camelCase"
                        }
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\postcss-loader\\src\\index.js",
                        "options": {
                            "sourceMap": true,
                            "plugins": [
                                null,
                                null
                            ]
                        }
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\sass-loader\\dist\\cjs.js",
                        "options": {
                            "sourceMap": true,
                            "sassOptions": {
                                "sourceMap": true,
                                "includePaths": [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules",
                                    "C:\\Work\\Repos\\mhy\\packages\\core\\node_modules",
                                    "C:\\Work\\Repos\\mhy\\packages\\core\\src"
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\style-loader\\dist\\index.js"
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\css-loader\\dist\\cjs.js",
                        "options": {
                            "importLoaders": 2,
                            "sourceMap": true,
                            "modules": false,
                            "localsConvention": "camelCase"
                        }
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\postcss-loader\\src\\index.js",
                        "options": {
                            "sourceMap": true,
                            "plugins": [
                                null,
                                null
                            ]
                        }
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\sass-loader\\dist\\cjs.js",
                        "options": {
                            "sourceMap": true,
                            "sassOptions": {
                                "sourceMap": true,
                                "includePaths": [
                                    "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules",
                                    "C:\\Work\\Repos\\mhy\\packages\\core\\node_modules",
                                    "C:\\Work\\Repos\\mhy\\packages\\core\\src"
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "loaders": [
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\file-loader\\dist\\cjs.js",
                        "options": {
                            "hash": "sha512",
                            "digest": "hex",
                            "name": "[name].[hash].[ext]"
                        }
                    },
                    {
                        "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\image-webpack-loader\\index.js",
                        "options": {
                            "bypassOnDebug": true,
                            "mozjpeg": {
                                "progressive": false,
                                "quality": 80
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\url-loader\\dist\\cjs.js",
                    "options": {
                        "limit": 65000,
                        "mimetype": "image/svg+xml",
                        "name": "[name].[ext]"
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\url-loader\\dist\\cjs.js",
                    "options": {
                        "limit": 65000,
                        "mimetype": "application/font-woff",
                        "name": "[name].[ext]"
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\url-loader\\dist\\cjs.js",
                    "options": {
                        "limit": 65000,
                        "mimetype": "application/font-woff2",
                        "name": "[name].[ext]"
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\url-loader\\dist\\cjs.js",
                    "options": {
                        "limit": 65000,
                        "mimetype": "application/octet-stream",
                        "name": "[name].[ext]"
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\url-loader\\dist\\cjs.js",
                    "options": {
                        "limit": 65000,
                        "mimetype": "application/vnd.ms-fontobject",
                        "name": "[name].[ext]"
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\svg-react-loader\\lib\\loader.js",
                    "options": {
                        "attrs": {
                            "width": "1em",
                            "height": "1em"
                        }
                    }
                }
            },
            {
                "test": {},
                "use": {
                    "loader": "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules\\raw-loader\\dist\\cjs.js"
                }
            }
        ]
    },
    "optimization": {
        "splitChunks": {
            "chunks": "async",
            "minSize": 30000,
            "minChunks": 1,
            "maxAsyncRequests": 5,
            "maxInitialRequests": 3,
            "automaticNameDelimiter": "~",
            "name": true,
            "cacheGroups": {
                "vendors": {
                    "test": {},
                    "priority": -10
                },
                "default": {
                    "minChunks": 2,
                    "priority": -20,
                    "reuseExistingChunk": true
                }
            }
        }
    },
    "output": {
        "path": "C:\\Work\\Repos\\mhy\\packages\\core\\build",
        "filename": "[name].[hash:5].js",
        "publicPath": "/",
        "chunkFilename": "app.chunk[id].[chunkhash].js?v=[hash]"
    },
    "plugins": [
        {
            "options": {
                "template": "C:\\Work\\nodejs\\node_modules\\mhy\\dist\\resources\\index.html",
                "templateContent": false,
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": "auto",
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "base": false,
                "title": "Webpack App",
                "xhtml": false
            },
            "version": 4
        },
        {
            "config": {
                "chunks": [],
                "exclude": [
                    {},
                    {}
                ],
                "excludeChunks": [],
                "importsDirectory": "",
                "importScripts": [],
                "importWorkboxFrom": "cdn",
                "precacheManifestFilename": "precache-manifest.[manifestHash].js",
                "swDest": "service-worker.js"
            }
        },
        {
            "config": {
                "chunks": [],
                "exclude": [
                    {},
                    {}
                ],
                "excludeChunks": [],
                "importsDirectory": "",
                "importScripts": [],
                "importWorkboxFrom": "cdn",
                "precacheManifestFilename": "precache-manifest.[manifestHash].js",
                "swDest": "sw.js",
                "swSrc": "C:\\Work\\nodejs\\node_modules\\mhy\\dist\\resources\\sw.js"
            }
        },
        {
            "_generator": null,
            "assets": null,
            "htmlPlugin": false,
            "options": {
                "filename": "[name].[hash].[ext]",
                "name": "mhy Progressive Web App",
                "short_name": "mhyPWA",
                "orientation": "portrait",
                "display": "standalone",
                "start_url": ".",
                "inject": true,
                "fingerprints": true,
                "ios": false,
                "publicPath": null,
                "includeDirectory": true,
                "crossorigin": "use-credentials",
                "description": "mhy awesome Progressive Web App!",
                "background_color": "#336699",
                "icons": [
                    {
                        "src": "C:\\Work\\nodejs\\node_modules\\mhy\\dist\\configs\\manifest\\logo-512.png",
                        "sizes": [
                            96,
                            128,
                            192,
                            256,
                            384,
                            512
                        ]
                    },
                    {
                        "src": "C:\\Work\\nodejs\\node_modules\\mhy\\dist\\configs\\manifest\\logo-1024.png",
                        "size": "1024x1024"
                    }
                ]
            }
        },
        {
            "opts": {
                "publicPath": null,
                "basePath": "",
                "fileName": "./manifest.webpack.json",
                "transformExtensions": {},
                "writeToFileEmit": false,
                "seed": null,
                "filter": null,
                "map": null,
                "generate": null,
                "sort": null
            }
        },
        {
            "definitions": {
                "mhy": "{\"defaultIndexHtml\":\"C:\\\\Work\\\\nodejs\\\\node_modules\\\\mhy\\\\dist\\\\resources\\\\index.html\",\"indexHtml\":\"C:\\\\Work\\\\nodejs\\\\node_modules\\\\mhy\\\\dist\\\\resources\\\\index.html\",\"srcFolder\":\"src\",\"distFolder\":\"dist\",\"buildFolder\":\"build\",\"defaultIgnoreList\":[\"logs\",\"*.log\",\"npm-debug.log*\",\"yarn-debug.log*\",\"yarn-error.log*\",\"pids\",\"*.pid\",\"*.seed\",\"*.pid.lock\",\"lib-cov\",\"coverage\",\".nyc_output\",\".grunt\",\"bower_components\",\".lock-wscript\",\"build/Release\",\"jspm_packages\",\"typings\",\".npm\",\".eslintcache\",\".node_repl_history\",\"*.tgz\",\".yarn-integrity\",\".env\",\".next\",\".idea\",\".vscode\",\"node_modules\",\".babelrc\",\"prettier.json\",\".prettierrc\",\"jest.config.js\",\".eslintrc\",\"tsconfig.json\",\"webpack.config.js\",\"*.tsbuildinfo\"],\"defaultAliases\":{\"@\":\"C:\\\\Work\\\\Repos\\\\mhy\\\\packages\\\\core\\\\src\",\"@/mhy\":\"C:\\\\Work\\\\nodejs\\\\node_modules\\\\mhy\\\\dist\"},\"ecosystem\":[\"jest\"]}"
            }
        },
        {
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        }
    ],
    "resolve": {
        "extensions": [
            ".js",
            ".mjs",
            ".jsx",
            ".css",
            ".scss",
            ".ts",
            ".tsx",
            ".json"
        ],
        "modules": [
            "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules",
            "C:\\Work\\Repos\\mhy\\packages\\core\\node_modules"
        ],
        "alias": {
            "@": "C:\\Work\\Repos\\mhy\\packages\\core\\src",
            "@/mhy": "C:\\Work\\nodejs\\node_modules\\mhy\\dist",
            "react-dom": "@hot-loader/react-dom"
        },
        "unsafeCache": {}
    },
    "resolveLoader": {
        "modules": [
            "node_modules",
            "C:\\Work\\nodejs\\node_modules\\mhy\\node_modules"
        ],
        "extensions": [
            ".js",
            ".mjs",
            ".css",
            ".scss"
        ]
    },
    "devServer": {
        "contentBase": "/",
        "host": "localhost",
        "port": 3000,
        "hot": true,
        "progress": true,
        "historyApiFallback": {
            "disableDotRule": true
        },
        "disableHostCheck": true,
        "watchOptions": {
            "ignored": [
                "node_modules",
                "build",
                "dist",
                "cache",
                "__"
            ]
        }
    },
    "devtool": "source-map",
    "watchOptions": {
        "ignored": [
            "node_modules",
            "build",
            "dist",
            "cache",
            "__"
        ]
    }
}