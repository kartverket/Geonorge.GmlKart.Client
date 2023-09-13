import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

proj4.defs('EPSG:3006', '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3006', proj4.defs('EPSG:3006'));

proj4.defs('EPSG:3007', '+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3007', proj4.defs('EPSG:3007'));

proj4.defs('EPSG:3008', '+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3008', proj4.defs('EPSG:3008'));

proj4.defs('EPSG:3009', '+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3009', proj4.defs('EPSG:3009'));

proj4.defs('EPSG:3010', '+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3010', proj4.defs('EPSG:3010'));

proj4.defs('EPSG:3011', '+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3011', proj4.defs('EPSG:3011'));

proj4.defs('EPSG:3012', '+proj=tmerc +lat_0=0 +lon_0=14.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3012', proj4.defs('EPSG:3012'));

proj4.defs('EPSG:3013', '+proj=tmerc +lat_0=0 +lon_0=15.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3013', proj4.defs('EPSG:3013'));

proj4.defs('EPSG:3014', '+proj=tmerc +lat_0=0 +lon_0=17.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3014', proj4.defs('EPSG:3014'));

proj4.defs('EPSG:3015', '+proj=tmerc +lat_0=0 +lon_0=18.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3015', proj4.defs('EPSG:3015'));

proj4.defs('EPSG:3016', '+proj=tmerc +lat_0=0 +lon_0=20.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3016', proj4.defs('EPSG:3016'));

proj4.defs('EPSG:3017', '+proj=tmerc +lat_0=0 +lon_0=21.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3017', proj4.defs('EPSG:3017'));

proj4.defs('EPSG:3018', '+proj=tmerc +lat_0=0 +lon_0=23.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3018', proj4.defs('EPSG:3018'));

proj4.defs('EPSG:3029', '+proj=tmerc +lat_0=0 +lon_0=20.3082777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3029', proj4.defs('EPSG:3029'));

proj4.defs('EPSG:3030', '+proj=tmerc +lat_0=0 +lon_0=22.5582777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3030', proj4.defs('EPSG:3030'));

proj4.defs('EPSG:3031', '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3031', proj4.defs('EPSG:3031'));

proj4.defs('EPSG:3032', '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=70 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3032', proj4.defs('EPSG:3032'));

proj4.defs('EPSG:3033', '+proj=lcc +lat_0=-50 +lon_0=70 +lat_1=-68.5 +lat_2=-74.5 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3033', proj4.defs('EPSG:3033'));

proj4.defs('EPSG:3034', '+proj=lcc +lat_0=52 +lon_0=10 +lat_1=35 +lat_2=65 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3034', proj4.defs('EPSG:3034'));

