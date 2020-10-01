const call = require('./ast');

const context = {
    "type": "File",
    "start": 0,
    "end": 40,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 40
      }
    },
    "errors": [],
    "program": {
      "type": "Program",
      "start": 0,
      "end": 40,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 40
        }
      },
      "sourceType": "module",
      "interpreter": null,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 0,
          "end": 40,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 40
            }
          },
          "expression": {
            "type": "CallExpression",
            "start": 0,
            "end": 40,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 40
              }
            },
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 5,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "object": {
                "type": "MemberExpression",
                "start": 0,
                "end": 3,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 0,
                  "end": 1,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    },
                    "identifierName": "Z"
                  },
                  "name": "Z"
                },
                "computed": false,
                "property": {
                  "type": "Identifier",
                  "start": 2,
                  "end": 3,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    },
                    "identifierName": "y"
                  },
                  "name": "y"
                }
              },
              "computed": false,
              "property": {
                "type": "Identifier",
                "start": 4,
                "end": 5,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  },
                  "identifierName": "n"
                },
                "name": "n"
              }
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 6,
                "end": 39,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 39
                  }
                },
                "id": null,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 15
                      },
                      "end": {
                        "line": 1,
                        "column": 16
                      },
                      "identifierName": "a"
                    },
                    "name": "a"
                  },
                  {
                    "type": "Identifier",
                    "start": 18,
                    "end": 19,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 18
                      },
                      "end": {
                        "line": 1,
                        "column": 19
                      },
                      "identifierName": "b"
                    },
                    "name": "b"
                  },
                  {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 21
                      },
                      "end": {
                        "line": 1,
                        "column": 22
                      },
                      "identifierName": "c"
                    },
                    "name": "c"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 23,
                  "end": 39,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 23
                    },
                    "end": {
                      "line": 1,
                      "column": 39
                    }
                  },
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 24,
                      "end": 38,
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 24
                        },
                        "end": {
                          "line": 1,
                          "column": 38
                        }
                      },
                      "expression": {
                        "type": "CallExpression",
                        "start": 24,
                        "end": 38,
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 24
                          },
                          "end": {
                            "line": 1,
                            "column": 38
                          }
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "start": 24,
                          "end": 35,
                          "loc": {
                            "start": {
                              "line": 1,
                              "column": 24
                            },
                            "end": {
                              "line": 1,
                              "column": 35
                            }
                          },
                          "object": {
                            "type": "Identifier",
                            "start": 24,
                            "end": 31,
                            "loc": {
                              "start": {
                                "line": 1,
                                "column": 24
                              },
                              "end": {
                                "line": 1,
                                "column": 31
                              },
                              "identifierName": "console"
                            },
                            "name": "console"
                          },
                          "computed": false,
                          "property": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 35,
                            "loc": {
                              "start": {
                                "line": 1,
                                "column": 32
                              },
                              "end": {
                                "line": 1,
                                "column": 35
                              },
                              "identifierName": "log"
                            },
                            "name": "log"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 36,
                            "end": 37,
                            "loc": {
                              "start": {
                                "line": 1,
                                "column": 36
                              },
                              "end": {
                                "line": 1,
                                "column": 37
                              },
                              "identifierName": "a"
                            },
                            "name": "a"
                          }
                        ]
                      }
                    }
                  ],
                  "directives": []
                }
              }
            ]
          }
        }
      ],
      "directives": []
    },
    "comments": []
  }
console.log(call(context))