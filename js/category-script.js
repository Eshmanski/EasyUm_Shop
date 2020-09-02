$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 85 ],
      slide: function( event, ui ) {
        // $( "#amount" ).val( "$" + ui.values[ 0 ] + "$" + ui.values[ 1 ] );
        $( "#amount1" ).val(ui.values[ 0 ]);
        $( "#amount2" ).val(ui.values[ 1 ]  + "€");
      }
      
    });
    $( "#amount1" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) + "€");
  } );

  $( function() {
    $( "#number" ).selectmenu();
  } );
  $( function() {
    $( "#unknown" ).selectmenu();
  } );
