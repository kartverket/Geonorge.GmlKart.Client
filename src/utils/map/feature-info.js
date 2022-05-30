const EXCEPTIONS = [
   key => key === 'id',
   key => key === 'geometry',
   key => key.includes(':'),
   key => key.startsWith('_')
]

export function getPropertyList(feature) {
   const propertyList = feature.get('_propertyList');

   if (propertyList) {
      return propertyList;
   }

   const map = new Map();
   createPropertyMap(feature.getProperties(), map);
   feature.set('_propertyList', map);

   return map;
}

function createPropertyMap(obj, propertyList) {
   for (let key in obj) {
      if (EXCEPTIONS.some(exception => exception(key))) {
         continue;
      }

      const value = obj[key];

      if (typeof value === 'object') {
         if (!isGeoJSON(value)) {
            createPropertyMap(value, propertyList)
         }
      } else if (hasValue(value)) {
         if (!propertyList.has(key)) {
            propertyList.set(key, [value]);
         } else {
            propertyList.get(key).push(value);
         }
      }
   }
}

function isGeoJSON(obj) {
   return 'type' in obj && 'coordinates' in obj && typeof obj.type === 'string' && Array.isArray(obj.coordinates);
}

function hasValue(value) {
   return value !== null && value !== undefined && value !== '';
}