proj4.defs('EPSG:3035', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3035', proj4.defs('EPSG:3035'));

proj4.defs('EPSG:3036', '+proj=utm +zone=36 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3036', proj4.defs('EPSG:3036'));

proj4.defs('EPSG:3046', '+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3046', proj4.defs('EPSG:3046'));

proj4.defs('EPSG:3047', '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3047', proj4.defs('EPSG:3047'));

proj4.defs('EPSG:3575', '+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3575', proj4.defs('EPSG:3575'));

proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/3857', proj4.defs('EPSG:3857'));

proj4.defs('EPSG:4258', '+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/4258', proj4.defs('EPSG:4258'));

proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/4326', proj4.defs('EPSG:4326'));

proj4.defs('EPSG:5105', '+proj=tmerc +lat_0=58 +lon_0=5.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5105', proj4.defs('EPSG:5105'));

proj4.defs('EPSG:5106', '+proj=tmerc +lat_0=58 +lon_0=6.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5106', proj4.defs('EPSG:5106'));

proj4.defs('EPSG:5107', '+proj=tmerc +lat_0=58 +lon_0=7.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5107', proj4.defs('EPSG:5107'));

proj4.defs('EPSG:5108', '+proj=tmerc +lat_0=58 +lon_0=8.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5108', proj4.defs('EPSG:5108'));

proj4.defs('EPSG:5109', '+proj=tmerc +lat_0=58 +lon_0=9.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5109', proj4.defs('EPSG:5109'));

proj4.defs('EPSG:5110', '+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5110', proj4.defs('EPSG:5110'));

proj4.defs('EPSG:5111', '+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5111', proj4.defs('EPSG:5111'));

proj4.defs('EPSG:5112', '+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5112', proj4.defs('EPSG:5112'));

proj4.defs('EPSG:5113', '+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5113', proj4.defs('EPSG:5113'));

proj4.defs('EPSG:5114', '+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5114', proj4.defs('EPSG:5114'));

proj4.defs('EPSG:5115', '+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5115', proj4.defs('EPSG:5115'));

proj4.defs('EPSG:5116', '+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5116', proj4.defs('EPSG:5116'));

proj4.defs('EPSG:5117', '+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5117', proj4.defs('EPSG:5117'));

proj4.defs('EPSG:5118', '+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5118', proj4.defs('EPSG:5118'));

proj4.defs('EPSG:5119', '+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5119', proj4.defs('EPSG:5119'));

proj4.defs('EPSG:5120', '+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5120', proj4.defs('EPSG:5120'));

proj4.defs('EPSG:5121', '+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5121', proj4.defs('EPSG:5121'));

proj4.defs('EPSG:5122', '+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5122', proj4.defs('EPSG:5122'));

proj4.defs('EPSG:5123', '+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5123', proj4.defs('EPSG:5123'));

proj4.defs('EPSG:5124', '+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5124', proj4.defs('EPSG:5124'));

proj4.defs('EPSG:5125', '+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5125', proj4.defs('EPSG:5125'));

proj4.defs('EPSG:5126', '+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5126', proj4.defs('EPSG:5126'));

proj4.defs('EPSG:5127', '+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5127', proj4.defs('EPSG:5127'));

proj4.defs('EPSG:5128', '+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5128', proj4.defs('EPSG:5128'));

proj4.defs('EPSG:5129', '+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5129', proj4.defs('EPSG:5129'));

proj4.defs('EPSG:5130', '+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5130', proj4.defs('EPSG:5130'));

proj4.defs('EPSG:5950', '+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5950', proj4.defs('EPSG:5950'));

proj4.defs('EPSG:5951', '+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5951', proj4.defs('EPSG:5951'));

proj4.defs('EPSG:5952', '+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5952', proj4.defs('EPSG:5952'));

proj4.defs('EPSG:5953', '+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5953', proj4.defs('EPSG:5953'));

proj4.defs('EPSG:5954', '+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5954', proj4.defs('EPSG:5954'));

proj4.defs('EPSG:5955', '+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5955', proj4.defs('EPSG:5955'));

proj4.defs('EPSG:5956', '+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5956', proj4.defs('EPSG:5956'));

proj4.defs('EPSG:5957', '+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5957', proj4.defs('EPSG:5957'));

proj4.defs('EPSG:5958', '+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5958', proj4.defs('EPSG:5958'));

proj4.defs('EPSG:5959', '+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5959', proj4.defs('EPSG:5959'));

proj4.defs('EPSG:5960', '+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5960', proj4.defs('EPSG:5960'));

proj4.defs('EPSG:5961', '+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5961', proj4.defs('EPSG:5961'));

proj4.defs('EPSG:5962', '+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5962', proj4.defs('EPSG:5962'));

proj4.defs('EPSG:5963', '+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5963', proj4.defs('EPSG:5963'));

proj4.defs('EPSG:5964', '+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5964', proj4.defs('EPSG:5964'));

proj4.defs('EPSG:5965', '+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5965', proj4.defs('EPSG:5965'));

proj4.defs('EPSG:5966', '+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5966', proj4.defs('EPSG:5966'));

proj4.defs('EPSG:5967', '+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5967', proj4.defs('EPSG:5967'));

proj4.defs('EPSG:5968', '+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5968', proj4.defs('EPSG:5968'));

proj4.defs('EPSG:5969', '+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5969', proj4.defs('EPSG:5969'));

proj4.defs('EPSG:5970', '+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5970', proj4.defs('EPSG:5970'));

proj4.defs('EPSG:5972', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5972', proj4.defs('EPSG:5972'));

proj4.defs('EPSG:5973', '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5973', proj4.defs('EPSG:5973'));

proj4.defs('EPSG:5975', '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/5975', proj4.defs('EPSG:5975'));

proj4.defs('EPSG:23029', '+proj=utm +zone=29 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23029', proj4.defs('EPSG:23029'));

proj4.defs('EPSG:23030', '+proj=utm +zone=30 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23030', proj4.defs('EPSG:23030'));

proj4.defs('EPSG:23031', '+proj=utm +zone=31 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23031', proj4.defs('EPSG:23031'));

proj4.defs('EPSG:23032', '+proj=utm +zone=32 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23032', proj4.defs('EPSG:23032'));

proj4.defs('EPSG:23033', '+proj=utm +zone=33 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23033', proj4.defs('EPSG:23033'));

proj4.defs('EPSG:23034', '+proj=utm +zone=34 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23034', proj4.defs('EPSG:23034'));

proj4.defs('EPSG:23035', '+proj=utm +zone=35 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23035', proj4.defs('EPSG:23035'));

proj4.defs('EPSG:23036', '+proj=utm +zone=36 +ellps=intl +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/23036', proj4.defs('EPSG:23036'));

proj4.defs('EPSG:25829', '+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25829', proj4.defs('EPSG:25829'));

proj4.defs('EPSG:25830', '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25830', proj4.defs('EPSG:25830'));

proj4.defs('EPSG:25831', '+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25831', proj4.defs('EPSG:25831'));

proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25832', proj4.defs('EPSG:25832'));

proj4.defs('EPSG:25833', '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25833', proj4.defs('EPSG:25833'));

proj4.defs('EPSG:25834', '+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25834', proj4.defs('EPSG:25834'));

proj4.defs('EPSG:25835', '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25835', proj4.defs('EPSG:25835'));

proj4.defs('EPSG:25836', '+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/25836', proj4.defs('EPSG:25836'));

proj4.defs('EPSG:32629', '+proj=utm +zone=29 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32629', proj4.defs('EPSG:32629'));

proj4.defs('EPSG:32630', '+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32630', proj4.defs('EPSG:32630'));

proj4.defs('EPSG:32631', '+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32631', proj4.defs('EPSG:32631'));

proj4.defs('EPSG:32632', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32632', proj4.defs('EPSG:32632'));

proj4.defs('EPSG:32633', '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32633', proj4.defs('EPSG:32633'));

proj4.defs('EPSG:32634', '+proj=utm +zone=34 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32634', proj4.defs('EPSG:32634'));

proj4.defs('EPSG:32635', '+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32635', proj4.defs('EPSG:32635'));

proj4.defs('EPSG:32636', '+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/32636', proj4.defs('EPSG:32636'));

proj4.defs('EPSG:900913', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs');
proj4.defs('http://www.opengis.net/def/crs/EPSG/0/900913', proj4.defs('EPSG:900913'));

register(proj4);
