const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "ix-blogapp",
  keyFilename: "./gcp_key.json",
});

const uploadToFirebaseStorage = async (filepath, fileName) => {
  try {
    const gcs = storage.bucket("gs://blog-app-juliankrese");
    const storagepath = `blog-app-juliankrese/${fileName}`;

    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain", //application/csv for excel or csv file upload
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    (error);
    throw new Error(error.message);
  }
};

const GoogleCloudService = {
  uploadToFirebaseStorage,
};

module.exports = GoogleCloudService;