const call = require('./ast');

const context = {
  "type": "File",
  "start": 0,
  "end": 78,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 5,
      "column": 17
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 78,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 5,
        "column": 17
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 12,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 11,
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "id": {
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
                "identifierName": "z"
              },
              "name": "z"
            },
            "init": {
              "type": "StringLiteral",
              "start": 8,
              "end": 11,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "extra": {
                "rawValue": "y",
                "raw": "'y'"
              },
              "value": "y"
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "VariableDeclaration",
        "start": 13,
        "end": 32,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 19
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 31,
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 18
              }
            },
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 5
                },
                "identifierName": "k"
              },
              "name": "k"
            },
            "init": {
              "type": "ObjectExpression",
              "start": 21,
              "end": 31,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 8
                },
                "end": {
                  "line": 2,
                  "column": 18
                }
              },
              "properties": [
                {
                  "type": "ObjectProperty",
                  "start": 22,
                  "end": 30,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 9
                    },
                    "end": {
                      "line": 2,
                      "column": 17
                    }
                  },
                  "method": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 9
                      },
                      "end": {
                        "line": 2,
                        "column": 10
                      },
                      "identifierName": "x"
                    },
                    "name": "x"
                  },
                  "computed": false,
                  "shorthand": false,
                  "value": {
                    "type": "TemplateLiteral",
                    "start": 25,
                    "end": 30,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 12
                      },
                      "end": {
                        "line": 2,
                        "column": 17
                      }
                    },
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 26,
                        "end": 29,
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 13
                          },
                          "end": {
                            "line": 2,
                            "column": 16
                          }
                        },
                        "value": {
                          "raw": "231",
                          "cooked": "231"
                        },
                        "tail": true
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 50,
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 17
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 49,
            "loc": {
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 3,
                "column": 16
              }
            },
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 5
                },
                "identifierName": "R"
              },
              "name": "R"
            },
            "init": {
              "type": "NewExpression",
              "start": 41,
              "end": 49,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 8
                },
                "end": {
                  "line": 3,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 12
                  },
                  "end": {
                    "line": 3,
                    "column": 13
                  },
                  "identifierName": "M"
                },
                "name": "M"
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 14
                    },
                    "end": {
                      "line": 3,
                      "column": 15
                    },
                    "identifierName": "k"
                  },
                  "name": "k"
                }
              ]
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "ExpressionStatement",
        "start": 51,
        "end": 60,
        "loc": {
          "start": {
            "line": 4,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 9
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 51,
          "end": 59,
          "loc": {
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 8
            }
          },
          "callee": {
            "type": "MemberExpression",
            "start": 51,
            "end": 57,
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 6
              }
            },
            "object": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "loc": {
                "start": {
                  "line": 4,
                  "column": 1
                },
                "end": {
                  "line": 4,
                  "column": 2
                },
                "identifierName": "R"
              },
              "name": "R",
              "extra": {
                "parenthesized": true,
                "parenStart": 51
              }
            },
            "computed": true,
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "loc": {
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 4,
                  "column": 5
                },
                "identifierName": "z"
              },
              "name": "z"
            }
          },
          "arguments": []
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 61,
        "end": 78,
        "loc": {
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 17
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 61,
          "end": 77,
          "loc": {
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 16
            }
          },
          "callee": {
            "type": "MemberExpression",
            "start": 61,
            "end": 75,
            "loc": {
              "start": {
                "line": 5,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 14
              }
            },
            "object": {
              "type": "NewExpression",
              "start": 62,
              "end": 72,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 1
                },
                "end": {
                  "line": 5,
                  "column": 11
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 5
                  },
                  "end": {
                    "line": 5,
                    "column": 6
                  },
                  "identifierName": "M"
                },
                "name": "M"
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 7
                    },
                    "end": {
                      "line": 5,
                      "column": 8
                    },
                    "identifierName": "k"
                  },
                  "name": "k"
                },
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 9
                    },
                    "end": {
                      "line": 5,
                      "column": 10
                    },
                    "identifierName": "z"
                  },
                  "name": "z"
                }
              ],
              "extra": {
                "parenthesized": true,
                "parenStart": 61
              }
            },
            "computed": false,
            "property": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 13
                },
                "end": {
                  "line": 5,
                  "column": 14
                },
                "identifierName": "y"
              },
              "name": "y"
            }
          },
          "arguments": []
        }
      }
    ],
    "directives": []
  },
  "comments": []
}
console.log(call(context))