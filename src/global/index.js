"use strict";

const cPost = '61T_knt/ypv-5MH'
const cGet = 'HDh_K0M/b7l-UBx'
const cPut = 'n0m_b1O/vB3-1PR'
const cDel = 'adN_FqY/dh8-H2q'


exports.endpointCodes  = {
      post: cPost,
      get: cGet,
      put: cPut,
      del: cDel
}


const local ='http://localhost:3008'
const cpanel ='https://microfinanzas.com.mx' // cambiar por la url del sitio web.

exports.url  =  cpanel + '/api/lGW_BpN/ndX-D2a';

//crear rutas
exports.normalize = (function() {
      var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
          to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
          mapping = {};
     
      for(var i = 0, j = from.length; i < j; i++ )
          mapping[ from.charAt( i ) ] = to.charAt( i );
     
      return function( str ) {
          var ret = [];
          for( var i = 0, j = str.length; i < j; i++ ) {
              var c = str.charAt( i );
              if( mapping.hasOwnProperty( str.charAt( i ) ) )
                  ret.push( mapping[ c ] );
              else
                  ret.push( c );
          }      
          return ret.join( '' ).replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
      }
     
})();