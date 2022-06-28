import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25832', proj4.defs('EPSG:25832'));

proj4.defs('EPSG:25833', '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25833', proj4.defs('EPSG:25833'));

proj4.defs('EPSG:25835', '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25835', proj4.defs('EPSG:25835'));

proj4.defs('EPSG:5972','+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5972', proj4.defs('EPSG:5972'));

proj4.defs('EPSG:5973','+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5973', proj4.defs('EPSG:5973'));

proj4.defs('EPSG:5975','+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5975', proj4.defs('EPSG:5975'));

proj4.defs('EPSG:5110','+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5110', proj4.defs('EPSG:5110'));

proj4.defs('EPSG:5111','+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5111', proj4.defs('EPSG:5111'));

proj4.defs('EPSG:5112','+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5112', proj4.defs('EPSG:5112'));

proj4.defs('EPSG:5113','+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5113', proj4.defs('EPSG:5113'));

proj4.defs('EPSG:5114','+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5114', proj4.defs('EPSG:5114'));

proj4.defs('EPSG:5115','+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5115', proj4.defs('EPSG:5115'));

proj4.defs('EPSG:5116','+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5116', proj4.defs('EPSG:5116'));

proj4.defs('EPSG:5117','+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5117', proj4.defs('EPSG:5117'));

proj4.defs('EPSG:5118','+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5118', proj4.defs('EPSG:5118'));

proj4.defs('EPSG:5119','+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5119', proj4.defs('EPSG:5119'));

proj4.defs('EPSG:5120','+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5120', proj4.defs('EPSG:5120'));

proj4.defs('EPSG:5121','+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5121', proj4.defs('EPSG:5121'));

proj4.defs('EPSG:5122','+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5122', proj4.defs('EPSG:5122'));

proj4.defs('EPSG:5123','+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5123', proj4.defs('EPSG:5123'));

proj4.defs('EPSG:5124','+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5124', proj4.defs('EPSG:5124'));

proj4.defs('EPSG:5125','+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5125', proj4.defs('EPSG:5125'));

proj4.defs('EPSG:5126','+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5126', proj4.defs('EPSG:5126'));

proj4.defs('EPSG:5127','+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5127', proj4.defs('EPSG:5127'));

proj4.defs('EPSG:5128','+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5128', proj4.defs('EPSG:5128'));

proj4.defs('EPSG:5129','+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5129', proj4.defs('EPSG:5129'));

proj4.defs('EPSG:5130','+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5130', proj4.defs('EPSG:5130'));

proj4.defs('EPSG:5950','+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5950', proj4.defs('EPSG:5950'));

proj4.defs('EPSG:5951','+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5951', proj4.defs('EPSG:5951'));

proj4.defs('EPSG:5952','+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5952', proj4.defs('EPSG:5952'));

proj4.defs('EPSG:5953','+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5953', proj4.defs('EPSG:5953'));

proj4.defs('EPSG:5954','+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5954', proj4.defs('EPSG:5954'));

proj4.defs('EPSG:5955','+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5955', proj4.defs('EPSG:5955'));

proj4.defs('EPSG:5956','+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5956', proj4.defs('EPSG:5956'));

proj4.defs('EPSG:5957','+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5957', proj4.defs('EPSG:5957'));

proj4.defs('EPSG:5958','+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5958', proj4.defs('EPSG:5958'));

proj4.defs('EPSG:5959','+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5959', proj4.defs('EPSG:5959'));

proj4.defs('EPSG:5960','+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5960', proj4.defs('EPSG:5960'));

proj4.defs('EPSG:5961','+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5961', proj4.defs('EPSG:5961'));

proj4.defs('EPSG:5962','+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5962', proj4.defs('EPSG:5962'));

proj4.defs('EPSG:5963','+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5963', proj4.defs('EPSG:5963'));

proj4.defs('EPSG:5964','+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5964', proj4.defs('EPSG:5964'));

proj4.defs('EPSG:5965','+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5965', proj4.defs('EPSG:5965'));

proj4.defs('EPSG:5966','+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5966', proj4.defs('EPSG:5966'));

proj4.defs('EPSG:5967','+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5967', proj4.defs('EPSG:5967'));

proj4.defs('EPSG:5968','+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5968', proj4.defs('EPSG:5968'));

proj4.defs('EPSG:5969','+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5969', proj4.defs('EPSG:5969'));

proj4.defs('EPSG:5970','+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5970', proj4.defs('EPSG:5970'));

register(proj4);

