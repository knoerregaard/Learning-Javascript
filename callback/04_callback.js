/*
 * Subject: Callback pattern
 *
 **/
var fs = require( 'fs' );
process.nextTick( function(){ console.log( 'First Tick' ); } );

fs.stat( '.', function(){ console.log( 'Stat is done' ); });
for( var i=0; i<100000; i++ );

process.nextTick( function(){ console.log( 'Second Tick' ); } );
