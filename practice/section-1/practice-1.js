﻿'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC=new Array();
  var count=0;
  for (var i=0;i<collectionA.length;i++) {
    for (var j=0;j<collectionB.length;j++) {
	if (collectionA[i]==collectionB[j]) {
	  collectionC[count++]=collectionA[i];
        }
    }  
  }
  return collectionC;
}
 