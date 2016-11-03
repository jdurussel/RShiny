HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

       renderValue: function(x) {

        // create a chart and set options
        // note that via the c3.js API we bind the chart to the element with id equal to chart1
        var chart = c3.generate({
            bindto: el,
            data: {
                json: x,
                type: 'gauge',
            },
            gauge: {
                label:{
                    //returning here the value and not the ratio
                    format: function(value, ratio){ return value;}
                },
                min: 0,
                max: 100,
                width: 15,
                units: 'value' //this is only the text for the label
            },
            color: {
        // RGpal <- colorRampPalette(c("red","orange","yellow","green","darkgreen"))(10)
        // plot(1:10,pch=16,cex=3,col=RGpal)
        //pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          pattern: ["#FF0000","#FF4900","#FF9200","#FFC300","#FFEB00","#C6FF00",
                      "#55FF00","#00ED00","#00A800","#006400"],
                threshold: {
        //            unit: 'value', // percentage is default
        //            max: 200, // 100 is default
        //            values: [30, 60, 90, 100]
                values: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                }
            }
        });
              
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});