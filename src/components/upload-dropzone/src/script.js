import vue2Dropzone from 'vue2-dropzone';

var iterator = 0;

export default {
  name: 'upload-dropzone',
  components: {
    'vue-dropzone': vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: this.$store.state.defaults.server + this.$store.state.defaults.api + 'files/upload',
          thumbnailWidth: 150,
          maxFilesize: 5
      }
    }
  },
  methods: {
  	dropzoneSuccess: function (file, response) {
      var json = JSON.parse(response);

      var data = {
        width: json.upload.width,
        height: json.upload.height,
        key: this.key(),
        src: json.upload.file
      }

  		this.$emit('upload', data);

      this.$refs.myVueDropzone.removeFile(file);
  	},
    key: function () {
      iterator++;
      return this._uid + "::" + iterator;
    }
  },
  mounted: function () {}
}
