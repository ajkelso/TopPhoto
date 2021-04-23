require "shrine"

  require "shrine/storage/s3"
  s3_options = { 
    bucket:            "topphoto", # required 
    region:            "us-east-2", # required 
    access_key_id:     "AKIA2RORLHFU7Z6HDCAH",
    secret_access_key: "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",
  }
  Shrine.storages = { 
    cache: Shrine::Storage::S3.new(prefix: "cache", **s3_options), # temporary 
    store: Shrine::Storage::S3.new(**s3_options),                  # permanent 
  }
# Shrine.storages[:cache_url] = Shrine::Storage::Url.new
Shrine.plugin :activerecord
# Shrine.plugin :presign_endpoint

# def file_remote_url=(url)
#   return if url.blank?
#   @file_remote_url = url
#   file_attacher(cache: :cache_url)
#   self.file = JSON.dump(
#     id: url,
#     storage: :cache_url,
#     metadata: { filename: File.basename(URI(url).path) }
#   )
# rescue URI::InvalidURIError, Down::Error
#   file_attacher.errors << "invalid URL"
# end