fetch('data.json')
  .then(response => response.json()) // Fix 'data.json()' to 'response.json()'
  .then(data => {
    var mydata = data.mydata;

    var config = {
      data: mydata, // Use 'mydata' from the fetched JSON
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors: ['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors: ['gray', 'red']
    };

    config.element = 'area-chart';
    Morris.Area(config);

    config.element = 'line-chart';
    Morris.Line(config);

    config.element = 'bar-chart';
    Morris.Bar(config);

    config.element = 'stacked';
    config.stacked = true;
    Morris.Bar(config);

    Morris.Donut({
      element: 'pie-chart',
      data: [
        { label: 'Friends', value: 30 },
        { label: 'Allies', value: 15 },
        { label: 'Enemies', value: 45 },
        { label: 'Neutral', value: 10 }
      ]
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
