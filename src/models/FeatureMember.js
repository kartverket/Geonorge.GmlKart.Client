const SLD_BASE_URL = process.env.REACT_APP_SLD_BASE_URL;

class FeatureMember {
   constructor(name, options = {}) {
      const { sldUrl, infoProps, showLegend = true } = options;
      this.name = name;
      this.sldUrl = sldUrl;
      this.infoProps = infoProps;
      this.showLegend = showLegend;
   }

   getSldUrl() {
      return this.sldUrl ? this.sldUrl :`${SLD_BASE_URL}/${this.name}.sld`;
   }
}

export default FeatureMember;