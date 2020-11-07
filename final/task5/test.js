module.exports = {
    input: {
        "style": {
            "width": 200,
            "height": 200,
            "flexDirection": "column",
            "alignItems": "center"
        },
        "children": [{
                "style": {
                    "width": 100,
                    "height": 100
                }
            },
            {
                "style": {
                    "flexGrow": 1,
                    "width": 60
                }
            }
        ]
    },
    output: [
        {
          "x": 0,
          "y": 0,
          "width": 200,
          "height": 200
        },
        {
          "x": 50,
          "y": 0,
          "width": 100,
          "height": 100
        },
        {
          "x": 70,
          "y": 100,
          "width": 60,
          "height": 100
        }
      ],

}