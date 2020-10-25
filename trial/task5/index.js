const call = require('./ast');

const context = {
  "type": "File",
  "start": 0,
  "end": 74,
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
    "end": 74,
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
        "end": 28,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 15
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 27,
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 14
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
              "end": 27,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 8
                },
                "end": {
                  "line": 2,
                  "column": 14
                }
              },
              "properties": [
                {
                  "type": "ObjectProperty",
                  "start": 22,
                  "end": 26,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 9
                    },
                    "end": {
                      "line": 2,
                      "column": 13
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
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 12
                      },
                      "end": {
                        "line": 2,
                        "column": 13
                      },
                      "identifierName": "z"
                    },
                    "name": "z"
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
        "start": 29,
        "end": 46,
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
            "start": 33,
            "end": 45,
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
              "start": 33,
              "end": 34,
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
              "start": 37,
              "end": 45,
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
                "start": 41,
                "end": 42,
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
                  "start": 43,
                  "end": 44,
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
        "start": 47,
        "end": 56,
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
          "start": 47,
          "end": 55,
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
            "start": 47,
            "end": 53,
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
              "start": 48,
              "end": 49,
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
                "parenStart": 47
              }
            },
            "computed": true,
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
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
        "start": 57,
        "end": 74,
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
          "start": 57,
          "end": 73,
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
            "start": 57,
            "end": 71,
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
              "start": 58,
              "end": 68,
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
                "start": 62,
                "end": 63,
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
                  "start": 64,
                  "end": 65,
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
                  "start": 66,
                  "end": 67,
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
                "parenStart": 57
              }
            },
            "computed": false,
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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