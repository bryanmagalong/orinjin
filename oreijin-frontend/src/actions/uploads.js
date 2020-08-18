export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const UPLOAD_SERVICE_IMAGE = 'UPLOAD_SERVICE_IMAGE';

export const uploadImage = (payload) => ({
  type: UPLOAD_IMAGE,
  payload,
});

export const uploadServiceImage = (payload) => ({
  type: UPLOAD_SERVICE_IMAGE,
  payload,
});
