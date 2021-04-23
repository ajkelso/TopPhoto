class ImageUploader < Shrine
    # plugins and uploading logic
    plugin :determine_mime_type
    # plugin :upload_endpoint if Rails.env.development?
    plugin :restore_cached_data
end