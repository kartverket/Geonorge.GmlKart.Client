const epsgCodes = {
   'EPSG:25832': 'EPSG:25832',
   'EPSG:25833': 'EPSG:25833',
   'EPSG:25835': 'EPSG:25835',
   'EPSG:5972': 'EPSG:25832',
   'EPSG:5973': 'EPSG:25833',
   'EPSG:5975': 'EPSG:25835',
};

export function getAdjustedEpsgCode(epsgCode) {
   return epsgCodes[epsgCode] || null;
}
