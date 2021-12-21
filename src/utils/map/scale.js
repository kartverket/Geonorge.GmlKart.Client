import { getPointResolution } from 'ol/proj';
import Units from 'ol/proj/Units';

const DEFAULT_DPI = 25.4 / 0.28;
const LEADING_DIGITS = [1, 2, 5];
const INCHES_PER_METER = 1000 / 25.4;

export function getScaleForResolution(view) {
   const projection = view.getProjection();

   const resolution = getPointResolution(
      projection,
      view.getResolution(),
      view.getCenter()
   );

   const mpu = projection.getMetersPerUnit();
   const scale = parseFloat(resolution.toString()) * mpu * INCHES_PER_METER * DEFAULT_DPI;

   return `1 : ${Math.round(scale)}`;
}

export function createScaleBar(view, numberOfSteps, minWidth, maxWidth) {   
   const projection = view.getProjection();
   const resolution = view.getResolution();
   const center = view.getCenter();

   let pointResolution = getPointResolution(
      projection,
      resolution,
      center,
      Units.METERS
   );

   let nominalCount = minWidth * pointResolution;
   let suffix = '';

   if (nominalCount < 0.001) {
      suffix = 'μm';
      pointResolution *= 1000000;
   } else if (nominalCount < 1) {
      suffix = 'mm';
      pointResolution *= 1000;
   } else if (nominalCount < 1000) {
      suffix = 'm';
   } else {
      suffix = 'km';
      pointResolution /= 1000;
   }

   let i = 3 * Math.floor(Math.log(minWidth * pointResolution) / Math.log(10));
   let scale, width, decimalCount;

   while (true) {
      decimalCount = Math.floor(i / 3);
      const decimal = Math.pow(10, decimalCount);
      scale = LEADING_DIGITS[((i % 3) + 3) % 3] * decimal;
      width = Math.round(scale / pointResolution);

      if (isNaN(width)) {
         return null;
      } else if (width >= minWidth) {
         break;
      }

      ++i;
   }

   return createScaleBarJsx(width, maxWidth, scale, numberOfSteps, suffix);
}

function createScaleBarJsx(width, maxWidth, scale, numberOfSteps, suffix) {
   const scaleBarSteps = [];
   const maxNumberOfSteps = getMaxNumberOfSteps(width, maxWidth, numberOfSteps);

   for (let index = 0; index <= maxNumberOfSteps; index++) {     
      const isLast = index === maxNumberOfSteps;
      const length = index === 0 ? 0 : Math.round((scale / numberOfSteps) * index * 100) / 100;
      const lengthString = length.toString().replace('.', ',') + (isLast ? ` ${suffix}` : '');
      const minWidth = index === 0 ? 0 : (width / numberOfSteps);

      scaleBarSteps.push(
         <span key={index} style={{ minWidth: `${minWidth}px` }}>
            <span>{lengthString}</span>
         </span>
      );
   }

   return (
      <div className="scaleBar">{scaleBarSteps}</div>
   );
}

function getMaxNumberOfSteps(width, maxWidth, numberOfSteps) {
   const minWidth = width / numberOfSteps;

   if (maxWidth === undefined || maxWidth < minWidth) {
      return numberOfSteps;
   }  

   const maxNumberOfSteps = Math.floor(maxWidth / minWidth);

   return numberOfSteps <= maxNumberOfSteps ? numberOfSteps : maxNumberOfSteps;
}

