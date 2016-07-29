// Tests for ECMAScript 7 syntax changes

if (typeof exports != "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
}

// Dangling commas are allowed in function declarations
test("(function test(a, b,) { })", {
  type: "Program",
  body: [
    {
      type: "ExpressionStatement",
      expression: {
        type: "FunctionExpression",
        id: {
          type: "Identifier",
          name: "test",
          loc: {
            start: {
              line: 1,
              column: 10
            },
            end: {
              line: 1,
              column: 14
            }
          }
        },
        params: [
          {
            type: "Identifier",
            name: "a",
            loc: {
              start: {
                line: 1,
                column: 15
              },
              end: {
                line: 1,
                column: 16
              }
            }
          },
          {
            type: "Identifier",
            name: "b",
            loc: {
              start: {
                line: 1,
                column: 18
              },
              end: {
                line: 1,
                column: 19
              }
            }
          }
        ],
        body: {
          type: "BlockStatement",
          body: [],
          loc: {
            start: {
              line: 1,
              column: 22
            },
            end: {
              line: 1,
              column: 25
            }
          }
        },
        loc: {
          start: {
            line: 1,
            column: 1
          },
          end: {
            line: 1,
            column: 25
          }
        }
      },
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 26
        }
      }
    }
  ],
  loc: {
    start: {
      line: 1,
      column: 0
    },
    end: {
      line: 1,
      column: 26
    }
  }
}, {
  ecmaVersion: 8,
  locations: true
});

testFail("(function test(a, b,,) { })", "Unexpected token (1:20)", { ecmaVersion: 8 });

// Dangling commas are allowed in functions calls

test("foo(bar, baz,)", {
  type: "Program",
  body: [
    {
      type: "ExpressionStatement",
      expression: {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "foo",
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 3
            }
          }
        },
        arguments: [
          {
            type: "Identifier",
            name: "bar",
            loc: {
              start: {
                line: 1,
                column: 4
              },
              end: {
                line: 1,
                column: 7
              }
            }
          },
          {
            type: "Identifier",
            name: "baz",
            loc: {
              start: {
                line: 1,
                column: 9
              },
              end: {
                line: 1,
                column: 12
              }
            }
          }
        ],
        loc: {
          start: {
            line: 1,
            column: 0
          },
          end: {
            line: 1,
            column: 14
          }
        }
      },
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 14
        }
      }
    }
  ],
  loc: {
    start: {
      line: 1,
      column: 0
    },
    end: {
      line: 1,
      column: 14
    }
  }
}, {
  ecmaVersion: 8,
  locations: true
});

testFail("foo(bar, baz,,)", "Unexpected token (1:13)", { ecmaVersion: 8 });
