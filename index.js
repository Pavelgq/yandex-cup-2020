const call = require('./ast');

const context = {
  "type": "File",
  "start": 0,
  "end": 56,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 29
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 56,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 2,
        "column": 29
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 0,
        "end": 26,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 0,
          "end": 25,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 25
            }
          },
          "callee": {
            "type": "MemberExpression",
            "start": 0,
            "end": 23,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 23
              }
            },
            "object": {
              "type": "NewExpression",
              "start": 1,
              "end": 20,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 1
                },
                "end": {
                  "line": 1,
                  "column": 20
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 5
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  },
                  "identifierName": "M"
                },
                "name": "M"
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "AssignmentExpression",
                  "start": 7,
                  "end": 19,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 7,
                    "end": 11,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 7
                      },
                      "end": {
                        "line": 1,
                        "column": 11
                      }
                    },
                    "object": {
                      "type": "ObjectExpression",
                      "start": 7,
                      "end": 9,
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 7
                        },
                        "end": {
                          "line": 1,
                          "column": 9
                        }
                      },
                      "properties": []
                    },
                    "computed": false,
                    "property": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 11,
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 10
                        },
                        "end": {
                          "line": 1,
                          "column": 11
                        },
                        "identifierName": "x"
                      },
                      "name": "x"
                    }
                  },
                  "right": {
                    "type": "StringLiteral",
                    "start": 14,
                    "end": 19,
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 14
                      },
                      "end": {
                        "line": 1,
                        "column": 19
                      }
                    },
                    "extra": {
                      "rawValue": "123",
                      "raw": "'123'"
                    },
                    "value": "123"
                  }
                }
              ],
              "extra": {
                "parenthesized": true,
                "parenStart": 0
              }
            },
            "computed": false,
            "property": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 22
                },
                "end": {
                  "line": 1,
                  "column": 23
                },
                "identifierName": "y"
              },
              "name": "y"
            }
          },
          "arguments": []
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 27,
        "end": 56,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 29
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 27,
          "end": 55,
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 28
            }
          },
          "callee": {
            "type": "MemberExpression",
            "start": 27,
            "end": 53,
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 26
              }
            },
            "object": {
              "type": "NewExpression",
              "start": 28,
              "end": 50,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 1
                },
                "end": {
                  "line": 2,
                  "column": 23
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 5
                  },
                  "end": {
                    "line": 2,
                    "column": 6
                  },
                  "identifierName": "M"
                },
                "name": "M"
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "AssignmentExpression",
                  "start": 34,
                  "end": 49,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 7
                    },
                    "end": {
                      "line": 2,
                      "column": 22
                    }
                  },
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 34,
                    "end": 41,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 7
                      },
                      "end": {
                        "line": 2,
                        "column": 14
                      }
                    },
                    "object": {
                      "type": "ObjectExpression",
                      "start": 34,
                      "end": 36,
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 7
                        },
                        "end": {
                          "line": 2,
                          "column": 9
                        }
                      },
                      "properties": []
                    },
                    "computed": true,
                    "property": {
                      "type": "StringLiteral",
                      "start": 37,
                      "end": 40,
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 10
                        },
                        "end": {
                          "line": 2,
                          "column": 13
                        }
                      },
                      "extra": {
                        "rawValue": "x",
                        "raw": "'x'"
                      },
                      "value": "x"
                    }
                  },
                  "right": {
                    "type": "StringLiteral",
                    "start": 44,
                    "end": 49,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 17
                      },
                      "end": {
                        "line": 2,
                        "column": 22
                      }
                    },
                    "extra": {
                      "rawValue": "123",
                      "raw": "'123'"
                    },
                    "value": "123"
                  }
                }
              ],
              "extra": {
                "parenthesized": true,
                "parenStart": 27
              }
            },
            "computed": false,
            "property": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 25
                },
                "end": {
                  "line": 2,
                  "column": 26
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