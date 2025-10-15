using System;
using CloudinaryDotNet.Actions;

namespace API.Interface;

public interface IPhotosService
{
    Task<ImageUploadResult> UploadPhotoAsync(IFormFile file);
    Task<DeletionResult> DeletePhotoAsync(string publicId);
}
