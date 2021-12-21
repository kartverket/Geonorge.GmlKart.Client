import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import { get as getProjection } from 'ol/proj';

proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25832', proj4.defs('EPSG:25832'));

proj4.defs('EPSG:25833', '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25833', proj4.defs('EPSG:25833'));

proj4.defs('EPSG:25835', '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25835', proj4.defs('EPSG:25835'));

register(proj4);

const proj25832 = getProjection('EPSG:25832');
proj25832.setExtent([-2000000, 3500000, 3545984, 9045984]);

const proj25833 = getProjection('EPSG:25833');
proj25833.setExtent([-2500000, 3500000, 3045984, 9045984]);

const proj25835 = getProjection('EPSG:25835');
proj25835.setExtent([-3500000, 3500000, 2045984, 9045984]);

